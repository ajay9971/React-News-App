export default function SearchBar({search,setSearch,onSearch}){
return(
    <div className="search-bar">
        <input placeholder="Search News" value={search} onChange={(e)=>setSearch(e.target.value)}
        />
        <button onClick={onSearch}>Search</button>
    </div>
);
}