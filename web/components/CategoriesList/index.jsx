import CrossIcon from '../icons/CrossIcon'
import SearchIcon from '../icons/SearchIcon'
import CategoryItem from './components/CategoryItem'

export default function CategoriesList({
  defaultSlug,
  categories = [],
  filterCategories,
  toggleSearch,
  isSearchVisible,
  onSeeAllClick: handleSeeAllClick,
  onCategoryClick: handleCategoryItemClick,
}) {
  return (
    <ul
      className="flex shrink-0 flex-nowrap justify-center gap-2 p-1 pb-[12px]
      lg:shrink lg:flex-wrap lg:gap-4 lg:pb-1"
    >
      <CategoryItem
        className="p-4 lg:py-[14px] lg:px-[36px]"
        selected={(filterCategories.length === 1 && filterCategories.includes(defaultSlug)) || (!defaultSlug && (filterCategories.length === 0))}
        onClick={handleSeeAllClick}
      >
        See all
      </CategoryItem>

      {categories?.length > 0 &&
        categories.map((category, idx) => {
          return (
            <CategoryItem
              className="p-4 lg:py-[14px] lg:px-[36px]"
              selected={filterCategories.includes(category.slug)}
              onClick={() => handleCategoryItemClick(category.slug)}
              key={idx}
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
