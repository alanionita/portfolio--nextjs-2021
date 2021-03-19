import fs from "fs";
import path from "path";
import { read } from "gray-matter";
import remark from "remark";
import html from "remark-html";
import { Posts, Post } from "../types/posts";
import { dateSortDecending } from "../lib/utils";

const postsDirectory = path.join(process.cwd(), "data", "posts");

export function getSortedPosts(): Posts {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPosts = fileNames.map((fileName: string) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const matterResult = read(fullPath);
    return {
      id,
      ...matterResult.data,
    } as Post;
  });
  // Sort posts by date
  return allPosts.sort(dateSortDecending);
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getPost(id: string | Array<string>) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const matterResult = read(fullPath);
  const processedContent = await remark()
    .use(html, { sanitize: true })
    .process(matterResult.content);
  const contentHtml = processedContent.toString();
  return {
    id,
    contentHtml,
    ...matterResult.data,
  } as Post;
}
