import { PAGES } from "@/app/_constants";
import styles from "../../_styles/components/Header.module.css";
import Link from "../link/Link";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <Link href={PAGES.blogs.route}>{PAGES.blogs.title}</Link>
          </li>
          <li>
            <Link href={PAGES.faq.route}>{PAGES.faq.title}</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
