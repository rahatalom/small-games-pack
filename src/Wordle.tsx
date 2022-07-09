import { Button, Input } from "antd";
import React, { Dispatch, SetStateAction, useState } from "react";
import { WordleLetters } from "./WordleLetters";
import { mywordList } from "./mywordList";
import { Keyboard } from "./Keyboard";

const myword = mywordList[Math.floor(Math.random() * mywordList.length)];

const wordLetterCheck = (input: string) => {
  const mywordArray = myword.split("");
  const wordArray = input.split("");
  const truthArray = [];
  for (let i = 0; i < wordArray.length; i++) {
    // TO DO add logic to handle amber tiles
    // let [letterOccurance1,letterOccurance2] = [0,0]
    // const wordSoFar = wordArray.slice(0, i+1)
    // mywordArray.forEach((letter) => letter === wordArray[i]? letterOccurance1++: null)
    // wordSoFar.forEach((letter) => letter === wordArray[i]? letterOccurance2++: null)
    const isMatch = wordArray[i] === mywordArray[i];
    const isInWord = mywordArray.includes(wordArray[i]);
    isMatch
      ? truthArray.push("t")
      : isInWord
      ? truthArray.push("a")
      : truthArray.push("f");
  }

  return truthArray;
};

export const Wordle: React.FC = () => {
  const [word, setWord]: [string, Dispatch<SetStateAction<string>>] =
    useState("");
  const [wordArray, setWordArray]= useState<string[]>([]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [triesLeft, setTriesLeft] = useState(6);
  const [letterCorrectArray, setLetterCorrectArray] = useState<any>([]);

  return (
    <div style={{ textAlign: "center", color: "gray" }}>
      <h1>
        Wordle
      </h1>
      <div
        style={{
          borderRadius: "60px",
          backgroundColor: "whitesmoke",
          paddingTop: "40px",
          paddingBottom: "60px",
          margin: " 0 160px",
        }}
      >
        <div
          style={{
            border: "solid 2px",
            margin: "0 350px",
            borderRadius: "60px",
          }}
        >
          <Input
            style={{
              backgroundColor: "inherit",
              color: "gray",
              border: "none",
              cursor: "pointer",
              textTransform: "uppercase",
            }}
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
          {word.length === 5 && !isCorrect && triesLeft !== 0 ? (
            <Button
              style={{
                margin: "6px",
                padding: "4px 6px",
                borderRadius: "60px",
              }}
              onClick={() => {
                setIsCorrect(myword === word);
                setTriesLeft(triesLeft - 1);
                setLetterCorrectArray([
                  ...letterCorrectArray,
                  wordLetterCheck(word),
                ]);
                setWordArray([...wordArray, word]);
                setWord("");
              }}
            >
              Go!
            </Button>
          ) : (
            <Button
              style={{
                margin: "6px",
                padding: "4px 6px",
                borderRadius: "60px",
              }}
              disabled
            >
              Go!
            </Button>
          )}
        </div>

        {isCorrect ? (
          <h3>Correct, well done!</h3>
        ) : (
          <h3>Guess my word tries left: {triesLeft}</h3>
        )}
        {wordArray.map((userWord: string, index: number) => (
          <div style={{ display: "block" }}>
            <WordleLetters
              letterCorrectArray={letterCorrectArray[index]}
              word={userWord}
            />
          </div>
        ))}
        <Keyboard
          word={word}
          wordArray={wordArray}
          setWord={setWord}
          keyBoardColours={letterCorrectArray}
        />

        {triesLeft === 0 ? <h2>The word was: {myword} </h2> : null}
      </div>
    </div>
  );
};
