import React from "react";
import { useState } from "react";
import { cardData } from '../data/CardData';

export const AddProduct = () => {
  const [discription, setDesc] = useState("");
  const [img, setImgurl] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  let id;
  const data = {
    id:
      Math.random().toString(26).slice(2) +
      13 +
      new Date().getSeconds(),
    title: title,
    discription: discription,
    price: 1000,
  };

  const submit = (e) => {
    e.preventDefault();
    setDesc(discription);
    setImgurl(img);
    setTitle(title);
    setPrice(price);

    console.log(data);
    cardData.push(data);
  };

  return (
    <div>
      <form
        onSubmit={submit}
        style={{
          border: "1px solid black",
          height: "500px",
          width: "350px",
          marginLeft: "350px",
          padding: "40px",
          display: "flex",
          flexDirection: "column",
          gap: 20,
        }}
      >
        <div>
          <input
            type="text"
            placeholder="add description"
            name="desc"
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="add image url"
            src=" "
            name="imgurl"
            onChange={(e) => {
              setImgurl(e.target.value);
            }}
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="title"
            name="title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>

        <div>
          <input
            type="number"
            placeholder="price"
            name="price"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </div>

        <button type="submit" onClick={submit}>Add Product</button>
        {/* () => navigate("/signup") */}

      </form>
    </div>
  );
};
