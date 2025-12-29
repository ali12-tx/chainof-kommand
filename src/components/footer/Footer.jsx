import "./Footer.css";
import "./ResponsiveFooter.css";

export const Footer = () => {
  return (
    <section className="footerHead">
      <div className="footer">
        <div className="leftContent">
          <p>© Copyright 2025 Chain of KO-mmand™. All Rights Reserved.</p>
        </div>
        <div className="rigthContent">
          <p>
            <a href="/privacy-policy">Privacy Policy</a>
          </p>
          <p>
            <a href="/terms">Terms and Conditions</a>
          </p>
        </div>
      </div>
    </section>
  );
};
