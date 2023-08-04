import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OPOS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <script src="https://terminal.jup.ag/main-v1.js" data-preload /> */}
      <body
        style={{
          margin: "0",
        }}
        className={inter.className}
      >
        {children}
      </body>
    </html>
  );
}
