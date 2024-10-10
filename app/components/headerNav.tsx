import styles from '../ui/header.module.css';
import { SVG_Button } from '../ui/SVG/SVG_button';

export default function HeaderNav() {
    return (
        <header className={styles.header}>
            <div className={styles.headerColumn}>
                <div className={styles.wanderco}>
                    <a href="/">wanderco</a>
                </div>
            </div>
            <div className={styles.headerColumn}>
                <div className={styles.headerLinks}>
                    <a href="/examples" className="headerLink">
                        Examples
                    </a>
                    <a href="/login" className="headerLink">
                        Log in
                    </a>
                    <div>
                        <a href="/pricing">
                            <SVG_Button className={styles.icon2} />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}