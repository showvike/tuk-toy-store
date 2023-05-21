import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `Tuk Toy Store | ${title}`;
  }, [title]);
};

export default useTitle;
