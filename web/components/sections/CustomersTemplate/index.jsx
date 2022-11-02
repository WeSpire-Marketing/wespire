import RenderSections from '../../RenderSections'

const SolutionsOverviewTemplate = ({sections}) => {
  const sectionsArr = []
  sectionsArr.push(sections.heroQuote)
  sectionsArr.push(sections.customerStoriesSection)
  sectionsArr.push(sections.ctaSection)
  sectionsArr.map((s) => (s._key = s._type))
  return (
    sectionsArr?.length > 0 && (
      <div className="bg-gallery">
        <RenderSections sections={sectionsArr} />
      </div>
    )
  )
}

export default SolutionsOverviewTemplate
