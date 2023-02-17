import RenderSections from '../../RenderSections'

const LandingTemplateSocialProof = ({sections}) => {
  const sectionsArr = []
  sectionsArr.push(sections.heroForm)
  sectionsArr.push(sections.ourCustomersSection)
  sectionsArr.push(sections.awardsSection)
  sectionsArr.push(sections.tabsSection)
  sectionsArr.push(sections.measureSection)
  sectionsArr.push(sections.ctaSection)
  sectionsArr.push({...sections.footer, _type: 'landingpageFooter'})
  sectionsArr.map((s) => (s._key = s._type))
  return (
    sectionsArr?.length > 0 && (
      <RenderSections sections={sectionsArr} page="landingTemplateSocialProof" />
    )
  )
}

export default LandingTemplateSocialProof
