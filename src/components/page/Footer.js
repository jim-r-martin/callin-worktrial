import { Divider } from "../shared/Presentation";
import {
  PP_LINK,
  TOS_LINK,
  USR_DATA_PRIVACY_LINK,
  INSTA_LINK,
  TWITTER_LINK,
} from "../../helpers/constants";

export default function Footer() {
  return (
    <div className="footer-container">
      <Divider />
      <div className="footer-bottom-container">
        <div className="footer-col internal-links">
          <a className="footer-link" href={PP_LINK}>
            <h5>Privacy Policy</h5>
          </a>
          <a className="footer-link" href={TOS_LINK}>
            <h5>Terms of Service</h5>
          </a>
          <a className="footer-link" href={USR_DATA_PRIVACY_LINK}>
            <h5>Do Not Sell My Information</h5>
          </a>
          <h5 className="bottom-footer-copy">© Callin Corp. 2021</h5>
        </div>
        <div className="footer-col social-links">
          <a className="footer-link icon" href={INSTA_LINK}>
            <img
              alt="instagram"
              srcSet="https://www.callin.com/_next/image?url=%2Ficon-instagram.svg&amp;w=32&amp;q=75 1x, https://www.callin.com/_next/image?url=%2Ficon-instagram.svg&amp;w=48&amp;q=75 2x"
              src="https://www.callin.com/_next/image?url=%2Ficon-instagram.svg&amp;w=48&amp;q=75"
              decoding="async"
            />
          </a>
          <a className="footer-link icon" href={TWITTER_LINK}>
            <img
              alt="twitter"
              srcSet="https://www.callin.com/_next/image?url=%2Ficon-twitter.svg&amp;w=32&amp;q=75 1x, https://www.callin.com/_next/image?url=%2Ficon-twitter.svg&amp;w=48&amp;q=75 2x"
              src="https://www.callin.com/_next/image?url=%2Ficon-twitter.svg&amp;w=48&amp;q=75"
              decoding="async"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
