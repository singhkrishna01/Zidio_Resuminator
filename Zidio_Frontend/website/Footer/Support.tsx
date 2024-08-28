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

import { Stack } from "@chakra-ui/react";
import React from "react";
import TextLink from "../../components/common/TextLink";
import {
  COOKIE_POLICY,
  GUIDES,
  HELP_CENTER,
  LICENSE,
  PRIVACY_POLICY
} from "../../data/DocLinks";
import ListHeader from "./ListHeader";

const SupportLinks = [
  {
    text: "Help Center",
  },
  {
    text: "License",
  },
  {
    text: "Privacy Policy",
  },
  {
    text: "Cookie Policy",
  },
  // {
  //   text: "Guides",
  //   link: GUIDES
  // }
];

const Support = () => {
  return (
    <Stack>
      <ListHeader>Support</ListHeader>
      {SupportLinks.map((item) => (
        <TextLink
          key={item.text}
          text={item.text}
          color="blue.100"
          fontSize="sm"
        />
      ))}
    </Stack>
  );
};

export default Support;
