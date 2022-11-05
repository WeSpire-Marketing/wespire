import FiveStars from '../../../icons/FiveStars'

export default function CustomerCard({suptitle, title, subtitle, text, job, name}) {
  return (
    <div
      className="cucard h-fit flex-1 rounded-[16px] border-[1px] border-[rgba(202,205,212,0.8)]
      bg-white py-[40px] px-6
      lg:py-[48px] lg:px-[40px]"
    >
      <div className="cucard__head mb-[19px] flex items-center gap-4">
        <FiveStars />

        <p
          className="font-poppins text-[18px] font-light leading-[150%]
          text-secondary"
        >
          {suptitle}
        </p>
      </div>

      <div className="cucard__body mb-[40px] lg:mb-[48px]">
        <h3 className="cucard__body__title heading-4 mb-5 lg:mb-8">{title}</h3>

        <h4 className="cucard__body__subtitle subtitle-m mb-4">{subtitle}</h4>

        <p className="cucard__body__text body-m text-secondary">{text}</p>
      </div>

      <div className="cucard__footer">
        <p className="body-s mb-1 text-[#2E2E2E] opacity-80">{job}</p>

        <p className="tags-s">{name}</p>
      </div>
    </div>
  )
}
