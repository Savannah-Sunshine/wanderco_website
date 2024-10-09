import FooterNav from "./components/footerNav";
import HeaderNav from "./components/headerNav";
import classes from "./ui/landing.module.css";

export default function Home() {
  return (
    <div className="root">
      <div className={classes.blur}>
          <img className={classes.backgroundImage} alt="background img" loading="lazy" src="steve-johnson.jpg" />
      </div>
      <HeaderNav />
      <div className={classes.landingpage}>
        <div className={classes.landingContent}>
          <h1 className={classes.title}>WanderCo</h1>
          <p className={classes.description}>Helping travel companies filter and find booking clients</p>
          <a href="/signup" className={classes.button}>Start my 30-day free trial now</a>
        </div>
      </div>
      <div className={classes.slash}></div>
      <FooterNav />
    </div>
  );
}
