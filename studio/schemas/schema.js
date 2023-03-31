// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Document types
import page from './documents/page'
import route from './documents/route'
import author from './documents/author'
import article from './documents/article'
import stories from './documents/stories'
import category from './documents/category'
import siteConfig from './documents/siteConfig'
import redirect from './documents/redirect'

// Object types
import cta from './objects/cta'
import textRow from './objects/textRow'
import embedHTML from './objects/embedHTML'
import figure from './objects/figure'
import internalLink from './objects/internalLink'
import link from './objects/link'
import portableText from './objects/portableText'
import simplePortableText from './objects/simplePortableText'
import bigImgItem from './objects/bigImgItem'
import cardItem from './objects/cardItem'
import cardItemWithTags from './objects/cardItemWithTags'
import imgItem from './objects/imgItem'
import imgItemHoriz from './objects/imgItemHoriz'
import listItem from './objects/listItem'
import menuLink from './objects/menuLink'
import namedChildrens from './objects/namedChildrens'
import textItem from './objects/textItem'
import meta from './objects/meta'
import row from './objects/row'
import video from './objects/video'
import rowWithoutLink from './objects/rowWithoutLink'
import ctaForm from './objects/ctaForm'
import eventForm from './objects/eventForm'
import subscribeForm from './objects/subscribeForm'
import authorsQuoteForm from './objects/authorsQuoteForm'
import textCol from './objects/textCol'
import sectionsBuilder from './objects/sectionsBuilder'

// sections
import hero from './sections/hero'
import heroVideo from './sections/heroVideo'
import heroQuote from './sections/heroQuote'
import ctaSection from './sections/ctaSection'
import longSection from './sections/longSection'
import cardsSection from './sections/cardsSection'
import imageSection from './sections/imageSection'
import quoteSection from './sections/quoteSection'
import valuesSection from './sections/valuesSection'
import sliderSection from './sections/sliderSection'
import sessionSection from './sections/sessionSection'
import contentSection from './sections/contentSection'
import heroInfoSection from './sections/heroInfoSection'
import heroImageAndForm from './sections/heroImageAndForm'
import heroVideoAndForm from './sections/heroVideoAndForm'
import capabilitiesSection from './sections/capabilitiesSection'
import openingsPressSection from './sections/openingsPressSection'
import customerStoriesSection from './sections/customerStoriesSection'
import heroCTAFormSection from './sections/heroCTAFormSection'
import hostsSection from './sections/hostsSection'
import mostPopularSection from './sections/mostPopularSection'
import categoriesWithBlogsSection from './sections/categoriesWithBlogsSection'
import contactusSection from './sections/contactusSection'
import leadershipSection from './sections/leadershipSection'
import articlesPressSection from './sections/articlesPressSection'
import heroForm from './sections/heroForm'
import measureSection from './sections/measureSection'
import tabsSection from './sections/tabsSection'
import awardsSection from './sections/awardsSection'
import heroFormVideo from './sections/heroFormVideo'
import ourCustomersSection from './sections/ourCustomersSection'
import heroCTASection from './sections/heroCTASection'
import upcomingEventSection from './sections/upcomingEventSection'

// templates
import blogTemplate from './templates/blogTemplate'
import homeTemplate from './templates/homeTemplate'
import landingTemplate from './templates/landingTemplate'
import landingTemplateSocialProof from './templates/landingTemplateSocialProof'
import productTemplate from './templates/productTemplate'
import productVideoTemplate from './templates/productVideoTemplate'
import careersTemplate from './templates/careersTemplate'
import personaTemplate from './templates/personaTemplate'
import newsRoomTemplate from './templates/newsRoomTemplate'
import customersTemplate from './templates/customersTemplate'
import resourcesTemplate from './templates/resourcesTemplate'
import contactusTemplate from './templates/contactusTemplate'
import whyWespireTemplate from './templates/whyWespireTemplate'
import leadershipTemplate from './templates/leadershipTemplate'
import wespireLiveTemplate from './templates/wespireLiveTemplate'
import requestDemoTemplate from './templates/requestDemoTemplate'
import landingVideoTemplate from './templates/landingVideoTemplate'
import privacyPolicyTemplate from './templates/privacyPolicyTemplate'
import solutionsOverviewTemplate from './templates/solutionsOverviewTemplate'
import blank from './templates/blank'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // templates
    blank,
    blogTemplate,
    homeTemplate,
    personaTemplate,
    productTemplate,
    productVideoTemplate,
    customersTemplate,
    resourcesTemplate,
    contactusTemplate,
    whyWespireTemplate,
    newsRoomTemplate,
    landingVideoTemplate,
    wespireLiveTemplate,
    privacyPolicyTemplate,
    solutionsOverviewTemplate,
    requestDemoTemplate,
    careersTemplate,
    landingTemplate,
    landingTemplateSocialProof,
    leadershipTemplate,
    // sections
    hero,
    heroForm,
    heroQuote,
    heroCTASection,
    heroFormVideo,
    hostsSection,
    tabsSection,
    awardsSection,
    measureSection,
    ourCustomersSection,
    articlesPressSection,
    contactusSection,
    leadershipSection,
    categoriesWithBlogsSection,
    mostPopularSection,
    heroCTAFormSection,
    sessionSection,
    customerStoriesSection,
    heroVideo,
    capabilitiesSection,
    heroInfoSection,
    imageSection,
    openingsPressSection,
    quoteSection,
    valuesSection,
    ctaSection,
    longSection,
    cardsSection,
    sliderSection,
    contentSection,
    sectionsBuilder,
    heroImageAndForm,
    heroVideoAndForm,
    upcomingEventSection,

    // other types
    video,
    stories,
    textRow,
    textCol,
    article,
    author,
    category,
    row,
    rowWithoutLink,
    cta,
    embedHTML,
    figure,
    // hero,
    // imageSection,
    internalLink,
    link,
    page,
    portableText,
    route,
    simplePortableText,
    siteConfig,
    redirect,
    // textSection,
    meta,
    ctaForm,
    eventForm,
    subscribeForm,
    authorsQuoteForm,

    // top menu components
    namedChildrens,
    bigImgItem,
    cardItem,
    imgItem,
    imgItemHoriz,
    listItem,
    menuLink,
    textItem,
    cardItemWithTags
  ])
})
