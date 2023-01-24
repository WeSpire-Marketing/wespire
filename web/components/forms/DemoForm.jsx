import HubspotForm from './HubspotForm'

export default function DemoForm({className = '', formId = ''}) {
  return (
    <div className={className + ' flex flex-col gap-y-8'}>
      <HubspotForm page="request-demo" portalId={'8353230'} formId={formId} />
    </div>
  )
}
