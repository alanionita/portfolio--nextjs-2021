import { FunctionComponent } from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import { Layout } from "../../components/Layout";
import { Date } from "../../components/Date";
import { Segment } from "../../components/Segment";
import { getAllPostIds, getPost } from "../../lib/posts";
import { TPostProps } from "../../types/props";
import segmentStyles from "../../components/Segment/segment.module.css";
import styles from "./posts.module.css";
const Post: FunctionComponent<TPostProps> = ({ Post }) => (
  <Layout home={false}>
    <Head>
      <title>{Post.title}</title>
    </Head>
    <article className={styles.article}>
      <Segment type='postHeadline'>
        <h1>{Post.title}</h1>
        <Date dateString={Post.created} />
      </Segment>
      {Post.contentHtml && (
        <section
          className={segmentStyles.post}
          dangerouslySetInnerHTML={{ __html: Post.contentHtml }}
        />
      )}
    </article>
  </Layout>
);

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const Post = await getPost(params?.id!);
  return {
    props: {
      Post,
    },
  };
};
