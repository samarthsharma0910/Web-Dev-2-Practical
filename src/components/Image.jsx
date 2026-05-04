import React, { useState, useEffect } from "react";
//dumyjson.com.products

const Image = () => {
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        const imgs = data.products.map((item) => item.thumbnail);
        setImages(imgs);
      })
      .catch((err) => console.log(err));
  }, []);
  const handleNext = () => {
    if (index + 4 < images.length) {
      setIndex(index + 4);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ display: "grid", gap: "10px", }}>
        {images.slice(index, index + 4).map((img, i) => (
          <img
            key={i}
            src={img}
            alt="product"
            style={{ width: "150px", height: "150px", objectFit: "cover" }}
          />
        ))}
      </div>
      <button onClick={handleNext} style={{ marginTop: "40px" }}>
        Next
      </button>

    </div>
  );
};

export default Image


