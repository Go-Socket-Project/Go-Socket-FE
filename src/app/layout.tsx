import type { Metadata } from "next";
import "./globals.css";
import RecoilWrapper from "@/utils/RecoilWrapper";
import { ModalProvider } from "@/providers/modal-provider";

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
        <RecoilWrapper>
          <ModalProvider />
          {children}
        </RecoilWrapper>
      </body>
    </html>
  );
}
