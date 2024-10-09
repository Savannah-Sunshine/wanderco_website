import styles from './ui/header.module.css';
import { SVG_Button } from './ui/SVG/SVG_button';

export default function HeaderNav() {
    return (
        <header className={styles.header}>
            <div className={styles.headerColumn}>
                <div className={styles.wanderco}>
                    wanderco
                </div>
            </div>
            <div className={styles.headerColumn}>
                <div className={styles.headerLinks}>
                    <a href="/login" className="headerLink">
                        Log in
                    </a>
                    <a href="/examples" className="headerLink">
                        See examples
                    </a>
                    <div> 
                        <SVG_Button className={styles.icon2} />
                    </div>
                </div>
            </div>
        </header>
    )
}