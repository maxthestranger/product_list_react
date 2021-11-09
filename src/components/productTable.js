import ProductCategoryRow from "./productCategoryRow";
import ProductRow from "./productRow";

export default function ProductTable({products, filterText, isStockOnly}){
    let row = []
    let lastCategory = null

    products.forEach(product => {
        if(product.name.toLowerCase().indexOf(
            filterText.toLowerCase()
        ) === -1){
            return;
        }
        if(isStockOnly && !product.stocked){
            return;
        }
            if(product.category !== lastCategory){
                row.push(
                    <ProductCategoryRow category={product.category}
                                        key={product.category} />
                )
            }

            row.push(
                <ProductRow product={product} key={product.name} />
            )

            lastCategory = product.category
    })
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
            {row}
            </tbody>
        </table>
    )
}