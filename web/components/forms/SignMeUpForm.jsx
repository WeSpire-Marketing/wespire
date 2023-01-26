import HubspotForm from './HubspotForm'

export default function SignMeUpForm({formId = ''}) {
  return (
    <>
      <HubspotForm page="resources" portalId={'8353230'} formId={formId} />
    </>
  )
}
