import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="homePage">
      <div className="homePage-contentWrapper">
        <img
          src="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👨‍💻</text></svg>"
          alt="Emoji photo"
          className="homePage-image"
        />
        <div className="homePage-textWrapper">
          <h1 className="homePage-title">
            Congratulations! You have just created your React App with the CGM
            Template
          </h1>
          <p className="homePage-text">
            Read the README to learn more about the template!
          </p>
        </div>
      </div>
      <div className="homePage-footer">
        <p className="homePage-footerText">
          If you liked this template, consider buying me a coffee:
        </p>
        <div className="homePage-footerLinks">
          <span
            className="homePage-footerLink"
            onClick={() =>
              window.open("https://venmo.com/charlie-meyer-29", "_blank")
            }
          >
            Venmo
          </span>
          <span
            className="homePage-footerLink"
            onClick={() =>
              window.open(
                "https://www.paypal.com/paypalme/charliemeyer2026",
                "_blank"
              )
            }
          >
            Paypal
          </span>
          <span>Bitcoin:1GbDcN3Gne3C9p3XEqHSCnTo7QL8CyCRdg </span>
        </div>
      </div>
    </div>
  );
}
