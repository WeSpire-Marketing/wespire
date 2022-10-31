import { useEffect } from 'react'
import { useRouter } from 'next/router'

const useCustomScrollBehavior = () => {
  const router = useRouter()

  // scroll page to the top
  useEffect(() => {
    if (window) {
      // Back off, browser, I got this...
      window.history.scrollRestoration = 'manual'
      window.scrollTo(0, 0)
    }
  }, [router.asPath])
}

export default useCustomScrollBehavior
