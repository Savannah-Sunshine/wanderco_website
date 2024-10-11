import FooterNav from "./components/footerNav";
import HeaderNav from "./components/headerNav";
import classes from "./ui/landing.module.css";
import { inter } from "./ui/fonts";

export default function Home() {
  return (
    <div className={classes.heroSection}>
      <div className={classes.landingContent}>
        <h1 className={`${classes.title} ${inter.className} ${classes.titleViewer}`}>Qualified Leads for Destination Managers</h1>
        <p className={classes.description}> Find more clients ready to book </p>
        <a href="/pricing" className={`${classes.button} ${classes.signUpButton}`}>Start my 30-day free trial</a>
        <a href="/pricing" className={`${classes.button} ${classes.miniSignUpButton}`}>Start now</a>
      </div>
      <img className={classes.heroImage} alt="landing img" loading="eager" src="hero.png" />
    </div>
  );
}
