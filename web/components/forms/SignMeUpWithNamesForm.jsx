import HubspotForm from './HubspotForm'

export default function SignMeUpWithNamesForm({formId = ''}) {
  return (
    <>
      <HubspotForm page="landing" portalId={'8353230'} formId={formId} />
    </>
  )
}
