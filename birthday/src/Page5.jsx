// HeartCake.jsx
import React, { useEffect, useState } from "react";

export default function HeartCake() {
  const [blown, setBlown] = useState(false);

  useEffect(() => {
    // Check if speech recognition is supported
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Your browser doesn't support Speech Recognition");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.lang = "en-US";

    recognition.onresult = (event) => {
      const transcript = event.results[event.results.length - 1][0].transcript
        .toLowerCase()
        .trim();
      console.log("Heard:", transcript);
      if (transcript.includes("phhhh") || transcript.includes("puh")) {
        setBlown(true);
        recognition.stop();
      }
    };

    recognition.start();

    return () => recognition.abort();
  }, []);

  return (
    <div style={styles.wrapper}>
      <div style={styles.cakeWrapper}>
        {/* Candle */}
        <div style={styles.candle}>
          {!blown && <div style={styles.flame}></div>}
        </div>

        {/* Heart Cake */}
        <div style={styles.heart}></div>
        <div style={{ ...styles.heart, transform: "rotate(-45deg)" }}></div>
      </div>

      {blown && (
        <p style={styles.message}>
          🎉 Yay! You blew out the candle. Make a wish!
        </p>
      )}
    </div>
  );
}

const styles = {
  wrapper: {
    background: "#ffefdc",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "cursive",
  },
  cakeWrapper: {
    position: "relative",
    width: "200px",
    height: "180px",
    transform: "rotate(45deg)",
  },
  heart: {
    width: "100px",
    height: "100px",
    background: "pink",
    position: "absolute",
    borderRadius: "50%",
  },
  candle: {
    position: "absolute",
    top: "-40px",
    left: "85px",
    width: "10px",
    height: "40px",
    backgroundColor: "#333",
    borderRadius: "5px",
    zIndex: 2,
  },
  flame: {
    position: "absolute",
    top: "-15px",
    left: "-4px",
    width: "18px",
    height: "18px",
    backgroundColor: "orange",
    borderRadius: "50%",
    boxShadow: "0 0 20px 8px orange",
    animation: "flicker 0.2s infinite",
  },
  message: {
    marginTop: "30px",
    fontSize: "1.2rem",
    color: "#aa4466",
    animation: "fadeIn 1s ease-in-out",
  },
};

// Add global styles for animation in your index.css
/* 
@keyframes flicker {
  0% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.1); }
  100% { opacity: 1; transform: scale(1); }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
*/
