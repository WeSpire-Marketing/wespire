import React from 'react'

const TEXT_BLURB =
  'We apologize for the inconvenience but we are no longer accepting subscriptions at this point in time.'
const Blurb = ({text = TEXT_BLURB}) => {
  return (
    <div className={`w-full mt-[24px] px-4 lg:px-0`}>
      <div
        className="w-full max-w-[540px] mx-4 md:mx-auto px-4 py-[10px] mb-4 lg:mb-10 rounded-lg bg-[#FFCC7B] font-medium font-poppins  text-secondary text-[14px]"
        role="alert"
      >
        {text}
      </div>
    </div>
  )
}

export default Blurb
