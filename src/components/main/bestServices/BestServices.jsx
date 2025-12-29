import './Styles.css';
import './ResponsiveService.css';
import ServPic from '../../../assets/men_wavy.svg';// dummy placeholder

export const BestServices = () => {
    return (
        <section className="services">
            <div className="servicesWrapper">
                <div className="leftServices">
                    <img src={ServPic} alt='Competition Illustration' />
                </div>

                <div className="rigthServices">
                    <div className="fire-text-block">
                        <h2 className="fire-title">THERE’S A FIRE THAT CAN IGNITE INSIDE EACH OF US.</h2>
                        <p className="fire-subtitle">IT GROWS FROM WHERE YOU ARE TODAY. ITS FLAMES WILL TRANSFORM YOUR LIFE.</p>
                        <h2 className="fire-heading">LET’S JOIN TOGETHER AND LIGHT YOUR FIRE.</h2>
                        <p className="fire-subheading">LET’S FOCUS YOUR FIRE’S REACH TO GROW YOUR WINNING COLUMN.</p>
                        <p className="fire-text">WE’VE ADDED INNOVATIVE TECHNOLOGY --</p>
                        <p className="fire-text">YOU CHOOSE A PLAN THAT WORKS FOR YOU.</p>
                        <p className="fire-text">WE’LL BE THERE CHAMPIONING YOU EVERY STEP OF THE WAY.</p>
                        <p className="fire-text small-margin">WHERE YOUR WHY MEETS OUR HOW.</p>
                        <p className="fire-text small-margin">WHERE DRIVE MEETS DESIRE.</p>
                        <p className="fire-text small-margin">WHERE DREAMS BECOME REALITY.</p>
                        <h3 className="fire-waiting">YOUR FIRE IS W A I T I N G.</h3>
                        <h2 className="fire-legacy">THIS IS WHERE WE BUILD YOUR<br />CHAMPIONSHIP LEGACY TOGETHER.</h2>
                        <h1 className="fire-cta">TAKE THE FIRST STEP NOW!</h1>
                    </div>

                </div>
            </div>
        </section>
    );
};
