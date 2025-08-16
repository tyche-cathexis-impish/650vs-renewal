import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function CancellationPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              キャンセルポリシー
            </h1>
            <p className="text-lg text-gray-300">
              ご契約のキャンセル・変更について
            </p>
          </div>
        </div>
      </section>

      {/* Cancellation Policy Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              
              <div className="mb-8">
                <p className="text-gray-600 leading-relaxed">
                  株式会社650vsでは、お客様により良いサービスを提供するため、
                  以下のキャンセルポリシーを定めております。ご契約前に必ずご確認ください。
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. 基本方針</h2>
                <p className="text-gray-600 leading-relaxed">
                  映像制作業務は、事前の企画・準備作業、機材・スタッフの手配、撮影日程の調整等、
                  多くの準備を要する業務のため、キャンセル時期に応じてキャンセル料を申し受けます。
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. キャンセル料</h2>
                
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">企業プロモーション・CM制作</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                      <span className="text-gray-600">契約後〜撮影14日前まで</span>
                      <span className="font-semibold text-gray-900">契約金額の20%</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                      <span className="text-gray-600">撮影13日前〜7日前まで</span>
                      <span className="font-semibold text-gray-900">契約金額の50%</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                      <span className="text-gray-600">撮影6日前〜前日まで</span>
                      <span className="font-semibold text-gray-900">契約金額の80%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">撮影当日</span>
                      <span className="font-semibold text-gray-900">契約金額の100%</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">イベント撮影・記録映像</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                      <span className="text-gray-600">契約後〜撮影10日前まで</span>
                      <span className="font-semibold text-gray-900">契約金額の10%</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                      <span className="text-gray-600">撮影9日前〜3日前まで</span>
                      <span className="font-semibold text-gray-900">契約金額の30%</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                      <span className="text-gray-600">撮影2日前〜前日まで</span>
                      <span className="font-semibold text-gray-900">契約金額の50%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">撮影当日</span>
                      <span className="font-semibold text-gray-900">契約金額の100%</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">ウェディング映像制作</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                      <span className="text-gray-600">契約後〜撮影30日前まで</span>
                      <span className="font-semibold text-gray-900">契約金額の20%</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                      <span className="text-gray-600">撮影29日前〜14日前まで</span>
                      <span className="font-semibold text-gray-900">契約金額の50%</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                      <span className="text-gray-600">撮影13日前〜7日前まで</span>
                      <span className="font-semibold text-gray-900">契約金額の80%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">撮影6日前〜当日</span>
                      <span className="font-semibold text-gray-900">契約金額の100%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. 日程変更について</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  撮影日程の変更をご希望の場合は、以下の条件で承ります：
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li><strong>撮影7日前まで：</strong>変更手数料無料（1回限り）</li>
                  <li><strong>撮影6日前〜3日前：</strong>変更手数料として契約金額の10%</li>
                  <li><strong>撮影2日前以降：</strong>一度キャンセル扱いとなり、新規契約となります</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. 天候・不可抗力による延期</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  以下の場合は、キャンセル料なしで日程変更を承ります：
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>台風・大雨・大雪等の悪天候</li>
                  <li>地震・災害等の自然災害</li>
                  <li>新型コロナウイルス等の感染症拡大による自治体からの自粛要請</li>
                  <li>その他、当社が撮影困難と判断した場合</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. お客様都合による緊急キャンセル</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  以下の場合でも、通常のキャンセル料を申し受けます：
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>お客様の体調不良（医師の診断書がある場合は個別相談）</li>
                  <li>会社都合・イベント中止</li>
                  <li>予算の都合</li>
                  <li>その他、お客様都合による理由</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. 撮影済み案件のキャンセル</h2>
                <p className="text-gray-600 leading-relaxed">
                  撮影完了後の編集工程でのキャンセルは、撮影費用および編集進捗に応じた費用をお支払いいただきます。
                  撮影済みの素材についてはお客様にお渡しいたします。
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. 支払い・返金について</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">前払金について</h3>
                    <p className="text-gray-600 leading-relaxed">
                      契約時にお支払いいただく前払金（契約金額の30%）は、キャンセル料に充当いたします。
                      キャンセル料が前払金を下回る場合は差額を返金いたします。
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">返金方法</h3>
                    <p className="text-gray-600 leading-relaxed">
                      返金が発生する場合は、キャンセル確定から7営業日以内に、
                      お客様指定の口座にお振込みいたします（振込手数料はお客様負担）。
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. キャンセル手続き</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  キャンセルをご希望の場合は、以下の方法でご連絡ください：
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>メール：contact@650vs.com（推奨）</li>
                  <li>電話：029-XXX-XXXX（平日9:00-18:00）</li>
                  <li>お問い合わせフォーム</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-4">
                  ※キャンセルの受付は、当社からの確認連絡をもって成立となります。
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. その他</h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>キャンセル料の計算は、契約書記載の税込金額を基準とします</li>
                  <li>複数日程での撮影の場合、日程ごとに個別に計算いたします</li>
                  <li>特別な事情がある場合は、個別にご相談ください</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. お問い合わせ</h2>
                <p className="text-gray-600 leading-relaxed">
                  本キャンセルポリシーに関するご質問は、以下までお気軽にお問い合わせください：
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mt-4">
                  <p className="text-gray-900 font-semibold mb-2">株式会社650vs</p>
                  <p className="text-gray-600">Email: contact@650vs.com</p>
                  <p className="text-gray-600">TEL: 029-XXX-XXXX</p>
                  <p className="text-gray-600">営業時間: 平日 9:00-18:00</p>
                  <p className="text-gray-600">
                    〒310-0000<br />
                    茨城県水戸市○○町1-2-3 ○○ビル3F
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <p className="text-gray-600">制定日：2024年1月1日</p>
                <p className="text-gray-600">最終改定日：2024年12月1日</p>
              </div>

            </div>

            <div className="mt-12 text-center space-x-4">
              <Link 
                href="/contact" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300 inline-block"
              >
                お問い合わせ
              </Link>
              <Link 
                href="/" 
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition duration-300 inline-block"
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