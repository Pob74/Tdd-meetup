interface Props {
  searchValue: string
  setSearchValue: (value: string) => void
}

function Search({ searchValue, setSearchValue }: Props) {
  return (
    <input
      data-test="search-meetup"
      value={searchValue}
      onChange={(event) => setSearchValue(event.target.value)}
    ></input>
  )
}

export default Search
