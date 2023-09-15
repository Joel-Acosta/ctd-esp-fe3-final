import { useContextGlobal } from "./utils/global.context";
import './Footer.css'
const Footer = () => {
const {theme} = useContextGlobal

  return (
    <footer className={`footerContainer ${theme}`}>
      {/* <div className="banner"></div> */}
      <div>
        <p>Powered by</p>
        <img src="/images/DH.png" alt="DH-logo" />
      </div>
      <div className="icons">
        <a href="https://www.facebook.com"><img src="images/ico-facebook.png" alt="facebook"/></a>
        <a href="https://www.instagram.com"><img src="images/ico-instagram.png" alt="facebook"/></a>
        <a href="https://www.tiktok.com"><img src="images/ico-tiktok.png" alt="facebook"/></a>
        <a href="https://www.whatsapp.com"><img src="images/ico-whatsapp.png" alt="facebook"/></a>
      </div>
    </footer>
  );
};

export default Footer;
