import { useState, SetStateAction, Dispatch } from "react";

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

interface Product {
  category: string;
  price: string;
  stocked?: boolean;
  name: string;
}

interface Products {
  products: Product[];
}

interface Props {
  inStockOnly: boolean;
  filterText: string;
  setFilterText?: Dispatch<SetStateAction<string>>;
  setInStockOnly?: Dispatch<SetStateAction<boolean>>;
}

function SearchBar({
  filterText,
  inStockOnly,
  setFilterText,
  setInStockOnly,
}: Props) {
  return (
    <form>
      <input
        value={filterText}
        type="text"
        placeholder="Search"
        onChange={(e) => setFilterText?.(e.target.value)}
      />
      <label>
        <input type="checkbox" checked={inStockOnly} />
        only show products in stock
      </label>
    </form>
  );
}

function ProductCategoryRow({ category }: { category: string }) {
  return (
    <tr>
      <th>{category}</th>
    </tr>
  );
}

function ProductRow({ stocked, name, price }: Product) {
  const productName = stocked ? (
    name
  ) : (
    <span style={{ color: "red" }}>{name}</span>
  );

  return (
    <tr>
      <td>{productName}</td>
      <td>{price}</td>
    </tr>
  );
}

const ProductTable = ({
  products,
  inStockOnly,
  filterText,
}: Products & Props): any => {
  const rows: any = [];
  let lastCategory: string = "";

  products.forEach((product) => {
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }

    if (inStockOnly && !product.stocked) return;

    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }
    rows.push(
      <ProductRow
        category={product.category}
        name={product.name}
        price={product.price}
      />
    );
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

const FilterableProductTable = ({ products }: Products) => {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        setFilterText={setFilterText}
        setInStockOnly={setInStockOnly}
      />
      <ProductTable
        filterText={filterText}
        inStockOnly={inStockOnly}
        products={products}
      />
    </div>
  );
};

export default <FilterableProductTable products={PRODUCTS} />;
