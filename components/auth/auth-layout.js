import styles from './auth-layout.module.css';
import Heading from '../heading';

export default function AuthLayout({ children }) {

    return (
        <>
            <Heading />
            <div className={styles.flexContainer}>
                <div className={styles.login}>
                    <main>{children}</main>
                </div>
            </div>
        </>
    )
}