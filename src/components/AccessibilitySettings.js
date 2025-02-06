// src/components/AccessibilitySettings.js
import React, { useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

const AccessibilitySettings = () => {
  const [largeText, setLargeText] = useState(false);
  const [highContrast, setHighContrast] = useState(false);

  const { transcript, listening, resetTranscript } = useSpeechRecognition();

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return <span>Your browser does not support voice recognition.</span>;
  }

  const toggleLargeText = () => {
    setLargeText(!largeText);
  };

  const toggleHighContrast = () => {
    setHighContrast(!highContrast);
  };

  const startListening = () => {
    SpeechRecognition.startListening({ continuous: false });
  };

  return (
    <div
      style={{
        fontSize: largeText ? "1.5em" : "1em",
        background: highContrast ? "#000" : "#fff",
        color: highContrast ? "#fff" : "#000",
        padding: "20px",
      }}
    >
      <h2>Accessibility Settings</h2>
      <div>
        <button onClick={toggleLargeText}>
          {largeText ? "Disable Large Text" : "Enable Large Text"}
        </button>
      </div>
      <div>
        <button onClick={toggleHighContrast}>
          {highContrast ? "Disable High Contrast" : "Enable High Contrast"}
        </button>
      </div>
      <div style={{ marginTop: "20px" }}>
        <h3>Voice Navigation Demo</h3>
        <button onClick={startListening}>
          {listening ? "Listening..." : "Start Voice Command"}
        </button>
        <button onClick={resetTranscript} style={{ marginLeft: "10px" }}>
          Reset
        </button>
        <p><strong>Transcript:</strong> {transcript}</p>
      </div>
    </div>
  );
};

export default AccessibilitySettings;
