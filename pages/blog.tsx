// Modules
import Head from "next/head";
import { FunctionComponent } from "react";
import { GetStaticProps } from "next";

// Components
import { Layout } from "../components/Layout";
import { List } from "../components/List";
import { Segment } from "../components/Segment";

// Data
import { getSortedPosts } from "../lib/posts";
import { getSortedSegments } from "../lib/segments";
import { siteTitle } from "../lib/config";

// TS
import { TBlogProps } from "../types/props";

const Blog: FunctionComponent<TBlogProps> = ({ segments, posts }) => (
  <Layout home={false}>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    {segments.map((segment: any) => (
      <Segment {...segment} key={segment.id} />
    ))}
    <List list={posts} />
  </Layout>
);

export default Blog;

export const getStaticProps: GetStaticProps = async () => {
  const segments = await getSortedSegments("blog");
  const posts = getSortedPosts();
  return {
    props: {
      segments,
      posts,
    },
  };
};
