import React from "react";
import MockupButton from "./MockupButton";
import AppleIcon from "../images/AppleIcon";
import PlayStoreIcon from "../images/PlayStoreIcon";

const LayoutButton = () => {
  return (
    <div className="flex flex-wrap gap-4 lg:gap-8 justify-start">
      <MockupButton
        id={1}
        Svg={AppleIcon}
        text="Consiguelo en"
        description="App Store"
      />
      <MockupButton
        id={1}
        Svg={PlayStoreIcon}
        text="Disponible en"
        description="Google Play"
      />
    </div>
  );
};

export default LayoutButton;
