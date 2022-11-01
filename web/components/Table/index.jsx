export default function Table({ value }) {
  return (
    <table className="my-6 table-auto">
      <thead>
        <tr>
          {value.rows[0].cells.map((cell, idx) => {
            return (
              <th
                className="border-[1px] border-[#9E9E9E] bg-[#EAEBED] p-[8px_11px_9px]
                font-poppins text-[7px] font-normal leading-160 text-[#121212] lg:p-[17px_23px]
                lg:text-[16px]"
                key={idx}
              >
                {cell}
              </th>
            )
          })}
        </tr>
      </thead>
      <tbody>
        {value.rows.slice(1).map(({ cells }, _key) => {
          return (
            <tr key={_key}>
              {cells.map((cell, idx) => {
                return (
                  <td
                    className="border-[1px] border-[#9E9E9E] bg-white p-[11px]
                    text-[8px] lg:p-[24px] lg:text-[18px]"
                    key={idx}
                  >
                    {cell}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
