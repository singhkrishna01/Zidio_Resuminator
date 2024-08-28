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

import { Box } from "@chakra-ui/layout";
import React from "react";
import {
  DragDropContext,
  DragDropContextProps,
  Droppable
} from "react-beautiful-dnd";

interface Props {
  droppableId: string;
}

const DndWrapper: React.FC<Props & DragDropContextProps> = ({
  droppableId,
  children,
  ...props
}) => {
  return (
    <DragDropContext {...props}>
      <Droppable droppableId={droppableId}>
        {(provided) => (
          <Box {...provided.droppableProps} ref={provided.innerRef}>
            {children}
            {provided.placeholder}
          </Box>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DndWrapper;
