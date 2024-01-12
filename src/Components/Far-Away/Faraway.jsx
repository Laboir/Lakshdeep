/* eslint-disable react/jsx-key */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import Packinglist from "../Packing_list/Packinglist";
import Form from "../Form/Form";
import Footer from "../Footer/Footer";

export default function Faraway() {
  const [addData, setAddData] = useState([]);

  function handleDelete(id) {
    setAddData((element) => element.filter((item) => item.id !== id));
  }
  function LineThroughToogle(id) {
    setAddData((element) =>
      element.map((items) =>
        items.id === id ? { ...items, packed: !items.packed } : items
      )
    );
  }

  return (
    <div>
      <Logo />
      <Form addData={addData} setAddData={setAddData} />
      <Packinglist
        setAddData={setAddData}
        addData={addData}
        handleDelete={handleDelete}
        LineThroughToogle={LineThroughToogle}
      />
      <Footer addData={addData} />
    </div>
  );
}

function Logo() {
  return (
    <div>
      <h1 className="bg-yellow-500 h-24 flex items-center justify-center text-5xl tracking-widest logo">
        <span className=" max-sm:mt-12 max-sm:ml-8 span-1">🏝️</span> Lakshdeep
        Trip
        <span className=" max-sm:mt-12  max-sm:mr-7 span-2">🏝️</span>
      </h1>
    </div>
  );
}
// *Form
// function Form({ addData, setAddData }) {
//   const [quantity, setQuantity] = useState(1);
//   const [productName, setproductName] = useState("");

//   function handleAdd(add) {
//     setAddData([...addData, add]);
//   }

//   function handleSubmit(e) {
//     e.preventDefault();

//     if (!productName) return;

//     const item = {
//       id: Date.now(),
//       quantity,
//       productName,
//       packed: false,
//     };

//     handleAdd(item);

//     setQuantity(1);
//     setproductName("");
//   }

//   return (
//     <div className="flex bg-orange-400 h-20 items-center justify-center gap-10   ">
//       <form
//         onClick={handleSubmit}
//         className="flex justify-center items-center form  gap-10"
//       >
//         <h3 className="text-xl form-heading">
//           What do you need for your trip?
//         </h3>

//         <select
//           className="rounded-full p-2 outline-none bg-yellow-200"
//           value={quantity}
//           onChange={(e) => {
//             setQuantity(Number(e.target.value));
//           }}
//         >
//           {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => {
//             return (
//               <option key={num} value={num}>
//                 {num}
//               </option>
//             );
//           })}
//         </select>

//         <input
//           placeholder="items..."
//           className="text-md  outline-none px-4 py-2  w-[145px] rounded-full bg-yellow-200"
//           type="text"
//           value={productName}
//           onChange={(e) => setproductName(e.target.value)}
//         />
//         <button className="bg-cyan-400 px-5 py-2 rounded-full">Add</button>
//       </form>
//     </div>
//   );
// }

// ! Packing List

// function PackingList({ addData, handleDelete, LineThroughToogle, setAddData }) {
//   const [sortBy, setSortBy] = useState("input");

//   let sortItems;

//   if (sortBy === "input") sortItems = addData;

//   if (sortBy === "description")
//     sortItems = addData
//       .slice()
//       .sort((a, b) => a.productName.localeCompare(b.productName));

//   if (sortBy === "pack")
//     sortItems = addData
//       .slice()
//       .sort((a, b) => Number(a.packed) - Number(b.packed));

//   return (
//     <div className="bg-amber-950 hero relative grid grid-cols-3   place-items-center px-5   grid-rows-11  packing-conatiner ">
//       {sortItems.map((items, i) => {
//         return (
//           <ul key={i}>
//             <Items
//               item={items}
//               handleDelete={handleDelete}
//               LineThroughToogle={LineThroughToogle}
//             />
//           </ul>
//         );
//       })}

//       <section className="absolute bottom-7 w-full flex justify-center  items-center gap-5 ">
//         <select
//           className="rounded-full px-3 py-2 outline-none bg-yellow-200 text-[15px]"
//           value={sortBy}
//           onChange={(e) => setSortBy(e.target.value)}
//         >
//           <option value="input">Sort by Input Order</option>
//           <option value="description">Sort by Product Name</option>
//           <option value="pack">Sort by Packed Status</option>
//         </select>

//         <Button onClick={() => setAddData([])}> Clearlist </Button>
//       </section>
//     </div>
//   );
// }

// ! Items
// function Items({ item, handleDelete, LineThroughToogle }) {
//   console.table(item);
//   return (
//     <li className="flex gap-3 pt-5 items-center li-list">
//       <input
//         type="checkbox"
//         name=""
//         id=""
//         onChange={() => LineThroughToogle(item.id)}
//       />

//       <article
//         className={`flex gap-1  ${
//           item.packed ? "line-through text-yellow-100 " : {}
//         }`}
//       >
//         <span className="text-white text-lg li-text ">{item.quantity}</span>
//         <span className="text-white text-lg li-text">{item.productName}</span>
//       </article>

//       <button
//         onClick={() => handleDelete(item.id)}
//         className=" delete-button -mt-1 text-3xl text-red-500"
//       >
//         &times;
//       </button>
//     </li>
//   );
// }

// function Footer({ addData }) {
//   const numItems = addData.length;
//   const numPacked = addData.filter((e) => e.packed).length;
//   const percentage = Math.round((numPacked / numItems) * 100);

//   return (
//     <footer
//       className="bg-cyan-300 h-[80px] flex justify-center
//     items-center"
//     >
//       {!numItems ? (
//         <FooterText>
//           👜 Start Adding Some items to your packing list 👜{" "}
//         </FooterText>
//       ) : percentage === 100 ? (
//         <FooterText>You got everthing! Ready to go 🧳</FooterText>
//       ) : (
//         <FooterText>
//           You have {numItems} Items on your list and You already packed{" "}
//           {numPacked} ({percentage}%) 🏃
//         </FooterText>
//       )}
//     </footer>
//   );
// }

// function FooterText({ children, bgColor, color }) {
//   return (
//     <em className="text-xl p-1 rounded-sm max-sm:font-semibold footer-text ">
//       {children}
//     </em>
//   );
// }

export function Button({ children, onClick }) {
  return (
    <button
      className={`rounded-full px-3 py-2 outline-none bg-yellow-200 text-[15px] `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
