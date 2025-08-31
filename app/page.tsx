import Link from "next/link";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ヒーローセクション */}
      <div className="relative w-full overflow-hidden">
        {/* 画像 */}
        <img
          src="/bold.jpg"
          alt="ロッコービデオサービス"
          className="w-full h-auto object-cover block"
          style={{
            marginBottom: '-100px'
          }}
        />

        {/* 画像の上に重ねるテキスト */}
        <div className="absolute inset-0 flex items-center py-32 justify-start px-16 md:px-16">
          <div className="text-white">
            <div className="mb-1">
              <span className="text-sm text-gray-100 uppercase tracking-widest">
                Professional Video Services
              </span>
            </div>
            <h3 className="text-2xl md:text-5xl font-bold mb-0 leading-tight drop-shadow-md">
              映像制作
            </h3>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-md">
              ロッコー ビデオサービス
            </h1>
          </div>
        </div>
      </div>

      {/* About Usセクション */}
      <section className="bg-white">
        <div className="grid md:grid-cols-2 gap-0 items-center">
          {/* 左側：画像 */}
          <div className="relative">
            <div className="h-[500px] overflow-hidden">
              <img
                src="/sapporo.jpg"
                alt="About us - ロッコービデオサービス"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* 右側：テキスト */}
          <div>
            <div className="px-8 py-20">
              <div className="mb-6">
                <span className="text-primary-purple uppercase tracking-widest text-sm font-semibold">
                  ABOUT US
                </span>
              </div>

              <div className="text-3xl md:text-4xl font-bold text-gray-750 mb-8 leading-tight">
                光と影を捉え
                <br />
                未来に残す仕事を
                <br />
                20年間続けています
              </div>
              <Link
                href="/about"
                className="inline-flex items-center text-primary-purple hover:text-gray-800 font-semibold text-lg transition-colors"
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
                  予算はご相談に応じます
                </p>
              </div>

              <div className="mt-8">
                <Link
                  href="/services"
                  className="inline-flex items-center text-white hover:text-gray-200 font-semibold text-lg transition-colors"
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
      <section className="bg-white">
        <div className="grid md:grid-cols-2 gap-0 items-center">
          {/* 左側：画像 */}
          <div className="relative">
            <div className="h-[500px] overflow-hidden">
              <img
                src="/about02_650vs.jpg"
                alt="Our Location"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* 右側：テキスト */}
          <div>
            <div className="px-8 py-20">
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
                className="inline-flex items-center text-primary-purple hover:text-gray-800 font-semibold text-lg transition-colors"
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
