import NextLink from "next/link";
import React from "react";
import styles from "../../_styles/components/Link.module.css";

const Link = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <NextLink className={styles.link} href={href}>
      {children}
    </NextLink>
  );
};

export default Link;
