import styles from '../ui/pageHeader.module.css'

export default function PageHeader() {
    return (
        <header className={styles.header}>
            <div className={styles.headerLeft}>
                <div className={styles.wanderco}>
                    <a href="/">wanderco</a>
                </div>
            </div>
            <div className={styles.headerRight}>
                <search className={styles.search}>
                    <input type="text" placeholder="Search..."/>
                </search>
            </div>
        </header>
    )
}