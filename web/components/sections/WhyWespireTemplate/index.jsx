import RenderSections from '../../RenderSections'

const WhyWespireTemplate = ({sections}) => {
  const sectionsArr = []
  sectionsArr.push(sections.heroInfoSection)
  sectionsArr.push(sections.imageSection)
  sectionsArr.push(sections.quoteSection)
  sectionsArr.push(sections.valuesSection)
  sectionsArr.push(sections.openingsPressSection)
  sectionsArr.push(sections.ctaSection)
  sectionsArr.map((s) => (s._key = s._type))
  return sectionsArr?.length > 0 && <RenderSections sections={sectionsArr} />
}

export default WhyWespireTemplate
