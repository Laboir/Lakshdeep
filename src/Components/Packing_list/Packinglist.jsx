/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button } from "../Far-Away/Faraway";
export default function PackingList({
  addData,
  handleDelete,
  LineThroughToogle,
  setAddData,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortItems;

  if (sortBy === "input") sortItems = addData;

  if (sortBy === "description")
    sortItems = addData
      .slice()
      .sort((a, b) => a.productName.localeCompare(b.productName));

  // if (sortBy === "pack")
  //   sortItems = addData
  //     .slice()
  //     .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="bg-amber-950 hero relative grid grid-cols-3   place-items-center px-5   grid-rows-11  packing-conatiner ">
      {sortItems.map((items, i) => {
        return (
          <ul key={i}>
            <Items
              item={items}
              handleDelete={handleDelete}
              LineThroughToogle={LineThroughToogle}
            />
          </ul>
        );
      })}

      <section className="absolute bottom-7 w-full flex justify-center  items-center gap-5 ">
        <select
          className="rounded-full px-3 py-2 outline-none bg-yellow-200 text-[15px]"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="input">Sort by Input Order</option>
          <option value="description">Sort by Product Name</option>
          {/* <option value="pack">Sort by Packed Status</option> */}
        </select>

        <Button onClick={() => setAddData([])}> Clearlist </Button>
      </section>
    </div>
  );
}

// ! Items
function Items({ item, handleDelete, LineThroughToogle }) {
  console.table(item);
  return (
    <li className="flex gap-3 pt-5 items-center li-list">
      <input
        type="checkbox"
        name=""
        id=""
        onChange={() => LineThroughToogle(item.id)}
      />

      <article
        className={`flex gap-1  ${
          item.packed ? "line-through text-yellow-100 " : {}
        }`}
      >
        <span className="text-white text-lg li-text ">{item.quantity}</span>
        <span className="text-white text-lg li-text">{item.productName}</span>
      </article>

      <button
        onClick={() => handleDelete(item.id)}
        className=" delete-button -mt-1 text-3xl text-red-500"
      >
        &times;
      </button>
    </li>
  );
}
