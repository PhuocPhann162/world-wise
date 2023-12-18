import Logo from "./Logo";
import styles from "./Sidebar.module.css";
import AppNav from "./AppNav";

// API Key: AIzaSyA-Rzzu9o731_T_ICQfJQQNqe2JD7hAlR0

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <p>List of cities</p>
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; CopyRight {new Date().getFullYear()} by WorldWise Inc
        </p>
      </footer>
    </div>
  );
}

export default Sidebar;
