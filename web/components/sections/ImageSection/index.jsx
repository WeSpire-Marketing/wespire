import {urlForImage} from '../../../client'

export default function ImageSection({image}) {
  const url = urlForImage(image).width(1440).height(768).fit('crop').url()

  return (
    <section
      className="imecton relative h-[25vh] overflow-hidden bg-thriving
      sm:h-[50vh]
      md:h-[75vh]
      lg:h-[90vh]"
    >
      <div
        className="img__contianer absolute top-0 left-0 right-0 bottom-0
        mx-auto block h-full w-full overflow-hidden rounded-t-[6.5vmin]
        bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${url})`,
        }}
      />
    </section>
  )
}
