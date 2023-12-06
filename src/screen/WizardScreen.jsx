import React from "react";
import Tabs from "../components/Tabs/Tabs";
import burgerImge from "./../assets/images/burger-img.png";

export default function WizardScreen() {
  return (
    <div className="flex items-center justify-items-center gap-8 w-3/4 mx-auto">
      <div className="w-3/4">
        <Tabs />
      </div>

      <div className="w-1/4">
        <img
          src={burgerImge}
          alt="This is burger image"
          className="w-full aspect-[4/3]"
        />
      </div>
    </div>
  );
}
