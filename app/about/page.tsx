import Link from "next/link";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ヒーローセクション */}
      <div className="relative w-full overflow-hidden">
        {/* 画像 */}
        <img
          src="/drone_hero.jpg"
          alt="about us"
          className="w-full h-auto object-cover block"
          style={{
            marginTop: "-30px",
            marginBottom: "-300px",
          }}
        />
        {/* 画像の上に黒フィルターを挿入して暗くする */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* 画像の上に重ねるテキスト */}
        <div className="absolute inset-0 flex items-center py-32 justify-center px-16 md:px-16">
          <div className="text-white">
            <div className="mb-1"></div>
            <h3 className="text-2xl md:text-5xl font-bold mb-0 leading-tight drop-shadow-md">
              About ロッコービデオサービス
            </h3>
          </div>
        </div>
      </div>

      {/* Company Story */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-normal text-gray-900 mb-6 text-left">
              <span className="text-base">代表</span> 田村秀昭{" "}
              <span className="text-xl">Hideaki Tamura</span>
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed text-left">
              　20年以上、映画・ドラマのスタッフとして活動。
              <br />
              　主に編集技師、メイキング・ディレクター（撮影の裏側の紹介や俳優へのインタビューを収録し映画公開前に宣伝用として使ったり、DVDの特典映像などのコンテンツの企画・撮影・編集などを作る人）などを担当。俳優へのインタビューはのべ200人以上。
              <br />
              　映画・ドラマ以外にも、企業PR動画・プレゼン映像制作・各種イベント撮影と編集・ドキュメンタリー制作など、あらゆる映像コンテンツ制作に携わる。
            </p>
            <p className="text-gray-600 leading-relaxed text-left mb-12">
              　現在は茨城県鹿嶋市に拠点を移し、2021年10月よりロッコービデオサービスを開業。
              <br />
              　映像の分野から地域活性化をサポートする活動を続けている。
              <br />
              <br />
              <a
                href="https://tamulamail.wixsite.com/tamulapastwork-jp"
                target="_blank"
                className="inline-flex items-center text-black hover:text-gray-600 font-semibold text-lg transition-colors"
              >
                主な参加作品
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
              </a>
            </p>
          </div>
        </div>

        {/* 3分割画像 */}
        <div className="grid grid-cols-3 gap-0">
          <div className="h-80">
            <img
              src="/R0012027.jpg"
              alt="About 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-80">
            <img
              src="/Tam.jpg"
              alt="About 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-80">
            <img
              src="/SoundMixer.jpg"
              alt="Hideaki Tamura"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-gray-900 text-white py-8">
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
