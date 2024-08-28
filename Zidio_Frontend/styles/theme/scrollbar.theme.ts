/*
    Resuminator, Web App and the Website for Resuminator
    Copyright (C) 2024 Resuminator Authors

    This file is part of Resuminator.

    Resuminator is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    Resuminator is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.
.
*/

import { mode } from "@chakra-ui/theme-tools";

const ScrollBarTheme = (props) => ({
  ".resume-inputs::-webkit-scrollbar": {
    display: "none"
  },
  ".viewer::-webkit-scrollbar": {
    display: "none"
  },
  "::-webkit-scrollbar": {
    width: "10px"
  },
  "::-webkit-scrollbar-thumb": {
    transition: "0.2s all",
    background: mode("rgba(150,150,150,0.5)", "rgba(255,255,255,0.2)")(props),
    borderRadius: "10px"
  },
  "::-webkit-scrollbar-thumb:hover": {
    background: mode("rgba(150,150,150,0.8)", "rgba(150,150,150,0.5)")(props)
  },
  "::-webkit-scrollbar-track": {
    background: mode("rgba(150,150,150,0.3)", "rgba(150,150,150,0.1)")(props)
  }
});

export default ScrollBarTheme;
