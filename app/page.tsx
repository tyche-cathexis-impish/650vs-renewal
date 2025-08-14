import Navbar from './components/Navbar'

  export default function Home() {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />

        {/* ヒーローセクション */}
        <section className="relative h-screen flex items-center justify-center bg-gray-900">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 text-center text-white px-4">
            <div className="mb-8 text-sm text-gray-300">
              [ヒーロー画像: 動画制作の様子]
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              確かな技術で<br />
              想いを映像に
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              茨城県と千葉県の境界に位置する鹿行（ろっこう）地域を拠点に、<br />
              動画コンテンツを制作しています
            </p>
            
            <div className="space-x-4">
              <button className="bg-white text-black px-8 py-3 text-lg font-medium hover:bg-gray-100 transition">
                制作実績を見る
              </button>
              <button className="border border-white text-white px-8 py-3 text-lg font-medium hover:bg-white
  hover:text-black transition">
                ご相談・お見積り
              </button>
            </div>
          </div>   
        </section>
         {/* サービス紹介セクション */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                私たちのサービス
              </h2>
              <p className="text-lg text-gray-600">
                お客様のニーズに合わせた3つのサービスをご提供
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* サービス1 */}
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-sm text-white">[カメラアイコン]</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  動画制作サービス
                </h3>
                <p className="text-gray-600">
                  企画から撮影、編集まで<br />
                  ワンストップで承ります
                </p>
              </div>

              {/* サービス2 */}
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-sm text-white">[学習アイコン]</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  撮影・編集レッスン
                </h3>
                <p className="text-gray-600">
                  基礎から応用まで<br />
                  丁寧に指導いたします
                </p>
              </div>

              {/* サービス3 */}
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-sm text-white">[編集アイコン]</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  動画編集代行サービス
                </h3>
                <p className="text-gray-600">
                  撮影済み素材を<br />
                  プロが仕上げます
                </p>
              </div>
            </div>
          </div>
        </section>
         {/* 作品ギャラリーセクション */}
         <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                制作実績
              </h2>
              <p className="text-lg text-gray-600">
                これまでに手がけた映像作品をご紹介
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* 作品1 */}
              <div className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl
  transition-shadow">
                <div className="aspect-video bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">[作品サムネイル1]</span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    企業プロモーション映像
                  </h3>
                  <p className="text-gray-600 text-sm">
                    地元企業様の魅力を伝える3分間の映像制作
                  </p>
                </div>
              </div>

              {/* 作品2 */}
              <div className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl
  transition-shadow">
                <div className="aspect-video bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">[作品サムネイル2]</span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    イベント記録映像
                  </h3>
                  <p className="text-gray-600 text-sm">
                    記念すべき瞬間を美しく記録
                  </p>
                </div>
              </div>

              {/* 作品3 */}
              <div className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl
  transition-shadow">
                <div className="aspect-video bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">[作品サムネイル3]</span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    研修・教育動画
                  </h3>
                  <p className="text-gray-600 text-sm">
                    わかりやすく効果的な教育コンテンツ
                  </p>
                </div>
              </div>

              {/* 作品4 */}
              <div className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl
  transition-shadow">
                <div className="aspect-video bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">[作品サムネイル4]</span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    商品紹介動画
                  </h3>
                  <p className="text-gray-600 text-sm">
                    商品の特徴を魅力的にアピール
                  </p>
                </div>
              </div>

              {/* 作品5 */}
              <div className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl
  transition-shadow">
                <div className="aspect-video bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">[作品サムネイル5]</span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    ウェディング映像
                  </h3>
                  <p className="text-gray-600 text-sm">
                    一生の思い出を美しく残します
                  </p>
                </div>
              </div>

              {/* 作品6 */}
              <div className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl
  transition-shadow">
                <div className="aspect-video bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">[作品サムネイル6]</span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    ドキュメンタリー
                  </h3>
                  <p className="text-gray-600 text-sm">
                    地域の歴史と文化を映像で記録
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 会社紹介セクション */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* 写真側 */}
              <div className="relative">
                <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">[代表者写真またはスタジオ写真]</span>
                </div>
              </div>

              {/* テキスト側 */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  確かな技術と誠実さで<br />
                  お客様の想いを形に
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  茨城県と千葉県の境界を拠点に活動するロッコー ビデオサービスです。<br />
                  企業様から個人のお客様まで、幅広いニーズにお応えしています。
                </p>
                <p className="text-gray-600 mb-8">
                  映像制作における企画から撮影、編集、納品まで、一貫したサービスをご提供。<br />
                  お客様との対話を大切にし、想いを丁寧にヒアリングした上で、<br />
                  最適な映像表現をご提案いたします。
                </p>

                {/* 特徴リスト */}
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">地域密着型のきめ細やかなサービス</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">企画から納品まで一貫対応</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">お客様の想いを大切にした制作スタイル</span>
                  </div>
                </div>

                <div className="mt-8">
                  <button className="bg-gray-900 text-white px-8 py-3 hover:bg-gray-800 transition">
                    詳しく見る
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* フッター */}
        <footer className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="grid md:grid-cols-4 gap-8">
              {/* 会社情報 */}
              <div>
                <h3 className="text-lg font-bold mb-4">650 Video Service</h3>
                <p className="text-gray-400 text-sm mb-4">
                  茨城県と千葉県の境界線を拠点とする<br />
                  映像制作サービス
                </p>
                <div className="text-gray-400 text-sm">
                  <p>〒XXX-XXXX</p>
                  <p>茨城県○○市○○</p>
                </div>
              </div>

              {/* サービス */}
              <div>
                <h4 className="font-semibold mb-4">サービス</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="/services" className="hover:text-white transition">動画制作サービス</a></li>
                  <li><a href="/services" className="hover:text-white transition">撮影・編集レッスン</a></li>
                  <li><a href="/services" className="hover:text-white transition">動画編集代行</a></li>
                </ul>
              </div>

              {/* リンク */}
              <div>
                <h4 className="font-semibold mb-4">メニュー</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="/" className="hover:text-white transition">ホーム</a></li>
                  <li><a href="/about" className="hover:text-white transition">会社概要</a></li>
                  <li><a href="/blog" className="hover:text-white transition">ブログ</a></li>
                  <li><a href="/contact" className="hover:text-white transition">お問い合わせ</a></li>
                </ul>
              </div>

              {/* SNS・お問い合わせ */}
              <div>
                <h4 className="font-semibold mb-4">お問い合わせ</h4>
                <div className="space-y-2 text-sm text-gray-400 mb-4">
                  <p>Email: dev@650vs.com</p>
                  <p>TEL: XXX-XXXX-XXXX</p>
                </div>

                {/* SNSアイコン */}
                <div className="flex space-x-4">
                  <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center">
                    <span className="text-xs">[Insta]</span>
                  </div>
                  <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center">
                    <span className="text-xs">[X]</span>
                  </div>
                  <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center">
                    <span className="text-xs">[BS]</span>
                  </div>
                  <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center">
                    <span className="text-xs">[LINE]</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 著作権表示 */}
            <div className="border-t border-gray-800 mt-8 pt-8 text-center">
              <p className="text-sm text-gray-400">
                © 2022 ロッコービデオサービス All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    )
  }