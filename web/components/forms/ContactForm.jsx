import {useForm} from 'react-hook-form'
import {useRef, useState, useEffect} from 'react'

import InputGroup from '../InputGroup'

import {normalizeContactFormData} from '../../utils'
import useValidators from '../../utils/hooks/useValidators'

export default function ContactForm({formId}) {
  const DEFAULT_MESSAGE = 'Submit'
  const ipRef = useRef('')
  const {
    reset,
    control,
    register,
    setValue,
    handleSubmit,
    formState: {errors},
  } = useForm({mode: 'onSubmit', reValidateMode: 'onChange'})
  const {validatePhone, validateEmail, validateAbout, validateLastname, validateFirstname} =
    useValidators()
  const [message, setMessage] = useState(DEFAULT_MESSAGE)

  useEffect(() => {
    let id
    if (message !== DEFAULT_MESSAGE) {
      id = setTimeout(() => {
        setMessage(DEFAULT_MESSAGE)
      }, 3000)
    }
    return () => clearTimeout(id)
  }, [message])

  /* Try to fetch client IP. It needed later,
  when form data will be submited to Hubspot */
  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal

    const getClientIp = async () => {
      try {
        const res = await fetch('https://api.ipify.org/?format=json', {
          signal,
        })
        const data = await res.json()
        if (res.ok) {
          ipRef.current = data.ip
        }
      } catch (err) {
        console.log(`Can't get client ip`, err.message)
      }
    }

    getClientIp()

    // cancel query on unmount
    return () => controller.abort()
  }, [])

  const submitForm = async (data) => {
    try {
      setMessage('Sending...')
      const res = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/8353230/${formId}`,
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          method: 'POST',
          body: JSON.stringify(normalizeContactFormData({...data, ip: ipRef.current})),
        }
      )

      if (res.ok) {
        setMessage('Submited!')
        reset()
      } else {
        setMessage('Please, try later.')
      }
    } catch (err) {
      console.log(err)
      setMessage('Error! Not submited.')
    }
  }

  return (
    <>
      <form
        id={formId}
        className="contact-form flex flex-col gap-y-8 px-2 lg:px-0"
        onSubmit={handleSubmit(submitForm)}
      >
        <InputGroup
          type="text"
          label="First name"
          placeholder="Your first name"
          register={() => register('firstname', validateFirstname)}
          error={errors?.firstname?.message && errors.firstname.message}
          onBlur={(e) => setValue('firstname', e.target.value.trim(), true)}
        />
        <InputGroup
          type="text"
          label="Last name"
          placeholder="Your last name"
          register={() => register('lastname', validateLastname)}
          error={errors?.lastname?.message && errors.lastname.message}
          onBlur={(e) => setValue('lastname', e.target.value.trim(), true)}
        />

        <InputGroup
          type="text"
          label="Email"
          placeholder="Enter your email"
          register={() => register('email', validateEmail)}
          error={errors?.email?.message && errors.email.message}
          onBlur={(e) => setValue('email', e.target.value.trim(), true)}
        />

        <InputGroup
          type="text"
          label="Phone number"
          placeholder="(414) 444-4444"
          register={() => register('phone', validatePhone)}
          error={errors?.phone?.message && errors.phone.message}
          onBlur={(e) => setValue('phone', e.target.value.trim(), true)}
        />

        <InputGroup
          type="text"
          placeholder="Type something"
          label="How did you hear about WeSpire?"
          register={() => register('how_did_you_hear_about_wespire_', validateAbout)}
          error={
            errors?.how_did_you_hear_about_wespire_?.message &&
            errors.how_did_you_hear_about_wespire_.message
          }
          onBlur={(e) => setValue('how_did_you_hear_about_wespire_', e.target.value.trim(), true)}
        />

        <InputGroup
          type="text"
          Tag="textarea"
          label="Message"
          className="min-h-[100px]"
          register={() => register('message')}
          onBlur={(e) => setValue('message', e.target.value.trim(), true)}
        />

        <button
          className="primary-btn mt-[8px] bg-smart"
          disabled={message !== DEFAULT_MESSAGE}
          type="submit"
        >
          {message}
        </button>
      </form>
      <script
        dangerouslySetInnerHTML={{
          __html: `function q(a){return function(){ChiliPiper[a].q=(ChiliPiper[a].q||[]).concat([arguments])}}window.ChiliPiper=window.ChiliPiper||"submit scheduling showCalendar submit widget bookMeeting".split(" ").reduce(function(a,b){a[b]=q(b);return a},{});ChiliPiper.scheduling("wespire", "contact-us", {title: "Thanks! What time works best for a quick call?"})`,
        }}
      />
      <script src="https://js.na.chilipiper.com/marketing.js" type="text/javascript" async />

      <p className="body-s mx-auto mt-8 max-w-[320px] text-center lg:max-w-[438px]">
        By submitting this form I agree to receive marketing communications from WeSpire.
      </p>
    </>
  )
}
