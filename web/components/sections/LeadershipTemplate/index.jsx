import CtaSection from '../CTASection'
import LeadershipSection from '../LeadershipSection'
import useCustomScrollBehavior from '../../../utils/hooks/useCustomScrollBehavior'

export default function LeadershipTemplate({sections}) {
  useCustomScrollBehavior()

  return (
    <div className="leadershippage bg-gallery pt-[170px] lg:pt-[185px]">
      {sections?.leadershipSection?.items?.length > 0 &&
        sections.leadershipSection.items.map(({_key, ...props}) => {
          return <LeadershipSection key={_key} {...props} />
        })}

      <CtaSection {...sections.ctaSection} />
    </div>
  )
}
