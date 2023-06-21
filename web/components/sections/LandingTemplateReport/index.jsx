// import RenderSections from '../../RenderSections'
import dynamic from 'next/dynamic'

const RenderSections = dynamic(() => import('../../RenderSections'), {
  ssr: false,
})

const LandingTemplateReport = ({sections}) => {
  const sectionsArr = []
  if (Boolean(sections?.googleFAQSection?.showFAQ)) {
    sections.heroReport.listFAQ = sections.googleFAQSection.listFAQ
  }
  sectionsArr.push({...sections.heroReport, _type: 'heroReport'})
  sectionsArr.push({
    ...sections.tabsSection1.tabsSection,
    _type: 'tabsSection',
    id: sections.tabsSection1.idSection,
  })
  sectionsArr.push({
    ...sections.tabsVertical,
    _type: 'tabsVerticalSection',
    id: sections.tabsVertical.idSection,
  })
  sectionsArr.push({
    ...sections.tabsSection2.tabsSection,
    _type: 'tabsSection',
    id: sections.tabsSection2.idSection,
  })
  sectionsArr.push({
    ...sections.sliderReportSection1,
    _type: 'sliderReportSection',
    id: sections.sliderReportSection1.idSection,
  })
  sectionsArr.push({...sections.tableImageSection})
  sectionsArr.push({...sections.cardsSectionReport})
  sectionsArr.push({
    ...sections.tabsSection3.tabsSection,
    _type: 'tabsSection',
    id: sections.tabsSection3.idSection,
  })
  sectionsArr.push({
    ...sections.sliderReportSection2,
    _type: 'sliderReportSection',
    id: sections.sliderReportSection2.idSection,
  })
  if (Boolean(sections?.googleFAQSection?.showFAQ)) {
    sectionsArr.push(sections.googleFAQSection)
  }
  sectionsArr.push(sections.ctaSection)
  sectionsArr.push({...sections.footer, _type: 'landingpageFooter'})
  sectionsArr.map((s) => (s._key = s._type))
  return sectionsArr?.length > 0 && <RenderSections sections={sectionsArr} />
}

export default LandingTemplateReport
