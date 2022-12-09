import {NextButton, PageButton, Pagination, PrevButton} from 'react-headless-pagination'

import ChevronIcon from '../icons/ChevronIcon'

export default function PaginationComponent({totalPages, currentPage, setCurrentPage}) {
  return (
    <>
      <Pagination
        className={
          (totalPages <= 1 ? 'hidden' : 'flex') +
          ' items-center gap-6 w-fit h-8 text-lg select-none'
        }
        truncableClassName="w-10 px-0.5 text-center"
        truncableText="..."
        setCurrentPage={setCurrentPage}
        middlePagesSiblingCount={1}
        currentPage={currentPage}
        totalPages={totalPages}
        edgePageCount={1}
      >
        <PrevButton
          className={
            (currentPage === 0 ? 'invisible' : 'visible') +
            ' w-8 h-8 flex justify-end items-center text-secondary cursor-pointer'
          }
        >
          <ChevronIcon className="w-[17px] rotate-90" color="#383838" />
        </PrevButton>
        <div className="flex items-center justify-center flex-grow gap-4">
          <PageButton
            className="flex items-center justify-center rounded-full cursor-pointer"
            activeClassName="h-8 w-8 bg-helpful text-white font-semibold"
            inactiveClassName="w-4 h-8 text-secondary"
          />
        </div>
        <NextButton
          className={
            (currentPage === totalPages - 1 ? 'invisible' : 'visible') +
            ' flex w-8 h-8 justify-start items-center text-secondary cursor-pointer'
          }
        >
          <ChevronIcon className="w-[17px] rotate-[-90deg]" color="#383838" />
        </NextButton>
      </Pagination>
    </>
  )
}
