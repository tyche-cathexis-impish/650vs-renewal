import Link from "next/link";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ヒーローセクション */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-700">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        {/* 背景に映像制作のイメージを想定 */}
        <div className="absolute inset-0 bg-gray-800 opacity-20"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          {/* 左側：メインコンテンツ */}
          <div className="text-white">
            <div className="mb-8">
              <span className="text-sm text-gray-300 uppercase tracking-widest">
                Professional Video Services
              </span>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold mb-0 leading-tight">
              映像制作
            </h3>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              ロッコー ビデオサービス
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
              画像１
            </p>
          </div>

          {/* 右側：画像プレースホルダー */}
          <div className="relative">
            <div className="aspect-square bg-gray-200 rounded-2xl flex items-center justify-center text-gray-600 shadow-2xl">
              <span className="text-lg">画像１</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Usセクション */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* 左側：画像 */}
            <div className="relative">
              <div className="aspect-video bg-gray-200 rounded-2xl flex items-center justify-center text-gray-600 shadow-lg">
                <span className="text-lg">画像２</span>
              </div>
            </div>

            {/* 右側：テキスト */}
            <div>
              <div className="mb-6">
                <span className="text-primary-purple uppercase tracking-widest text-sm font-semibold">
                  ABOUT US
                </span>
              </div>

              <div className="text-4xl md:text-5xl font-bold text-gray-750 mb-8 leading-tight">
                光と影を捉え
                <br />
                未来に残す仕事を
                <br />
                20年間続けています
              </div>
              <Link
                href="/about"
                className="inline-flex items-center text-gray-750 hover:text-gray-800 font-semibold text-lg transition-colors"
              >
                詳しく見る
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Serviceセクション */}
      <section className="py-20 bg-primary-purple">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-left">
            {/* 左側：テキスト */}
            <div>
              <div className="mb-6">
                <span className="text-white uppercase tracking-widest text-sm font-semibold">
                  SERVICES
                </span>
              </div>

              <div className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                <p>映像だけでなく音響にも詳しい</p>
                <p>
                  <span className="text-2xl md:text-3xl">そして</span>
                  <br />
                  撮影だけでなくディレクター経験が豊富
                </p>
                <p className="mb-14">
                  <span className="text-2xl md:text-3xl">だから</span>
                  <br />
                  企画から公開までサポートできる
                </p>
                <p className="mb-">これが強みです。</p>
              </div>
              <div className="space-y-6 text-lg md:text-2xl text-gray-100 leading-relaxed">
                <p>
                  撮影のみ、編集のみのご依頼も承ります
                  <br />
                  予算は相談に応じます
                </p>
              </div>

              <div className="mt-8">
                <Link
                  href="/services"
                  className="inline-flex items-center bg-white text-primary-purple hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
                >
                  詳しく見る
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 地域情報セクション */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* 左側：画像 */}
            <div className="relative">
              <div className="aspect-video bg-gray-200 rounded-2xl flex items-center justify-center text-gray-600 shadow-lg">
                <span className="text-lg">画像４</span>
              </div>
            </div>

            {/* 右側：テキスト */}
            <div>
              <div className="mb-6">
                <span className="text-primary-purple uppercase tracking-widest text-sm font-semibold">
                  Our Location
                </span>
              </div>

              <div className="text-3xl md:text-4xl font-bold text-gray-750 mb-8 leading-tight">
                茨城県鹿行
                <span className="text-xl md:text-2xl">（ろっこう）</span>
                地域を拠点に
                <br />
                茨城県、千葉県で活動しています
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center bg-primary-purple hover:bg-primary-purple-hover text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
              >
                お問い合わせ
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-primary-purple text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          {/* 著作権表示 */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Link
                href="/privacy-policy"
                className="text-gray-400 hover:text-white transition-colors mr-6"
              >
                プライバシーポリシー
              </Link>
              <Link
                href="/cancellation-policy"
                className="text-gray-400 hover:text-white transition-colors"
              >
                キャンセルポリシー
              </Link>
            </div>
            <p className="text-gray-400">
              © 2022 ロッコービデオサービス All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
