import type { Metadata } from "next";
import "./ui/globals.css";
import { sen } from "./ui/fonts";
import FooterNav from "./components/footerNav";
import HeaderNav from "./components/headerNav";
import classes from "./ui/landing.module.css";
import { inter } from "./ui/fonts";

// For search engines (SEO) and social media platforms
export const metadata: Metadata = {
  title: "WanderCo Lead Generation",
  description: "WanderCo helps travel companies filter and find booking clients.",
  keywords: ["travel", "booking", "clients", "filter", "WanderCo", "lead", "generation"],
};

export default function RootLayout({ children,}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${sen.className} antialiased`}>
        <div className="root">
        <div className={classes.landingPage}>
          <div className={classes.background}>
            <div className={classes.blur}>
            </div>
            <div className={classes.slash}></div>
          
          </div>
            <HeaderNav />
              {children}
            <FooterNav />
          </div>

        </div>
      </body>
    </html>
  );
}