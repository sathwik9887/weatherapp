import { useState } from "react";

function Main() {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [textColor, setTextColor] = useState("#1b1b1b");
  const [buttonStyle, setButtonStyle] = useState("white");

  function handleClick() {
    setBackgroundColor((prevColor) =>
      prevColor === "white" ? "#1b1b1b" : "white"
    );
    setTextColor((prevColor) =>
      prevColor === "#1b1b1b" ? "#ffa31a" : "#1b1b1b"
    );
    setButtonStyle((prevColor) =>
      prevColor === "white" ? "#1b1b1b" : "white"
    );
  }

  return (
    <>
      <section style={{ backgroundColor, color: textColor }}>
        <button
          onClick={handleClick}
          style={{
            backgroundColor: buttonStyle,
            color: textColor,
            border: `2px solid ${textColor}`,
          }}
        >
          White Theme
        </button>
      </section>
      <section className="content">
        <h1 className="heading">Welcome to A</h1>
      </section>
    </>
  );
}

export default Main;
