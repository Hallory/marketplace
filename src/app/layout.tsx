import type { Metadata } from "next";
import "./globals.css";
import ReduxProvider from "./store/ReduxProvider";

export const metadata: Metadata = {
  title: "Marketplace",
  description: "Its a marketplace",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
