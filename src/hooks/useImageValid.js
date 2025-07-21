import { useState, useEffect } from "react";
import axios from "axios";

export function useImageValid(url) {
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const checkImage = async () => {
      try {
        const res = await axios.head(url);
        const contentType = res.headers["content-type"];
        if (isMounted) {
          setIsValid(contentType && contentType.startsWith("image/"));
        }
      } catch (error) {
        if (isMounted) setIsValid(false);
      }
    };

    if (url) checkImage();

    return () => {
      isMounted = false;
    };
  }, [url]);

  return isValid;
}
