
export default function Footer() {
  return (
    <div className="footer-container">
      <hr className="divider"/>
      <div className="footer-bottom-container">
        <div>
          <div>
            <a className="footer-link" href="https://www.callin.com/pp"><h5>Privacy Policy</h5></a>
            <a className="footer-link" href="https://www.callin.com/tos"><h5>Terms of Service</h5></a>
            <a className="footer-link" href="https://callin-privacy.my.onetrust.com/webform/899bbb81-2409-4eff-886e-4b21154e4b82/2dd5f9b8-c782-4f8e-8154-e855b7c54a2f"><h5>Do Not Sell My Information</h5></a>
          </div>
          <div>
            © Callin Corp. 2021
          </div>
        </div>
        <div style={{ marginLeft: 'auto'}}>
          <a className="footer-link" href="https://instagram.com/callinapp">
            <img alt="instagram" srcSet="https://www.callin.com/_next/image?url=%2Ficon-instagram.svg&amp;w=32&amp;q=75 1x, https://www.callin.com/_next/image?url=%2Ficon-instagram.svg&amp;w=48&amp;q=75 2x" src="https://www.callin.com/_next/image?url=%2Ficon-instagram.svg&amp;w=48&amp;q=75" decoding="async" />
          </a>
          <a className="footer-link" href="https://twitter.com/getcallin">
            <img alt="twitter" srcSet="https://www.callin.com/_next/image?url=%2Ficon-twitter.svg&amp;w=32&amp;q=75 1x, https://www.callin.com/_next/image?url=%2Ficon-twitter.svg&amp;w=48&amp;q=75 2x" src="https://www.callin.com/_next/image?url=%2Ficon-twitter.svg&amp;w=48&amp;q=75" decoding="async" />
          </a>
        </div>
      </div>
    </div>
  )
}