import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import connectMongo from "../../../utils/connectMongo";
import Rate from "../../../models/genRateModel";
import Admin from "../../../components/layouts/Admin";
import AddNewElementForm from "../../../components/forms/AddNewElementForm";
import GeneralRateTable from "../../../components/tables/GeneralRateTable";
import CorpRateTable from "../../../components/tables/CorpRateTable";
import data from "../../../utils/data";

export const getServerSideProps = async () => {
  try {
    console.log("CONNECTING TO MONGO");
    await connectMongo();
    console.log("CONNECTED TO MONGO");

    console.log("FETCHING DOCUMENTS");
    const rate = await Rate.find();
    console.log("FETCHED DOCUMENTS");

    return {
      props: {
        generalRatesD: JSON.parse(JSON.stringify(rate)),
      },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
};

export default function Rates({ generalRatesD }) {
  const [formData, setFormData] = useState({});

  const [searchKey, setSearchKey] = useState({
    description: "",
    rate: "",
  });
  const [toggleAddMngrForm, setToggleAddMngrForm] = useState(false);
  // const generalRates = data.generalratecard;
  // const corpNames = data.users;
  // const corpRates =
  // const corpNames = data.users.findIndex(h => h.email == "joseph@croma.com")
  data.users[data.users.findIndex((h) => h.email == "joseph@croma.com")].rates;
  const generalRateHeaders = [
    { header: "Sl No" },
    { header: "Description" },
    { header: "Width (Fixed)" },
    { header: "Height (Fixed)" },
    { header: "Rate" },
    { header: "Action" },
  ];
  // const corpRateHeaders = [
  //   { header: "Description" },
  //   { header: "Rates" },
  //   { header: "Action" },
  // ];
  const regexdesc = new RegExp(searchKey.description.toLowerCase());

  const search = (e) => {
    // e.preventDefault()
    setSearchKey({ ...searchKey, [e.target.name]: e.target.value });
  };
  const handleAddElement = () => {
    setToggleAddMngrForm((toggleAddMngrForm) => !toggleAddMngrForm);
  };

  return (
    <>
      <Head>
        <title>Signagewala - Ratelist</title>
        <meta
          name="description"
          content="Adminstrator can manage product rates and price list for corporate users and vendors"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div>
        {toggleAddMngrForm ? (
          <div className={toggleAddMngrForm ? "relative" : "hidden"}>
            <AddNewElementForm
              formData={formData}
              handleAddElement={handleAddElement}
            />
          </div>
        ) : (
          ""
        )}
        <button
          onClick={handleAddElement}
          type="button"
          className="px-7 py-3 bg-stone-700 text-white font-medium text-sm leading-snug uppercase rounded-t-2xl shadow-md hover:bg-stone-900 hover:shadow-lg focus:bg-stone-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-stone-400 active:shadow-lg transition duration-150 ease-in-out"
        >
          Add Element
        </button>

        <div className="flex justify-between bg-white border-t-4 border-r-4 border-l-4 px-4 py-0 border-gray-100">
          <div>Standard Rate Card</div>
          <div>
            <input
              onChange={search}
              name="description"
              id="description"
              className="border-2 -mr-4 px-2 bg-stone-50"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="px-2 border-b-4 mb-10 border-x-4 border-gray-100">
          <GeneralRateTable
            setFormData={setFormData}
            setToggleAddMngrForm={setToggleAddMngrForm}
            generalRateHeaders={generalRateHeaders}
            generalRates={generalRatesD.filter((d) =>
              searchKey.description.length > 0
                ? regexdesc.test(d.description.toLowerCase()) == true
                : d.rate > 0
            )}
          />
        </div>

        <div className="flex justify-between bg-white border-t-4 border-r-4 border-l-4 px-4 py-0 border-gray-100">
          <div>Corporate RateList</div>
        </div>
        <div className="px-2 border-b-4 mb-10 border-x-4 border-gray-100">
          {/* <CorpRateTable
            generalRateHeaders={corpRateHeaders}
            generalRates={corpNames.filter((d) => d.type == "corp")}
          /> */}
        </div>

        <div className="flex justify-between bg-white border-t-4 border-r-4 border-l-4 px-4 py-0 border-gray-100">
          <div>Vendor RateList</div>
        </div>
        <div className="px-2 border-b-4 mb-10 border-x-4 border-gray-100">
          {/* <CorpRateTable
            generalRateHeaders={corpRateHeaders}
            generalRates={corpNames.filter((d) => d.type == "vend")}
          /> */}
        </div>
      </div>
    </>
  );
}
Rates.layout = Admin;
