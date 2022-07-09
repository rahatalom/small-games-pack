import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import "./Keyboard.css";

type keyboardRows = "QWERTYUIOP" | "ASDFGHJKL" | "ZXCVBNM";

const keyboardKeys: keyboardRows[] = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];

interface KeyboardProps {
  word: string;
  wordArray: string[];
  setWord: Dispatch<SetStateAction<string>>;
  keyBoardColours: string[];
}

const colorObjInitialState: any = {
  a: "null",
  b: "null",
  c: "null",
  d: "null",
  e: "null",
  f: "null",
  g: "null",
  h: "null",
  i: "null",
  j: "null",
  k: "null",
  l: "null",
  m: "null",
  n: "null",
  o: "null",
  p: "null",
  q: "null",
  r: "null",
  s: "null",
  t: "null",
  u: "null",
  v: "null",
  w: "null",
  x: "null",
  y: "null",
  z: "null"
};

const getColorObject = (ArrayOfColors: string[], word: string, colorObj: any) => {
  const wordArray = word?.split("");
  const colorObjCopy = {...colorObj}
  const colors = ArrayOfColors[ArrayOfColors.length - 1];
  wordArray?.forEach((letter: string, index: number) => {
    colorObjCopy[letter] = colors[index];
  });

  return colorObjCopy;
};

const getStyle = (truth: string) => {
  switch (truth) {
    case "t":
      return "#6aaa64";
    case "a":
      return "#c9b458";
    case "f":
      return "#86888a";
    case "null":
      return undefined;
  }
};

export const Keyboard: React.FC<KeyboardProps> = ({
  word,
  wordArray,
  setWord,
  keyBoardColours,
}) => {
  const keyboardArray = keyboardKeys[0].split("");
  const keyboardArray1 = keyboardKeys[1].split("");
  const keyboardArray2 = keyboardKeys[2].split("");
  const [colorObj, setColorObj] = useState(colorObjInitialState);

  useEffect(() => {
    setColorObj(
      getColorObject(keyBoardColours, wordArray[wordArray.length - 1], colorObj)
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyBoardColours, wordArray]);

  console.log({ wordArray });
  console.log({ keyBoardColours });
  console.log({ colorObj });

  return (
    <div className="keyboard">
      <div className="keyboard-row">
        {keyboardArray.map((letter) => (
          <div
            style={{
              backgroundColor: getStyle(colorObj[letter.toLowerCase()]),
              color:  colorObj[letter.toLowerCase()] !== "null" ? "white" : "black",
            }}
            className="keyboard-button"
            onClick={() => setWord(word + letter.toLowerCase())}
          >
            {letter}
          </div>
        ))}
      </div>
      <div className="keyboard-row">
        {keyboardArray1.map((letter) => (
          <div
            style={{
              backgroundColor: getStyle(colorObj[letter.toLowerCase()]),
              color: colorObj[letter.toLowerCase()] !== "null" ? "white" : "black",
            }}
            className="keyboard-button"
            onClick={() => setWord(word + letter.toLowerCase())}
          >
            {letter}
          </div>
        ))}
      </div>
      <div className="keyboard-row">
        <div className="keyboard-button">ENTER</div>
        {keyboardArray2.map((letter) => (
          <div
            style={{
              backgroundColor: getStyle(colorObj[letter.toLowerCase()]),
              color:  colorObj[letter.toLowerCase()] !== "null" ? "white" : "black",
            }}
            className="keyboard-button"
            onClick={() => setWord(word + letter.toLowerCase())}
          >
            {letter}
          </div>
        ))}
        <div
          className="keyboard-button"
          onClick={() => setWord(word.slice(0, word.length - 1))}
        >
          ⬅
        </div>
      </div>
    </div>
  );
};
