import styles from '../ui/footer.module.css';

export default function FooterNav() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerColumn}>
                {/* Todo */}
                <div className={styles.wanderco}>
                    wanderco
                </div>
                {/* <img src="/SVG/logo-dark.svg" alt="WanderCo" className={styles.logo-dark} /> */}
                <div>
                    We work for you.
                </div>
                <div>
                    © 2024 WanderCo. All rights reserved
                </div>
            </div>
            <div className={styles.footerColumn}>
                <a href="/signup" className={styles.footerButton}>
                    Start my 30-day free trial now
                </a>
            </div>
        </footer>
    )
}