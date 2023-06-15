import {motion} from 'framer-motion'

export default function Tab({isActive, children, onClick}) {
  return (
    <button
      className={`group relative inline-flex w-full flex-1 shrink-0 cursor-pointer
        items-center justify-center whitespace-nowrap py-[18px] px-[26px]
        font-poppins text-[18px] font-medium uppercase leading-[100%] tracking-[-0.01em]
        lg:px-[46px] lg:py-[23px]
        ${
          isActive
            ? 'text-smart focus:text-smart focus:outline-none'
            : 'border-transparent text-[#96ABC9] focus:text-[#96ABC9]'
        }`}
      onClick={onClick}
      aria-label={`Tab name:${children}`}
    >
      {children}

      {/* Underline with sharing layout that moving across all the tabs */}
      {isActive ? (
        <motion.div
          layoutId="underline"
          className="absolute bottom-[2px] h-[3px] w-full bg-smart lg:top-[2px] lg:h-[4px]"
        />
      ) : null}
      {/* Underline with sharing layout that moving across all the tabs */}
    </button>
  )
}
