import { Nunito } from "next/font/google";
import "./globals.css";
import { RootProvider, RootRegistry } from "@/shared/lib";

const nunito = Nunito({
  subsets: ["cyrillic"],
  variable: "--font-nunito",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <RootRegistry>
        <RootProvider>
          <body suppressHydrationWarning={true} className={nunito.className}>
            {children}
          </body>
        </RootProvider>
      </RootRegistry>
    </html>
  );
}
