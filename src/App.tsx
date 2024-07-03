import React from "react";
import IntroView from "./templates/views/introView";
import WelcomeView from "./templates/views/welcomeView";

function App() {
  return (
    <React.Fragment>
      <div className="relative w-full h-screen flex flex-col items-center">
        <WelcomeView />
        <IntroView />
      </div>
    </React.Fragment>
  );
}

export default App;
