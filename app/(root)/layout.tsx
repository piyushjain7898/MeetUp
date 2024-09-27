import { ReactNode } from 'react';

import StreamVideoProvider from '@/providers/StreamClientProvider';

import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <header>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>
          <main>
            <StreamVideoProvider>{children}</StreamVideoProvider>
           </main>
        </body>
      </html>
    </ClerkProvider>
  )
}
