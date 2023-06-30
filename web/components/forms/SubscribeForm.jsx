import Image from 'next/image'
import {motion} from 'framer-motion'
import {useRouter} from 'next/router'
import {useForm} from 'react-hook-form'
import {useEffect, useRef, useState} from 'react'

import {useWindowWidth} from '@react-hook/window-size'
import CardBase from '../CardBase'

import {urlForImage} from '../../client'
import {normalizeSignMeUpFormData} from '../../utils'
import useValidators from '../../utils/hooks/useValidators'

export default function SubscribeForm({className = '', formId, title, subtitle, image}) {
  const ipRef = useRef('')
  const router = useRouter()
  const DEFAULT_MESSAGE = 'Subscribe'
  const {
    reset,
    register,
    setValue,
    handleSubmit,
    formState: {errors},
  } = useForm({mode: 'onChange'})
  const {validateEmail} = useValidators()
  const [message, setMessage] = useState(DEFAULT_MESSAGE)
  const pageUri = `${process.env.NEXT_PUBLIC_DOMAIN ?? 'https://wespire.com'}${router.asPath}`
  const pageNameRef = useRef(pageUri)
  const onlyWidth = useWindowWidth()

  useEffect(() => {
    if (document && document?.title) {
      pageNameRef.current = document.title
    }
  }, [])

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
        setMessage('Not submited.')
      }
    } catch (err) {
      console.log(err)
      setMessage('Error!')
    }
  }

  return (
    <motion.form
      className={`${className} relative z-10 mx-2 lg:mx-0`}
      viewport={{once: true}}
      transition={{duration: 1}}
      initial={{opacity: 0, y: 50}}
      whileInView={{opacity: 1, y: 0}}
      onSubmit={handleSubmit(submitForm)}
    >
      <CardBase
        className="rounded-[1rem] bg-smart px-6 pt-[40px] pb-[64px] text-center
        lg:py-[64px]"
      >
        <h2
          className="heading-2 relative mx-auto mb-4 w-fit max-w-[859px]
          text-center text-white"
        >
          {title}
          {onlyWidth > 1024 && (
            <span
              className="absolute top-[-90px] right-[-30px]
            lg:top-[-10px] lg:right-[-100px]"
            >
              <span className="relative inline-block h-[80px] w-[80px]">
                <Image
                  src={urlForImage(image).width(80).height(80).url()}
                  objectFit="cover"
                  alt={image.alt}
                  layout="fill"
                />
              </span>
            </span>
          )}
        </h2>

        <p
          className="mx-auto mb-8 max-w-[270px] text-lg font-normal
          leading-160 text-gallery lg:max-w-[859px]"
        >
          {subtitle}
        </p>

        <div
          className="relative mx-auto flex flex-col gap-2 max-w-[350px]
          lg:flex-row lg:max-w-[525px]"
        >
          <input
            className={
              `w-full rounded-[8px] border-[1px] border-[rgba(202,205,212,0.8)] px-[16px]
              py-[10px] font-nunito text-base font-normal leading-160 text-black
              outline-none hover:border-black focus:border-black focus:shadow-[0_0_0_2px_rgba(0,0,0,0.4)]
              focus-visible:outline-none ` +
              (errors.email?.message
                ? 'focus:border-error focus:shadow-[0_0_0_2px_rgba(231,68,68,0.4)]'
                : '')
            }
            type="email"
            placeholder="Enter your email"
            {...register('email', validateEmail)}
            onBlur={(e) => setValue('email', e.target.value.trim(), true)}
          />

          {errors.email?.message && (
            <p className="body-s absolute bottom-[-25px] text-[14px] text-white">
              {errors.email.message}
            </p>
          )}

          <button
            className="cta-btn-black w-full py-[11px] lg:max-w-[188px] text-skin-ctaSubmitButtonFormDark-colorText hover:text-skin-ctaSubmitButtonFormDark-colorTextHover bg-skin-ctaSubmitButtonFormDark-colorBG hover:bg-skin-ctaSubmitButtonFormDark-colorBGHover border-skin-ctaSubmitButtonFormDark-colorBorder hover:border-skin-ctaSubmitButtonFormDark-colorBorderHover"
            disabled={message !== DEFAULT_MESSAGE}
            type="submit"
          >
            {message}
          </button>
        </div>
      </CardBase>
    </motion.form>
  )
}
