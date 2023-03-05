import "./index.css";
import React from "react";
import Layout from "../../components/Layout";
export default function Home(props) {
  return (
    <Layout>
      <div className="jumbotron text-center">
        <h1> Welcome to Admin Dashboard</h1>
        <p>
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit...
        </p>
      </div>
    </Layout>
  );
}
