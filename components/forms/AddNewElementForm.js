import React, { useState } from "react";
import GenRateCard from "../elements/autocompletepops/GenRateCard";
import data from "../../utils/data";

export default function AddNewElementForm({ handleAddElement }) {
  const [formData, setFormData] = useState({
    description: "",
    rate: "",
  });
  const [popAutocompleteRates, setPopAutocompleteRates] = useState(false);
  const regexdesc = new RegExp(formData.description.toLowerCase());
  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const showElemDrop = (e) => {
    formData.description.length > 1
      ? setPopAutocompleteRates((popAutocompleteRates) => true)
      : setPopAutocompleteRates((popAutocompleteRates) => false);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const createGenRate = async () => {
    const res = await fetch("/api/rate/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description: formData.description,
        width: formData.width,
        height: formData.height,
        rate: formData.rate,
        unit: formData.unit,
        measureunit: formData.measureunit,
        calcfactor: formData.calcfactor,
        img: formData.img,
      }),
    });
    const data = await res.json();
    console.log(data);
    alert(`Rates for  ${formData.description} has been recorded successfully`);
    document.getElementById("rateform").reset();
  };
  console.log(formData);

  const actdata = data.generalratecard;
  return (
    <div className="justify-center flex border-0">
      <div
        className="absolute bg-black bg-opacity-10 w-full h-screen"
        onClick={handleAddElement}
      ></div>
      <div className="absolute w-10/12 bg-gray-50 border-2 rounded-b-2xl text-center p-10">
        <form id="rateform">
          <div className="flex gap-2">
            {/* Description input */}
            <div className="w-8/12 mb-6">
              <input
                onChange={showElemDrop}
                autoComplete="off"
                value={formData.description}
                name="description"
                id="description"
                type="text"
                className="w-full form-control block px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Select Element"
              />
            </div>
            <div
              className={` ${
                popAutocompleteRates ? "absolute" : "hidden"
              } bg-white w-auto h-64 mt-11`}
            >
              <GenRateCard
                setPopAutocompleteRates={setPopAutocompleteRates}
                setFormData={setFormData}
                formData={formData}
                actdata={actdata.filter(
                  (d) => regexdesc.test(d.description.toLowerCase()) == true
                )}
              />
            </div>
            {/* Image input */}
            <div className="w-4/12 mb-6">
              <input
                onChange={handleInput}
                name="img"
                id="img"
                type="file"
                className="w-full form-control block px-4 py-2 text-gray-700 bg-transparent bg-clip-padding border-0 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              />
            </div>
          </div>
          <div className="flex items-start gap-2">
            <div className="flex items-end w-2/12 mb-6">
              <input
                onChange={handleInput}
                autoComplete="off"
                value={formData.width}
                name="width"
                id="width"
                type="number"
                className="text-right w-full form-control block px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Fixed-Width"
              />
            </div>
            <div className="flex items-end w-2/12 mb-6">
              <input
                onChange={handleInput}
                autoComplete="off"
                value={formData.height ? formData.height : ""}
                name="height"
                id="height"
                type="number"
                className="text-right w-full form-control block px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Fixed-Height"
              />
            </div>

            {/* Calc input */}
            <div className="flex items-end w-3/12 mb-6">
              <input
                value={formData.rate}
                autoComplete="off"
                onChange={handleInput}
                name="rate"
                id="rate"
                type="number"
                className="text-right w-full form-control block px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Price Unit"
              />
            </div>
            <div className="flex items-end w-3/12 mb-6">
              <select
                onChange={handleInput}
                value={formData.unit ? formData.unit : ""}
                name="unit"
                id="unit"
                className="w-full form-control block px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              >
                <option defaultValue value="">
                  <a className="text-xs">Select Calculation Unit</a>
                </option>
                <option value="Sqft">Square feet</option>
                <option value="Sqin">Square Inch</option>
                <option value="Pc">Pieces</option>
              </select>
            </div>
            <div className="flex items-end w-3/12 mb-6">
              <select
                onChange={handleInput}
                value={formData.measureunit ? formData.measureunit : ""}
                name="measureunit"
                id="measureunit"
                className="w-full form-control block px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              >
                <option defaultValue value="">
                  <a className="text-xs">Select Measurement Unit</a>
                </option>
                <option value="feet">Feet</option>
                <option value="inches">Inch</option>
                <option value="runningInch">Running Inch</option>
                <option value="kgs">Kilos</option>
                <option value="grams">Grams</option>
              </select>
            </div>
            <div className="flex items-end w-2/12 mb-6">
              <input
                onChange={handleInput}
                value={formData.calcfactor}
                name="calcfactor"
                id="calcfactor"
                type="number"
                className="text-right w-full form-control block px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Divisible Factor"
              />
            </div>
          </div>

          {/* Submit button */}
          <button
            onClick={createGenRate}
            type="button"
            className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Request Add Element
          </button>
        </form>
      </div>
    </div>
  );
}
