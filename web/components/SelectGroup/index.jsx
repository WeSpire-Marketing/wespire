import {useId} from 'react'
import Select from 'react-select'
import {Controller} from 'react-hook-form'

import Icon from '../icons/ChevronIcon'

const styles = {
  control: (styles, state) => ({
    height: '47.59px',
    color: '#9E9E9E',
    borderRadius: '8px',
    padding: '4px 8px',
    '&:hover': {
      borderColor: '#1771DC',
    },
    backgroundColor: 'white',
    border: state.isFocused
      ? state.selectProps.isError
        ? '1px solid rgba(231, 68, 68, 1)!important;'
        : '1px solid rgba(23, 113, 220, 1)'
      : '1px solid rgba(202, 205, 212, 0.8)',
    boxShadow: state.isFocused
      ? state.selectProps.isError
        ? '0 0 0 2px rgba(231, 68, 68, 0.4)'
        : '0 0 0 2px rgba(23, 113, 220, 0.4)'
      : 'none',
  }),
  singleValue: (styles) => {
    return {
      ...styles,
      padding: '5px 0 0',
    }
  },
  option: (styles, {isFocused, isSelected}) => {
    return {
      padding: '6px 13px 3px 13px',
      color: isSelected || isFocused ? '#1771DC' : '#121212',
      fontFamily: 'inherit',
      backgroundColor: isFocused ? '#DEEBFD' : 'white',
      borderRadius: '8px',
      '&:hover': {
        color: '#1771DC',
        background: '#DEEBFD',
      },
    }
  },
  menu: (styles, state) => ({
    ...styles,
    width: 'calc(100% + 4px)',
    margin: '0',
    position: 'absolute',
    top: '-2px',
    left: '-2px',
    zIndex: '10',
    borderRadius: '8px',
    padding: '4px 8px',
    filter: 'drop-shadow(0px 12px 35px rgba(111, 111, 111, 0.2))',
  }),
}

const Arrow = () => {
  return (
    <span className="absolute top-[20px] right-[18px] z-10 max-w-[10px]">
      <Icon color="#121212" />
    </span>
  )
}

export default function SelectGroup({
  label = '',
  rules,
  value,
  error,
  name,
  control,
  options,
  setValue,
  placeholder = '',
}) {
  const selectId = useId()

  return (
    <label
      className={`${error?.length ? 'error' : ''} relative flex flex-col gap-1 font-nunito
      text-base font-medium leading-160 text-black`}
    >
      {label}

      <Controller
        name={name}
        rules={rules}
        control={control}
        render={({field: {onChange, ...restFields}}) => {
          return (
            <Select
              {...restFields}
              styles={styles}
              options={options}
              isSearchable={false}
              instanceId={selectId}
              menuPosition="absolute"
              classNamePrefix="select"
              defaultValue={() => setValue('')}
              components={{
                IndicatorSeparator: () => null,
                DropdownIndicator: () => <Arrow />,
              }}
              placeholder={<p className="body-s pt-1 text-[16px] text-[#9e9e9e]">{placeholder}</p>}
              value={options.find((o) => o.value === value)}
              onChange={(option) => onChange(option.value)}
              isError={error?.length > 0}
              openMenuOnFocus
            />
          )
        }}
      />

      {error?.length > 0 && (
        <p className="body-s absolute bottom-[-25px] text-[14px] text-error">{error}</p>
      )}
    </label>
  )
}
