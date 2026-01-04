import './PostBlogStyles.css'
import './ResponsiveBlogCard.css'

export const PostBlog = (props) => {
    const ImageContent = () => (
        <img src={props.src} alt={props.alt} className='imgQrcode' />
    );

    return (
        <div className="PostBlog">
            <div className="topBlog">
                {props.href ? (
                    <a href={props.href} target="_blank" rel="noopener noreferrer">
                        <ImageContent />
                    </a>
                ) : (
                    <ImageContent />
                )}
            </div>
            {/* <div className="middleBlog">
                <h2>{props.title}</h2>
            </div> */}
            <div className="botBlog">
                <div className="botProfile">
                <img src={props.profile} alt={props.name} className='imgIcon' />
                </div>
            </div>
        </div>
    )
}