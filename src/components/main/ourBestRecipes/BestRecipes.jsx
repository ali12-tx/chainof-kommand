import './BestRecipes.css'
import './ResponsiveRecipes.css'
import { RecipePost } from './Post/RecipePost'

import PicRecipe1 from '../../../assets/comida_1.jpg'
import PicRecipe2 from '../../../assets/comida_2.jpg'
import PicRecipe3 from '../../../assets/comida_3.jpg'
import PicRecipe4 from '../../../assets/comida_4.jpg'

export const BestRecipes = () => {
    return (
        <section className="bRecipes">
            <div className="recipes">
                <div className="infos">
                    <h2 style={{
                        fontFamily: "Poppins",
                        fontWeight: "600",
                    }}>Top Reasons to Choose</h2>
                    <p style={{
                        marginTop: "1rem",
                        fontFamily: "Poppins",
                        fontWeight: "600",

                    }}> Chain of KO-mmand™
                    </p>

                </div>

                <div className="recipe-posts">
                    <RecipePost title='Easy to Use' variant='easy'
                        src={PicRecipe1}
                        alt='Archery Champion achievement'
                        content='As simple as 1-2-3!<br/>
1.Compete<br/>
2.Win<br/>
3.Get Rewards!
' />

                    <RecipePost title='Those Little Extras' variant='easy'
                        src={PicRecipe2}
                        alt='Boxing Tournament Winner achievement'
                        content='Choose unlimited<br/>
                        competitions and be<br/>

featured in our Digital<br/>Event Newspaper!' />

                    <RecipePost title='Unlimited Autographs' variant='easy'
                        src={PicRecipe3}
                        alt='A imagem of a beauty Classic Potato Salad'
                        content='Get autographs from <br/>
VIPs and competitors<br/>
on the app!' />

                    <RecipePost title='The Cherry on Top' variant='easy'
                        src={PicRecipe4}
                        alt='A imagem of a beauty Cherry Cobbler on the Grill'
                        content='Make history by<br/>
qualifying for a live,<br/>
in-person Hall of Fame<br/>
ceremony!' />
                </div>
            </div>
        </section>
    )
}
