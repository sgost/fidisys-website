import CMS from "netlify-cms-app";
import React, { useState, useEffect } from 'react';
import { StyleSheetManager } from 'styled-components';
import { GlobalStyle } from '../styles/global-styles';

import HomeBannerPreview from "./preview-templates/HomeBannerPreview";
import ServicesPreview from "./preview-templates/ServicesPreview";
import ClientsPreview from "./preview-templates/ClientsPreview";
import HomeWorksPreview from "./preview-templates/HomeWorksPreview";
import TestimonialsPreview from "./preview-templates/TestimonialsPreview";
import FooterPreview from "./preview-templates/FooterPreview";

import TechBannerPreview from "./preview-templates/TechBannerPreview";
import ToolsPreview from "./preview-templates/TechToolsPreview";
import PartnerPreview from "./preview-templates/PartnerPreview";

import AboutBannerPreview from "./preview-templates/AboutBannerPreview";
import HighlightsPreview from "./preview-templates/HighlightsPreview";
import ActivitiesPreview from "./preview-templates/ActivitiesPreview";
import FidishowPreview from "./preview-templates/FidishowPreview";

import BlogPreview from "./preview-templates/BlogPreview";

import SitemapPreview from "./preview-templates/SitemapPreview";

import ContactPreview from "./preview-templates/ContactPreview"

import WorksPreview from "./preview-templates/WorksPreview"

function StyleInjector({ children }) {
  const [iframeRef, setIframeRef] = useState(null);

  useEffect(() => {
    const iframe = document.getElementsByTagName('iframe')[0];
    const iframeHeadElem = iframe.contentDocument.head;
    setIframeRef(iframeHeadElem);
  }, []);

  return (
    iframeRef && (
      <StyleSheetManager target={iframeRef}>
        <>
        {children}<GlobalStyle />
        </>
      </StyleSheetManager>
    )
  );
}

export default function withStyledComponentsRendered(Comp) {
  return props => (
    <StyleInjector>
      <Comp {...props} />
    </StyleInjector>
  );
}

CMS.registerPreviewTemplate("homeBanner", withStyledComponentsRendered(HomeBannerPreview));
CMS.registerPreviewTemplate("homeServices", withStyledComponentsRendered(ServicesPreview));
CMS.registerPreviewTemplate("homeClients", withStyledComponentsRendered(ClientsPreview));
CMS.registerPreviewTemplate("homeWorks", withStyledComponentsRendered(HomeWorksPreview));
CMS.registerPreviewTemplate("testimonials", withStyledComponentsRendered(TestimonialsPreview));
CMS.registerPreviewTemplate("footer", withStyledComponentsRendered(FooterPreview));

CMS.registerPreviewTemplate("techBanner", withStyledComponentsRendered(TechBannerPreview));
CMS.registerPreviewTemplate("techTools", withStyledComponentsRendered(ToolsPreview));
CMS.registerPreviewTemplate("partnership", withStyledComponentsRendered(PartnerPreview));

CMS.registerPreviewTemplate("aboutBanner", withStyledComponentsRendered(AboutBannerPreview));
CMS.registerPreviewTemplate("highlights", withStyledComponentsRendered(HighlightsPreview));
CMS.registerPreviewTemplate("activities", withStyledComponentsRendered(ActivitiesPreview));
CMS.registerPreviewTemplate("fidishow", withStyledComponentsRendered(FidishowPreview));

CMS.registerPreviewTemplate("blog", withStyledComponentsRendered(BlogPreview));

CMS.registerPreviewTemplate("sitemap", withStyledComponentsRendered(SitemapPreview));

CMS.registerPreviewTemplate("contact", withStyledComponentsRendered(ContactPreview));

CMS.registerPreviewTemplate("works", withStyledComponentsRendered(WorksPreview));
