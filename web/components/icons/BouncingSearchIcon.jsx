import { useEffect } from 'react'
import { useRive, useStateMachineInput } from '@rive-app/react-canvas'

export default function BouncingSearchIcon({ className = '', isSearching = false }) {
  const { rive, RiveComponent } = useRive({
    src: '/assets/rives/search.riv',
    autoplay: true,
    stateMachines: 'Search',
  })

  useEffect(() => {
    const resizeRive = () => {
      if (rive) {
        rive.resizeDrawingSurfaceToCanvas()
      }
    }

    if (window) {
      window.addEventListener('resize', resizeRive)
    }

    return () => window.removeEventListener('resize', resizeRive)
  }, [rive])

  const searchInput = useStateMachineInput(rive, 'Search', 'Searching')

  useEffect(() => {
    if (searchInput) {
      searchInput.runtimeInput.value = isSearching
    }
  }, [isSearching, searchInput])

  return <RiveComponent className={className} width={35} height={35} />
}
