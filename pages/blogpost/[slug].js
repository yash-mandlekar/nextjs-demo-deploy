import Head from "next/head";
import React from "react";
import styles from "../../styles/Blogpost.module.css";
const slug = ({ blog }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{blog?.title}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>{blog?.title}</h1>
        <p>{blog?.content}</p>
      </main>
    </div>
  );
};
export async function getServerSideProps(context) {
  const { slug } = context.query;
  const d = await fetch(`http://localhost:3000/api/getblogs?slug=${slug}`);
  const blog = await d.json();
  return {
    props: { blog },
  };
}
export default slug;