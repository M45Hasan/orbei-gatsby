import * as React from "react";


import Layout from "../components/Layout";
import Home from "./Home";

const IndexPage = () => {
  return (
    <>
     <Layout>
      <Home/>
     </Layout>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home</title>;
