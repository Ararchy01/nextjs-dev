import Head from "next/head";
import Layout, { siteTitle } from "../components/templates/Layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/atoms/Date";
import { GetStaticProps } from "next";
import TextInput from "../components/atoms/TextInput";
import { Paper } from "@material-ui/core";

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <Link href={`/ui`}>UI</Link>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <Paper elevation={4}>
              <Link href={`/posts/${id}`}>
                <a>
                  <li className={utilStyles.listItem} key={id}>
                    {title}
                    <br />
                    <small className={utilStyles.lightText}>
                      <Date dateString={date} />
                    </small>
                  </li>
                </a>
              </Link>
            </Paper>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
