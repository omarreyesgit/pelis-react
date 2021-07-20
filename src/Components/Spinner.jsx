import { CgSpinner } from 'react-icons/cg';
import styles from "./Spinner.module.css";
export function Spinner() {
    return (
        <div className={styles.spinner}>
            <CgSpinner size={60} className={styles.spinning}/>
        </div>
    )
}
