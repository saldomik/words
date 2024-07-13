import { useState, useEffect } from "react";

export default function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    const listener = () => setMatches(mediaQuery.matches);
    mediaQuery.addListener(listener);

    return () => mediaQuery.removeListener(listener);
  }, [query]);

  return matches;
}