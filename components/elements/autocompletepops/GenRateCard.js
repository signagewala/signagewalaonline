import React from "react";

export default function GenRateCard({
  actdata,
  setPopAutocompleteRates,
  setFormData,
  formData,
}) {
  const handleClick = (e) => {
    setFormData({
      ...formData,
      description: e.target.innerText,
      rate: document.getElementById("rate").innerText,
      unit: document.getElementById("unit").innerText,
      measureunit: document.getElementById("measureunit").innerText,
      width: document.getElementById("width").innerText,
      height: document.getElementById("height").innerText,
      img: document.getElementById("img").innerText,
      calcfactor: document.getElementById("calcfactor").innerText,
    });

    setPopAutocompleteRates((popAutocompleteRates) => false);
    // console.log(document.getElementById("munit").innerText)
  };

  return (
    <div className="overflow-y-auto bg-white h-96 w-auto">
      {actdata.map((actdata, i) => (
        <div
          onClick={handleClick}
          key={i}
          className="hover:bg-gray-300 px-4 text-left"
        >
          <div>
            {actdata.description}
            <a id="rate" hidden>
              {actdata.rate}
            </a>
            <a id="unit" hidden>
              {actdata.unit}
            </a>
            <a id="measureunit" hidden>
              {actdata.measureunit}
            </a>
            <a id="width" hidden>
              {actdata.width}
            </a>
            <a id="height" hidden>
              {actdata.height}
            </a>
            <a id="img" hidden>
              {actdata.img}
            </a>
            <a id="calcfactor" hidden>
              {actdata.calcfactor ? actdata.calcfactor : 1}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
