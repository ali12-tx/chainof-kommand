import './PostRecipe.css'
import './ResponsiveCardRecipe.css'

export const RecipePost = (props) => {
    return (
        <div className={`postWrapper ${props.variant ? props.variant : ''}`}>
            <div className="leftInfo">
                <img src={props.src} alt={props.alt} />

            </div>
            <div className="rigthInfo">
                <h2 style={{
                    fontFamily: "Poppins",
                    fontWeight: "600",
                }}>{props.title}</h2>
                <p style={{
                    fontFamily: "Poppins",
                    marginTop: "0.25rem",
                    marginBottom: "1rem",
                }} dangerouslySetInnerHTML={{ __html: props.content }}></p>

            </div>
        </div>
    )
}
