import RenderSections from '../../RenderSections'

const PersonaTemplate = ({sections}) => {
  const sectionsArr = []
  sectionsArr.push(sections.heroCTASection)
  sectionsArr.push(sections.contentSection)
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

export default PersonaTemplate
