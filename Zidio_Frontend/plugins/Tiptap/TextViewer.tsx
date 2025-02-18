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
import { Content, EditorContent } from "@tiptap/react";
import { useEffect } from "react";
import { useViewer } from "./hooks/useViewer";

export interface TiptapProps {
  content: Content | string;
}

const TextViewer: React.FC<TiptapProps> = ({ content, ...props }) => {
  const editor = useViewer(content);

  useEffect(() => {
    if (editor) {
      editor.commands.setContent(content);
    }
  }, [editor, content]);

  return (
    <Box {...props}>
      <EditorContent editor={editor} />
    </Box>
  );
};

export default TextViewer;
