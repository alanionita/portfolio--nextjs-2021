import { Segments } from "./segments";
import { Posts, Post } from "./posts";

export type TDateProps = {
  dateString: number | null;
};

export type TLayoutProps = {
  home: boolean;
};

export type TBlogProps = {
  segments: Segments;
  posts: Posts;
};

export type TListProps = {
  list: Posts;
};

export type TSegmentProps = {
  contentHtml?: string;
  id?: string;
  type: string;
};

export type TPostProps = {
  Post: Post;
};

export type THomeProps = {
  allSegments: Segments;
};
