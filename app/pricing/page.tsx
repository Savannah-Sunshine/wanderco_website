import classes from "../ui/pricing.module.css";
import landingClasses from "../ui/landing.module.css";
import { inter } from "../ui/fonts";

export default function Page() {
    return (
        <div className={classes.pricingPage}>
           
            <div className={classes.pricing}>
                <div className={landingClasses.landingContent}>
                    <h1 className={`${landingClasses.title} ${inter.className} ${landingClasses.titleViewer}`}>Sign up to Beta</h1>
                    <p className={landingClasses.description}> Get on the waitlist today </p>
                </div>

                {/* <div className={classes.pricingHeader}>
                    <h1>Sign up for Beta</h1>
                    <p>Get started with Wanderco today</p>
                </div> */}
                
                <div className={classes.pricingChart}>
                    <div className={classes.pricingPlan}>
                        <h2>Basic</h2>
                        <p>Free</p>
                        <hr></hr>
                        <ul>
                            <li>1 user</li>
                            <li>10 Free contacts</li>
                        </ul>
                        <a className={classes.button} href="/">Get Started</a>
                    </div>
                    <div className={classes.pricingPlan}>
                        <h2>Pro</h2>
                        <p>$49.99/month</p>
                        <hr></hr>
                        <ul>
                            <li> up to 30 users</li>
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