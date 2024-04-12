import type { Metadata } from "next";
import "./globals.css";
import RecoilWrapper from "@/utils/RecoilWrapper";

export const metadata: Metadata = {
  title: "Socket",
  description: "Socket-project",
  icons: {
    icon: "/rocket.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <RecoilWrapper>{children}</RecoilWrapper>
      </body>
    </html>
  );
}
