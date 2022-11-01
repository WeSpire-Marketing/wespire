import {useRouter} from 'next/router'
import {useForm} from 'react-hook-form'
import {useEffect, useRef, useState} from 'react'

import InputGroup from '../InputGroup'

import {normalizeSignMeUpFormData} from '../../utils'
import useValidators from '../../utils/hooks/useValidators'

export default function SignMeUpForm({
  formId = '',
  formClasses = '',
  buttonText = 'Sign me up',
  buttonClasses = '',
  placeholder = 'Enter your email',
  errorClasses = '',
}) {
  const ipRef = useRef('')
  const router = useRouter()
  const {
    reset,
    setValue,
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({mode: 'onSubmit'})
  const {validateEmail} = useValidators()
  const [message, setMessage] = useState(buttonText)
  const pageUri = `${process.env.NEXT_PUBLIC_DOMAIN ?? 'https://wespire.com'}${router.pathname}`
  const pageNameRef = useRef(pageUri)

  useEffect(() => {
    if (document && document?.title) {
      pageNameRef.current = document.title
    }
  }, [])

  useEffect(() => {
    let id
    if (message !== buttonText) {
      id = setTimeout(() => {
        setMessage(buttonText)
      }, 3000)
    }
    return () => clearTimeout(id)
  }, [buttonText, message])

  /* Try to fetch client IP. It needed later,
  when form data will be submited to Hubspot */
  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal

    const getClientIp = async () => {
      try {
        const res = await fetch('https://api.ipify.org/?format=json', {
          mode: 'no-cors',
          signal,
        })
        const data = await res.json()
        if (res.ok) {
          ipRef.current = data.ip
        }
      } catch (err) {
        console.log('Can not get client ip', err.message)
      }
    }

    getClientIp()

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
          body: JSON.stringify(
            normalizeSignMeUpFormData({
              ...data,
              pageUri,
              ip: ipRef.current,
              pageName: pageNameRef.current,
            })
          ),
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
    <form className={formClasses} onSubmit={handleSubmit(submitForm)}>
      <InputGroup
        className="w-full"
        type="email"
        placeholder={placeholder}
        register={() => register('email', validateEmail)}
        error={errors?.email?.message && errors.email.message}
        onBlur={(e) => setValue('email', e.target.value.trim(), true)}
        errorClasses={errorClasses}
      />

      <button className={buttonClasses} disabled={message !== buttonText} type="submit">
        {message}
      </button>
    </form>
  )
}
