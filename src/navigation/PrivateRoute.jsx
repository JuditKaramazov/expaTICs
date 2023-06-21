import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/GlobalStyles";
import SecondaryNavigation from "../components/SecondaryNavigation/SecondaryNavigation";
import { dark } from "../styles/Themes";

const PrivateRoute = ({ children }) => {
  const { currentUser } = useContext(AuthContext);

  return currentUser !== null ? (
    <>
      <GlobalStyles />
      <ThemeProvider theme={dark}>
        <SecondaryNavigation />
        {children}
      </ThemeProvider>
    </>
  ) : (
    <Navigate to="/login/" />
  );
};

export default PrivateRoute;
