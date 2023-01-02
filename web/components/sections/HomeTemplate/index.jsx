import RenderSections from '../../RenderSections'

const HomeTemplate = ({sections}) => {
  const sectionsArr = []
  // sectionsArr.push(sections.heroSection)
  // sectionsArr.push(sections.longSection)
  sectionsArr.push(sections.sliderSection)
  sectionsArr.push(sections.cardsSection)
  sectionsArr.push(sections.ctaSection)
  sectionsArr.map((s) => (s._key = s._type))
  return sectionsArr?.length > 0 && <RenderSections sections={sectionsArr} />
}

export default HomeTemplate
