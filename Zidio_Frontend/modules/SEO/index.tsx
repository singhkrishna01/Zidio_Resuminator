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

import { NextSeo, NextSeoProps } from "next-seo";
import config from "./seo.config";
import { defaultSeoConfig } from "./default.config";

const SEO: React.FC<NextSeoProps> = ({
  title = defaultSeoConfig.title,
  description = defaultSeoConfig.description,
  ...rest
}) => {
  const effectiveTitle =
    title === defaultSeoConfig.title
      ? title
      : `${title} | ${defaultSeoConfig.title}`;
  return (
    <NextSeo
      title={effectiveTitle}
      description={description}
      openGraph={{ title, description, ...config.openGraph }}
      {...config}
      {...rest}
    />
  );
};

export default SEO;
