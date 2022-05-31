import React from "react";

interface WordleLettersProps {
  letterCorrectArray: [];
  word: string;
}

export const WordleLetters: React.FC<WordleLettersProps> = ({
  letterCorrectArray,
  word,
}) => {
  return (
    <>
      {letterCorrectArray.map((x: string, index: number) =>
        x === "t" ? (
          <div
            style={{
              backgroundColor: "#6aaa64",
              display: "inline-block",
              minWidth: "26px",
              padding: "3px 6px",
              margin: "2px",
              textTransform: "uppercase",
              color: "whitesmoke",
              fontSize: "1.5rem",
              lineHeight: "2rem",
              fontWeight: "bold",
            }}
          >
            {word[index]}
          </div>
        ) : x === "a" ? (
          <div
            style={{
              backgroundColor: "#c9b458",
              display: "inline-block",
              minWidth: "26px",
              padding: "3px 6px",
              margin: "2px",
              textTransform: "uppercase",
              color: "whitesmoke",
              fontSize: "1.5rem",
              lineHeight: "2rem",
              fontWeight: "bold",
            }}
          >
            {word[index]}
          </div>
        ) : (
          <div
            style={{
              backgroundColor: "#86888a",
              display: "inline-block",
              minWidth: "26px",
              padding: "3px 6px",
              margin: "2px",
              textTransform: "uppercase",
              color: "whitesmoke",
              fontSize: "1.5rem",
              lineHeight: "2rem",
              fontWeight: "bold",
            }}
          >
            {word[index]}
          </div>
        )
      )}
    </>
  );
};
