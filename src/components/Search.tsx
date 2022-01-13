interface Props {
  searchValue: string
  setSearchValue: (value: string) => void
}

function Search({ searchValue, setSearchValue }: Props) {
  return (
    <input
      className="search-input"
      placeholder="Search meetup"
      data-test="search-meetup"
      value={searchValue}
      onChange={(event) => setSearchValue(event.target.value)}
    ></input>
  )
}

export default Search
