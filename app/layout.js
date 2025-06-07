import WhatsappLIve from "./components/WhatsappLIve";
import "./globals.css";


export const metadata = {
  title: "Welcome to my portfolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <meta name="google-site-verification" content="kbUndA4XesT6Vmn2AhkhFjsDaKmyMPinKvW5KVRo2TI" />
      <body
        className={`font-sans leading-8 
        overflow-x-hidden`}
      >
        {children}<WhatsappLIve />
      </body>
    </html>
  );
}
