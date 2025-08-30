import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              プライバシーポリシー
            </h1>
            <p className="text-lg text-gray-300">
              個人情報の取り扱いについて
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              
              <div className="mb-8">
                <p className="text-gray-600 leading-relaxed">
                  株式会社650vs（以下「当社」といいます。）は、お客様からお預かりした個人情報の保護を重要な責務と考え、
                  以下のとおりプライバシーポリシーを定め、適切な取り扱いに努めます。
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. 個人情報の定義</h2>
                <p className="text-gray-600 leading-relaxed">
                  個人情報とは、氏名、年齢、電話番号、メールアドレス、SNSアカウントなど、
                  特定の個人を識別することができる情報をいいます。
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. 個人情報の収集方法</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  当社は、以下の方法で個人情報を収集します：
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>お問い合わせフォームからの送信</li>
                  <li>メールでのお客様とのやり取り</li>
                  <li>Cookieによる自動収集</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. 個人情報の利用目的</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  収集した個人情報は、以下の目的で利用いたします：
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>お客様とのご連絡</li>
                  <li>サービスの改善</li>
                  <li>サービスに関するお知らせ</li>
                  <li>広告の表示および効果測定</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. 第三者サービスの利用</h2>
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Google AdSense</h3>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    当サイトではGoogle AdSenseを利用しており、Cookieを使用して広告を表示しています。
                    Cookieを無効にする方法については、Googleの広告設定ページをご確認ください。
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Amazonアソシエイト</h3>
                  <p className="text-gray-600 leading-relaxed">
                    当サイトはAmazonアソシエイト・プログラムに参加しており、
                    商品の紹介により収益を得る場合があります。
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. 個人情報の第三者提供</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  当社は、以下の場合を除き、個人情報を第三者に提供いたしません：
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>法令に基づく場合</li>
                  <li>お客様の同意がある場合</li>
                  <li>サービス提供に必要な業務委託先への提供</li>
                  <li>個人を特定しない統計データとしての広告・解析目的での利用</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. お客様の権利</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  お客様は、当社が保有する個人情報について、以下の権利を有します：
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>個人情報の開示請求</li>
                  <li>個人情報の削除請求</li>
                  <li>個人情報の利用停止請求</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-4">
                  これらのご請求は、以下の連絡先までお寄せください：<br />
                  <strong>contact@650vs.com</strong>
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. 個人情報の安全管理</h2>
                <p className="text-gray-600 leading-relaxed">
                  当社は、個人情報の漏洩、滅失、毀損の防止その他個人情報の安全管理のため、
                  必要かつ適切な措置を講じます。
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. プライバシーポリシーの変更</h2>
                <p className="text-gray-600 leading-relaxed">
                  当社は、必要に応じて本プライバシーポリシーを変更することがあります。
                  変更後のプライバシーポリシーは、当サイトに掲載した時点から効力を生じるものとします。
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. お問い合わせ</h2>
                <p className="text-gray-600 leading-relaxed">
                  本プライバシーポリシーに関するお問い合わせは、以下までご連絡ください：
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mt-4">
                  <p className="text-gray-900 font-semibold mb-2">株式会社650vs</p>
                  <p className="text-gray-600">Email: contact@650vs.com</p>
                  <p className="text-gray-600">TEL: 029-XXX-XXXX</p>
                  <p className="text-gray-600">
                    〒310-0000<br />
                    茨城県水戸市○○町1-2-3 ○○ビル3F
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">制定・改定履歴</h2>
                <p className="text-gray-600">制定日：2022年1月25日</p>
                <p className="text-gray-600">最終改定日：2024年9月27日</p>
              </div>

            </div>

            <div className="mt-12 text-center">
              <Link 
                href="/" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300 inline-block"
              >
                ホームページに戻る
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
            <p>&copy; 2024 650vs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}