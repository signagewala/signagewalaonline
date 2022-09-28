import { useRouter } from "next/router";
import { stringify } from "postcss";
import React, { useState } from "react";

export default function GeneralRateTable({
  generalRates,
  generalRateHeaders,
  setToggleAddMngrForm,
}) {
  const router = useRouter();
  const [formData, setFormData] = useState({});
  const handleEdit = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleEditId = (e) => {
    e.preventDefault();
    console.log(e.target.nextElementSibling.innerText);
    setFormData({
      ...formData,
      _id: e.target.nextElementSibling.innerText,
    });
  };
  const updateRate = async () => {
    const res = await fetch("/api/rate/edit", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: formData._id,
        rate: formData.rate,
      }),
    });
    const data = await res.json();
    console.log(data);
    alert(`Rate has been revised to Rs ${formData.rate}`);
    router.reload();
  };
  console.log(formData);
  return (
    <div className="max-h-96 overflow-y-scroll">
      <table className=" border-2 border-gray-500 w-full">
        <thead className="bg-gray-500 text-gray-50">
          <tr>
            {generalRateHeaders ? (
              generalRateHeaders.map((header, i) => (
                <th
                  key={i}
                  className="px-6 py-2 max-w-min text-center whitespace-nowrap"
                >
                  {header.header}
                </th>
              ))
            ) : (
              <th className="px-6 py-2 max-w-min text-left">S No</th>
            )}
          </tr>
        </thead>
        <tbody>
          {generalRates ? (
            generalRates.map((rate, i) => (
              <tr
                key={i}
                className={`${
                  (i + 1) % 2 == 0
                    ? "bg-gray-100 hover:bg-gray-900 hover:text-gray-100"
                    : "bg-gray-200 hover:bg-gray-900 hover:text-gray-100"
                }`}
              >
                <td className="border-r-2 border-gray-300 max-w-min px-4 text-center">
                  {i + 1}
                </td>
                <td className="border-r-2 border-gray-300 whitespace-nowrap w-full px-4">
                  {rate.description}
                </td>
                <td className="border-r-2 border-gray-300 whitespace-nowrap max-w-min px-4">
                  {rate.width
                    ? rate.width.toString().concat(" ").concat(rate.measureunit)
                    : rate.measureunit}
                </td>
                <td className="border-r-2 border-gray-300 whitespace-nowrap max-w-min px-4">
                  {rate.height
                    ? rate.height
                        .toString()
                        .concat(" ")
                        .concat(rate.measureunit)
                    : rate.measureunit}
                </td>
                <td className="border-r-2 border-gray-300 whitespace-nowrap max-w-min px-4">
                  Rs.{" "}
                  <span
                    onClick={handleEditId}
                    className="text-base font-medium"
                  >
                    <input
                      onChange={handleEdit}
                      className="w-20 bg-transparent text-right"
                      type="number"
                      name="rate"
                      id="rate"
                      defaultValue={rate.rate}
                    />
                    /{rate.unit}
                    <span hidden>{rate._id}</span>
                  </span>
                </td>
                <td className="border-r-2 border-gray-300 whitespace-nowrap max-w-min text-center px-4">
                  <i
                    onClick={updateRate}
                    className="fa-regular fa-pen-to-square hover:text-emerald-500 cursor-pointer"
                  ></i>
                </td>
              </tr>
            ))
          ) : (
            <div></div>
          )}
        </tbody>
      </table>
    </div>
  );
}
