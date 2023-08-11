import { Inter } from "next/font/google";
import Header from "../_components/header/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
