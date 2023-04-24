import RenderSections from '../../RenderSections'

const LandingTemplateCompetitor = ({sections}) => {
  const sectionsArr = []
  console.log(sections)
  sections.heroForm.type = 'LandingTemplateCompetitor'
  sections.awardsSection.type = 'LandingTemplateCompetitor'
  sectionsArr.push(sections.heroForm)
  // sectionsArr.push(sections.measureSection)
  sectionsArr.push(sections.ourCustomersSection)
  sectionsArr.push(sections.tabsSection)
  sectionsArr.push(sections.awardsSection)
  sectionsArr.push(sections.ctaSection)
  sectionsArr.push({...sections.footer, _type: 'landingpageFooter'})
  sectionsArr.map((s) => (s._key = s._type))
  return sectionsArr?.length > 0 && <RenderSections sections={sectionsArr} />
}

export default LandingTemplateCompetitor
