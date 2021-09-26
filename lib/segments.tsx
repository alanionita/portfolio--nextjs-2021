import fs from "fs";
import path from "path";
import matter from "gray-matter";
import {remark} from "remark";
import html from "remark-html";
import { Segments, Segment } from "../types/segments";

export async function getSortedSegments(page: string) {
  const segmentsDirectory = path.join(process.cwd(), "data", "segments", page);
  // Get file names under /posts
  const fileNames = fs.readdirSync(segmentsDirectory);
  const allSegments: Segments = await Promise.all(
    fileNames.map(async (fileName: string) => {
      // Remove ".md" from file name to get id
      const id = fileName.replace(/\.md$/, "");

      // Read markdown file as string
      const fullPath = path.join(segmentsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);
      const contentHtml = await getSegmentHTML(matterResult.content);
      // Combine the data with the id
      return {
        id,
        contentHtml,
        ...matterResult.data,
      } as Segment;
    })
  );
  // Sort posts by date
  return allSegments;
}

export async function getSegmentHTML(content: string) {
  const processedContent = await remark().use(html, {sanitize: true}).process(content);
  return processedContent.toString();
}
