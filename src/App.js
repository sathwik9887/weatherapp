import React from "react";
import { accordionData } from "./utils/content";
import Main from "./Main";

function App() {
  return (
    <div>
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Main key={title} title={title} content={content} />
        ))}
      </div>
    </div>
  );
}

export default App;
