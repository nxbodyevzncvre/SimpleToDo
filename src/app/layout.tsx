import  Footer  from "@/app/components/Footer/Footer"
import Header from "@/app/components/Header/Header"
import { Arima } from "next/font/google";
import "./globals.css";

const arima = Arima({
  weight: '400',
  subsets:['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${arima.className} antialiased min-h-screen flex flex-col justify-between`}
      >
        <Header/>
          {children}
        <Footer/>
      </body>
    </html>
  );
}
