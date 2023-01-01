import { FunctionComponent } from "react";
import { TSegmentProps } from "../../types/props";
import styles from "./segment.module.css";

export const Segment: FunctionComponent<TSegmentProps> = ({
  contentHtml,
  children,
  type,
}) => {
  const style = styles[type] || styles.main;
  return (
    <>
      {contentHtml && (
        <div className={styles["inner--" + type]}>
          <div className={styles.maxWidth}>
            <section
              className={style}
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
          </div>
        </div>
      )}
      {!contentHtml && <section className={style}>{children}</section>}
    </>
  );
};
