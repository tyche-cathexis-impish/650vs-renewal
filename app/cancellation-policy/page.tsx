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
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. 趣旨</h2>
                <p className="text-gray-600 leading-relaxed">
                  ロッコービデオサービス（以下、「当事業者」とします）では、お客様により良いサービスを提供するため、以下のキャンセルポリシーを定めております。映像制作業務は事前の企画・準備作業、機材・スタッフの手配、撮影日程の調整等、多くの準備を要する業務のため、キャンセル時期に応じてキャンセル料を申し受けます。ご契約前に必ずご確認ください。
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. キャンセル料金表</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  プロジェクト規模により、以下の料金体系を適用いたします。
                </p>
                
                {/* 小規模案件 */}
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    小規模案件（スタッフ6名以下）
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center border-b border-blue-200 pb-2">
                      <span className="text-gray-600 font-medium">4日前まで</span>
                      <span className="font-semibold text-green-600">無料</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-blue-200 pb-2">
                      <span className="text-gray-600 font-medium">3日前〜前日</span>
                      <span className="font-semibold text-yellow-600">契約金額の50%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 font-medium">当日</span>
                      <span className="font-semibold text-red-600">契約金額の100%</span>
                    </div>
                  </div>
                </div>

                {/* 中大規模案件 */}
                <div className="bg-orange-50 border-l-4 border-orange-400 p-6 rounded-lg mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    中大規模案件（スタッフ7名以上）
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center border-b border-orange-200 pb-2">
                      <span className="text-gray-600 font-medium">7日前まで</span>
                      <span className="font-semibold text-green-600">無料</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-orange-200 pb-2">
                      <span className="text-gray-600 font-medium">3日前〜6日前</span>
                      <span className="font-semibold text-yellow-600">契約金額の50%</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-orange-200 pb-2">
                      <span className="text-gray-600 font-medium">前日</span>
                      <span className="font-semibold text-orange-600">契約金額の70%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 font-medium">当日</span>
                      <span className="font-semibold text-red-600">契約金額の100%</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>案件規模の判定について：</strong>
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 事前の見積書にて必要スタッフ数を明記し、案件規模を決定いたします</li>
                    <li>• スタッフ数には撮影・音声・照明・アシスタント等の制作スタッフを含みます</li>
                    <li>• 複数日程や特殊機材が必要な場合は中大規模案件となります</li>
                    <li>• 判定が不明な場合は契約時に確認いたします</li>
                  </ul>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. 制作途中でのキャンセル</h2>
                <p className="text-gray-600 leading-relaxed">
                  撮影完了後の編集工程や制作途中でお客様都合によりキャンセルされる場合は、撮影費用および編集進捗に応じた費用をお支払いいただきます。撮影済みの素材についてはお客様にお渡しいたします。
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. 日程変更について</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  撮影日程の変更をご希望の場合は、以下の条件で承ります：
                </p>
                
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">小規模案件（スタッフ6名以下）</h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-1">
                    <li><strong>4日前まで：</strong>変更手数料無料（1回限り）</li>
                    <li><strong>3日前〜前日：</strong>変更手数料50%</li>
                    <li><strong>当日：</strong>変更手数料100%</li>
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">中大規模案件（スタッフ7名以上）</h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-1">
                    <li><strong>7日前まで：</strong>変更手数料無料（1回限り）</li>
                    <li><strong>3〜6日前：</strong>変更手数料50%</li>
                    <li><strong>前日：</strong>変更手数料70%</li>
                    <li><strong>当日：</strong>変更手数料100%</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>日程変更の料金について：</strong><br/>
                    変更手数料をお支払いいただいた上で、新しい撮影日には通常の契約料金が別途必要となります。変更手数料はキャンセル料と同額です。
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. 天候・不可抗力による延期</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  以下の場合は、キャンセル料なしで日程変更を承ります：
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>台風・大雨・大雪等の悪天候</li>
                  <li>地震・災害等の自然災害</li>
                  <li>感染症拡大による自治体からの自粛要請</li>
                  <li>その他、当事業者が撮影困難と判断した場合</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. 返金について</h2>
                <p className="text-gray-600 leading-relaxed">
                  返金が発生する場合は、キャンセル確定から7営業日以内に、お客様指定の口座にお振込みいたします（振込手数料はお客様負担）。契約時の前払金がある場合は、キャンセル料に充当し、差額を返金いたします。
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. キャンセル手続き</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  キャンセルをご希望の場合は、以下の方法でご連絡ください：
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>メール：contact@650vs.com（推奨）</li>
                  <li>LINE：@605mgbvo</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-4">
                  ※キャンセルの受付は、当事業者からの確認連絡をもって成立となります
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. その他</h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>キャンセル料の計算は、契約書記載の税込金額を基準とします</li>
                  <li>複数日程での撮影の場合、日程ごとに個別に計算いたします</li>
                  <li>特別な事情がある場合は、個別にご相談ください</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. お問い合わせ</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  本キャンセルポリシーに関するご質問は、以下までお気軽にお問い合わせください。
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-900 font-semibold mb-2">ロッコービデオサービス</p>
                  <p className="text-gray-600">Email: contact@650vs.com</p>
                  <p className="text-gray-600">LINE: @605mgbvo</p>
                </div>
              </div>

              <div className="mb-8 text-gray-600">
                <p>2022年1月25日制定</p>
                <p>2025年1月改定</p>
              </div>

            </div>

            <div className="mt-12 text-center space-x-4">
              <Link 
                href="/contact" 
                className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/80 transition duration-300 inline-block"
              >
                お問い合わせ
              </Link>
              <Link 
                href="/" 
                className="border border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary/10 transition duration-300 inline-block"
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