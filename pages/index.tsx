import { FunctionComponent } from "react";
import { GetStaticProps } from "next";
import Head from "next/head";

// Components
import { Segment } from "../components/Segment";
import { Layout } from "../components/Layout";

// Data
import { siteTitle } from "../lib/config";
import { getSortedSegments } from "../lib/segments";

// TS
import { THomeProps } from "../types/props";

const Home: FunctionComponent<THomeProps> = ({ allSegments }) => (
  <Layout home>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    {allSegments.map((segment) => (
      <Segment {...segment} key={segment.id} />
    ))}
  </Layout>
);

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const allSegments = await getSortedSegments("home");
  return {
    props: {
      allSegments,
    },
  };
};
