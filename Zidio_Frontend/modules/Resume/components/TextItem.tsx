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

import { useColorMode } from "@chakra-ui/color-mode";
import { Text, TextProps } from "@chakra-ui/layout";
import { ComponentWithAs } from "@chakra-ui/system";
import React, { useContext } from "react";
import { StylePropsContext } from "../../Design/StylePropsProvider";

const TextItem: ComponentWithAs<"p", TextProps> = ({ children, ...rest }) => {
  const { body } = useContext(StylePropsContext).font;
  const colorMode = useColorMode().colorMode;

  return (
    <Text
      color={colorMode === "light" ? "gray.600" : "gray.400"}
      {...body}
      {...rest}
    >
      {children}
    </Text>
  );
};

export default TextItem;
