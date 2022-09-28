import React, { useState } from "react";
import GenRateCard from '../elements/autocompletepops/GenRateCard'
import data from "../../utils/data";
import Image from "next/image";

export default function AddNewElementForm({ handleAddElement }) {
    const [formData, setFormData] = useState(
        {
            "desc": "",
            "rate": "",
            "img": ""
        }
    )
    const [popAutocompleteRates, setPopAutocompleteRates] = useState(false)
    const regexdesc = new RegExp(formData.desc.toLowerCase())
    const handleInput = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const showElemDrop = (e) => {
        formData.desc.length > 1 ?
            setPopAutocompleteRates((popAutocompleteRates) => true)
            :
            setPopAutocompleteRates((popAutocompleteRates) => false)
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const actdata = data.generalratecard
    return (
        <div className="justify-center flex border-0">
            <div
                className="absolute bg-black bg-opacity-10 w-full h-screen"
                onClick={handleAddElement}
            ></div>
            <div className="absolute w-10/12 bg-gray-50 border-2 rounded-b-2xl text-center p-10">
                <form>
                    <div className="flex gap-2">
                        {/* Description input */}
                        <div className="w-full mb-6">
                            <input
                                onChange={showElemDrop}
                                autoComplete="off"
                                value={formData.desc}
                                name="desc"
                                id="desc"
                                type="text"
                                className="w-full form-control block px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                placeholder="Select Element"
                            />
                        </div>
                        <div className={` ${popAutocompleteRates ? "absolute" : "hidden"} bg-white w-auto h-64 mt-11`}>

                            <GenRateCard
                                setPopAutocompleteRates={setPopAutocompleteRates}
                                setFormData={setFormData}
                                formData={formData}
                                actdata={actdata.filter(d => (
                                    (
                                        regexdesc.test(d.description.toLowerCase()) == true
                                    )
                                ))} />
                        </div>
                    </div>
                    <div className="flex items-start gap-2">
                        <div className="flex items-end w-3/12 mb-6">
                            <input
                                onChange={handleInput}
                                autoComplete="off"
                                value={formData.width}
                                name="width"
                                id="width"
                                type="number"
                                className="text-right w-full form-control block px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                placeholder="Fixed-Width"
                            />{formData.cunit}
                        </div>
                        <div className="flex items-end w-3/12 mb-6">
                            <input
                                onChange={handleInput}
                                autoComplete="off"
                                value={formData.height ? formData.height : ""}
                                name="height"
                                id="height"
                                type="number"
                                className="text-right w-full form-control block px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                placeholder="Fixed-Height"
                            />{formData.cunit}
                        </div>
                        {/* Calc input */}
                        <div className="flex items-end w-3/12 mb-6">
                            <input
                                value={formData.rate}
                                autoComplete="off"
                                onChange={handleInput}
                                name="rate"
                                id="rate"
                                type="text"
                                className="text-right form-control block px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                placeholder="Price Unit"
                            />/{formData.munit}
                        </div>
                    </div>
                    {/* Image show */}
                    <div className="w-full  mb-6 text-center">
                        <Image src={formData.img ? formData.img : "/img/img.jpg"} className="rounded-2xl" width={400} height={200} alt="image" />
                    </div>
                    {/* Submit button */}
                    <button
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
