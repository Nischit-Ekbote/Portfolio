// layout.js
import { Inter } from "next/font/google";
import "./globals.css";
import NamasteWrapper from "@/components/namaste/NamasteWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {<NamasteWrapper>{children}</NamasteWrapper>}
      </body>
    </html>
  );
}