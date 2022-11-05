import RenderSections from '../../RenderSections'

const NewsRoomTemplate = ({sections}) => {
  const sectionsArr = []
  sectionsArr.push(sections.heroCTAFormSection)
  sectionsArr.push(sections.articlesPressSection)
  sectionsArr.push(sections.ctaSection)
  sectionsArr.map((s) => (s._key = s._type))
  return sectionsArr?.length > 0 && <RenderSections sections={sectionsArr} />
}

export default NewsRoomTemplate
