import Link from 'next/link'
import Navbar from '../components/Navbar'

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
              お客様の想いを映像で形にする、プロフェッショナルなサービス
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                総合映像制作サービス
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                企画から撮影、編集、配信まで、映像制作のすべての工程を一貫してサポート。
                最新の機材と豊富な経験を活かし、お客様のご要望にお応えします。
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-blue-600 rounded"></div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">企業プロモーション</h3>
                <p className="text-gray-600 text-sm">
                  ブランド価値を向上させる戦略的な映像制作
                </p>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-green-600 rounded"></div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">イベント撮影</h3>
                <p className="text-gray-600 text-sm">
                  特別な瞬間を美しく記録する専門撮影
                </p>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-pink-600 rounded"></div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">ウェディング映像</h3>
                <p className="text-gray-600 text-sm">
                  一生の思い出を感動的な映像作品に
                </p>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-purple-600 rounded"></div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">CM制作</h3>
                <p className="text-gray-600 text-sm">
                  効果的な商品・サービス訴求映像
                </p>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-orange-600 rounded"></div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">ショートフィルム</h3>
                <p className="text-gray-600 text-sm">
                  短篇映画・ミュージックビデオなどの創作映像
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto space-y-16">
            
            {/* Corporate Promotion */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <div className="w-6 h-6 bg-white rounded"></div>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">企業プロモーション映像</h2>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  企業の理念、商品・サービスの魅力を効果的に伝える戦略的な映像制作。
                  ターゲット層に響くストーリーテリングで、ブランド価値を最大化します。
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    会社紹介・採用映像
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    商品・サービス紹介映像
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    展示会・営業ツール映像
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    ブランディング映像
                  </li>
                </ul>
              </div>
              <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 text-lg">[企業プロモーション映像サンプル]</span>
              </div>
            </div>

            {/* Event Recording */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="md:order-2">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                    <div className="w-6 h-6 bg-white rounded"></div>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">イベント撮影・記録</h2>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  セミナー、講演会、式典など、あらゆるイベントを高品質で記録。
                  複数カメラによる多角的な撮影で、臨場感ある映像をお届けします。
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    セミナー・講演会収録
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    式典・周年記念撮影
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    コンサート・舞台撮影
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    スポーツイベント撮影
                  </li>
                </ul>
              </div>
              <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center md:order-1">
                <span className="text-gray-500 text-lg">[イベント撮影サンプル]</span>
              </div>
            </div>

            {/* Wedding Video */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center mr-4">
                    <div className="w-6 h-6 bg-white rounded"></div>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">ウェディング映像制作</h2>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  人生で最も特別な日を、美しく感動的な映像作品として永続的に保存。
                  お二人の愛の物語を丁寧に紡ぎ、家族の宝物となる作品をお作りします。
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-pink-600 mr-2">•</span>
                    挙式・披露宴撮影
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-600 mr-2">•</span>
                    プロフィール映像制作
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-600 mr-2">•</span>
                    エンドロール制作
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-600 mr-2">•</span>
                    前撮り・後撮り撮影
                  </li>
                </ul>
              </div>
              <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 text-lg">[ウェディング映像サンプル]</span>
              </div>
            </div>

            {/* Commercial Production */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="md:order-2">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                    <div className="w-6 h-6 bg-white rounded"></div>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">CM・広告映像制作</h2>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  テレビCM、Web広告、SNS動画など、多様なメディアに対応した広告映像を制作。
                  効果的な訴求力で、売上向上に直結する映像コンテンツをご提供します。
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    テレビCM制作
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    Web広告動画
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    SNS向けショート動画
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    デジタルサイネージ映像
                  </li>
                </ul>
              </div>
              <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center md:order-1">
                <span className="text-gray-500 text-lg">[CM・広告映像サンプル]</span>
              </div>
            </div>

            {/* Short Film Production */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mr-4">
                    <div className="w-6 h-6 bg-white rounded"></div>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">ショートフィルム制作</h2>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  短篇映画、ミュージックビデオ、アートフィルムなど、記録映像とは一味違う創作映像作品の制作をお手伝いします。
                  芸術性と技術力を融合させ、心に残る映像体験をお届けします。
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    短篇映画・ドラマ制作
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    ミュージックビデオ制作
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    アートフィルム・実験映像
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    コンセプト映像・PV制作
                  </li>
                </ul>
              </div>
              <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 text-lg">[ショートフィルム作品サンプル]</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Production Process */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                制作の流れ
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                お客様のご要望を丁寧にヒアリングし、最適な映像を制作いたします。
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">ヒアリング</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  お客様のご要望、目的、予算などを詳しくお聞きし、最適な企画をご提案します。
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">企画・脚本</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  コンセプトを明確化し、効果的なストーリー構成と詳細な撮影プランを作成します。
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">撮影</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  プロ仕様の機材と豊富な経験を活かし、高品質な映像素材を撮影いたします。
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">編集・納品</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  最新の編集技術で映像を仕上げ、ご希望の形式で確実にお届けします。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment & Technology */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                機材・技術
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                最新の撮影・編集機材を駆使し、プロフェッショナルな映像制作を実現します。
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">撮影機材</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 4K対応プロ仕様カメラ</li>
                  <li>• ドローン空撮システム</li>
                  <li>• プロ用照明機材</li>
                  <li>• 高品質音声収録機器</li>
                  <li>• スタビライザー・クレーン</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">編集環境</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Adobe Creative Suite</li>
                  <li>• DaVinci Resolve Studio</li>
                  <li>• 高性能編集ワークステーション</li>
                  <li>• カラーグレーディング</li>
                  <li>• モーショングラフィックス</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">配信・納品</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 4K・8K映像出力</li>
                  <li>• 多形式ファイル変換</li>
                  <li>• ライブ配信対応</li>
                  <li>• クラウド納品システム</li>
                  <li>• マスタリング・複製</li>
                </ul>
              </div>
            </div>
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
                詳細はお気軽にお問い合わせください。
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-2">企業プロモーション</h3>
                <p className="text-2xl font-bold text-blue-600 mb-4">¥300,000〜</p>
                <p className="text-gray-600 text-sm">3-5分映像、企画込み</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-2">イベント撮影</h3>
                <p className="text-2xl font-bold text-green-600 mb-4">¥150,000〜</p>
                <p className="text-gray-600 text-sm">1日撮影、編集込み</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-2">ウェディング映像</h3>
                <p className="text-2xl font-bold text-pink-600 mb-4">¥200,000〜</p>
                <p className="text-gray-600 text-sm">挙式+披露宴、記録映像</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-2">CM制作</h3>
                <p className="text-2xl font-bold text-purple-600 mb-4">¥500,000〜</p>
                <p className="text-gray-600 text-sm">30秒CM、企画・撮影込み</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-2">ショートフィルム</h3>
                <p className="text-2xl font-bold text-orange-600 mb-4">¥400,000〜</p>
                <p className="text-gray-600 text-sm">5-15分作品、脚本込み</p>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                ※料金は撮影規模、編集内容により変動いたします。詳細なお見積りは無料でご提供いたします。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              映像制作のご相談はお気軽に
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              お客様のご要望に最適な映像制作プランをご提案いたします。
              まずは無料相談からお始めください。
            </p>
            <div className="space-x-4">
              <Link 
                href="/contact" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition duration-300 inline-block font-semibold"
              >
                無料相談・お見積り
              </Link>
              <Link 
                href="/" 
                className="border border-white text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300 inline-block"
              >
                作品を見る
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">650vs</h3>
              <p className="text-gray-400 mb-4">
                茨城県を拠点とする<br />
                映像制作スタジオ
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white">Instagram</Link>
                <Link href="#" className="text-gray-400 hover:text-white">X</Link>
                <Link href="#" className="text-gray-400 hover:text-white">Bluesky</Link>
                <Link href="#" className="text-gray-400 hover:text-white">LINE</Link>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">サービス</h4>
              <ul className="space-y-2">
                <li><Link href="/services" className="text-gray-400 hover:text-white">企業プロモーション</Link></li>
                <li><Link href="/services" className="text-gray-400 hover:text-white">イベント撮影</Link></li>
                <li><Link href="/services" className="text-gray-400 hover:text-white">ウェディング映像</Link></li>
                <li><Link href="/services" className="text-gray-400 hover:text-white">CM制作</Link></li>
                <li><Link href="/services" className="text-gray-400 hover:text-white">ショートフィルム</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">会社情報</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-400 hover:text-white">会社概要</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-white">チーム紹介</Link></li>
                <li><Link href="/blog" className="text-gray-400 hover:text-white">ブログ</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white">採用情報</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">お問い合わせ</h4>
              <ul className="space-y-2 text-gray-400">
                <li>〒310-0000</li>
                <li>茨城県水戸市○○町1-2-3</li>
                <li>TEL: 029-XXX-XXXX</li>
                <li>EMAIL: info@650vs.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <div className="mb-4">
              <Link href="/privacy-policy" className="text-sm text-gray-400 hover:text-white transition mr-6">
                プライバシーポリシー
              </Link>
              <Link href="/cancellation-policy" className="text-sm text-gray-400 hover:text-white transition">
                キャンセルポリシー
              </Link>
            </div>
            <p>&copy; 2024 650vs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}