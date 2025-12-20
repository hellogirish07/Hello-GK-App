import React from "react";

export default function Footer() {
    return (
        <footer className="desktop-footer" role="contentinfo" aria-label="Site footer">
            <div className="footer-left">
                <div className="brand">MyApp</div>
                <div className="copyright">© {new Date().getFullYear()} MyApp. All rights reserved.</div>
            </div>

            <nav className="footer-nav" aria-label="Footer navigation">
                <a href="/about">About</a>
                <a href="/terms">Terms</a>
                <a href="/privacy">Privacy</a>
                <a href="/contact">Contact</a>
            </nav>

            <style>{`
                /* Hide footer by default and show only on desktop (>=1024px) */
                .desktop-footer { display: none; }

                @media (min-width: 1024px) {
                    .desktop-footer {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        padding: 20px 40px;
                        background: #0b1220;
                        color: #e6eef8;
                        font-size: 14px;
                        gap: 20px;
                    }

                    .footer-left {
                        display: flex;
                        flex-direction: column;
                    }

                    .brand {
                        font-weight: 600;
                        font-size: 16px;
                        margin-bottom: 4px;
                    }

                    .footer-nav a {
                        color: #cbd8ea;
                        margin-left: 18px;
                        text-decoration: none;
                    }

                    .footer-nav a:hover {
                        color: #ffffff;
                        text-decoration: underline;
                    }
                }
            `}</style>
        </footer>
    );
}