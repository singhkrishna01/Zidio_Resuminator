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

import { Text, TextProps } from "@chakra-ui/layout";
import Link from "next/link";

interface Props {
  href: string;
}

const LinkText: React.FC<Props & TextProps> = ({
  href = "",
  children,
  ...rest
}) => {
  return (
    <Link href={href}>
      <Text
        as="span"
        cursor="pointer"
        _hover={{ textDecorationLine: "underline" }}
        {...rest}
      >
        {children}
      </Text>
    </Link>
  );
};

export default LinkText;
