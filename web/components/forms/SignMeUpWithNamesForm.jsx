import {Suspense} from 'react'
import HubspotForm from './HubspotForm'

export default function SignMeUpWithNamesForm({formId = ''}) {
  return (
    <Suspense fallback={null}>
      <HubspotForm page="landing" portalId={'8353230'} formId={formId} />
    </Suspense>
  )
}
