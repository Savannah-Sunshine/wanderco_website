import HeaderNav from "../components/headerNav";
import classes from "../ui/pricing.module.css";

export default function Page() {
    return (
        <div className={classes.pricingPage}>
            <div className={classes.background}>
                {/* <div className={classes.blur}>
                    <img className={classes.backgroundImage} alt="background img" loading="eager" src="steve-johnson.jpg" />
                </div> */}
                <div className={classes.slash}></div>
            </div>
            <HeaderNav />
            <div className={classes.pricing}>
                <div className={classes.pricingHeader}>
                    <h1>Sign up for Beta</h1>
                    <p>Get started with Wanderco today</p>
                </div>
                <div className={classes.pricingChart}>
                    <div className={classes.pricingPlan}>
                        <h2>Basic</h2>
                        <p>Free</p>
                        <hr></hr>
                        <ul>
                            <li>1 user</li>
                            <li>Unlimited contacts</li>
                            <li>Unlimited searches</li>
                        </ul>
                        <a className={classes.button} href="/">Get Started</a>
                    </div>
                    <div className={classes.pricingPlan}>
                        <h2>Pro</h2>
                        <p>$10/month</p>
                        <hr></hr>
                        <ul>
                            <li>1 user</li>
                            <li>Unlimited contacts</li>
                            <li>Unlimited searches</li>
                        </ul>
                        <a className={classes.button} href="/">Get Started</a>
                    </div>
                </div>
            </div>
        </div>
    )
}