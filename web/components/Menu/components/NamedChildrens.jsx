import RenderColItemByType from './RenderColItemByType'

export default function NamedChildrens({ heading = '', childrens }) {
  return (
    <div>
      <p
        className="mb-8 font-poppins text-[14px] font-medium
        uppercase leading-[160%] tracking-[-0.01em] text-[#A3A6A8] lg:mb-[24px]"
      >
        {heading}
      </p>

      <div className="flex flex-col gap-8 lg:gap-6">
        {childrens?.length > 0 &&
          childrens.map(({ _key, _type, ...props }) => {
            return <RenderColItemByType key={_key} type={_type} {...props} />
          })}
      </div>
    </div>
  )
}
