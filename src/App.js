import React, { useState, useEffect, useRef } from "react";
import Header from "./main/Header";
import alanBtn from "@alan-ai/alan-sdk-web";
import "./main/main.css";
import FAQ from "./main/FAQ";
import Footer from './main/Footer'

function App() {
  const alanBtnInstance = useRef(null);

  const [index, setIndex] = useState(null);

  useEffect(() => {
    if (!alanBtnInstance.current) {
      alanBtnInstance.current = alanBtn({
        key: "547504a395fe6ed8c5aebdb6e9a2eac42e956eca572e1d8b807a3e2338fdd0dc/stage",
        onCommand: (commandData) => {
          if (commandData.command === "gotoFAQ") {
            setIndex(commandData.faqId - 1)
          }
        },
      });
    }
  }, []);

  return (
    <>
      <Header />
      <div className="alan-btn"></div>
      <FAQ index={index} setIndex={setIndex} />
      <Footer />
    </>
  );
}

export default App;
