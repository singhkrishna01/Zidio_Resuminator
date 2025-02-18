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

import { SectionHints } from "./types";

const CertificationHints: SectionHints = {
  title: "How to show certifications",
  content: [
    { type: "p", body: "Adding certifications that you have done involving completing any accredited institution's course and passing it's requirements will help you to gain trust of the recruiters that you have right qualifications for the job" },
    { type: "p", body: "Please don't just describe the course. We recommend you to attach any certification proof(link provided) along with the course details" }
  ]
};

export default CertificationHints;
