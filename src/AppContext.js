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

  const validateString = (str) => {
    const regex = /[À-ú]+/g;
    const test = regex.test(str);
    return test;
  };

  const encryptLetter = (letter) => {
    if (!code[letter]) return letter;
    return code[letter];
  };

  const encrypt = (text) => {
    const validate = validateString(text);
    if (!text) {
      setError("Preencha com texto válido");
      return false;
    } else if (validate) {
      setError("Texto possui caracter(es) inválido(s)");
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
    const validate = validateString(text);
    if (!text) {
      setError("Preencha com texto válido");
      return false;
    } else if (validate)
      return setError("Texto possui caracter(es) inválido(s)");
    for (const k in code) {
      if (text.includes(code[k])) {
        text = text.replaceAll(code[k], k);
      }
    }
    setError(false);
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
