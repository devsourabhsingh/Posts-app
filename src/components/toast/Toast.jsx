"use client"
import { useEffect, useState } from "react";
import styles from "./Toast.module.css";

export default function Toast({ message, onClose }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  if (!visible) return null;

  return (
    <div className={styles.toast}>
      <p>{message}</p>
      <button onClick={() => setVisible(false)}>✖</button>
    </div>
  );
}
