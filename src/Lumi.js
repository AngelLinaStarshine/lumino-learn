import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { FaFire } from "react-icons/fa"; 

const Lumi = () => {
  const [visible, setVisible] = useState(true); // To control the visibility of the flame
  const [chatVisible, setChatVisible] = useState(false); // To control the visibility of the chat window

  // Function to handle the "Ask" button click and show the chat window
  const handleAskClick = () => {
    setVisible(false); // Hide the flame after clicking "Ask"
    setChatVisible(true); // Show the chat window
  };

  return (
    <Container>
      {/* Flame Icon */}
      {visible && (
        <FireIcon
          initial={{ scale: 1, opacity: 0.8 }}
          animate={{
            scale: [1, 1.1, 0.9, 1],
            opacity: [0.8, 1, 0.6, 0.8],
            color: ["#ff4500", "#ff6347", "#ffa500", "#ff4500"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          <FaFire />
        </FireIcon>
      )}

      {/* Ask Button (appears after flame disappears) */}
      {!visible && !chatVisible && (
        <button onClick={handleAskClick} style={askButtonStyle}>
          Ask
        </button>
      )}

      {/* Chat Window */}
      {chatVisible && (
        <ChatWindow>
          <ChatHeader>
            <h3>Chat Assistance</h3>
            <button onClick={() => setChatVisible(false)}>Close</button>
          </ChatHeader>
          <ChatContent>
            <p>How can I assist you today?</p>
            {/* Add more chat functionality here */}
          </ChatContent>
        </ChatWindow>
      )}
    </Container>
  );
};

export default Lumi;

// Styled Components
const Container = styled.div`
  position: fixed;
  bottom: 10%;
  right: 10%;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FireIcon = motion(styled.div`
  font-size: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ff4500; /* Base fire color */
  animation: glow 2s infinite alternate;

  @keyframes glow {
    0% {
      filter: drop-shadow(0 0 5px #ff4500);
    }
    100% {
      filter: drop-shadow(0 0 15px #ffa500);
    }
  }
`);

const askButtonStyle = {
  backgroundColor: "#ffa500",
  padding: "10px 20px",
  border: "none",
  borderRadius: "5px",
  color: "#fff",
  cursor: "pointer",
  fontSize: "16px",
  zIndex: 1000,
};

const ChatWindow = styled.div`
  position: fixed;
  bottom: 15%;
  right: 5%;
  width: 300px;
  background-color: #fff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 10px;
  z-index: 1001;

  button {
    background: #ff4500;
    border: none;
    border-radius: 5px;
    color: white;
    padding: 5px;
    cursor: pointer;
    font-size: 12px;
    margin-top: 10px;

    &:hover {
      background: #ffa500;
    }
  }
`;

const ChatHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #002855;
  color: white;
  padding: 10px;
  border-radius: 5px;
  font-size: 14px;
`;

const ChatContent = styled.div`
  margin-top: 10px;
  font-size: 14px;
  color: #002855;

  p {
    margin-bottom: 10px;
  }
`;
