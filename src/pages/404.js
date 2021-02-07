import { navigate } from "gatsby";
import { useEffect } from "react";

// redirect user to main page

const NotFoundPage = () => {
  useEffect(() => {
    navigate("/");
  }, []);

  return null;
};

export default NotFoundPage;
