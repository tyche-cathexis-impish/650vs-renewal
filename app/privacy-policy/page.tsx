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
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. 趣旨</h2>
                <p className="text-gray-600 leading-relaxed">
                  ロッコービデオサービス（以下、「当事業者」とします）は、お客様の貴重な財産である個人情報を保護することは重要な責任であると考えます。当事業者では、以下のとおり個人情報保護方針を定め、お客様よりお預かりした個人情報の適切な管理および保護に努めてまいります。
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. 定義</h2>
                <p className="text-gray-600 leading-relaxed">
                  個人情報とは、氏名・年齢・電話番号・メールアドレス・ソーシャルメディアアカウントなど個人に関する情報で、これらのうち1つ又は2つ以上を組み合わせることによって、特定の個人を識別することができるものをいいます。
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. 個人情報の収集方法</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  当事業者では、以下の方法で個人情報を収集する場合があります：
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>お問い合わせフォームからの情報</li>
                  <li>メールでのやり取り</li>
                  <li>LINEを通じたお客様とのやり取り</li>
                  <li>映像制作サービスの提供過程での情報収集</li>
                  <li>Cookieやその他の技術を使用した自動収集</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. 個人情報の利用目的</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  お客さまからお預かりした個人情報は、以下の目的で利用します：
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>映像制作サービスの提供および関連業務の遂行</li>
                  <li>お客様へのご連絡とサポート</li>
                  <li>サービス内容の向上を目的とした事例分析</li>
                  <li>サービスのご案内</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-4">
                  お客様がご自身の個人情報を当事業者に提供されるか否かはお客様のご判断によります。もしご提供されない場合には、本ウェブサイトで提供するサービスが提供できない場合がありますので予めご了承ください。
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. 撮影・制作における個人情報の取扱い</h2>
                <p className="text-gray-600 leading-relaxed">
                  映像制作サービスの提供において、撮影対象者の肖像権および個人情報については、事前に適切な同意を得た上で取扱います。制作された映像素材は、お客様との契約に基づいて適切に管理・利用いたします。
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. 個人情報の第三者への開示、利用の制限</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  当事業者はお客さまよりお預かりした個人情報を適切に管理し、次のいずれかに該当する場合を除き個人情報を第三者に開示しません。
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>法令に基づく場合</li>
                  <li>お客さまの同意がある場合</li>
                  <li>お客さまが希望されるサービスを行うために業務を委託する場合</li>
                  <li>ウェブサイト運営およびサービス改善のためのアクセス解析が必要な場合（この場合、個人を特定する情報は含まれません）</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. 業務委託における個人情報の管理</h2>
                <p className="text-gray-600 leading-relaxed">
                  当事業者の業務の全部または一部を外部に業務委託する際、当事業者は個人情報を適切に保護できる管理体制を敷き実行していることを条件に委託先を厳選し、お客様の個人情報を厳密に管理・監督しています。
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. お客様からの使用停止、削除等の申し込みへの応諾</h2>
                <p className="text-gray-600 leading-relaxed">
                  お客様は、当事業者に対してご自身の個人情報の開示や訂正を要求したり、またはお客様の個人情報を利用、提供することを中止させるために本ウェブサイトの問合わせ窓口に申し出ることができます。その際はお客様ご本人を確認させていただいたうえで合理的な期間内に対応いたします。
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. お問い合わせ</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  本ウェブサイトの個人情報取り扱いに関するお問い合わせは下記までご連絡ください。
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-900 font-semibold mb-2">ロッコービデオサービス</p>
                  <p className="text-gray-600">Email: contact@650vs.com</p>
                  <p className="text-gray-600">LINE: @605mgbvo</p>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. 内容の改定</h2>
                <p className="text-gray-600 leading-relaxed">
                  本ウェブサイトの個人情報の取り扱い内容は予告なく改定する場合があります。改定した内容は本ウェブサイト内にて掲載いたします。
                </p>
              </div>

              <div className="mb-8 text-gray-600">
                <p>2022年1月25日制定</p>
                <p>2025年1月改定</p>
              </div>

            </div>

            <div className="mt-12 text-center">
              <Link 
                href="/" 
                className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/80 transition duration-300 inline-block"
              >
                ホームページに戻る
              </Link>
            </div>
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
  )
}