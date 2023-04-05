import React from "react";
import Link from "next/link";
import A from "./A";
import Head from "next/head";

const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta keyword={'maryreznik' + keywords}></meta>
        <title>Test next.js</title>
      </Head>
      <div className="navbar">
        <A href={"/"} text={"Главная"} />
        <A href={"/users"} text={"Пользователи"} />
      </div>
      <div>{children}</div>
      <style jsx>
        {`
          .navbar {
            background: orange;
            padding: 15px;
          }
        `}
      </style>
    </>
  );
};

export default MainContainer;
