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

export interface PublicationDataObject {
  _id: string;
  isHidden: boolean;
  authorNames?: string;
  articleTitle?: string;
  journalName?: string;
  volumeNumber?: string;
  issueNumber?: string;
  year?: string;
  pages?: string;
  format?: "MLA" | "APA";
  doi?: string;
}
