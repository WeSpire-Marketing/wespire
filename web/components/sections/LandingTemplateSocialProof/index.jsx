import RenderSections from '../../RenderSections'

const LandingTemplateSocialProof = ({sections}) => {
  const sectionsArr = []
  if (Boolean(sections?.googleFAQSection?.showFAQ)) {
    sections.heroForm.listFAQ = sections.googleFAQSection.listFAQ
  }
  sectionsArr.push(sections.heroForm)
  sectionsArr.push(sections.ourCustomersSection)
  sectionsArr.push(sections.awardsSection)
  sectionsArr.push(sections.tabsSection)
  sectionsArr.push(sections.measureSection)
  sectionsArr.push(sections.ctaSection)
  if (Boolean(sections?.googleFAQSection?.showFAQ)) {
    sectionsArr.push(sections.googleFAQSection)
  }
  sectionsArr.push({...sections.footer, _type: 'landingpageFooter'})
  sectionsArr.map((s) => (s._key = s._type))
  return (
    sectionsArr?.length > 0 && (
      <RenderSections sections={sectionsArr} page="landingTemplateSocialProof" />
    )
  )
}

export default LandingTemplateSocialProof
