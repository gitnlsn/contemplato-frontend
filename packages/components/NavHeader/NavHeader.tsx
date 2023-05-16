import Link from "next/link";
import { NavItem } from "./interfaces/NavItem";
import styles from "./NavHeader.module.css";

interface NavHeaderProps {
  navItems: NavItem[];
}

export const NavHeader: React.FC<NavHeaderProps> = ({ navItems }) => {
  return (
    <header className={styles["contemplato-header"]}>
      <nav className={styles["contemplato-nav"]}>
        {navItems.map((item) => (
          <Link tabIndex={0} key={item.id} href={item.link}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};
