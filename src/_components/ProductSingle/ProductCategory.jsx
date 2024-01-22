import { useEffect, useState } from "react";

const ProductCategory = () => {
  const apiProduct = "https://food-admin.apto.co.in/api/category";

  const [categorysArray, setCategorysArray] = useState([]);

  useEffect(() => {
    fetchData().then((response) => {
      setCategorysArray(response.data);
    });
  }, []);

  const fetchData = async () => {
    const response = await fetch(apiProduct);
    return await response.json();
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
