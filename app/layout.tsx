/**
 * Minimal root layout — required by Next.js App Router for the not-found page.
 * The actual html/body/lang scaffold is in app/[locale]/layout.tsx.
 * DO NOT add html or body tags here; doing so creates duplicate wrapper elements.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
