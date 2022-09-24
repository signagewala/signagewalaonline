import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import connectMongo from "../../utils/connectMongo";
import User from "../../models/userModel";
import Auth from "../../components/layouts/Auth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

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

export default function Home({ user }) {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>Testing Mongoose</title>
        <meta name="description" content="Generated by create next app" />
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
              <th className="px-6 py-2 px-6 max-w-min text-left">Name</th>
              <th className="px-6 py-2 px-6 max-w-min text-left">Brand</th>
              <th className="px-6 py-2 px-6 max-w-min text-left">Email</th>
              <th className="px-6 py-2 max-w-min text-center">Mobile</th>
              <th className="px-6 py-2 max-w-min text-center">Type</th>
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
                  {i + 1}
                </td>
                <td className="border-r-2 border-gray-300 whitespace-nowrap w-full px-4">
                  {data.fname} {data.lname}
                </td>
                <td className="border-r-2 border-gray-300 whitespace-nowrap max-w-min px-4">
                  {data.cname}
                </td>
                <td className="border-r-2 border-gray-300 whitespace-nowrap max-w-min px-4">
                  {data.email}
                </td>
                <td className="border-r-2 border-gray-300 whitespace-nowrap max-w-min px-4 text-center">
                  {data.mobile}
                </td>
                <td className="border-r-2 border-gray-300 whitespace-nowrap max-w-min px-4 text-center">
                  {data.type}
                </td>
                <td className="border-r-2 border-gray-300 whitespace-nowrap max-w-min px-4 text-center">
                  <a className="hover:text-emerald-500" href="">
                    {" "}
                    <i className="fa-regular fa-pen-to-square"></i>
                  </a>
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
Home.layout = Auth;