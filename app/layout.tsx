'use client';

import { Inter } from 'next/font/google';
import { LazyMotion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { Header } from '@/components/ui/Header';
import { CursorFollower } from '@/components/ui/CursorFollower';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

// ✅ RULE: bundle-dynamic-features - динамический импорт после гидратации
const loadFeatures = () => 
  import('framer-motion').then((mod) => mod.domAnimation);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans bg-neutral-950 text-white overflow-x-hidden`}>
        {/* ✅ RULE: bundle-lazy-motion + bundle-strict-mode + bundle-dom-animation */}
        <LazyMotion features={loadFeatures} strict>
          {/* ✅ RULE: exit-mode-wait - последовательные переходы между страницами */}
          <AnimatePresence mode="wait">
            <div 
              key={pathname} 
              className="relative min-h-screen"
              suppressHydrationWarning
            >
              <Header />
              {/* ✅ Курсор только на десктопе (см. компонент CursorFollower) */}
              <CursorFollower />
              <main className="pt-24 px-4 md:px-8 max-w-[1600px] mx-auto">
                {children}
              </main>
            </div>
          </AnimatePresence>
        </LazyMotion>
      </body>
    </html>
  );
}