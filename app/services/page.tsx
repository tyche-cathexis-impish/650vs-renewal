import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Services() {
  return (
    <>
      <div className="min-h-screen bg-white">
        <Navbar />

        {/* ヒーローセクション */}
        <div className="relative w-full overflow-hidden -mb-20">
          {/* 画像 */}
          <img
            src="/services_hero.jpg"
            alt="our services"
            className="w-full object-cover block"
            style={{
              marginTop: "-60px",
              marginBottom: "-0px",
              height: "300px",
              objectFit: "cover",
            }}
          />
          {/* 画像の上に黒フィルターを挿入して暗くする */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
          {/* 画像の上に重ねるテキスト */}
          <div className="absolute inset-0 flex items-center py-32 justify-center px-16 md:px-16">
            <div className="text-white text-center">
              <div className="mb-1"></div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-md">
                Our Services
              </h1>
              <h3 className="text-xl md:text-2xl font-bold mb-0 leading-tight drop-shadow-md">
                プロフェッショナル
              </h3>
            </div>
          </div>
        </div>

        {/* our pricing セクション */}
        <section className="bg-white -mt-20 -mb-20">
          <div className="grid md:grid-cols-2 gap-0 items-center h-[500px]">
            {/* 左側：画像 - PCのみ表示 */}
            <div className="relative hidden md:block">
              <div className="h-[340px] overflow-hidden">
                <img
                  src="/Bus_1570.JPG"
                  alt="SHoooting Scene"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* 右側：テキスト */}
            <div>
              <div className="px-8 min-h-[200px] flex flex-col justify-center">
                <div className="mb-6">
                  <span className="text-primary uppercase tracking-widest text-sm font-semibold">
                    OUR PRICING
                  </span>
                </div>

                <div className="text-3xl md:text-4xl font-bold text-gray-750 mb-4 leading-tight">
                  料金の目安
                </div>
                <div className="text-lg md:text-xl font-bold text-gray-750 leading-relaxed">
                  お客様のご予算に応じて最適なプランをご提案いたします。
                  <br />
                  詳細はお気軽にお問い合わせください。
                </div>
                <div className="text-sm md:text-lg text-gray-750 leading-relaxed">
                  ＊価格は全て税込みです
                </div>
              </div>
            </div>
          </div>

          <section className="bg-primary -mt-20 mb-20">
            <div className="w-full">
              {/* テキスト */}
              <div className="flex flex-col">
                <div className="px-8 py-8 min-h-[80px] flex flex-col justify-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                    <p>
                      企業・観光プロモーション動画 <br />
                      ¥165,000～
                    </p>
                    <p>
                      <span className="text-sm md:text-xl">
                        企画構成、10分以内のインタビュー撮影とイメージ映像、ナレーション
                      </span>
                    </p>
                  </div>
                </div>
                <div className="border-t-0 border-white w-full"></div>
                <div className="px-8 py-8 min-h-[80px] flex flex-col justify-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
                    <p>
                      イベント撮影＆編集 <br />
                      ¥77,000～
                    </p>
                    <p className="mb-0">
                      <span className="text-sm md:text-xl">
                        カメラ2台、スタッフ2名、撮影3時間以内、編集込み <br />
                        幼稚園の発表会などは、追加で保護者の方へのDVD（1600円/
                        枚）、ブルーレイ代（2100円/ 枚）がかかる場合があります。
                      </span>
                    </p>
                  </div>
                </div>
                <div className="border-t-0 border-white w-full"></div>
                <div className="px-8 py-8 min-h-[80px] flex flex-col justify-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
                    <p>
                      ブライダル ムービー <br />
                      ¥132,000～
                    </p>
                    <p className="mb-0">
                      <span className="text-sm md:text-xl">
                        挙式+披露宴、記録映像
                        <br />
                        カメラ2台、カメラマン2名
                        <br />
                        オプションでプロフィールムービーやエンドロール作成、フォトカメラマンも対応します。
                      </span>
                    </p>
                  </div>
                </div>
                <div className="border-t-0 border-white w-full"></div>
                <div className="px-8 py-8 min-h-[80px] flex flex-col justify-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
                    <p>
                      イベント・セミナー配信 <br />
                      ¥110,000～
                    </p>
                    <p className="mb-0">
                      <span className="text-sm md:text-xl">
                        配信時間は3時間まで
                        <br />
                        カメラ2台、カメラマン2名、配信機材込み
                      </span>
                    </p>
                  </div>
                </div>
                <div className="border-t-0 border-white w-full"></div>
                <div className="px-8 py-8 min-h-[80px] flex flex-col justify-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
                    <p>
                      編集のみ <br />
                      ¥22,000～
                    </p>
                    <p className="mb-0">
                      <span className="text-sm md:text-xl">
                        15分までの素材データ、テロップ10カ所まで <br />
                        2回まで修正依頼可能
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>

        {/* 見積、問い合わせセクション */}
        <section className="bg-white">
          <div className="grid md:grid-cols-2 gap-0 items-stretch">
            {/* 左側：画像 */}
            <div className="relative">
              <img
                src="/shoot_concert.jpg"
                alt="Our Location"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* 右側：テキスト */}
            <div>
              <div className="px-8 py-20">
                <div className="text-2xl md:text-3xl font-bold text-gray-750 mb-8 leading-tight">
                  明確な事前見積もりで追加料金なし。 <br />
                  ご予算内で最高品質の映像制作をお約束いたします。 <br />
                  まずはご相談ください。
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center text-black hover:text-gray-600 font-semibold text-lg transition-colors"
                >
                  無料相談・お見積り
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

        {/* Video Portfolio - Grid Style */}
        <section className="py-16 bg-primary">
          <div className="px-0">
            <div className="text-center mb-16 px-6">
              <h2 className="text-3xl text-gray-900 font-bold mb-4">
                制作事例
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
              <a
                href="https://youtu.be/AmREG5TKuVg"
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-video relative group"
              >
                <img
                  src="/thumb_Antlers.jpg"
                  alt="イベント記録映像 01"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <span className="text-white text-sm font-semibold">
                    イベント記録 01
                  </span>
                </div>
              </a>
              <a
                href="https://www.youtube.com/watch?v=o7FPpYijsJY"
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-video relative group"
              >
                <img
                  src="/lantern_fes.jpg"
                  alt="イベント記録 02"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <span className="text-white text-sm font-semibold">
                    イベント記録 02
                  </span>
                </div>
              </a>
              <a
                href="https://www.youtube.com/watch?v=YYf4j2vxHig"
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-video relative group"
              >
                <img
                  src="/tetote.jpg"
                  alt="公演記録"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <span className="text-white text-sm font-semibold">
                    公演記録
                  </span>
                </div>
              </a>
              <a
                href="https://www.youtube.com/watch?v=5Pa3fTi-Kmo"
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-video relative group"
              >
                <img
                  src="/catch_friends.jpg"
                  alt="バラエティ番組"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <span className="text-white text-sm font-semibold">
                    バラエティ番組
                  </span>
                </div>
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
              <a
                href="https://www.youtube.com/watch?v=xKtJtJr_xXk"
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-video relative group"
              >
                <img
                  src="/ibadai.jpg"
                  alt="ドキュメンタリー"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <span className="text-white text-sm font-semibold">
                    ドキュメンタリー
                  </span>
                </div>
              </a>
              <a
                href="https://www.youtube.com/watch?v=_VjwefeGZnA"
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-video relative group"
              >
                <img
                  src="/baguio.jpg"
                  alt="観光プロモーション映像"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <span className="text-white text-sm font-semibold">
                    観光プロモーション映像
                  </span>
                </div>
              </a>
              <a
                href="https://www.youtube.com/shorts/-S7mALNdxyM"
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-video relative group"
              >
                <img
                  src="/2bridges.jpg"
                  alt="ショートドラマ"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <span className="text-white text-sm font-semibold">
                    ショートドラマ
                  </span>
                </div>
              </a>
              <a
                href="https://www.youtube.com/watch?v=sEK4E189EVQ"
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-video relative group"
              >
                <img
                  src="/thumb_ajin.jpg"
                  alt="映画メイキング"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <span className="text-white text-sm font-semibold">
                    映画メイキング
                  </span>
                </div>
              </a>
            </div>

            {/* 主な参加作品リンク */}
            <div className="text-left px-6 pt-8">
              <a
                href="https://tamulamail.wixsite.com/tamulapastwork-jp"
                target="_blank"
                className="inline-flex items-center text-black hover:text-gray-600 text-lg transition-colors"
              >
                その他 主な参加作品
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
    </>
  );
}
