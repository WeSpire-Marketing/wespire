import CrossIcon from '../icons/CrossIcon'
import SearchIcon from '../icons/SearchIcon'
import CategoryItem from './components/CategoryItem'

export default function CategoriesList({
  query,
  categories = [],
  toggleSearch,
  isSearchVisible,
  onCategoryClick: handleCategoryItemClick,
}) {
  return (
    <ul
      className="flex shrink-0 flex-nowrap justify-center gap-2 p-1 pb-[12px]
      lg:shrink lg:flex-wrap lg:gap-4 lg:pb-1"
    >
      <CategoryItem
        className="p-4 lg:py-[14px] lg:px-[36px]"
        selected={query === ''}
        onClick={() => handleCategoryItemClick('')}
      >
        See all
      </CategoryItem>

      {categories?.length > 0 &&
        categories.map((category, idx) => {
          return (
            <CategoryItem
              className="p-4 lg:py-[14px] lg:px-[36px]"
              key={idx}
              onClick={() => handleCategoryItemClick(category.title)}
              selected={query.toLowerCase() === category.title.toLowerCase()}
            >
              {category.title}
            </CategoryItem>
          )
        })}

      <CategoryItem className="p-[15px] lg:p-[18px]" onClick={toggleSearch}>
        {isSearchVisible ? (
          <CrossIcon
            className="mx-auto h-[16px] w-[16px]
            lg:h-[20px] lg:w-[20px] lg:max-w-none"
          />
        ) : (
          <SearchIcon
            className="mx-auto h-[16px] w-[16px]
            lg:h-[20px] lg:w-[20px] lg:max-w-none"
          />
        )}
      </CategoryItem>
    </ul>
  )
}
