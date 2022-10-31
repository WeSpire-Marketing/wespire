export default function Row({ className = 'row flex gap-[24px] items-center', children }) {
  return <div className={className}>{children}</div>
}
