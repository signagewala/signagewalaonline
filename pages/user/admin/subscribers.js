import Head from "next/head";
import Image from "next/image";
import styles from "../../../styles/Home.module.css";
import connectMongo from "../../../utils/connectMongo";
import User from "../../../models/userModel";
import Admin from "../../../components/layouts/Admin";
import { useRouter } from "next/router";
import { useState } from "react";
// import { getServerSideProps } from "../../utils/mongodata";

export const getServerSideProps = async () => {
  try {
    console.log("CONNECTING TO MONGO");
    await connectMongo();
    console.log("CONNECTED TO MONGO");

    console.log("FETCHING DOCUMENTS");
    const user = await User.find();
    console.log("FETCHED DOCUMENTS");

    return {
      props: {
        user: JSON.parse(JSON.stringify(user)),
      },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
};

export default function Subscribers({ user }) {
  // const [edit, setEdit] = useState(false);
  const [formData, setFormData] = useState({});

  const handleEdit = (e) => {
    e.preventDefault();
    // setEdit((edit) => true);
    console.log(e.target.lastElementChild.innerText);
    setFormData({
      ...formData,
      _id: e.target.lastElementChild.innerText,
    });
  };

  const handleSelect = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  console.log(formData);
  const router = useRouter();

  const updateUser = async () => {
    const res = await fetch("/api/users/edit", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: formData._id,
        status: formData.status,
      }),
    });
    const data = await res.json();
    console.log(data);
    alert(`${formData._id}'s status has been updated as ${data.data.status}`);
    router.reload();
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Signagewala-Subscribers List</title>
        <meta name="description" content="Admin can control the Subscribers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen mt-6">
        <button
          onClick={() => router.reload()}
          className="bg-blue-500 hover:bg-blue-600 hover:drop-shadow-md rounded-md px-4 py-2 mb-4 text-white"
        >
          Refresh Data
        </button>

        <table className=" border-2 border-gray-500">
          <thead className="bg-gray-500 text-gray-50">
            <tr>
              <th className="px-6 py-2 max-w-min text-center whitespace-nowrap">
                S. No
              </th>
              <th className="px-6 py-2 max-w-min text-left">Name</th>
              <th className="px-6 py-2 max-w-min text-left">Company (type)</th>
              <th className="px-6 py-2 max-w-min text-left">Email</th>
              <th className="px-6 py-2 max-w-min text-center">Mobile</th>
              <th className="px-6 py-2 max-w-min text-center">Status</th>
              <th className="px-6 py-2 max-w-min text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {user.map((data, i) => (
              <tr
                key={data._id}
                className={`${
                  (i + 1) % 2 == 0
                    ? "bg-gray-100 hover:bg-gray-900 hover:text-gray-100"
                    : "bg-gray-200 hover:bg-gray-900 hover:text-gray-100"
                }`}
              >
                <td className="border-r-2 border-gray-300 max-w-min px-4 text-center">
                  {i + 1}{" "}
                </td>
                <td className="border-r-2 border-gray-300 whitespace-nowrap w-full px-4">
                  {data.fname} {data.lname}
                </td>
                <td className="border-r-2 border-gray-300 whitespace-nowrap max-w-min px-4">
                  {data.cname} ({data.type})
                </td>
                <td className="border-r-2 border-gray-300 whitespace-nowrap max-w-min px-4">
                  {data.email}
                </td>
                <td className="border-r-2 border-gray-300 whitespace-nowrap max-w-min px-4 text-center">
                  {data.mobile}
                </td>
                <td className="border-r-2 border-gray-300 text-gray-600 whitespace-nowrap max-w-min px-4 text-center">
                  <select
                    name="status"
                    id="status"
                    className="bg-transparent hover:text-white text-center min-w-min"
                    onClick={handleEdit}
                    onChange={handleSelect}
                  >
                    <option hidden>{data.status}</option>
                    <option
                      className={`${
                        data.status == "approved" || data.status == "suspended"
                          ? "hidden"
                          : ""
                      } bg-emerald-600 text-white`}
                      value="approved"
                    >
                      approve
                    </option>
                    <option
                      className={`${
                        data.status == "suspended" ? "hidden" : ""
                      } bg-rose-600 text-white`}
                      value="suspended"
                    >
                      suspend
                    </option>
                    <option
                      className={`${
                        data.status == "suspended" ? "" : "hidden"
                      } bg-emerald-600 text-white`}
                      value="approved"
                    >
                      re-approve
                    </option>
                    <option id="ide" className="hidden">
                      {data._id}
                    </option>
                  </select>
                  <span className="hidden">{data._id}</span>
                </td>
                <td className="border-r-2 border-gray-300 whitespace-nowrap max-w-min px-4 text-center">
                  <i
                    onClick={updateUser}
                    className="fa-solid fa-arrows-rotate cursor-pointer hover:text-emerald-500"
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
Subscribers.layout = Admin;
