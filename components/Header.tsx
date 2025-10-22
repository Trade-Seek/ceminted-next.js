import Image from "next/image";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-content">
        <div className="header-logo">
          <Image
            src="/images/cemintedlogo.gif"
            alt="Ceminted Logo"
            width={240}
            height={104}
            className="logo-img"
          />
        </div>
        <div className="header-text">
          <h1 className="header-main-title">
            WE'RE MAKING ONLINE CONNECTIONS MORE MEANINGFUL
          </h1>
          <p className="header-subtitle">
            Dream big, have fun, and build safe and secure worlds with us
          </p>
        </div>
      </div>
    </header>
  );
}
