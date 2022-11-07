import {useState} from 'react'
import getVideoId from 'get-video-id'

import Img from '../Img'

export default function Video({video}) {
  const {id, service} = getVideoId(video.url)
  const [isVisible, setVisibility] = useState(false)

  const handleClick = () => setVisibility(true)

  async function getThumbnail(id, service) {
    if (service === 'youtube') {
      return `https://img.youtube.com/vi/${id}/mqdefault.jpg`
    }

    if (service === 'vimeo') {
      const response = await fetch(
        `https://vimeo.com/api/oembed.json?url=https://player.vimeo.com/video/${id}`
      )
      const json = await response.json()
      return json.thumbnail_url.split('_')[0] + '_320x180'
    }

    return null
  }

  return (
    <div className="relative cursor-pointer overflow-hidden rounded-[16px] aspect-[16/10]">
      {isVisible ? (
        <iframe
          className="absolute top-[50%] z-20 aspect-video w-full translate-y-[-50%] rounded-[16px]"
          src={
            service === 'vimeo'
              ? `https://player.vimeo.com/video/${id}?autoplay=1&title=0&byline=0&portrait=0`
              : `https://www.youtube.com/embed/${id}?autoplay=1`
          }
          title="Embedded youtube or vimeo video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
          allowFullScreen
        />
      ) : (
        <Img
          className="overflow-hidden rounded-[16px]"
          value={{...video.image, alt: video.image.alt}}
          onClick={handleClick}
        />
      )}
    </div>
  )
}
