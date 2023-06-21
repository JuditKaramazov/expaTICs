import { ThemeProvider } from "styled-components";
import { light } from "../../styles/Themes";
import GlobalStyles from "../../styles/GlobalStyles";
import SecondaryNavigation from "../SecondaryNavigation/SecondaryNavigation";

function PrivateLayout({ children }) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={light}>
        <SecondaryNavigation />
        {children}
      </ ThemeProvider>
    </>
  );
}

export default PrivateLayout;
