import { useState } from "react";
import JewelleryPreference from "./JewelleryPreference";
import RingSize from "./RingSize";

export default function ConfigurationPopup() {
const [showJewlleryPref , setShowJewlleryPref] = useState(true)
const [showRingSize , setShowRingSize] = useState(false)

const showJewelleryPrefMenu  = () => {
    setShowRingSize(false)
    setShowJewlleryPref(true)
}

const showRingSizeMenu  = () => {
    setShowJewlleryPref(false)
    setShowRingSize(true)
}

  return (
    <div className="flex justify-center items-center w-full h-hull absolute">
      <div className="w-screen h-screen absolute bg-[#000000] opacity-50"></div>
      <div className="flex justify-between items-center z-50 bg-white w-[90%] h-[700px]">
        <div id="studioMode" className="w-[50%] h-full"></div>
        <div className="w-[50%] h-full flex flex-start flex-col items-center gap-[20px] border border-black">
            <ul className=" flex flex-start  items-center w-full pt-[40px] pl-[15px] gap-[20px] pr-[15px]">
                <li onClick={showJewelleryPrefMenu} className = {showJewlleryPref ? ' border-b-4 border-[#7eb046]' : null}>Jewellery Preference</li>
                <li onClick={showRingSizeMenu} className = {showRingSize ? ' border-b-4 border-[#7eb046]' : null}>Ring Size</li>
            </ul>
            <div>
                {showJewlleryPref ? <JewelleryPreference/> : null}
                {showRingSize ? <RingSize/> : null}
            </div>
        </div>
      </div>
    </div>
  );
}
