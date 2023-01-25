import HubspotForm from './HubspotForm'

export default function ContactForm({formId}) {
  return (
    <>
      <HubspotForm page="contact-us" portalId={'8353230'} formId={formId} />

      <p className="body-s mx-auto mt-8 max-w-[320px] text-center lg:max-w-[438px]">
        By submitting this form I agree to receive marketing communications from WeSpire.
      </p>
    </>
  )
}
