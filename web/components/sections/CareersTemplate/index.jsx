import RenderSections from '../../RenderSections'
import useCustomScrollBehavior from '../../../utils/hooks/useCustomScrollBehavior'

export default function CareersTemplate({sections}) {
  useCustomScrollBehavior()
  const sectionsArr = []
  sectionsArr.push({...sections.careersHeroSection, _type: 'careersHeroSection'})
  sectionsArr.push({...sections.openingsSection, _type: 'openingsSection'})
  sectionsArr.map((s) => (s._key = s._type))
  return sectionsArr?.length > 0 && <RenderSections sections={sectionsArr} />
}
