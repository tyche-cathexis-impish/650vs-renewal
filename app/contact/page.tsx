import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl text-gray-300">
              映像制作に関するご相談・お見積りはお気軽に
              <br />
              お問い合わせフォーム、またはLINEよりご連絡ください
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                お問い合わせフォーム
              </h2>
              <p className="text-gray-600">
                　　<span className="text-red-500">＊</span>は必須項目です。
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-bold text-gray-900 mb-2"
                    >
                      お名前 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="鹿行太郎"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-bold text-gray-900 mb-2"
                    >
                      会社名・団体名
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="株式会社○○"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-bold text-gray-900 mb-2"
                    >
                      メールアドレス <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="example@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-bold text-gray-900 mb-2"
                    >
                      電話番号
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="029-XXX-XXXX"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-bold text-gray-900 mb-2"
                  >
                    ご希望のサービス <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">選択してください</option>
                    <option value="corporate">企業プロモーション映像</option>
                    <option value="event">イベント撮影・記録</option>
                    <option value="event">セミナー・イベントなど配信</option>
                    <option value="wedding">ウェディング映像制作</option>
                    <option value="commercial">CM・広告映像制作</option>
                    <option value="other">その他・相談</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="budget"
                    className="block text-sm font-bold text-gray-900 mb-2"
                  >
                    予算
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">選択してください</option>
                    <option value="under50">〜50万円</option>
                    <option value="50-100">50〜100万円</option>
                    <option value="100-300">100〜300万円</option>
                    <option value="300-500">300〜500万円</option>
                    <option value="over500">500万円〜</option>
                    <option value="consulting">要相談</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="timeline"
                    className="block text-sm font-bold text-gray-900 mb-2"
                  >
                    希望納期
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">選択してください</option>
                    <option value="urgent">急ぎ（1ヶ月以内）</option>
                    <option value="normal">通常（1〜3ヶ月）</option>
                    <option value="flexible">余裕あり（3ヶ月以上）</option>
                    <option value="undecided">未定・相談</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-bold text-gray-900 mb-2"
                  >
                    メッセージ・詳細 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="プロジェクトの詳細、ご要望、ご質問などをお聞かせください。"
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-primary-purple text-white px-12 py-4 rounded-lg hover:bg-blue-700 transition duration-300 text-lg font-semibold"
                  >
                    送信する
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* LINE Contact System */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-lg mx-auto text-center">
            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-12 text-white">
              <h2 className="text-3xl font-bold mb-6">
                LINEからのお問い合わせ
              </h2>

              <div className="mb-8">
                <img
                  src="\Line_Official_QR.png"
                  alt="QRコード"
                  className="w-48 h-48 mx-auto"
                />
              </div>

              <a
                href="line://ti/p/@605mgbvo"
                className="bg-white text-green-600 px-4 py-4 rounded-lg hover:bg-gray-100 transition duration-300 text-lg font-bold inline-block"
              >
                クリックで友達追加
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                よくあるご質問
              </h2>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Q. 見積もりは無料ですか？
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  A.
                  はい、お見積もりは無料です。プロジェクトの詳細をお聞かせいただければ、詳細なお見積もりを作成いたします。お気軽にお問い合わせください。
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Q. 急ぎの案件にも対応可能ですか？
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  A.
                  はい、可能な限り対応いたします。まずはお問い合わせください。スケジュールを調整し、最適なプランをご提案いたします。
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Q. 県外での撮影も可能ですか？
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  A.
                  はい、全国どこでも対応可能です。交通費・宿泊費は別途ご負担いただきますが、関東近県でしたら追加費用を抑えてご提供できます。
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Q. 制作期間はどのくらいかかりますか？
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  A.
                  プロジェクトの規模により異なりますが、企業プロモーション映像で約1〜2ヶ月、ウェディング映像で約3〜4週間が目安です。詳細はお打ち合わせ時にご説明いたします。
                </p>
              </div>
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
  );
}
