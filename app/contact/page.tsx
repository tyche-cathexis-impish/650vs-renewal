import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Breadcrumbs from "../components/Breadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "映像制作に関するご相談・お見積りはお気軽にお問い合わせください。お問い合わせフォーム、またはLINEよりご連絡ください。茨城県・千葉県での撮影承ります。",
  keywords: ["お問い合わせ", "映像制作相談", "見積り", "撮影依頼", "茨城県", "千葉県", "LINE相談", "映像制作会社"],
  openGraph: {
    title: "お問い合わせ | ロッコービデオサービス",
    description: "映像制作に関するご相談・お見積りはお気軽にお問い合わせください。茨城県・千葉県での撮影承ります。",
  },
  alternates: {
    canonical: 'https://650vs.com/contact',
  },
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Breadcrumbs />

      {/* Hero Section */}
      <div className="relative w-full overflow-hidden">
        <Image
          src="/contact_hero.jpg"
          alt="contact"
          width={1920}
          height={400}
          className="w-full object-cover block"
          style={{
            height: "400px",
            objectFit: "cover",
          }}
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center px-8 md:px-16">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-md">Contact Us</h1>
            <p className="text-xl md:text-2xl text-gray-200 drop-shadow-md">
              映像制作に関するご相談・お見積りはお気軽に
              <br />
              お問い合わせフォーム、またはLINEよりご連絡ください
            </p>
          </div>
        </div>
      </div>

      {/* Google Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                お問い合わせフォーム
              </h2>
              <p className="text-gray-600">
                以下のフォームに必要事項をご記入の上、送信してください。
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLScdRNtW7LzPb-9-rEYdLbiH_t-r8Vaowio6MeD9XSddMpC9bg/viewform?embedded=true" 
                width="100%" 
                height="1933" 
                frameBorder="0" 
                marginHeight="0" 
                marginWidth="0"
              >
                読み込んでいます…
              </iframe>
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
                <Image
                  src="/Line_Official_QR.png"
                  alt="QRコード"
                  width={192}
                  height={192}
                  className="w-48 h-48 mx-auto"
                  quality={85}
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