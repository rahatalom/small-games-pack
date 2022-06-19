import React, { Dispatch, SetStateAction } from "react";
import "./Keyboard.css";

type keyboardRows = "QWERTYUIOP" | "ASDFGHJKL" | "ZXCVBNM";

const keyboardKeys: keyboardRows[] = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];

interface KeyboardProps{
    word: any
    setWord: Dispatch<SetStateAction<string>>
}

export const Keyboard: React.FC<KeyboardProps> = ({word, setWord }) => {
  const keyboardArray = keyboardKeys[0].split("");
  const keyboardArray1 = keyboardKeys[1].split("");
  const keyboardArray2 = keyboardKeys[2].split("");

  return (
    <div className="keyboard">
      <div className="keyboard-row">
        {keyboardArray.map((letter) => (
          <div className="keyboard-button" onClick={() => setWord(word+letter.toLowerCase())}>{letter}</div>
        ))}
      </div>
      <div className="keyboard-row">
        {keyboardArray1.map((letter) => (
          <div className="keyboard-button" onClick={() => setWord(word+letter.toLowerCase())}>{letter}</div>
        ))}
      </div>
      <div className="keyboard-row">
       <div className="keyboard-button" >ENTER</div>
        {keyboardArray2.map((letter) => (
          <div className="keyboard-button" onClick={() => setWord(word+letter.toLowerCase())}>{letter}</div>
        ))}
       <div className="keyboard-button" onClick={() => setWord(word.slice(0, word.length-1))}>⬅</div>
      </div>
    </div>
  );
};
