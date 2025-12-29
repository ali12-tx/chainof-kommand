import "./BlogStyles.css";
import "./ResponsiveBlog.css";
import { PostBlog } from "./PostBlog/PostBlog";
import qrcodeAndroid from "../../../assets/qrcodeAndroid.png";
import appleqrcode from "../../../assets/appleqrcode.png";
import appstore from "../../../assets/appstore.png";
import androidstore from "../../../assets/androidstore.png";

export const Blog = () => {
  return (
    <section className="blog">
      <div className="blogWrapper">
        <div className="topInfo">
          <h2>QR Code</h2>
          <p>
            Scan the QR code to download the app on your phone and start
          </p>
        </div>

        <div className="postsWrapper">
          <PostBlog
            src={qrcodeAndroid}
            alt="alimento1"
            title="Android QR Code"
            profile={androidstore}
          />

          <PostBlog
            src={appleqrcode}
            alt="alimento2"
            title="Apple QR Code"
            profile={appstore}
          />
        </div>
      </div>
    </section>
  );
};
