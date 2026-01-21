import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ReclsCare",
  description: "Keep Our Classroom Spotless",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={inter.className}>
        {/* Hapus class 'max-w-md' dan 'mobile-container'. 
            Gunakan w-full agar responsif. */}
        <main className="w-full min-h-screen relative overflow-x-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
