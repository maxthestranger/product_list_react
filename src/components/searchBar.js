export default function SearchBar({filterText, isStockOnly, onFilterTextChange, onInStockOnlyChange}){
    return (
        <form>
            <input type="text" className="search" value={filterText} placeholder="Search..." onChange={(e) => onFilterTextChange(e.target.value)} />
            <label>
                <input type="checkbox" checked={isStockOnly} onChange={(e) => onInStockOnlyChange(e.target.checked)} className="checkbox" />
                Only show products in stock
            </label>
        </form>
    )
}