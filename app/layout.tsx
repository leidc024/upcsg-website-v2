import type { Metadata } from 'next'
import './globals.css'
import TheHeader from '@/components/generics/TheHeader'
import TheFooter from '@/components/generics/TheFooter'

export const metadata: Metadata = {
    title: 'UP Computer Science Guild',
    description: 'Official website of the UP Computer Science Guild',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className="font-vietnam flex flex-col min-h-[100vh] overflow-x-hidden">
                <TheHeader />
                <main className="flex flex-col grow basis-0 min-h-[calc(100vh-3rem)] ">
                    {children}
                </main>
                <TheFooter />
            </body>
        </html>
    )
}
