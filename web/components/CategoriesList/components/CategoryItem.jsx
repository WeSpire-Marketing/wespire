export default function CategoryItem({ className = '', selected = false, onClick, children }) {
  return (
    <li>
      <button
        className={`category-btn ${className} ${selected ? 'category-btn--active' : ''}`}
        onClick={onClick}
      >
        {children}
      </button>
    </li>
  )
}
