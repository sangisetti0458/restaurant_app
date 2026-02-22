function CategoryTabs({categories, activeIndex, setActiveIndex}) {
  return (
    <div className="tabs">
      {categories.map((cat, index) => (
        <button
          type="button"
          key={cat.menu_category_id}
          className={index === activeIndex ? 'active-tab' : ''}
          onClick={() => setActiveIndex(index)}
        >
          {cat.menu_category}
        </button>
      ))}
    </div>
  )
}

export default CategoryTabs
