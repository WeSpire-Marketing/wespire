import Icon from '../../icons/AnimatedIcon'

import CtaSection from '../CTASection'
import HeroCTAForm from '../HeroCTAForm'
import HostsSection from '../HostsSection'
import SessionSection from '../SessionSection'
import MostPopularSection from '../MostPopularSection'
import CategoriesWithBlogsSection from '../CategoriesWithBlogsSection'

import {GetForm} from '../../../utils/forms'

export default function Index({sections}) {
  return (
    <div className="wespire-livepage bg-gallery">
      <HeroCTAForm
        className="bg-transparent pt-[170px] pb-[100px] lg:pt-[160px] lg:pb-[180px]"
        {...sections.heroCTAFormSection}
        Icon={Icon}
      />

      {sections.formSection.form.isForm && (
        <section className="container">
          <GetForm
            className="mx-auto mb-[100px] lg:mb-[140px]"
            {...sections.formSection.form.form[0]}
          />
        </section>
      )}

      <SessionSection {...sections.sessionSection} />
      <HostsSection {...sections.hostsSection} />
      <MostPopularSection {...sections.mostPopularSection} />
      <CategoriesWithBlogsSection {...sections.categoriesWithBlogsSection} />
      <CtaSection {...sections.ctaSection} />
    </div>
  )
}
