import "./globals.css";
import { Inter } from "next/font/google";
import { NextUIProviders } from "../providers/NextUIProviders";
import  ReduxProviders  from '../redux/ReduxProviders';
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        <ReduxProviders>
          <NextUIProviders>
            {children}
            <Toaster position="top-right" closeButton/>
          </NextUIProviders>
        </ReduxProviders>
      </body>
    </html>
  );
}
