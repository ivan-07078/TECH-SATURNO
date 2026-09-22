import { Search as SearchIcon } from 'lucide-react';

function Search() {
  return (
    <div className="search-box card">
      <SearchIcon size={18} />
      <input type="search" placeholder="Buscar produtos, marcas e acessórios" aria-label="Buscar produtos" />
    </div>
  );
}

export default Search;
