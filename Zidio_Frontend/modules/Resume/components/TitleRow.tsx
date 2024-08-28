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

import Icon from "@chakra-ui/icon";
import { Text, TextProps } from "@chakra-ui/layout";
import { ComponentWithAs } from "@chakra-ui/system";
import React, { useContext } from "react";
import { FiExternalLink } from "react-icons/fi";
import { StylePropsContext } from "../../Design/StylePropsProvider";

const TitleRow: ComponentWithAs<"p", TextProps> = ({ children, ...props }) => {
  const titleRowProps = useContext(StylePropsContext).titleRowProps;
  const hoverProps = props.href && {
    _hover: { textDecoration: "underline" },
    transition: "0.2s all"
  };

  return (
    <Text aria-label="Title Row" {...titleRowProps} {...props} {...hoverProps}>
      {children}
      {props.href && (
        <span>
          <Icon as={FiExternalLink} mx="1" height="0.8rem" />
        </span>
      )}
    </Text>
  );
};

export default TitleRow;
