// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Document types
import page from './documents/page'
import route from './documents/route'
import author from './documents/author'
import article from './documents/article'
import category from './documents/category'
import headerMenu from './documents/headerMenu'
import siteConfig from './documents/siteConfig'

// Object types
import cta from './objects/cta'
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
import rowWithoutLink from './objects/rowWithoutLink'
import ctaForm from './objects/ctaForm'
import eventForm from './objects/eventForm'
import subscribeForm from './objects/subscribeForm'
import authorsQuoteForm from './objects/authorsQuoteForm'
import sectionsBuilder from './objects/sectionsBuilder'

// Landing page sections
// import hero from './objects/hero'
// import mailchimp from './objects/mailchimp'
// import textSection from './objects/textSection'
// import imageSection from './objects/imageSection'
import hero from './sections/hero'
import cardsSection from './sections/cardsSection'
import ctaSection from './sections/ctaSection'
import longSection from './sections/longSection'
import sliderSection from './sections/sliderSection'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // sections
    hero,
    cardsSection,
    ctaSection,
    longSection,
    sliderSection,
    sectionsBuilder,

    // other types
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
    // mailchimp,
    page,
    portableText,
    route,
    simplePortableText,
    siteConfig,
    // textSection,
    headerMenu,
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
