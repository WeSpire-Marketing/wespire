import RenderSections from '../../RenderSections'

const LandingTemplateEventRegistration = ({sections}) => {
  const sectionsArr = []
  sectionsArr.push(sections.heroEventRegistrationSection)
  sectionsArr.push(sections.eventSection)
  sectionsArr.push(sections.ctaSection)
  sectionsArr.push({...sections.footer, _type: 'landingpageFooter'})
  sectionsArr.map((s) => (s._key = s._type))
  return sectionsArr?.length > 0 && <RenderSections sections={sectionsArr} />
}

export default LandingTemplateEventRegistration
