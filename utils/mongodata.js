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
