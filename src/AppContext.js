import React from "react";

const code = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat",
};

export const AppContext = React.createContext();

export const AppStorage = ({ children }) => {
  const [textToCode, setTextToCode] = React.useState("");
  const [error, setError] = React.useState(null);

  const encryptLetter = (letter) => {
    if (!code[letter]) return letter;
    return code[letter];
  };

  const encrypt = (text) => {
    if (!text) {
      setError("Preencha com texto válido");
      return false;
    }
    let encryptText = "";
    for (let i = 0; i < text.length; i++) {
      encryptText += encryptLetter(text[i]);
    }
    setError(false);
    return encryptText;
  };

  const decrypt = (text) => {
    if (!text) {
      setError("Preencha com texto válido");
      return false;
    }
    for (const k in code) {
      if (text.includes(code[k])) {
        text = text.replaceAll(code[k], k);
      }
    }
    return text;
  };

  return (
    <AppContext.Provider
      value={{ textToCode, setTextToCode, error, encrypt, decrypt }}
    >
      {children}
    </AppContext.Provider>
  );
};
