import dynamic from 'next/dynamic'

export const HeroVideo = dynamic(() => import('./HeroVideo'))
export const HeroQuote = dynamic(() => import('./HeroQuote'))
export const CtaSection = dynamic(() => import('./CTASection'), {ssr: false})
export const CtaPdfSection = dynamic(() => import('./CtaPdfSection'), {ssr: false})
export const HeroSection = dynamic(() => import('./HeroSection'))
export const LongSection = dynamic(() => import('./LongSection'), {ssr: false})
export const CardsSection = dynamic(() => import('./CardsSection'), {ssr: false})
export const ImageSection = dynamic(() => import('./ImageSection'), {ssr: false})
export const ImageTextSection = dynamic(() => import('./ImageTextSection'), {ssr: false})
export const QuoteSection = dynamic(() => import('./QuoteSection'), {ssr: false})
export const ValuesSection = dynamic(() => import('./ValuesSection'), {ssr: false})
export const SliderSection = dynamic(() => import('./SliderSection'), {ssr: false})
export const ContentSection = dynamic(() => import('./ContentSection'), {ssr: false})
export const SessionSection = dynamic(() => import('./SessionSection'), {ssr: false})
export const HeroInfoSection = dynamic(() => import('./HeroInfoSection'))
export const HeroImageAndForm = dynamic(() => import('./HeroImageAndForm'))
export const HeroVideoAndForm = dynamic(() => import('./HeroVideoAndForm'))
export const HeroEventRegistrationSection = dynamic(() => import('./HeroEventRegistrationSection'))
export const CapabilitiesSection = dynamic(() => import('./CapabilitiesSection'), {ssr: false})
export const OpeningsPressSection = dynamic(() => import('./OpeningsPressSection'), {ssr: false})
export const CustomerStoriesSection = dynamic(() => import('./CustomerStoriesSection'), {
  ssr: false,
})
export const CategoriesWithBlogsSection = dynamic(() => import('./CategoriesWithBlogsSection'), {
  ssr: false,
})
export const HeroCTAForm = dynamic(() => import('./HeroCTAForm'))
export const HeroCTAFormSection = dynamic(() => import('./HeroCTAFormSection'))
export const HostsSection = dynamic(() => import('./HostsSection'), {ssr: false})
export const MostPopularSection = dynamic(() => import('./MostPopularSection'), {ssr: false})
export const ContactusSection = dynamic(() => import('./ContactusSection'), {ssr: false})
export const CareersHeroSection = dynamic(() => import('./CareersHeroSection'))
export const OpeningsSection = dynamic(() => import('./OpeningsSection'), {ssr: false})
export const LeadershipSection = dynamic(() => import('./LeadershipSection'), {ssr: false})
export const ArticlesPressSection = dynamic(() => import('./ArticlesPressSection'), {ssr: false})
export const AwardsSection = dynamic(() => import('./AwardsSection'), {
  ssr: false,
})
export const MeasureSection = dynamic(() => import('./MeasureSection'), {ssr: false})
export const OurCustomersSection = dynamic(() => import('./OurCustomersSection'), {ssr: false})
export const TabsSection = dynamic(() => import('./TabsSection'), {ssr: false})
export const LandingpageFooter = dynamic(() => import('./LandingpageFooter'), {ssr: false})
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
export const LandingTemplateEventRegistration = dynamic(
  () => import('./LandingTemplateEventRegistration'),
  {
    ssr: false,
  }
)
export const FormImageSection = dynamic(() => import('./FormImageSection'), {ssr: false})
export const SustainCardsSection = dynamic(() => import('./SustainCardsSection'), {ssr: false})
export const HeroFormVideo = dynamic(() => import('./HeroFormVideo'))
export const HeroCTASection = dynamic(() => import('./HeroCTASection'))
export const UpcomingEventSection = dynamic(() => import('./UpcomingEventSection'), {ssr: false})
export const GoogleFAQSection = dynamic(() => import('./GoogleFAQSection'), {ssr: false})
export const BlogCardsSection = dynamic(() => import('./BlogCardsSection'), {ssr: false})
export const HeroReport = dynamic(() => import('./HeroReport'))
export const TabsVerticalSection = dynamic(() => import('./TabsVerticalSection'), {ssr: false})
export const SliderReportSection = dynamic(() => import('./SliderReportSection'), {ssr: false})
export const TableImage = dynamic(() => import('./TableImage'), {ssr: false})
export const CardsSectionReport = dynamic(() => import('./CardsSectionReport'), {ssr: false})
export const BulletSection = dynamic(() => import('./BulletSection'), {ssr: false})
export const EventSection = dynamic(() => import('./EventSection'), {ssr: false})
//Template
export const BlogTemplate = dynamic(() => import('./BlogTemplate'))
export const ProductTemplate = dynamic(() => import('./ProductTemplate'))
export const ProductVideoTemplate = dynamic(() => import('./ProductVideoTemplate'))
export const CareersTemplate = dynamic(() => import('./CareersTemplate'))
export const ContactusTemplate = dynamic(() => import('./ContactusTemplate'))
export const CustomersTemplate = dynamic(() => import('./CustomersTemplate'))
export const ResourcesTemplate = dynamic(() => import('./ResourcesTemplate'))
export const WhyWespireTemplate = dynamic(() => import('./WhyWespireTemplate'))
export const LeadershipTemplate = dynamic(() => import('./LeadershipTemplate'))
export const WespireLiveTemplate = dynamic(() => import('./WespireLiveTemplate'))
export const RequestDemoTemplate = dynamic(() => import('./RequestDemoTemplate'))
export const PrivacyPolicyTemplate = dynamic(() => import('./PrivacyPolicyTemplate'))
export const SolutionsOverviewTemplate = dynamic(() => import('./SolutionsOverviewTemplate'))
export const NewsRoomTemplate = dynamic(() => import('./NewsRoomTemplate'))
export const LandingTemplate = dynamic(() => import('./LandingTemplate'))
export const LandingTemplateCompetitor = dynamic(() => import('./LandingTemplateCompetitor'))
export const LandingTemplateSocialProof = dynamic(() => import('./LandingTemplateSocialProof'))
export const LandingVideoTemplate = dynamic(() => import('./LandingVideoTemplate'))
export const PersonaTemplate = dynamic(() => import('./PersonaTemplate'))
export const HomeTemplate = dynamic(() => import('./HomeTemplate'))
export const LandingTemplateReport = dynamic(() => import('./LandingTemplateReport'))
