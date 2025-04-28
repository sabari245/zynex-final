// app/layout.tsx
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PrelineInitializer from '@/components/PrelineInitializer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Zynex Solutions - Helping people sell more online',
  description: 'At Zynex Solutions, we help online store owners convert more with our expertise in eCommerce, digital marketing, and ...',
  robots: 'max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  metadataBase: new URL('https://zynexsolutions.com'),
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

const InitialThemeScript = () => (
  <script
    dangerouslySetInnerHTML={{
      __html: `
(function() {
  const html = document.documentElement;
  const storedTheme = localStorage.getItem('hs_theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isLight = storedTheme === 'light' || (!storedTheme && !prefersDark) || (storedTheme === 'auto' && !prefersDark);
  const isDark = storedTheme === 'dark' || (!storedTheme && prefersDark) || (storedTheme === 'auto' && prefersDark);
  html.classList.remove('light', 'dark');
  if (isDark) { html.classList.add('dark'); }
  else { html.classList.add('light'); }
})();
`,
    }}
  />
);


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Add suppressHydrationWarning here
    <html lang="en" className="light" suppressHydrationWarning>
      <head>
        <InitialThemeScript />
        <link rel="shortcut icon" href="/favicon.ico" />
        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1948143092656196');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1948143092656196&ev=PageView&noscript=1"
          />
        </noscript>
        {/* End Meta Pixel Code */}
      </head>
      <body className={`${inter.className} bg-neutral-900`}>
        <Header />
        {children}
        <Footer />
        <PrelineInitializer />
      </body>
    </html>
  );
}