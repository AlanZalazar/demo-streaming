import { useEffect, useState } from "react";
import axios from "axios";

export default function useEntries(programType = "series") {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json"
      )
      .then((res) => {
        const filtered = res.data.entries
          .filter(
            (item) =>
              item.programType === programType && item.releaseYear >= 2010
          )
          .sort((a, b) => a.title.localeCompare(b.title))
          .slice(0, 20);
        setEntries(filtered);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [programType]);

  return { entries, loading };
}
