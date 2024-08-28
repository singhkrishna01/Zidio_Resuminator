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

import { Box } from "@chakra-ui/react";
import PageToggle, { PageOptions } from "./PageToggle";
import PrivacyNotice from "./PrivacyNotice";

const AuthFormFooter: React.FC<{ page: PageOptions }> = ({ page }) => {
  return (
    <Box
      textAlign="center"
      my="4"
      fontSize={{ base: "sm", md: "md" }}
      height="8rem"
    >
      <PageToggle page={page} />
      <PrivacyNotice />
    </Box>
  );
};

export default AuthFormFooter;
