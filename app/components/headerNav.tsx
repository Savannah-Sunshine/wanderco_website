"use client";
import styles from '../ui/header.module.css';
import { useState } from 'react';
import { SVG_Button } from '../ui/SVG/SVG_button';

export default function HeaderNav() {
    const [isOpen, setIsOpen] = useState(false);

    // Toggle the mobile menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className={styles.header}>
            <div className={styles.headerColumn}>
                <div className={styles.wanderco}>
                    <a href="/">wanderco</a>
                </div>
            </div>
            <div className={styles.headerColumn}>
                <div className={styles.headerLinks}>
                    {/* <a href="/examples" className="headerLink">
                        Examples
                    </a> */}
                     <a href="/" className="headerLink">
                        Examples
                    </a>
                    {/* <a href="/login" className="headerLink">
                        Log in
                    </a> */}
                    <a href="/" className="headerLink">
                        Log in
                    </a>
                    
                    <div>
                        <a href="/pricing">
                            <SVG_Button className={styles.icon2} />
                        </a>
                    </div>
                </div>
            </div>


            {/* Hamburger Menu Icon */}
            <div className={styles.menu}>
                <div className={styles.hamburger} onClick={toggleMenu}>
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        ></path>
                    </svg>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className={styles.mobileMenu}>
                        {/* <a href="/examples" className="headerLink">
                            Examples
                        </a> */}
                        <a href="/" className="headerLink">
                            Examples
                        </a>
                        <hr />
                        {/* <a href="/login" className="headerLink">
                            Log in
                        </a> */}
                        <a href="/" className="headerLink">
                            Log in
                        </a>
                        <hr />
                        <a href="/pricing" className="headerLink">
                            Sign up
                        </a>
                    </div>
                )}
            </div>
        </header>
    )
}