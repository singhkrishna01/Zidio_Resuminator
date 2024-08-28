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

import { Box, BoxProps } from "@chakra-ui/react";
import React from "react";

interface BodySectionBoxProps {
  label: string;
  ref?: React.Ref<HTMLDivElement>;
}

const BodySectionBox: React.FC<BoxProps & BodySectionBoxProps> = ({
  children,
  label,
  ref
}) => {
  return (
    <Box display="flex" aria-label={label} width="100%" ref={ref}>
      {children}
    </Box>
  );
};

export default BodySectionBox;
