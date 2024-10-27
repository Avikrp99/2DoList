import { BottomBar } from "../bottom-bar/BottomBar";
import styles from "./App.module.css";

export const App = () => {
  return (
    <div className={styles.App}>
      <BottomBar />
    </div>
  );
};
