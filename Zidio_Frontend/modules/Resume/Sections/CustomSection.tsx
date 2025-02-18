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

import { Text } from "@chakra-ui/layout";
import dynamic from "next/dynamic";
import React, { Fragment } from "react";
import DataRow from "../../../components/elements/DataRow";
import { dateDisplay, parseDate, sanitizeHTML } from "../../../utils";
import { useCustomSectionStore } from "../../UserInput/Custom/store";
import SectionBox, { SectionBoxProps } from "../components/SectionBox";
import SectionContent from "../components/SectionContent";
import SectionTitle from "../components/SectionTitle";
import TitleRow from "../components/TitleRow";
const BodyText = dynamic(() => import("../components/BodyText"));

interface CustomSectionLayoutProps {
  sectionKey: string;
}

const CustomSectionLayout: React.FC<
  CustomSectionLayoutProps & SectionBoxProps
> = ({ sectionKey, ...props }) => {
  const section = useCustomSectionStore(
    (state) =>
      state.sections.filter(
        (item) => item.header.toUpperCase() === sectionKey
      )[0]
  );

  const showBodyText = (content: string) => sanitizeHTML(content).length > 0;

  if (!section) return null;
  /*If the sectionKey mismatches then don't show section on resume
  FIXME: Can be updated to a better logic like - 
  if the section is not present on the inputs 
  or layout object of the resume then don't show.*/
  const { header, data: rawData, inputs, hasTitleRow, layout } = section;
  const data = rawData.filter((item) => !item.isHidden);

  const getSection = (itemId: string, inputId: string) => {
    const { type } = inputs.find((input) => input._id === inputId);
    const { values } = data.find((item) => item._id === itemId);

    switch (type) {
      case "TEXT":
        return <Text>{values[inputId]}</Text>;
      case "DATE": {
        const { start, end } = values[inputId];
        return <Text>{dateDisplay(start, end)}</Text>;
      }
      case "DESC": {
        const content = values[inputId].toString();
        return showBodyText(content) ? (
          <BodyText content={values[inputId].toString()} />
        ) : null;
      }
    }
  };

  return (
    <SectionBox aria-label={`${header} Layout`} {...props}>
      <SectionTitle>{header}</SectionTitle>

      {data.map((item) => (
        <SectionContent key={item._id}>
          {layout.map((row, index) => (
            <DataRow key={index}>
              {row.map((inputId) =>
                hasTitleRow && index === 0 ? (
                  <TitleRow key={inputId}>
                    {getSection(item._id, inputId)}
                  </TitleRow>
                ) : (
                  <Fragment key={inputId}>
                    {getSection(item._id, inputId)}
                  </Fragment>
                )
              )}
            </DataRow>
          ))}
        </SectionContent>
      ))}
    </SectionBox>
  );
};

export default CustomSectionLayout;
