import SearchBar from "./components/searchBar";
import ProductTable from "./components/productTable";
import {PRODUCTS} from "./data";
import {useState} from "react";

function FilterableProductTable({products}){
    const [filterText, setFilterText] = useState('')
    const [isStockOnly, setIsStockOnly] = useState(false)
    return(
        <>
            <SearchBar filterText={filterText} isStockOnly={isStockOnly} onFilterTextChange={setFilterText} onInStockOnlyChange={setIsStockOnly} />
            <ProductTable products={products} filterText={filterText} isStockOnly={isStockOnly} />
        </>
    )
}

export default function App(){
    return <FilterableProductTable products={PRODUCTS} />
}