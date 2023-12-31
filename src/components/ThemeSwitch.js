import React from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/outline";
import { useTheme } from "./ThemeContext";
import useSound from 'use-sound';


export default function ThemeSwitch() {
    const { theme, toggleTheme } = useTheme();

    const [playOn] = useSound(
      '/static/sounds/switchOn.ogg',
      { volume: 0.25 }
    );

    const [playOff] = useSound(
      '/static/sounds/switchOff.ogg',
      { volume: 0.25 }
    );


    return (
      <button
        className="bg-gray-100 z-10 fixed bottom-5 md:top-5 right-5 bg-white w-[3rem] h-[3rem] rounded-full flex justify-center items-center dark:bg-gray-900"
        onClick={() => {if(theme=== "dark") playOn(); else playOff(); toggleTheme(); }}
      >
        {theme === "light" ? <SunIcon className="h-7 w-7" /> : <MoonIcon className="h-7 w-7" />}
      </button>
    );
  }
  