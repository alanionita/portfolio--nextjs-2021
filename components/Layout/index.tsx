import { FunctionComponent, useEffect } from "react";
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import yaml from 'highlight.js/lib/languages/yaml';
import shell from 'highlight.js/lib/languages/shell'
import Head from "next/head";
import Link from "next/link";
import { Nav } from "../Nav";
import { TLayoutProps } from "../../types/props";
import { siteTitle, siteMetaDesc } from "../../lib/config";
import styles from "./layout.module.css";
import 'highlight.js/styles/github-dark.css';

export const Layout: FunctionComponent<TLayoutProps> = ({ children, home }) => {
  useEffect(()=> {
    // Adds syntax highlighting
    hljs.registerLanguage('javascript', javascript);
    hljs.registerLanguage('yaml', yaml);
    hljs.registerLanguage('shell', shell);
    hljs.highlightAll()
  }, [])
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={siteMetaDesc} />
        {/* <meta
        property='og:image'
        // content={`https://og-image.now.sh/${encodeURI(siteTitle)}.png`}
        content={`https://u0oikxk9t0.execute-api.eu-west-2.amazonaws.com/dev/${encodeURI(
          siteTitle
        )}.png`}
      /> */}
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home && (
          <>
            <Nav>
              <Link href="/blog">Blog</Link>
            </Nav>
          </>
        )}
        {!home && (
          <>
            <Nav>
              <Link href="/">Home</Link>
            </Nav>
          </>
        )}
      </header>
      <main>{children}</main>
    </div>
  );
};
