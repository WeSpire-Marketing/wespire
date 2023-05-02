import RenderSections from '../../RenderSections'

const LandingTemplateCompetitor = ({sections}) => {
  const sectionsArr = []
  sectionsArr.push({...sections.heroForm, type: 'LandingTemplateCompetitor'})
  sectionsArr.push({...sections.cardsSection, _type: 'landingCardsSection'})
  sectionsArr.push(sections.ourCustomersSection)
  sectionsArr.push(sections.tabsSection)
  sectionsArr.push({...sections.awardsSection, type: 'LandingTemplateCompetitor'})
  sectionsArr.push(sections.ctaSection)
  sectionsArr.push({...sections.footer, _type: 'landingpageFooter'})
  sectionsArr.map((s) => (s._key = s._type))
  return sectionsArr?.length > 0 && <RenderSections sections={sectionsArr} />
}

export default LandingTemplateCompetitor
