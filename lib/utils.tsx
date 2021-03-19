import { Post } from "../types/posts";

export const dateSortDecending = (a: Post, b: Post) => {
  console.log(a);
  console.log(b);
  if (a.created < b.created) {
    return 1;
  } else {
    return -1;
  }
};
