---
title: Fidisys Invoice
description: An app to generate and share invoices instantly with the clients.
image: ./fidisys_invoice.png
theme: "#57D28A"
categories:
  - mobileapp
  - ui-ux
workTags:
  - title: Native Android
    themeColor: "#3DDAAB"
    themeBg: rgba(78, 251, 200, 0.3)
  - title: Figma
    themeColor: "#FF699B"
    themeBg: rgba(248, 101, 150, 0.3)
type: casestudy
seo:
  title: Fidisys Invoice
  description: We design and develop beautiful applications, experience and brands
    that breaks the barriers of time and burn into the memories of customers
    love.
  keywords:
    - Mobile Applications development
    - Web Applications Development
    - Chennai Startup
---
## Overview & Features

Fidisys Invoice mobile app helps freelancers, small business owners to create invoices in a minute and share with their clients seamlessly. To make it simple we ignored the user registration and chose android native platform to achieve PDF generation and designing items in the PDF.

The primary focus of this application is to allow users to create invoices irrespective of internet availability or registering themselves to the app. Hence the app even works offline allowing the users to create invoices. It also provides editing, deleting invoices, choosing currencies and the templates. Created invoices are saved as a PDF in mobile storage. Inbuilt share feature helps users to share invoices as an attachment to any emailing or messaging app.

## Problem & Solution

# SOLUTION

In the current scenario, communication across the globe is digitized. From purchases to payment everything is online. All cash transactions require proof of payment for both sellers and customers to track their transactions. In Fidisys we decided to cut down the effort put in by the professionals or freelancers who share invoices to their clients for every payment.

The idea was to provide a mobile application to the professionals whoever shares invoices. We made the number steps required to create the invoice as minimal as possible with elegant design. The generated invoice can be shared via any messaging applications available in the mobile.

## Development

# DEVELOPMENT

We have followed the Model-View-ViewModel pattern to keep app architecture simple, making the codebase robust and testable. App is written in KOTLIN and uses coroutines for performing heavy operations in the background. Invoice creation flow uses ViewPager2 and customised bottom app bar in the home page. Fastlane is integrated for deploying the apps to the play store.

## Challenges

# CHALLENGES

This app doesn’t utilize any third party libraries for generating PDF. Invoice Preview details are drawn on the canvas provided by the android framework itself and the PDF is being generated using default PDF Document API.

## Benefits

# BENEFITS

1. Saves time instead of searching for the templates from the web and editing it.
2. Network connectivity is not required unless you want to share the invoices.
3. Track all their invoices in one place.