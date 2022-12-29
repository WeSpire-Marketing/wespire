export default function NoJobCard() {
  return (
    <li
      className="opressection__card flex items-center justify-between
      gap-6 rounded-2xl border border-[#cacdd4cc] bg-white px-6 py-[40px]
      lg:px-[40px]"
    >
      <div className="opressection__left">
        <h3 className="opressection__job heading-4 mb-2 lg:mb-4">There are no current openings</h3>
      </div>

      <span
        className="inline-flex h-[48px] w-[48px] items-center justify-center
        shrink-0 rounded-full bg-helpful rotate-180
        lg:h-[56px] lg:w-[56px]"
      />
    </li>
  )
}
