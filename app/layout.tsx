import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "./components/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://650vs.com'),
  title: {
    default: 'ロッコービデオサービス - 映像制作・撮影・編集のプロフェッショナル',
    template: '%s | ロッコービデオサービス'
  },
  description: '茨城県鹿行地域を拠点とする映像制作・撮影・編集のプロフェッショナル。企画から撮影、編集、音響まで一貫してサポート。20年の経験と実績で、質の高い映像制作をお届けします。',
  keywords: ['映像制作', '撮影', '編集', 'ビデオ制作', '茨城県', '鹿行地域', 'ロッコー', '映像プロダクション', 'カメラマン', 'ディレクター'],
  authors: [{ name: 'ロッコービデオサービス' }],
  creator: 'ロッコービデオサービス',
  publisher: 'ロッコービデオサービス',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://650vs.com',
    siteName: 'ロッコービデオサービス',
    title: 'ロッコービデオサービス - 映像制作・撮影・編集のプロフェッショナル',
    description: '茨城県鹿行地域を拠点とする映像制作・撮影・編集のプロフェッショナル。企画から撮影、編集、音響まで一貫してサポート。',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ロッコービデオサービス',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ロッコービデオサービス - 映像制作・撮影・編集のプロフェッショナル',
    description: '茨城県鹿行地域を拠点とする映像制作・撮影・編集のプロフェッショナル。企画から撮影、編集、音響まで一貫してサポート。',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://650vs.com',
  },
  other: {
    'format-detection': 'telephone=no',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
