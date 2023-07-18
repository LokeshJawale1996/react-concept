import React from "react";
import { useState, useEffect, useRef } from "react";

const SroringRef2 = () => {
  const [text, setText] = useState("");
  const previousTextRef = useRef("");

  useEffect(() => {
    previousTextRef.current = text;
  }, [text]);

  function handleBlur() {
    if (text !== previousTextRef.current) {
      console.log(
        `Text changed from "${previousTextRef.current}" to "${text}".`
      );
    }
  }

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default SroringRef2;
