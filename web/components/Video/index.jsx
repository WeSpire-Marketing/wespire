import {useEffect, useState} from 'react'
import getVideoId from 'get-video-id'
import Image from 'next/image'
import {useNextSanityImage} from 'next-sanity-image'

import client from '../../client'

export default function Video({video}) {
  const imageProps = useNextSanityImage(client, {...video.image, alt: video.image.alt})

  const {id, service} = getVideoId(video.url)
  const [isVisible, setVisibility] = useState(false)
  const [thumbnail, setThumbnail] = useState(false)

  const handleClick = () => setVisibility(true)

  const getThumbnail = async (id, service) => {
    if (service === 'youtube') {
      setThumbnail(`https://img.youtube.com/vi/${id}/mqdefault.jpg`)
      return `https://img.youtube.com/vi/${id}/mqdefault.jpg`
    }

    if (service === 'vimeo') {
      const response = await fetch(
        `https://vimeo.com/api/oembed.json?url=https://player.vimeo.com/video/${id}`
      )
      const json = await response.json()
      setThumbnail(json.thumbnail_url.split('_')[0] + '_640x360')
      return json.thumbnail_url.split('_')[0] + '_640x360'
    }

    return null
  }

  useEffect(() => {
    getThumbnail(id, service)
    return () => {}
  }, [])

  return (
    <div
      className={`relative cursor-pointer overflow-hidden rounded-[16px] aspect-video bg-slate-400`}
    >
      {video?.image?.asset ? (
        !isVisible ? (
          <div className="overflow-hidden rounded-[16px]" onClick={handleClick}>
            {video?.image?.playIcon && (
              <div className="absolute z-30 w-full h-full flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="104"
                  height="104"
                  viewBox="0 0 104 104"
                  fill="none"
                >
                  <g filter="url(#filter0_b_2080_15615)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M93.1563 50.9141C93.1563 74.2481 74.2403 93.1641 50.9063 93.1641C27.5722 93.1641 8.65625 74.2481 8.65625 50.9141C8.65625 27.58 27.5722 8.66406 50.9063 8.66406C74.2403 8.66406 93.1563 27.58 93.1563 50.9141ZM43.8559 36.5998C42.7909 35.9342 41.4095 36.6999 41.4095 37.9558V63.8733C41.4095 65.1292 42.7909 65.8949 43.8559 65.2292L64.59 52.2705C65.592 51.6442 65.592 50.1848 64.59 49.5586L43.8559 36.5998Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_b_2080_15615"
                      x="-7.33375"
                      y="-7.32594"
                      width="116.48"
                      height="116.48"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feGaussianBlur in="BackgroundImageFix" stdDeviation="7.995" />
                      <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_2080_15615"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_2080_15615"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
            )}

            <Image
              {...imageProps}
              alt={video?.image?.alt}
              position="relative"
              layout="fill"
              objectFit="cover"
              quality={85}
              priority
            />
          </div>
        ) : (
          <iframe
            className="absolute top-[50%] z-20 aspect-video w-full translate-y-[-50%] rounded-[16px]"
            src={
              service === 'vimeo'
                ? `https://player.vimeo.com/video/${id}?autoplay=1&title=0&byline=0&portrait=0`
                : `https://www.youtube.com/embed/${id}?autoplay=1`
            }
            title="Embedded youtube or vimeo video"
            allow={`accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;`}
            frameBorder="0"
            allowFullScreen
          />
        )
      ) : (
        <>
          {!isVisible && (
            <div
              className="absolute z-30 w-full h-full flex justify-center items-center"
              onClick={handleClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="104"
                height="104"
                viewBox="0 0 104 104"
                fill="none"
              >
                <g filter="url(#filter0_b_2080_15615)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M93.1563 50.9141C93.1563 74.2481 74.2403 93.1641 50.9063 93.1641C27.5722 93.1641 8.65625 74.2481 8.65625 50.9141C8.65625 27.58 27.5722 8.66406 50.9063 8.66406C74.2403 8.66406 93.1563 27.58 93.1563 50.9141ZM43.8559 36.5998C42.7909 35.9342 41.4095 36.6999 41.4095 37.9558V63.8733C41.4095 65.1292 42.7909 65.8949 43.8559 65.2292L64.59 52.2705C65.592 51.6442 65.592 50.1848 64.59 49.5586L43.8559 36.5998Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_b_2080_15615"
                    x="-7.33375"
                    y="-7.32594"
                    width="116.48"
                    height="116.48"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="7.995" />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_2080_15615"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_2080_15615"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          )}

          {!isVisible ? (
            <div className="overflow-hidden rounded-[16px]" onClick={handleClick}>
              {thumbnail && (
                <Image
                  src={thumbnail}
                  alt="thumb"
                  position="relative"
                  layout="fill"
                  objectFit="cover"
                  quality={85}
                  priority
                />
              )}
            </div>
          ) : (
            <iframe
              className="absolute top-[50%] z-20 aspect-video w-full translate-y-[-50%] rounded-[16px]"
              src={
                service === 'vimeo'
                  ? `https://player.vimeo.com/video/${id}?autoplay=1&title=0&byline=0&portrait=0`
                  : `https://www.youtube.com/embed/${id}?autoplay=1`
              }
              title="Embedded youtube or vimeo video"
              allow={`accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;`}
              frameBorder="0"
              allowFullScreen
            />
          )}
        </>
      )}
    </div>
  )
}
