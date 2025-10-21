import Image from "next/image";
import WaitlistForm from "@/components/WaitlistForm";
import MusicPlayer from "@/components/MusicPlayer";

export default function Home() {
  return (
    <div className="page">
      <MusicPlayer />
      <div className="background-grid">
        {/* Header Section */}
        <div className="header-section">
          <div className="top-row">
            <div className="logo">
              <Image
                src="/images/cemintedlogo.gif"
                alt="Ceminted Logo"
                width={88}
                height={38}
                className="logo-img"
                unoptimized
              />
            </div>
            <div className="header-text">
              <div className="main-heading">
                WE'RE MAKING ONLINE CONNECTIONS MORE MEANINGFUL
              </div>
              <div className="sub-description">
                Dream big, have fun, and build safe and secure worlds with us
              </div>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="hero">
          <div className="launching-soon-text">LAUNCHING SOON</div>
          <div className="hero-card">
            <div className="small-top-left">Trade & Seek</div>
            <button className="top-right-button">More Info</button>

            <Image
              className="cherries pixel-art"
              src="/images/cherry.svg"
              alt="cherries"
              width={24}
              height={24}
            />

            {/* Decorative clouds */}
            <Image
              className="cloud-left pixel-art"
              src="/images/pinkcloud.svg"
              alt="cloud left"
              width={150}
              height={120}
            />
            <Image
              className="cloud-right pixel-art"
              src="/images/pinkcloud.svg"
              alt="cloud right"
              width={150}
              height={120}
            />

            <Image
              className="sparkles pixel-art"
              src="/images/stars.svg"
              alt="sparkles"
              width={12}
              height={12}
              style={{ position: "absolute", bottom: "40px", left: "30px" }}
            />
            <Image
              className="sparkles pixel-art"
              src="/images/stars.svg"
              alt="sparkles"
              width={12}
              height={12}
              style={{ position: "absolute", bottom: "40px", right: "30px" }}
            />

            <div className="center-text">
              <h1 className="hero-h1">WAITLIST SIGN UP</h1>
              <div className="hero-sub">
                Connect to complex markets with increased privacy, so you can
                trade more confidently.
              </div>

              <Image
                className="pixel-heart"
                src="/images/pinkheart.svg"
                alt="heart"
                width={24}
                height={24}
              />

              <WaitlistForm />
            </div>
          </div>

          {/* Sticky note */}
          <div
            className="note hero-note"
            style={{ position: "absolute", bottom: "-40px", right: "-20px" }}
          >
            <div className="note-header">
              1. Lessons Learned - 2025 trading edition
            </div>
            <div className="note-time">10 MINUTES</div>
            <div className="note-grid">
              <div className="note-item">LIVE</div>
              <div className="note-item">LAUGH</div>
              <div className="note-item">LEVERAGE</div>
              <div className="note-item">TRADE</div>
              <div className="note-item">MINTED</div>
              <div className="note-item">CEMINTED</div>
            </div>
          </div>
        </div>

        {/* Upcoming Section */}
        <div className="upcoming-section">
          <div className="upcoming-header">
            UP AND COMING...
            <Image
              className="upcoming-sparkles pixel-art"
              src="/images/stars.svg"
              alt="sparkles"
              width={16}
              height={16}
            />
          </div>

          <div className="upcoming">
            <div className="card-prog left">
              <div className="small-label">dating app</div>
              <div className="label">IN PROGRESS</div>
            </div>
            <div className="card-prog right">
              <div className="small-label">fashion game</div>
              <div className="label">IN PROGRESS</div>
            </div>
          </div>

          {/* Sticky notes below cards */}
          <div
            className="note note-yellow note-below-card"
            style={{ position: "absolute", bottom: "-140px", left: "20px" }}
          >
            <div className="note-header">2. What else do I need?</div>
            <div className="note-time">10 MINUTES</div>
            <div className="note-grid">
              <div className="note-item">BUY A</div>
              <div className="note-item">DATING</div>
              <div className="note-item">APP</div>
              <div className="note-item">IS IT ON</div>
              <div className="note-item">GOOGLE</div>
              <div className="note-item">PLAYSTORE?</div>
            </div>
          </div>

          <div
            className="note note-blue note-below-card"
            style={{ position: "absolute", bottom: "-140px", right: "20px" }}
          >
            <div className="note-header">3. Fashion to Fun</div>
            <div className="note-time">10 MINUTES</div>
            <div className="note-grid">
              <div className="note-item">Fashion</div>
              <div className="note-item">Makeup</div>
              <div className="note-item">Runway</div>
              <div className="note-item">Fashion</div>
              <div className="note-item">Designing</div>
              <div className="note-item">Clothing</div>
            </div>
          </div>

          {/* Sparkles on cards */}
          <Image
            className="sparkles pixel-art"
            src="/images/stars.svg"
            alt="sparkles"
            width={16}
            height={16}
            style={{ position: "absolute", bottom: "-120px", right: "80px" }}
          />
          <Image
            className="sparkles pixel-art"
            src="/images/stars.svg"
            alt="sparkles"
            width={14}
            height={14}
            style={{ position: "absolute", top: "60px", left: "-40px" }}
          />
        </div>

        {/* Socials */}
        <div className="socials">
          OUR SOCIALS:
          <div className="social-icons">
            <a href="#" className="social-pfp" aria-label="Social profile 1">
              <div className="pfp-circle"></div>
            </a>
            <a href="#" className="social-pfp" aria-label="Social profile 2">
              <div className="pfp-circle"></div>
            </a>
            <a href="#" className="social-pfp" aria-label="Social profile 3">
              <div className="pfp-circle"></div>
            </a>
            <a href="#" className="social-pfp" aria-label="Social profile 4">
              <div className="pfp-circle"></div>
            </a>
          </div>
        </div>

        {/* Footer Graphics */}
        <div className="footer-graphics">
          <Image
            className="mountains pixel-art"
            src="/images/mountain.svg"
            alt="mountains"
            width={220}
            height={120}
          />
          <Image
            className="grass pixel-art"
            src="/images/grass.svg"
            alt="grass"
            width={1100}
            height={56}
            style={{ objectFit: "cover" }}
          />
          <Image
            className="footer-sparkles pixel-art"
            src="/images/stars.svg"
            alt="sparkles"
            width={12}
            height={12}
          />
        </div>
      </div>
    </div>
  );
}
