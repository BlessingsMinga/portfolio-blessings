import WhatsappLIve from "./components/WhatsappLIve";
import "./globals.css";


export const metadata = {
  title: "Blessings Minga | Full Stack Designer & Developer in Malawi ",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="google-site-verification" content="kbUndA4XesT6Vmn2AhkhFjsDaKmyMPinKvW5KVRo2TI" />
      <meta name="description" content="I'm a Malawi-based web developer and designer. I also work on graphics, UX/UI,
          branding, and data. I love using tech and creativity to solve problems and build cool things."></meta>
      <meta name="description" content="Software developer in Malawi, Hire a web developer in Lilongwe, Malawi tech freelancer, IT services Malawi"></meta>
      <body
        className={`container font-sans leading-8 
        overflow-x-hidden`}
      >
        {children}<WhatsappLIve />
      </body>
    </html>
  );
}
