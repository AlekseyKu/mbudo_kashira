// src\app\layout.tsx
// import Script from 'next/script'
import type { Metadata } from "next";
import './assets/css/materialdesignicons.min.css'
import './assets/scss/tailwind.scss'
import './globals.css'

import CookieConsent from './components/cookie-popup'
import { AccessibilityProvider } from './contexts/accessibility-context'
import AccessibilityPanel from './components/accessibility/accessibility-panel'
import AccessibilityButton from './components/accessibility/accessibility-button'
import Magnifier from './components/accessibility/magnifier'


export const metadata: Metadata = {
  title: "Кашира - Спортивная школа",
  description: "МБУДО СШ «Кашира»",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light scroll-smooth" dir="ltr">
      <head>
        <meta name="viewport" content="initial-scale=1.0, user-scalable=no, maximum-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* <script
          // src="https://api-maps.yandex.ru/2.1/?apikey=7646d1b6-d7b4-4af9-b497-7b9849d3330f&lang=ru_RU"
          src="https://api-maps.yandex.ru/v3/?apikey=65578e18-7813-425d-9859-200fb55f33d0&lang=ru_RU"
          type="text/javascript"
          async
          // strategy="beforeInteractive"
        /> */}
      </head>
      <body
        className={` dark:bg-slate-900`}
      >
        <AccessibilityProvider>
          {children}
          <AccessibilityButton />
          <AccessibilityPanel />
          <Magnifier />
          <CookieConsent />
        </AccessibilityProvider>
      </body>
    </html>
  );
}
