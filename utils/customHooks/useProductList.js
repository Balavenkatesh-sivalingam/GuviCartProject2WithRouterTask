import { useState, useEffect } from "react";

const useProductList = () => {
  const [productList, setProductList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products");

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    setProductList(data);
    setFilteredList(data);
  } catch (err) {
    console.error("Fetch failed:", err);
  }
};

  const handleSearch = () => {
    const filtered = productList.filter((pro) =>
      pro.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredList(filtered);
  };

  return {productList, filteredList, searchText, setFilteredList, setSearchText, handleSearch };
};

export default useProductList;
