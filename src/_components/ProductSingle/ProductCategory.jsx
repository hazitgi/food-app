import { useEffect, useState } from "react";
import request from "../../services/api"

const ProductCategory = () => {
  const apiProduct = "/api/category";

  const [categorysArray, setCategorysArray] = useState([]);

  useEffect(() => {
    fetchData().then((response) => {
      setCategorysArray(response);
    });
  }, []);

  const fetchData = async () => {
    const response = await request.get(apiProduct);
    if(response?.data?.result[0]){
      return response.data.result;
    }
  };
  return (
    <section className="scrollTax floated-below">
      <div className="container">
        <ul>
          {categorysArray
            ? categorysArray.map(({ title, id, image_url }) => {
              return (
                  <li key={id}>
                    <a className="term-ink">{title}</a>
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
