import dynamic from 'next/dynamic'

export const HeroVideo = dynamic(() => import('./HeroVideo'))
export {default as HeroQuote} from './HeroQuote'
export {default as CtaSection} from './CTASection'
export {default as HeroSection} from './HeroSection'
export {default as LongSection} from './LongSection'
export {default as CardsSection} from './CardsSection'
export {default as ImageSection} from './ImageSection'
export const ImageTextSection = dynamic(() => import('./ImageTextSection'), {ssr: false})
export {default as QuoteSection} from './QuoteSection'
export {default as ValuesSection} from './ValuesSection'
export {default as SliderSection} from './SliderSection'
export {default as ContentSection} from './ContentSection'
export {default as SessionSection} from './SessionSection'
export {default as HeroInfoSection} from './HeroInfoSection'
export {default as HeroImageAndForm} from './HeroImageAndForm'
export {default as HeroVideoAndForm} from './HeroVideoAndForm'
export {default as CapabilitiesSection} from './CapabilitiesSection'
export {default as OpeningsPressSection} from './OpeningsPressSection'
export {default as CustomerStoriesSection} from './CustomerStoriesSection'
export {default as CategoriesWithBlogsSection} from './CategoriesWithBlogsSection'
export {default as HeroCTAForm} from './HeroCTAForm'
export {default as HeroCTAFormSection} from './HeroCTAFormSection'
export {default as HostsSection} from './HostsSection'
export {default as MostPopularSection} from './MostPopularSection'
export {default as ContactusSection} from './ContactusSection'
export {default as CareersHeroSection} from './CareersHeroSection'
export {default as OpeningsSection} from './OpeningsSection'
export {default as LeadershipSection} from './LeadershipSection'
export {default as ArticlesPressSection} from './ArticlesPressSection'
export const AwardsSection = dynamic(() => import('./AwardsSection'), {
  ssr: false,
})
export {default as MeasureSection} from './MeasureSection'
export {default as OurCustomersSection} from './OurCustomersSection'
export {default as TabsSection} from './TabsSection'
export {default as LandingpageFooter} from './LandingpageFooter'
export const LandingCardsSection = dynamic(() => import('./LandingCardsSection'), {
  ssr: false,
})
export const HeroForm = dynamic(() => import('./HeroForm'))
export const HeroFormSustainability = dynamic(() => import('./HeroFormSustainability'))
export const LandingTemplateSustainability = dynamic(
  () => import('./LandingTemplateSustainability'),
  {
    ssr: false,
  }
)
export const SustainCardsSection = dynamic(() => import('./SustainCardsSection'), {ssr: false})
export {default as HeroFormVideo} from './HeroFormVideo'
export {default as HeroCTASection} from './HeroCTASection'
export {default as UpcomingEventSection} from './UpcomingEventSection'
export {default as GoogleFAQSection} from './GoogleFAQSection'
export {default as BlogCardsSection} from './BlogCardsSection'
export {default as HeroReport} from './HeroReport'
export {default as TabsVerticalSection} from './TabsVerticalSection'
export {default as SliderReportSection} from './SliderReportSection'
export {default as TableImage} from './TableImage'
export {default as CardsSectionReport} from './CardsSectionReport'

export {default as BlogTemplate} from './BlogTemplate'
export {default as ProductTemplate} from './ProductTemplate'
export {default as ProductVideoTemplate} from './ProductVideoTemplate'
export {default as CareersTemplate} from './CareersTemplate'
export {default as ContactusTemplate} from './ContactusTemplate'
export {default as CustomersTemplate} from './CustomersTemplate'
export {default as ResourcesTemplate} from './ResourcesTemplate'
export {default as WhyWespireTemplate} from './WhyWespireTemplate'
export {default as LeadershipTemplate} from './LeadershipTemplate'
export {default as WespireLiveTemplate} from './WespireLiveTemplate'
export {default as RequestDemoTemplate} from './RequestDemoTemplate'
export {default as PrivacyPolicyTemplate} from './PrivacyPolicyTemplate'
export {default as SolutionsOverviewTemplate} from './SolutionsOverviewTemplate'
export {default as NewsRoomTemplate} from './NewsRoomTemplate'
export {default as LandingTemplate} from './LandingTemplate'
export {default as LandingTemplateCompetitor} from './LandingTemplateCompetitor'
export {default as LandingTemplateSocialProof} from './LandingTemplateSocialProof'
export {default as LandingVideoTemplate} from './LandingVideoTemplate'
export {default as PersonaTemplate} from './PersonaTemplate'
export {default as HomeTemplate} from './HomeTemplate'
export {default as LandingTemplateReport} from './LandingTemplateReport'
