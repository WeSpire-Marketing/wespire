import RenderSections from '../../RenderSections'

const LandingTemplate = ({sections}) => {
  const sectionsArr = []
  sectionsArr.push(sections.heroFormVideo)
  sectionsArr.push(sections.measureSection)
  sectionsArr.push(sections.tabsSection)
  sectionsArr.push(sections.ourCustomersSection)
  sectionsArr.push(sections.awardsSection)
  sectionsArr.push(sections.ctaSection)
  sectionsArr.push({...sections.footer, _type: 'landingpageFooter'})
  sectionsArr.map((s) => (s._key = s._type))
  return sectionsArr?.length > 0 && <RenderSections sections={sectionsArr} />
}

export default LandingTemplate
