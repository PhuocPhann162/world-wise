import Sidebar from "../components/Sidebar";
import styles from "./AppLayout.module.css";

/*
"importCSSModule": {
    "prefix": "csm",
    "scope": "javascript,typescript,javascriptreact",
    "body": ["import styles from './${TM_FILENAME_BASE}.module.css'"],
    "description": "Import CSS Module as `styles`"
  },
*/

function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
    </div>
  );
}

export default AppLayout;
