import Image from "next/image";
import WaitlistForm from "@/components/WaitlistForm";

export default function Home() {
  return (
    <div className="page">
      <div className="background-grid">
        {/* Header Section */}
        <div className="header-section">
          <div className="main-heading">
            MAKING ONLINE CONNECTIONS MORE MEANINGFUL AND DECENTRALIZED
          </div>
          <div className="sub-description">
            We empower creators everywhere to play, dream big, and build worlds
            that bring people closer - on your own terms.
          </div>
          <div className="launching-soon">LAUNCHING SOON</div>
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
            <div className="tagline">A SYSTEM OF MEANINGFUL CONNECTIONS.</div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="hero">
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
              width={80}
              height={60}
            />
            <Image
              className="cloud-right pixel-art"
              src="/images/whitecloudwithstar.svg"
              alt="cloud right"
              width={80}
              height={60}
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
              <h1 className="hero-h1">
                TRADE MORE SUSTAINABLY.
                <br />
                COMING SOON
              </h1>
              <div className="hero-sub">live. laugh. leverage trade.</div>

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
            className="note"
            style={{ position: "absolute", bottom: "70px", right: "40px" }}
          >
            <div className="note-header">
              1. Lessons Learned - 2023 trading edition
            </div>
            <div className="note-time">10 MINUTES</div>
            <div className="note-grid">
              <div className="note-item">risk</div>
              <div className="note-item">profit</div>
              <div className="note-item">loss</div>
              <div className="note-item">chart</div>
              <div className="note-item">signal</div>
              <div className="note-item">entry</div>
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
            className="note"
            style={{ position: "absolute", bottom: "-100px", left: "40px" }}
          >
            <div className="note-header">2. What else do I need?</div>
            <div className="note-time">10 MINUTES</div>
            <div className="note-grid">
              <div className="note-item">match</div>
              <div className="note-item">chat</div>
              <div className="note-item">profile</div>
              <div className="note-item">photo</div>
              <div className="note-item">bio</div>
              <div className="note-item">swipe</div>
            </div>
          </div>

          <div
            className="note"
            style={{ position: "absolute", bottom: "-100px", right: "40px" }}
          >
            <div className="note-header">2. Fashion game</div>
            <div className="note-time">10 MINUTES</div>
            <div className="note-grid">
              <div className="note-item">style</div>
              <div className="note-item">outfit</div>
              <div className="note-item">trend</div>
              <div className="note-item">color</div>
              <div className="note-item">design</div>
              <div className="note-item">show</div>
            </div>
          </div>

          {/* Sparkles on fashion game card */}
          <Image
            className="sparkles pixel-art"
            src="/images/stars.svg"
            alt="sparkles"
            width={12}
            height={12}
            style={{ position: "absolute", bottom: "-80px", right: "60px" }}
          />
        </div>

        {/* Socials */}
        <div className="socials">
          SOCIALS:
          <div className="social-icons" aria-hidden="true">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
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
