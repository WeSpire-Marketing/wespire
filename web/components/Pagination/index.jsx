import ChevronIcon from '../icons/ChevronIcon'

export default function Pagination({
  totalPages,
  currentPage,
  onClick: handleClick,
  onPrevClick: handlePrevClick,
  onNextClick: handleNextClick,
}) {
  return (
    <div className="flex items-center justify-center gap-[10px]">
      <span
        className={`
          ${currentPage <= 0 ? 'pointer-events-none opacity-0' : 'opacity-1'}
          flex h-[32px] w-[32px] cursor-pointer justify-center
        `}
        onClick={handlePrevClick}
      >
        <ChevronIcon className="w-[17px] rotate-90" color="#383838" />
      </span>

      {Array.from(Array(totalPages).keys()).map((pageNumber, idx) => {
        return (
          <span
            className={`
              ${
                currentPage === pageNumber
                  ? `bg-helpful text-white`
                  : `bg-transparent text-secondary`
              } inline-flex h-[32px] w-[32px] cursor-pointer
              items-center justify-center rounded-full font-poppins text-[18px]
              font-medium`}
            key={idx}
            onClick={() => handleClick(pageNumber)}
          >
            {pageNumber + 1}
          </span>
        )
      })}

      <span
        className={`${
          currentPage >= totalPages - 1 ? 'pointer-events-none opacity-0' : 'opacity-1'
        } flex h-[32px] w-[32px] cursor-pointer justify-center`}
        onClick={handleNextClick}
      >
        <ChevronIcon className="w-[17px] rotate-[-90deg]" color="#383838" />
      </span>
    </div>
  )
}
