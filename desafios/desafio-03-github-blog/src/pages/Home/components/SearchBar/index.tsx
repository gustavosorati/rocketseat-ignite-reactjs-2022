import { useState } from "react"
import { SearchBarContainer } from "./styles";

export function SearchBar() {
  const [search, setSearch] = useState('');


  return (
    <SearchBarContainer>
      <strong>Publicações</strong>
      <span>6 publicações</span>

      <input placeholder="Buscar conteúdo" onChange={e => setSearch(e.target.value)} value={search} />
    </SearchBarContainer>
  )
}
