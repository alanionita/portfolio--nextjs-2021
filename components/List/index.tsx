import { FunctionComponent } from "react";
import Link from "next/link";
import { Date } from "../Date";
import { TListProps } from "../../types/props";
import styles from "./list.module.css";

export const List: FunctionComponent<TListProps> = ({ list }) => (
  <>
    {list && (
      <div className={styles.wrapper}>
        <div className={styles.maxWidth}>
          <ul className={styles.main}>
            {list.map(({ id, title, url, created }) => (
              <li className={styles.item} key={id}>
                <Link href="/posts/[id]" as={`/posts/${url}`}>
                  <a>{title}</a>
                </Link>
                <small>
                  <Date dateString={created} />
                </small>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )}
    {list && list.length < 1 && <p>No available articles, but stay tuned!</p>}
  </>
);
