import type { Metadata } from "next";
import { Bricolage_Grotesque as Brico } from "next/font/google";
import "./globals.css";

const font = Brico({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Himanshu Sahu",
  description: "Hi, I am Himanshu a Full-stack Developer. Nice to meet You 😉",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
