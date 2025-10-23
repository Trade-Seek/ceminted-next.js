import Image from "next/image";
import WaitlistForm from "@/components/WaitlistForm";
import MusicPlayer from "@/components/MusicPlayer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="page">
      <MusicPlayer />
      <div className="background-grid">
        <Header />

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
            <Image
              className="cloud-left pixel-art"
              src="/images/pinkcloud.svg"
              alt="cloud left"
              width={140}
              height={100}
            />
            <Image
              className="cloud-right pixel-art"
              src="/images/pinkcloud.svg"
              alt="cloud right"
              width={320}
              height={200}
            />
            <Image
              className="cloud-star pixel-art"
              src="/images/whitecloudwithstar.svg"
              alt="cloud with star"
              width={300}
              height={300}
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
                trade more confidently and sustainably.
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
          <Image
            className="note-1 pixel-art"
            src="/images/stickyNote1.svg"
            alt="Lessons Learned - 2023 trading edition"
            width={380}
            height={240}
          />
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
            <Image
              className="card-prog-svg dating pixel-art"
              src="/images/inProgressDating.svg"
              alt="Dating app in progress"
              width={420}
              height={500}
              style={{ objectFit: "cover" }}
            />

            <Image
              className="card-prog-svg fashion pixel-art"
              src="/images/inProgressFashion.svg"
              alt="Fashion game in progress"
              width={420}
              height={500}
              style={{ objectFit: "cover" }}
            />
          </div>

          {/* Sticky notes below cards */}
          <Image
            className="note-2 pixel-art"
            src="/images/stickyNote2.svg"
            alt="What else do I need?"
            width={320}
            height={220}
          />

          <Image
            className="note-3 pixel-art"
            src="/images/stickyNote3.svg"
            alt="Fashion game"
            width={320}
            height={220}
          />

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

        {/* Footer Section */}
        <div className="footer-container">
          {/* Socials */}
          <div className="socials">
            <div className="socials-title">OUR SOCIALS:</div>
            <div className="social-icons">
              <a
                href="https://twitter.com/ceminted"
                target="_blank"
                rel="noopener noreferrer"
                className="social-dot"
                aria-label="Twitter Account 1"
              >
                <Image
                  src="/images/twitterLogo.jpg"
                  alt="Team member 1"
                  width={80}
                  height={80}
                  className="social-image"
                />
              </a>
              <a
                href="https://twitter.com/katreenatecson"
                target="_blank"
                rel="noopener noreferrer"
                className="social-dot"
                aria-label="Twitter Account 2"
              >
                <Image
                  src="/images/kat.jpg"
                  alt="Team member 2"
                  width={80}
                  height={80}
                  className="social-image"
                />
              </a>
              <a
                href="https://twitter.com/fwazsol"
                target="_blank"
                rel="noopener noreferrer"
                className="social-dot"
                aria-label="Twitter Account 3"
              >
                <Image
                  src="/images/fwaz.jpg"
                  alt="Team member 3"
                  width={80}
                  height={80}
                  className="social-image"
                />
              </a>
              <a
                href="https://twitter.com/shrysxs"
                target="_blank"
                rel="noopener noreferrer"
                className="social-dot"
                aria-label="Twitter Account 4"
              >
                <Image
                  src="/images/shreyas.jpg"
                  alt="Team member 4"
                  width={80}
                  height={80}
                  className="social-image"
                />
              </a>
            </div>
          </div>

          {/* Footer Graphics */}
          <div className="footer-graphics">
            <Image
              className="mountains pixel-art"
              src="/images/mountain.svg"
              alt="mountains"
              width={280}
              height={200}
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
              width={24}
              height={24}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
