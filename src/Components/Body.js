import ProductCard from "./ProductCard";
import useProductList from "../../utils/customHooks/useProductList";
import Shimmer from "../Components/Shimmer"

const Body = () => {
  const {
    productList,
    filteredList,
    searchText,
    setFilteredList,
    setSearchText,
    handleSearch,
  } = useProductList();

  return productList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body bg-gradient-to-br from-blue-200 to-blue-100 min-h-screen">
      <div className="search font-bold md:ml-12">
        <input
          className="mt-8 mb-8 ml-8 p-4 h-10 md:w-72 w-60 border rounded-lg bg-white"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ml-2 "
          onClick={handleSearch}
        >
          Search
        </button>
        <button
          className="bg-blue-500 md:ml-2 ml-2 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={() => {
            setFilteredList(productList);
            setSearchText("");
          }}
        >
          Show All
        </button>
      </div>
      <div className="productContainer flex flex-wrap gap-6 md:ml-14 p-3">
        {filteredList.map((product) => (
          <ProductCard key={product.id} proList={product} />
        ))}
      </div>
    </div>
  );
};

export default Body;
