import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About 650vs
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              茨城県を拠点に、映像制作で物語を紡ぐクリエイティブスタジオ
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  私たちの物語
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  650vsは、茨城県を拠点とする映像制作スタジオとして2018年に設立されました。
                  「映像を通じて、人々の心に響く物語を届ける」という理念のもと、
                  企業プロモーション、イベント撮影、ウェディング映像など、
                  様々な分野で高品質な映像制作サービスを提供しています。
                </p>
                <p className="text-gray-600 leading-relaxed">
                  地域に根差した映像制作会社として、お客様一人ひとりのニーズに
                  丁寧に向き合い、想いを形にする映像作品を制作しています。
                  技術と創造性を融合させ、記憶に残る映像体験をお届けします。
                </p>
              </div>
              <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 text-lg">[会社の写真]</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                ミッション・ビジョン
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold text-blue-600 mb-4">Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  映像の力で、人と人、企業と顧客をつなぎ、
                  価値ある瞬間を永続的な記憶として残すことで、
                  豊かな社会の実現に貢献します。
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold text-green-600 mb-4">Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  茨城県を代表する映像制作スタジオとして、
                  革新的な技術と創造性を駆使し、
                  地域から全国に向けて感動を届ける存在になる。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                チーム紹介
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                経験豊富なクリエイターたちが、それぞれの専門分野を活かして
                最高の映像作品を制作しています。
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-gray-200 w-48 h-48 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-gray-500">[代表の写真]</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">田村 太郎</h3>
                <p className="text-blue-600 mb-3">代表取締役・ディレクター</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  映像制作歴15年。企業プロモーション映像を得意とし、
                  戦略的な映像制作でクライアントの課題解決を支援。
                </p>
              </div>
              <div className="text-center">
                <div className="bg-gray-200 w-48 h-48 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-gray-500">[カメラマンの写真]</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">佐藤 花子</h3>
                <p className="text-blue-600 mb-3">チーフカメラマン</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  シネマティックな映像表現を得意とし、
                  感情に訴える美しい映像で多くの賞を受賞。
                </p>
              </div>
              <div className="text-center">
                <div className="bg-gray-200 w-48 h-48 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-gray-500">[エディターの写真]</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">鈴木 次郎</h3>
                <p className="text-blue-600 mb-3">映像エディター</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  ポストプロダクションのスペシャリスト。
                  最新技術を駆使した編集で作品に命を吹き込む。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                会社概要
              </h2>
            </div>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <dl className="space-y-4">
                      <div>
                        <dt className="font-bold text-gray-900 mb-1">会社名</dt>
                        <dd className="text-gray-600">株式会社650vs</dd>
                      </div>
                      <div>
                        <dt className="font-bold text-gray-900 mb-1">設立</dt>
                        <dd className="text-gray-600">2018年4月</dd>
                      </div>
                      <div>
                        <dt className="font-bold text-gray-900 mb-1">代表者</dt>
                        <dd className="text-gray-600">代表取締役 田村太郎</dd>
                      </div>
                      <div>
                        <dt className="font-bold text-gray-900 mb-1">従業員数</dt>
                        <dd className="text-gray-600">8名</dd>
                      </div>
                    </dl>
                  </div>
                  <div>
                    <dl className="space-y-4">
                      <div>
                        <dt className="font-bold text-gray-900 mb-1">所在地</dt>
                        <dd className="text-gray-600">
                          〒310-0000<br />
                          茨城県水戸市○○町1-2-3<br />
                          ○○ビル3F
                        </dd>
                      </div>
                      <div>
                        <dt className="font-bold text-gray-900 mb-1">事業内容</dt>
                        <dd className="text-gray-600">
                          映像制作・編集<br />
                          企業プロモーション<br />
                          イベント撮影<br />
                          ウェディング映像制作
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              プロジェクトについてご相談ください
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              お客様のビジョンを映像で実現するお手伝いをさせていただきます。
              まずはお気軽にお問い合わせください。
            </p>
            <div className="space-x-4">
              <Link 
                href="/contact" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300 inline-block"
              >
                お問い合わせ
              </Link>
              <Link 
                href="/services" 
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition duration-300 inline-block"
              >
                サービス詳細
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