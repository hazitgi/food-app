import { useContext, useEffect, useRef, useState } from "react";
import useRequest from "../../services/api";
import { AppContext } from "../../store/Context";

const ProductSearch = ({ productsArray, setProductsArray }) => {
  const [search, setSearch] = useState("");
  const request = useRequest();
  const timerRef = useRef(null);

  useEffect(() => {
    console.log("ProductSearch useEffect");

    // Clear the previous timer on each keystroke
    clearTimeout(timerRef.current);

    // Set a new timer for 4 seconds
    timerRef.current = setTimeout(() => {
      fetchProducts();
    }, 4000);
    return () => {
      clearTimeout(timerRef.current);
    };
  }, [search]);

  const fetchProducts = async () => {
    const data = await request.post("/api/product", { query: search });
    if (data?.data?.result) {
      setProductsArray(data.data.result);
    } else {
      setProductsArray([]);
    }
  };

  const handleSearchKeyress = (e) => {
    setSearch(e.target.value);
  };

  return (
    <section className="search-section">
      <div className="container row">
        <div className="product-search-wrap">
          <input
            type="search"
            className="txt-search"
            onChange={(e) => {
              handleSearchKeyress(e);
            }}
            value={search}
            placeholder="search"
          />
          <button className="search-btn">
            <Searcicon />
          </button>
        </div>
      </div>
    </section>
  );
};

const Searcicon = () => {
  return (
    <svg viewBox="0 0 50 50" width="50px" height="50px">
      <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z" />
    </svg>
  );
};
export default ProductSearch;
