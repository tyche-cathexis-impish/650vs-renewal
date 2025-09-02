import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              映像制作に関するご相談・お見積りはお気軽にお問い合わせください
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                お問い合わせ方法
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                お客様のご都合に合わせて、複数の連絡方法をご用意しております。
                お急ぎの場合はお電話またはLINEでご連絡ください。
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center p-8 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-8 h-8 bg-blue-600 rounded"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">お電話</h3>
                <p className="text-gray-600 mb-4">
                  営業時間内でしたら<br />
                  お電話が最速です
                </p>
                <p className="text-2xl font-bold text-blue-600 mb-2">029-XXX-XXXX</p>
                <p className="text-gray-500 text-sm">平日 9:00-18:00</p>
              </div>
              
              <div className="text-center p-8 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-8 h-8 bg-green-600 rounded"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">LINE</h3>
                <p className="text-gray-600 mb-4">
                  24時間受付<br />
                  お気軽にメッセージ
                </p>
                <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300">
                  LINE友達追加
                </button>
                <p className="text-gray-500 text-sm mt-2">即日返信</p>
              </div>
              
              <div className="text-center p-8 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-8 h-8 bg-purple-600 rounded"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">メール</h3>
                <p className="text-gray-600 mb-4">
                  詳細なご相談は<br />
                  メールで
                </p>
                <p className="text-lg font-semibold text-purple-600 mb-2">info@650vs.com</p>
                <p className="text-gray-500 text-sm">24時間以内返信</p>
              </div>
              
              <div className="text-center p-8 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-8 h-8 bg-orange-600 rounded"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">ご来社</h3>
                <p className="text-gray-600 mb-4">
                  直接お打ち合わせ<br />
                  （要予約）
                </p>
                <p className="text-sm text-orange-600 font-semibold mb-2">茨城県水戸市○○町1-2-3</p>
                <p className="text-gray-500 text-sm">平日 10:00-17:00</p>
              </div>
            </div>
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
                以下のフォームからもお気軽にお問い合わせください。24時間以内にご返信いたします。
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-900 mb-2">
                      お名前 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="田村太郎"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-bold text-gray-900 mb-2">
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
                    <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-2">
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
                    <label htmlFor="phone" className="block text-sm font-bold text-gray-900 mb-2">
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
                  <label htmlFor="service" className="block text-sm font-bold text-gray-900 mb-2">
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
                    <option value="wedding">ウェディング映像制作</option>
                    <option value="commercial">CM・広告映像制作</option>
                    <option value="shortfilm">ショートフィルム制作</option>
                    <option value="other">その他・相談</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="budget" className="block text-sm font-bold text-gray-900 mb-2">
                    予算感
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
                  <label htmlFor="timeline" className="block text-sm font-bold text-gray-900 mb-2">
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
                  <label htmlFor="message" className="block text-sm font-bold text-gray-900 mb-2">
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
                    className="bg-blue-600 text-white px-12 py-4 rounded-lg hover:bg-blue-700 transition duration-300 text-lg font-semibold"
                  >
                    送信する
                  </button>
                  <p className="text-gray-500 text-sm mt-4">
                    送信後、24時間以内にご返信いたします
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* LINE Reservation System */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-12 text-white">
              <h2 className="text-3xl font-bold mb-6">
                LINE予約システム
              </h2>
              <p className="text-xl mb-8 text-green-100">
                LINEから簡単に打ち合わせの予約ができます。<br />
                お忙しい方におすすめの便利なシステムです。
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white bg-opacity-20 rounded-lg p-6">
                  <div className="text-4xl mb-4">①</div>
                  <h3 className="text-lg font-bold mb-2">友達追加</h3>
                  <p className="text-green-100 text-sm">公式LINEアカウントを友達に追加</p>
                </div>
                
                <div className="bg-white bg-opacity-20 rounded-lg p-6">
                  <div className="text-4xl mb-4">②</div>
                  <h3 className="text-lg font-bold mb-2">希望日送信</h3>
                  <p className="text-green-100 text-sm">打ち合わせ希望日時をメッセージで送信</p>
                </div>
                
                <div className="bg-white bg-opacity-20 rounded-lg p-6">
                  <div className="text-4xl mb-4">③</div>
                  <h3 className="text-lg font-bold mb-2">予約完了</h3>
                  <p className="text-green-100 text-sm">確認後、予約確定のご連絡をいたします</p>
                </div>
              </div>
              
              <button className="bg-white text-green-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition duration-300 text-lg font-bold">
                LINE予約を始める
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Office Info */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                オフィス情報
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">アクセス</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">住所</h4>
                      <p className="text-gray-600">〒310-0000 茨城県水戸市○○町1-2-3 ○○ビル3F</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">最寄り駅</h4>
                      <p className="text-gray-600">JR水戸駅 南口から徒歩10分</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">駐車場</h4>
                      <p className="text-gray-600">近隣にコインパーキング有り（費用は弊社負担）</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">営業時間</h4>
                      <p className="text-gray-600">平日 9:00-18:00（土日祝は要予約）</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Link 
                    href="/"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 inline-block"
                  >
                    Googleマップで見る
                  </Link>
                </div>
              </div>
              
              <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 text-lg">[オフィス地図]</span>
              </div>
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
                  A. はい、お見積もりは無料です。プロジェクトの詳細をお聞かせいただければ、詳細なお見積もりを作成いたします。お気軽にお問い合わせください。
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Q. 急ぎの案件にも対応可能ですか？
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  A. はい、可能な限り対応いたします。まずはお電話またはLINEでご相談ください。スケジュールを調整し、最適なプランをご提案いたします。
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Q. 県外での撮影も可能ですか？
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  A. はい、全国どこでも対応可能です。交通費・宿泊費は別途ご負担いただきますが、関東近県でしたら追加費用を抑えてご提供できます。
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Q. 制作期間はどのくらいかかりますか？
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  A. プロジェクトの規模により異なりますが、企業プロモーション映像で約1〜2ヶ月、ウェディング映像で約3〜4週間が目安です。詳細はお打ち合わせ時にご説明いたします。
                </p>
              </div>
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