import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  const {
    categoryOptions,
    ratingsList,
    clearFilter,
    changeInput,
    enterInput,
    searchInput,
    categoryId,
    ratingId,
    changeCategory,
    changeRating,
  } = props

  const onSearchInput = event => {
    changeInput(event.target.value)
  }

  const onEnterInput = event => {
    if (event.key === 'Enter') {
      enterInput()
    }
  }

  return (
    <div className="filters-group-container">
      <div className="search-container">
        <input
          type="search"
          placeholder="search"
          onChange={onSearchInput}
          onKeyDown={onEnterInput}
          value={searchInput}
        />
        <BsSearch className="search-icon" />
      </div>

      <h1>Category</h1>
      <ul className="class-list">
        {categoryOptions.map(each => (
          <li key={each.categoryId}>
            <button
              type="button"
              onClick={() => changeCategory(each.categoryId)}
              className={each.categoryId === categoryId ? 'active' : ''}
            >
              <p>{each.name}</p>
            </button>
          </li>
        ))}
      </ul>

      <h1>Rating</h1>
      <ul className="class-list">
        {ratingsList.map(each => (
          <li key={each.ratingId}>
            <button
              type="button"
              className={`rating-holder ${
                each.ratingId === ratingId ? 'active' : ''
              }`}
              onClick={() => changeRating(each.ratingId)}
            >
              <img
                src={each.imageUrl}
                alt={`rating ${each.ratingId}`}
                className="rating-style"
              />
              <span> & up</span>
            </button>
          </li>
        ))}
      </ul>

      <button type="button" className="clear-filters-btn" onClick={clearFilter}>
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
