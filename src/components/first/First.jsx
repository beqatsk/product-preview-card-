import "../../reset.css";
import "./first.css";
import Bitmap from "/images/Bitmap.png";
export default function First() {
  return (
    <div className="container">
      <img src={Bitmap} alt="bitmap" />
      <div className="wrapper">
        <h2>PERFUME</h2>
        <h1>Gabrielle Essence Eau De Parfum</h1>
        <p className="paragraph">
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div className="price-title">
          <span className="new-price">$149.99</span>
          <span className="old-price">$169.99</span>
        </div>
      </div>
    </div>
  );
}
