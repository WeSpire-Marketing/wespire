import RenderSections from '../../RenderSections'

const LandingTemplateReport = ({sections}) => {
  const sectionsArr = []
  console.log(sections)
  if (Boolean(sections?.googleFAQSection?.showFAQ)) {
    sections.heroReport.listFAQ = sections.googleFAQSection.listFAQ
  }
  sectionsArr.push({...sections.heroReport, _type: 'heroReport'})
  sectionsArr.push({...sections.tabsSection1.tabsSection, _type: 'tabsSection'})
  sectionsArr.push({...sections.tabsVertical, _type: 'tabsVerticalSection'})
  sectionsArr.push({...sections.tabsSection2.tabsSection, _type: 'tabsSection'})
  sectionsArr.push({...sections.sliderReportSection1, _type: 'sliderReportSection'})
  sectionsArr.push({...sections.tableImageSection})
  sectionsArr.push({...sections.tabsSection3.tabsSection, _type: 'tabsSection'})
  if (Boolean(sections?.googleFAQSection?.showFAQ)) {
    sectionsArr.push(sections.googleFAQSection)
  }
  sectionsArr.push(sections.ctaSection)
  sectionsArr.push({...sections.footer, _type: 'landingpageFooter'})
  // sectionsArr.map((s) => (s._key = s._type))
  return sectionsArr?.length > 0 && <RenderSections sections={sectionsArr} />
}

export default LandingTemplateReport
