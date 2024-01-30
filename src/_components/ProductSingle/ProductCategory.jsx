import React, { useEffect, useState } from "react";
import useRequest from "../../services/api";

const ProductCategory = ({ selectedCategory, setSetselectedCategory }) => {
  const request = useRequest();
  const apiProduct = "/api/category";

  const [categorysArray, setCategorysArray] = useState([]);

  useEffect(() => {
    fetchData().then((response) => {
      setCategorysArray(response);
    });
  }, []);

  const fetchData = async () => {
    const response = await request.get(apiProduct);
    if (response?.data?.result[0]) {
      return response.data.result;
    }
  };

  const setCategory = (id) => {
    setSetselectedCategory((prevState) => {
      return prevState === id ? "" : id;
    });    
  };

  return (
    <section className="scrollTax floated-below">
      <div className="container">
        <ul>
          {categorysArray
            ? categorysArray.map(({ title, id, image_url }) => {
                return (
                  <li key={id}>
                    <a
                      className={`term-ink ${
                        id === selectedCategory ? "seleted-item" : ""
                      }`}
                      onClick={() => setCategory(id)}
                    >
                      {title}
                    </a>
                  </li>
                );
              })
            : ""}
        </ul>
      </div>
    </section>
  );
};

export default ProductCategory;
