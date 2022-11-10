import RenderColItemByType from '../../Menu/components/RenderColItemByType'

export default function Content({currentColumns}) {
  return (
    <ul className="grid grid-cols-1 pt-[32px] gap-x-8 sm:grid-cols-2">
      {currentColumns?.col1?.length > 0 && (
        <li
          className="mb-[40px] flex flex-col gap-8 border-b-[1px] border-[rgba(202,205,212,0.8)]
          pb-[40px]"
        >
          {currentColumns.col1.map(({_key, _type, ...props}) => {
            return <RenderColItemByType key={_key} type={_type} {...props} />
          })}
        </li>
      )}

      {currentColumns?.col2?.length > 0 && (
        <li
          className="mb-[40px] flex flex-col gap-8 border-b-[1px] border-[rgba(202,205,212,0.8)]
          pb-[40px]"
        >
          {currentColumns.col2.map(({_key, _type, ...props}) => {
            return <RenderColItemByType key={_key} type={_type} {...props} />
          })}
        </li>
      )}

      {currentColumns?.col3?.length > 0 && (
        <li className="flex flex-col gap-8">
          {currentColumns.col3.map(({_key, _type, ...props}) => {
            return <RenderColItemByType key={_key} type={_type} {...props} />
          })}
        </li>
      )}
    </ul>
  )
}
