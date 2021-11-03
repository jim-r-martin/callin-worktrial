export default function Header() {
  return (
    <header>
      <div className="header-container">
        <a className="header-link" href="/">
          <img
            alt="logo"
            href="/"
            className="header-logo"
            src="https://www.callin.com/_next/image?url=%2Fimage-logo-black.svg&amp;w=64&amp;q=75"
            srcSet="https://www.callin.com/_next/image?url=%2Fimage-logo-black.svg&amp;w=32&amp;q=75 1x, https://www.callin.com/_next/image?url=%2Fimage-logo-black.svg&amp;w=64&amp;q=75 2x"
          />
        </a>
        <a
          className="header-link"
          href="https://apps.apple.com/us/app/callin-social-podcasting/id1568011211"
        >
          Download
        </a>
      </div>
    </header>
  );
}
