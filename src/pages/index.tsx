import { useContext, useState } from "react";
import { AppContext } from "../contexts/AppContext";
import Head from "next/head";
const Index = () => {
  const { nameColor } = useContext(AppContext);

  return (
    <div className="h-100 container text-center d-flex flex-column justify-content-center w-auto">
      <Head>
        <title>Vigo Vlugt</title>
        <meta
          name="description"
          content="Vigo Vlugt, Web/Fullstack developer. JS, TS, React, NodeJS, .NET Core"
        ></meta>
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#1E1E1E" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#1E1E1E"></meta>
      </Head>
      <div className="box">
        <h2 className="intro">Hey, I'm</h2>
        <h1 className="name" style={{ color: nameColor }}>
          Vigo
        </h1>
        <h2 className="intro-2 mt-4">
          Software developer, Fullstack developer
        </h2>
      </div>

      <style jsx>{`
        .name {
          font-size: 120px;
        }
        .intro {
          color: #eeeeee;
        }
        .intro-2 {
          color: #eeeeee;
        }
        .box {
          border-radius: 20px;
          background-color: #1e1e1eaa;
          padding: 20px;
        }
      `}</style>
    </div>
  );
};
export default Index;
