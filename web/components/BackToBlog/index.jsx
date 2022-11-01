import {useRouter} from 'next/router'

import ArrowIcon from '../icons/ArrowIcon'

export default function BackToBlog({className = '', ...props}) {
  const router = useRouter()

  return (
    <div className={`${className} inline-flex items-center gap-4`} {...props}>
      <button className="helpful-btn h-[48px] w-[48px]" onClick={() => router.push('/blog')}>
        <ArrowIcon className="rotate-180" fillColor="white" />
      </button>

      <p className="font-poppins text-[18px] font-semibold leading-[150%]">Back to blog</p>
    </div>
  )
}
