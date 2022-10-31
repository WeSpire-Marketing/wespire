import { motion } from 'framer-motion'

import RenderColItemByType from './components/RenderColItemByType'

export default function Menu({ isActive, items, onClose: handleClose }) {
  return (
    <motion.div
      className={`menu absolute top-[-20px] left-[50%] 
      z-10 w-[100%] translate-x-[-50%] pt-[68px]`}
      initial={{ backgroundColor: 'transparent', pointerEvents: 'none' }}
      animate={{
        backgroundColor: isActive ? 'rgba(250,252,255,1)' : 'rgba(250,252,255,0)',
        pointerEvents: isActive ? 'all' : 'none',
      }}
      style={{
        backgroundColor: isActive ? 'rgba(250,252,255,1)' : 'rgba(250,252,255,0)',
        boxShadow: isActive ? '0px 10px 40px rgba(81, 81, 81, 0.14)' : 'none',
      }}
      transition={{ duration: 0.1 }}
    >
      <motion.div
        className="header-menu mx-auto w-[100%] max-w-[1288px] overflow-hidden
        pt-[40px]"
        onMouseLeave={handleClose}
        initial={{ opacity: '0' }}
        animate={{ opacity: isActive ? '1' : '0' }}
        transition={{ duration: 0.1 }}
      >
        <div
          className="menu-row flex border-t-[1px] border-[rgba(202,205,212,0.8)] px-[32px]
          pt-[40px] pb-[40px]"
        >
          {items?.col1?.length > 0 && (
            <div
              className="menu-col flex w-fit max-w-[384px] flex-col gap-6 border-r-[1px] 
              border-[rgba(202,205,212,0.8)] py-[16px] pr-[48px]"
            >
              {items.col1.map(({ _key, _type, ...props }) => {
                return <RenderColItemByType key={_key} type={_type} {...props} />
              })}
            </div>
          )}

          {items?.col2?.length > 0 && (
            <div
              className="menu-col flex w-fit flex-1 flex-col gap-6 py-[16px] 
              px-[48px]"
            >
              {items.col2.map(({ _key, _type, ...props }) => {
                return <RenderColItemByType key={_key} type={_type} {...props} />
              })}
            </div>
          )}

          {items?.col3?.length > 0 && (
            <div
              className="menu-col flex w-fit flex-1 flex-col gap-6 border-l-[1px]
              border-[rgba(202,205,212,0.8)] py-[16px] pl-[48px]"
            >
              {items.col3.map(({ _key, _type, ...props }) => {
                return <RenderColItemByType key={_key} type={_type} {...props} />
              })}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}
