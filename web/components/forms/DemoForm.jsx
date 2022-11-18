import {useForm} from 'react-hook-form'
import {useEffect, useRef, useState} from 'react'

import InputGroup from '../InputGroup'
import SelectGroup from '../SelectGroup'

import {normalizeDemoFormData} from '../../utils'
import useValidators from '../../utils/hooks/useValidators'

const selectOptions = [
  {label: '1-499', value: '1-499'},
  {label: '500-999', value: '500-999'},
  {label: '1,000-4,999', value: '1,000-4,999'},
  {label: '5,000-9,999', value: '5,000-9,999'},
  {label: '10,000+', value: '10,000+'},
]

export default function DemoForm({className = '', formId = ''}) {
  const DEFAULT_MESSAGE = 'Book a demo'
  const ipRef = useRef('')
  const {
    reset,
    control,
    register,
    setValue,
    handleSubmit,
    formState: {errors},
  } = useForm({mode: 'onSubmit', reValidateMode: 'onChange'})
  const {
    validateEmail,
    validatePhone,
    validateAbout,
    validateLastname,
    validateFirstname,
    validateCompanyName,
    validateCompanySize,
  } = useValidators()
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
          body: JSON.stringify(normalizeDemoFormData({...data, ip: ipRef.current})),
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
    <form className={className + ' flex flex-col gap-y-8'} onSubmit={handleSubmit(submitForm)}>
      <div className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-2">
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
          label="Company"
          placeholder="Company name"
          register={() => register('company', validateCompanyName)}
          error={errors?.company?.message && errors.company.message}
          onBlur={(e) => setValue('company', e.target.value.trim(), true)}
        />
        <SelectGroup
          control={control}
          name="companysize"
          label="Company size"
          options={selectOptions}
          placeholder="Please select"
          rules={validateCompanySize}
          setValue={(value) => setValue('companysize', value, true)}
          error={errors?.companysize?.message && errors.companysize.message}
        />
        <InputGroup
          type="email"
          label="Email"
          placeholder="Company email"
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
      </div>

      <div className="flex flex-col gap-y-8">
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
          className="min-h-[100px]"
          label="Your message (optional)"
          register={() => register('message')}
          placeholder="Anything else we should know?"
          onBlur={(e) => setValue('message', e.target.value.trim(), true)}
        />
      </div>

      <button className="primary-btn bg-smart" disabled={message !== DEFAULT_MESSAGE} type="submit">
        {message}
      </button>
    </form>
  )
}
