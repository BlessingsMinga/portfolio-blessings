import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://blessingsminga.vercel.app"),
  title: "Blessings Minga | Full Stack Designer & Developer in Malawi",
  description:
    "Software developer in Malawi, Hire a web developer in Lilongwe, Malawi tech freelancer, IT services Malawi - Full Stack Developer & Designer offering web development, graphics design, UX/UI, branding, and data solutions.",
  openGraph: {
    title: "Blessings Minga | Full Stack Designer & Developer in Malawi",
    description:
      "Software developer in Malawi offering web development, graphics design, UX/UI, branding, and data solutions.",
    url: "https://blessingsminga.vercel.app",
    siteName: "Blessings Minga Portfolio",
    images: [
      {
        url: "/work-1.png",
        width: 1200,
        height: 630,
        alt: "Blessings Minga Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blessings Minga | Full Stack Designer & Developer in Malawi",
    description:
      "Software developer in Malawi offering web development, graphics design, UX/UI, branding, and data solutions.",
    images: ["/work-1.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <meta
          name="google-site-verification"
          content="kbUndA4XesT6Vmn2AhkhFjsDaKmyMPinKvW5KVRo2TI"
        />
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body className="font-sans leading-8 overflow-x-hidden">
        {/* Skip to content link for keyboard users */}
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <main id="main-content">{children}</main>
      </body>
    </html>
  );
}