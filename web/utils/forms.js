import {CTAForm, EventForm, SubscribeForm, AuthorsQuoteForm} from '../components/forms'

export const forms = {
  ctaForm: CTAForm,
  eventForm: EventForm,
  subscribeForm: SubscribeForm,
  authorsQuoteForm: AuthorsQuoteForm,
}

export const GetForm = ({_type, ...props}) => {
  const Form = forms[_type]
  return <Form {...props} />
}
