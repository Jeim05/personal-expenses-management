import type { Metadata } from "next";
import "./globals.css";
import { inter } from "./fonts";
import { SideNav } from "@/components";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Gestión de Gastos Personales",
  description: "Plataforma para llevar el control de tus gastos personales, y su presupuesto",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="es">
      <body className={`flex h-screen flex-col md:flex-row md:overflow-hidden bg-slate-200 ${inter.className}`}>
        <div className="flex-none w-full md:w-64">
          <SideNav />
        </div>
        <main >
          <div className="flex-grow p-6 md:overflow-y-auto md:p-8">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
