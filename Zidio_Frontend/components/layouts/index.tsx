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

import { Box, BoxProps } from "@chakra-ui/layout";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

interface Props {
  hasHeaderHidden?: boolean;
}

const Layout: React.FC<Props & BoxProps> = ({
  hasHeaderHidden = false,
  children,
  ...props
}) => {
  return (
    <Box
      display="flex"
      flexDir="column"
      justifyContent="space-between"
      minH="100vh"
    >
      {!hasHeaderHidden && <Header />}
      <Box
        px={{ md: "4rem", lg: "7rem" }}
        display="flex"
        alignItems="flex-start"
        justifyContent="space-between"
        {...props}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
