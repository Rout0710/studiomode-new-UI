import "./App.css";
import { useState } from "react";
import Button from "./components/Button";
import ConfigurationPopup from "./components/ConfigurationPopup";

function App() {
  const [showPopup, setShowPopUp] = useState(false);

  const showConfigPopup = () => {
    setShowPopUp(true)
  }

  return (
    <div className="flex items-center justify-center bg-black h-[100vh] w-[100vw]">
      <div className="flex items-center justify-center relative">
        <div className="bg-white w-[700px] h-[500px]">
         </div>
        <Button buttonfunction={showConfigPopup} buttonclass={'absolute pt-[15px] pb-[15px] pl-[25px] pr-[25px] flex items-center justify-center bg-black  bottom-[10px] right-[10px] w-[90px] h-[25px] cursor-pointer rounded-[50px]'}  buttontext={'Customise'} buttontextclass ={'text-white text-sm'}/>
      </div>
      {showPopup ? (
        <ConfigurationPopup/>
      ) : null}
    </div>
  );
}

export default App;
