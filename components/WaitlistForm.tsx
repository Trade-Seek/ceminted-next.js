"use client";

import { useState, FormEvent } from "react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("success");
        setMessage("Welcome to the waitlist! 🎉");
        setEmail("");

        // Reset after 3 seconds
        setTimeout(() => {
          setStatus("idle");
          setMessage("");
        }, 3000);
      } else {
        setStatus("error");
        setMessage(
          result.message || "Failed to join waitlist. Please try again."
        );

        setTimeout(() => {
          setStatus("idle");
          setMessage("");
        }, 5000);
      }
    } catch (error) {
      console.error("Network error:", error);
      setStatus("error");
      setMessage("Network error. Please check your connection.");

      setTimeout(() => {
        setStatus("idle");
        setMessage("");
      }, 5000);
    }
  };

  return (
    <div className="email-capture">
      <form onSubmit={handleSubmit} className="email-row">
        <div className="email-input">
          <input
            id="email"
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === "loading" || status === "success"}
            required
          />
          <div className="join-btn__wrapper pixel-button-wrapper">
            <button
              type="submit"
              className="pixel-button"
              disabled={status === "loading" || status === "success"}
            >
              {status === "loading" && "JOINING..."}
              {status === "success" && "JOINED ✓"}
              {(status === "idle" || status === "error") && "JOIN"}
            </button>
          </div>
        </div>
      </form>

      {message && (
        <div
          className={`message ${status === "success" ? "success" : "error"}`}
          style={{
            marginTop: "10px",
            fontSize: "11px",
            opacity: 0.9,
            color: status === "success" ? "#155724" : "#721c24",
          }}
        >
          {message}
        </div>
      )}
    </div>
  );
}
