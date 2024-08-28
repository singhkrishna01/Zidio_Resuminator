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

import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import Typography from "@tiptap/extension-typography";
import { Content, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

/**
 * Custom hook for using the Tiptap editor and get the contents as output
 * @param {Content} content - Tiptap Content object
 * @returns Tiptap Editor instance and Output in specified format
 */
export const useViewer = (content: Content) => {
  const editor = useEditor({
    extensions: [StarterKit, Typography, TextAlign, Link],
    content,
    editable: false,
    editorProps: {
      attributes: {
        class: "viewer"
      }
    }
  });

  return editor;
};
