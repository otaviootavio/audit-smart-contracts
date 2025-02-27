import "~/styles/globals.css";
import { GeistSans } from "geist/font/sans";

import { type Metadata } from "next";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
  title: "AuditAi",
  description: "Smart Contract Audit Ai",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${GeistSans.variable}`}>
        <TRPCReactProvider>
          <body>
            <header className="flex h-16 items-center justify-end gap-4 p-4">
              <SignedOut>
                <SignInButton />
                <SignUpButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </header>
            {children}
          </body>
        </TRPCReactProvider>
      </html>
    </ClerkProvider>
  );
}
