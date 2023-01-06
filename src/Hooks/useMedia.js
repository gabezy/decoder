import React from "react";

const useMedia = (media) => {
  const [match, setMatch] = React.useState(null);

  React.useEffect(() => {
    const handleChangeMatch = () => {
      const { matches } = matchMedia(media);
      setMatch(matches);
    };
    handleChangeMatch();
    window.addEventListener("resize", handleChangeMatch);
    return () => window.removeEventListener("resize", handleChangeMatch);
  }, [media]);

  return match;
};

export default useMedia;
