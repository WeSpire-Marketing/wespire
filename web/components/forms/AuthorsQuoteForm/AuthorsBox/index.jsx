import Img from '../../../Img'
import AnimatedCircle from '../../../icons/AnimatedCircle'

export default function AuthorsBox({authors, onAuthorClick, isAuthorSingle, activeAuthorIndex}) {
  return (
    <div
      className="authors-box flex w-full flex-col items-center gap-6
      lg:flex-row lg:gap-[30px]"
    >
      <ul
        className="authors-box__authors flex w-full items-center gap-8
        lg:w-fit lg:gap-[40px]"
      >
        {authors.map((author, idx) => {
          return (
            <li
              className="relative h-[65px] w-[65px] cursor-pointer
              lg:h-[72px] lg:w-[72px]"
              onClick={() => onAuthorClick(idx)}
              key={idx}
            >
              <Img value={author.image} />
              <AnimatedCircle
                className="absolute top-[-7px] left-[-7px] h-[79px] w-[79px]
                lg:top-[-9px] lg:left-[-9px] lg:h-[90px] lg:w-[90px]"
                isActive={activeAuthorIndex === idx && !isAuthorSingle}
                isFatBorder={isAuthorSingle}
              />
            </li>
          )
        })}
      </ul>

      <div className="authors-box__info flex w-full flex-col justify-center gap-1">
        {authors[activeAuthorIndex].name}
        <cite className="body-m not-italic text-secondary">{authors[activeAuthorIndex].job}</cite>
      </div>
    </div>
  )
}
