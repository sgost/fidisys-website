import CMS from "netlify-cms-app";
import React, { useState, useEffect } from 'react';
import { StyleSheetManager } from 'styled-components';
import { GlobalStyle } from '../styles/global-styles';

import HomeBannerPreview from "./preview-templates/HomeBannerPreview";
import ServicesPreview from "./preview-templates/ServicesPreview";
import ClientsPreview from "./preview-templates/ClientsPreview";
import HomeWorksPreview from "./preview-templates/HomeWorksPreview";
import TestimonialsPreview from "./preview-templates/TestimonialsPreview";
import FooterPreview from "./preview-templates/FooterPreview"

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
