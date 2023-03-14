import {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {useRouter} from 'next/router'

const DefaultLoading = () => <div>Loading Form...</div>

export default function HubspotForm(props) {
  const {
    page = '',
    region = 'na1',
    portalId = '8353230',
    formId,
    scriptSrc = '//js.hsforms.net/forms/embed/v2.js',
    onLoading = <DefaultLoading />,
  } = props ?? {}

  const router = useRouter()

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = scriptSrc

    document.body.appendChild(script)
    const addListener = () => {
      window.hbspt.forms.create({
        region,
        portalId,
        formId,
        target: '#hubspotform',
      })
      if (window.hbspt?.forms) setLoading(false)
    }

    script.addEventListener('load', addListener)

    return () => script.removeEventListener('load', addListener)
  }, [portalId, formId, scriptSrc])

  useEffect(() => {
    const onSubmitLintrk = () => {
      window.lintrk('track', {conversion_id: 11507426})
    }

    if (!loading) {
      setTimeout(() => {
        const gclid = document.querySelector('#hubspotform input[name=gclid]')
        if (gclid) gclid.value = localStorage.getItem('gclid')
      }, 3000)

      if (router?.asPath === '/dei-software' || router?.asPath === '/erg-management-software') {
        document.addEventListener('submit', onSubmitLintrk)
      }

      return () => {
        if (router?.asPath === '/dei-software' || router?.asPath === '/erg-management-software') {
          document.removeEventListener('submit', onSubmitLintrk)
        }
      }
    }
  }, [loading])

  return (
    <div id="hubspotform" page={`${page}`}>
      {loading ? onLoading : null}
    </div>
  )
}

HubspotForm.propTypes = {
  portalId: PropTypes.string.isRequired,
  formId: PropTypes.string.isRequired,
  scriptSrc: PropTypes.string,
  onLoading: PropTypes.object,
}

HubspotForm.defaultProps = {
  page: '',
  region: 'na1',
  portalId: '8353230',
  scriptSrc: '//js.hsforms.net/forms/embed/v2.js',
}
