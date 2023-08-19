import Head from "next/head";
import RootLayout from "../../components/Layouts/RootLayout";

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>My next js</title>
        <meta name="next js page" description="this is home page"></meta>
      </Head>
      <h1>This is a next.js home page</h1>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
