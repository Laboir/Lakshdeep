import { useState } from "react";

/* eslint-disable react/prop-types */

export default function Form({ addData, setAddData }) {
  const [quantity, setQuantity] = useState(1);
  const [productName, setproductName] = useState("");

  function handleAdd(add) {
    setAddData([...addData, add]);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!productName) return;

    const item = {
      id: Date.now(),
      quantity,
      productName,
      packed: false,
    };

    handleAdd(item);

    setQuantity(1);
    setproductName("");
  }

  return (
    <div className="flex bg-orange-400 h-20 items-center justify-center gap-10   ">
      <form
        onClick={handleSubmit}
        className="flex justify-center items-center form  gap-10"
      >
        <h3 className="text-xl form-heading">
          What do you need for your trip?
        </h3>

        <select
          className="rounded-full p-2 outline-none bg-yellow-200"
          value={quantity}
          onChange={(e) => {
            setQuantity(Number(e.target.value));
          }}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => {
            return (
              <option key={num} value={num}>
                {num}
              </option>
            );
          })}
        </select>

        <input
          placeholder="items..."
          className="text-md  outline-none px-4 py-2  w-[145px] rounded-full bg-yellow-200"
          type="text"
          value={productName}
          onChange={(e) => setproductName(e.target.value)}
        />
        <button className="bg-cyan-400 px-5 py-2 rounded-full">Add</button>
      </form>
    </div>
  );
}
