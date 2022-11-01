import RenderSections from '../../RenderSections'

const SolutionsOverviewTemplate = ({sections}) => {
  const sectionsArr = []
  sectionsArr.push(sections.heroVideo)
  sectionsArr.push(sections.sliderSection)
  sectionsArr.push(sections.capabilitiesSection)
  sectionsArr.push(sections.ctaSection)
  sectionsArr.map((s) => (s._key = s._type))
  return sectionsArr?.length > 0 && <RenderSections sections={sectionsArr} />
}

export default SolutionsOverviewTemplate
