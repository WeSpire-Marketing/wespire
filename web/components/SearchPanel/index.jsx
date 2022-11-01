import CrossIcon from '../icons/CrossIcon'
import SearchIcon from '../icons/SearchIcon'

export default function SearchPanel({isVisible, query = '', onClearSearch, onQueryChange}) {
  return (
    <div
      className={`${
        isVisible ? 'max-h-[180px]' : 'max-h-0'
      } absolute left-[50%] z-10 w-[100vw] translate-x-[-50%] overflow-hidden bg-gallery
      shadow-[0px_60px_35px_rgba(111,111,111,0.1)] transition-[max-height_0.2s_ease-in-out]`}
    >
      <div className="container">
        <div className="relative mx-auto mt-[48px] mb-[64px] w-[100%] max-w-[784px]">
          <SearchIcon className="absolute left-[15px] top-[15px]" color="#1771DC" />

          <input
            className="search-input body-s w-[100%] rounded-[30px] border-[1px] border-[rgba(202,205,212,0.8)]
            p-[15px] pl-[50px] text-black"
            placeholder="Search..."
            type="text"
            value={query}
            onChange={onQueryChange}
          />

          {query?.length > 0 && <ClearInputBtn onClick={onClearSearch} />}
        </div>
      </div>
    </div>
  )
}

function ClearInputBtn({onClick}) {
  return (
    <button className="absolute top-[18px] right-[15px]" onClick={onClick}>
      <CrossIcon className="h-[20px] w-[20px]" />
    </button>
  )
}
