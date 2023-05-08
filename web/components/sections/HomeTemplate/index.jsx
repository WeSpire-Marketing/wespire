import RenderSections from '../../RenderSections'

const HomeTemplate = ({sections}) => {
  const sectionsArr = []
  sectionsArr.push(sections.heroSection)
  sectionsArr.push(sections.upcomingEventSection)
  sectionsArr.push(sections.longSection)
  sectionsArr.push(sections.sliderSection)
  sectionsArr.push(sections.cardsSection)
  if (
    Boolean(sections?.blogCardsSection?.blogs?.length) ||
    Boolean(sections?.blogCardsSection?.showSection)
  ) {
    sectionsArr.push(sections.blogCardsSection)
  }
  sectionsArr.push(sections.ctaSection)
  sectionsArr.map((s) => (s._key = s._type))
  return sectionsArr?.length > 0 && <RenderSections sections={sectionsArr} />
}

export default HomeTemplate
