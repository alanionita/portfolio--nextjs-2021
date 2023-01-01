export type Post = {
  [index: string]: any | null;
  id: string;
  title: string;
  desc: string;
  updated: number;
  created: number;
  content: string;
  contentHtml?: string;
};

export type Posts = Array<Post>;
