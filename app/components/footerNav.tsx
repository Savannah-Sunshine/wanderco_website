import styles from '../ui/footer.module.css';

export default function FooterNav() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerColumn}>
                <div className={styles.spacing}>
                    <a href="/pricing" className={styles.footerButton}>
                        Start my 30-day free trial now
                    </a>
                    <a href="/pricing" className={styles.miniFooterButton}>
                        Start now
                    </a>
                </div>
                <div>
                    <a href="/privacy" className={styles.footerLink}>
                        Privacy Policy
                    </a>
                </div>
            </div>
            <div className={styles.footerColumn}>
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
            
        </footer>
    )
}