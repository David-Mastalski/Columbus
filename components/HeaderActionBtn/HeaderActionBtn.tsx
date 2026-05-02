import { ReactNode } from "react";
import styles from './HeaderActionBtn.module.css';

type ButtonProps = {
  label?: string;
  icon?: ReactNode;
  labelFirst?: boolean;
  ariaLabel: string;
};

function HeaderActionBtn({ label, icon, ariaLabel, labelFirst = false }: ButtonProps) {
  return (
    <button className={`not-allowed ${styles.button} ${labelFirst ? styles.reverse : ""}`} aria-label={ariaLabel}>
      {icon}
      <span>{label}</span>
    </button>
  );
}

export default HeaderActionBtn;
