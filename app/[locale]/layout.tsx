import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist } from "next/font/google";
import "../globals.css";
import Header from "./header";
import LenisProvider from "./providers/LenisProvider";
import ConstellationBackground from "../components/ConstellationBackground";
import { cn } from "@/lib/utils";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadata");
  return {
    title: t("homeTitle"),
    description: t("homeDesc"),
  };
}

/** Hint Next.js about which locale segments exist (helps static optimisation). */
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Reject unknown locales → renders the root not-found page
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={cn("font-sans", geist.variable)}>
      <body className={`${jakarta.variable} font-sans antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <LenisProvider>
            {/* Wrapper Background */}
            <div className="relative min-h-screen w-screen overflow-hidden">

              {/* Constellation Background — rendered first, z-index 0 via fixed canvas */}
              <ConstellationBackground />

              {/* Konten — z-index di atas canvas */}
              <Header />
              <main className="relative z-10">{children}</main>

            </div>
          </LenisProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
