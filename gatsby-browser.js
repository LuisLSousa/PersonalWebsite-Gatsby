import React from "react";
import PropTypes from "prop-types";

import { ThemeProvider } from "./src/context/theme";

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
);

wrapRootElement.propTypes = {
  element: PropTypes.node.isRequired,
};