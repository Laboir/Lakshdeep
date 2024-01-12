/* eslint-disable react/prop-types */

import { useState } from "react";

const message = [
  "Let's Start❄️",
  "Apply for Jobs💼",
  "Invest Your New Income💸",
];
export default function Step() {
  return (
    <div className="bg-yellow-400 h-screen  flex  items-center ">
      <Stepcompo />
    </div>
  );
}

function Stepcompo() {
  const [step, setStep] = useState(1);

  function handleNext() {
    if (step < 3) setStep(step + 1);
  }

  function handlePrev() {
    if (step > 1) setStep(step - 1);
  }

  return (
    <div className=" w-[350px] h-80  shadow-md  pt-10 flex mx-auto rounded-lg  bg-white flex-col justify-around">
      <section className="flex justify-around w-full pt-2">
        <p className={` ${step >= 1 ? "active" : "para"} `}>1</p>
        <p className={` ${step >= 2 ? "active" : "para"} `}>2</p>
        <p className={` ${step >= 3 ? "active" : "para"} `}>3</p>
      </section>

      <p className=" flex justify-center text-xl font-semibold px-2">
        Step {step} : {message[step - 1]}
      </p>

      <Buttons handleNext={handleNext} handlePrev={handlePrev} />
    </div>
  );
}

function Buttons({ handleNext, handlePrev }) {
  return (
    <div className="flex justify-around">
      <button
        className="bg-blue-600 px-3 py-2 w-18  rounded-full text-white"
        onClick={handlePrev}
      >
        Previous
      </button>

      <button
        className="bg-blue-600 px-3 py-2 w-18  rounded-full text-white"
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
}
