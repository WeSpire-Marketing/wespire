import RenderSections from '../../RenderSections'

const LandingTemplateSustainability = ({sections}) => {
  const sectionsArr = []
  sectionsArr.push(sections.heroFormSustainability)
  sectionsArr.push(sections.sustainCardsSection)
  sectionsArr.push(sections.imageTextSection)
  sectionsArr.push(sections.tabsSection)
  sectionsArr.push({...sections.ourCustomersSection, type: 'landingTemplateSustainability'})
  sectionsArr.push(sections.ctaSection)
  sectionsArr.push({...sections.footer, _type: 'landingpageFooter'})
  sectionsArr.map((s) => (s._key = s._type))
  return sectionsArr?.length > 0 && <RenderSections sections={sectionsArr} />
}

export default LandingTemplateSustainability
