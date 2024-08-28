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

import { Center, Text } from "@chakra-ui/react";
import React from "react";
import SectionLayout from "../common/SectionLayout";
import MainHeading from "./MainHeading";
import PrimaryCTA from "./PrimaryCTA";
import Subtext from "./Subtext";

const Hero = () => {
  return (
    <SectionLayout as={Center} flexDir="column" aria-label="Hero">
      <MainHeading />
      <Subtext />
      <PrimaryCTA mb="2" />
      <Text mb="4" fontSize="sm" color="blue.600">
        Yes, all features are completely free!
      </Text>
    </SectionLayout>
  );
};

export default Hero;
