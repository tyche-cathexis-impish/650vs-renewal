import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              お客様の想いを映像で形にするプロフェッショナルなサービス
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                料金目安
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                お客様のご予算に応じて最適なプランをご提案いたします。
                <br />
                詳細はお気軽にお問い合わせください。
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      企業・観光プロモーション
                    </h3>
                    <p className="text-2xl font-bold text-blue-600">
                      ¥165,000<span className="text-sm">（税込み）</span>〜
                    </p>
                  </div>
                  <div className="flex-1 pl-8">
                    <p className="text-gray-600">
                      企画構成、10分以内のインタビュー撮影とイメージ映像、ナレーション入り。
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      イベント撮影
                    </h3>
                    <p className="text-2xl font-bold text-green-600">
                      ¥77,000<span className="text-sm">（税込み）</span>〜
                    </p>
                  </div>
                  <div className="flex-1 pl-8">
                    <p className="text-gray-600">
                      カメラ2台、スタッフ2名、撮影3時間以内、編集込み
                      <br />
                      ＊幼稚園の発表会などは、追加で保護者の方へのDVD（1600円/
                      枚）、ブルーレイ代（2100円/ 枚）がかかる場合があります。
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      ブライダル ムービー撮影
                    </h3>
                    <p className="text-2xl font-bold text-pink-600">
                      ¥132,000<span className="text-sm">（税込み）</span>〜
                    </p>
                  </div>
                  <div className="flex-1 pl-8">
                    <p className="text-gray-600">
                      挙式+披露宴、記録映像
                      <br />
                      カメラ2台、カメラマン2名
                      <br />
                      オプションでプロフィールムービーやエンドロール作成、フォトカメラマンも対応します。
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      イベント・セミナー配信
                    </h3>
                    <p className="text-2xl font-bold text-purple-600">
                      ¥110,000<span className="text-sm">（税込み）</span>〜
                    </p>
                  </div>
                  <div className="flex-1 pl-8">
                    <p className="text-gray-600">
                      配信時間は3時間まで
                      <br />
                      カメラ2台、カメラマン2名、配信機材込み
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      編集のみ
                    </h3>
                    <p className="text-2xl font-bold text-orange-600">
                      ¥22,000<span className="text-sm">（税込み）</span>〜
                    </p>
                  </div>
                  <div className="flex-1 pl-8">
                    <p className="text-gray-600">
                      15分までの素材データ、テロップ10カ所まで <br />
                      2回まで修正依頼可能
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-6 bg-blue-600 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              映像制作のご相談はお気軽に
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              料金は撮影規模、編集内容により変動いたします。 <br />
              お客様のご要望に最適な映像制作プランをご提案いたします。 <br />
              まずは無料相談から。
            </p>
            <div className="space-x-4">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition duration-300 inline-block font-semibold"
              >
                無料相談・お見積り
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Video Portfolio - Grid Style */}
      <section className="py-16">
        <div className="px-0">
          <div className="text-center mb-16 px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">制作実績</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              これまでに制作した映像作品をご覧ください。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
            <a
              href="https://youtu.be/AmREG5TKuVg"
              target="_blank"
              className="group bg-white overflow-hidden hover:opacity-90 transition-opacity"
            >
              <div className="relative aspect-video bg-gray-900">
                <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-500">[thumb1]</span>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all flex items-center justify-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-white ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900">
                  イベント記録映像 01
                </h3>
                <p className="text-sm text-gray-600 mt-1">株式会社○○様</p>
              </div>
            </a>

            <a
              href="https://youtu.be/AmREG5TKuVg"
              target="_blank"
              className="group bg-white overflow-hidden hover:opacity-90 transition-opacity"
            >
              <div className="relative aspect-video bg-gray-900">
                <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-500">[thumb2]</span>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all flex items-center justify-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-white ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900">
                  ウェディング映像
                </h3>
                <p className="text-sm text-gray-600 mt-1">○○様 結婚式</p>
              </div>
            </a>

            <a
              href="https://youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
              className="group bg-white overflow-hidden hover:opacity-90 transition-opacity"
            >
              <div className="relative aspect-video bg-gray-900">
                <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-500">[thumb3]</span>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all flex items-center justify-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-white ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900">イベント撮影</h3>
                <p className="text-sm text-gray-600 mt-1">○○イベント様</p>
              </div>
            </a>

            <a
              href="https://youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
              className="group bg-white overflow-hidden hover:opacity-90 transition-opacity"
            >
              <div className="relative aspect-video bg-gray-900">
                <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-500">[thumb4]</span>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all flex items-center justify-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-white ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900">CM制作</h3>
                <p className="text-sm text-gray-600 mt-1">○○商品CM</p>
              </div>
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
  );
}
