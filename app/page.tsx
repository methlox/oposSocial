import Link from "next/link";
import styles from "./styles.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div
        style={{
          color: "white",
          fontWeight: "bold",
          fontSize: "60px",
          marginTop: "410px",
          marginLeft: "70px",
          marginRight: "70px",
        }}
      >
        pit stop
      </div>
    </main>
  );
}
