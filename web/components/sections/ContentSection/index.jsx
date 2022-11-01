import TextRow from './components/TextRow'
import RowWithoutLink from './components/RowWithoutLink'

import {GetForm} from '../../../utils/forms'

export default function ContentSection({rows = [], form}) {
  const rowIdxs = []

  return (
    <section
      className="contection overflow-hidden rounded-t-[30px] bg-gallery pt-[48px] pb-[100px]
      lg:rounded-t-[48px] lg:pt-[100px] lg:pb-[140px]"
    >
      <div className="container px-2 sm:px-4 lg:px-8">
        <div className="contection__inner">
          {rows.map(({_type, _key, ...restProps}, idx) => {
            let reverseRows = []
            if (_type === 'rowWithoutLink') {
              rowIdxs.push(idx)
              reverseRows = rowIdxs.filter((el, i, arr) => (i + 2) % 2 !== 0)
            }
            return _type === 'rowWithoutLink' ? (
              <RowWithoutLink key={_key} {...restProps} reversed={reverseRows.includes(idx)} />
            ) : (
              <TextRow key={_key} {...restProps} />
            )
          })}
        </div>

        {form.isForm && <GetForm {...form.form[0]} />}
      </div>
    </section>
  )
}
