interface Props {
  searchValue: string
  setSearchValue: (value: string) => void
}

function Search({ searchValue, setSearchValue }: Props) {
  return (
    <input
      className="search-input"
      placeholder="Search meetup"
      test-data="search-meetup"
      value={searchValue}
      onChange={(event) => setSearchValue(event.target.value)}
    ></input>
  )
}

export default Search
