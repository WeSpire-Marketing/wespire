import RenderSections from '../../RenderSections'

const ProductTemplate = ({sections}) => {
  const sectionsArr = []
  if (Boolean(sections?.googleFAQSection?.showFAQ)) {
    sections.heroVideoAndForm.listFAQ = sections.googleFAQSection.listFAQ
  }
  sectionsArr.push(sections.heroVideoAndForm)
  sectionsArr.push(sections.contentSection)
  if (Boolean(sections?.googleFAQSection?.showFAQ)) {
    sectionsArr.push(sections.googleFAQSection)
  }
  sectionsArr.push(sections.ctaSection)
  sectionsArr.map((s) => (s._key = s._type))
  return (
    sectionsArr?.length > 0 && (
      <div className="bg-pampas">
        <RenderSections sections={sectionsArr} />
      </div>
    )
  )
}

export default ProductTemplate
