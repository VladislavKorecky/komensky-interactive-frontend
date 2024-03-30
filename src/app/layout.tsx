import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';

// load a Google font
const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: 'Komensky Interactive - Edukační hry pro školy',
    description: 'Tvoříme digitální hry do výuky pro lepší a zábavnější učení.',
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
            <body className={rubik.className}>{children}</body>
        </html>
    );
}
