"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Breadcrumbs from "../components/Breadcrumbs";
import { useState, useEffect } from "react";

declare global {
  interface Window {
    emailjs: {
      init: (publicKey: string) => void;
      send: (
        serviceId: string,
        templateId: string,
        templateParams: Record<string, unknown>
      ) => Promise<unknown>;
    };
  }
}

// Metadataはクライアントコンポーネントでは使用できないため削除

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitData, setSubmitData] = useState<{
    name: string;
    email: string;
    company: string;
    phone: string;
    services: string;
    budget: string;
    deadline: string;
    message: string;
  } | null>(null);

  useEffect(() => {
    // EmailJS CDNを動的に読み込み
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js";
    script.onload = () => {
      if (window.emailjs) {
        window.emailjs.init("JNPTEfbn-dArUcevm");
      }
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const templateParams = {
      name: formData.get("name")?.toString() || "",
      email: formData.get("email")?.toString() || "",
      company: formData.get("company")?.toString() || "未記入",
      phone: formData.get("phone")?.toString() || "未記入",
      services: formData.getAll("services[]").join(", ") || "未選択",
      budget: formData.get("budget")?.toString() || "未選択",
      deadline: formData.get("deadline")?.toString() || "未選択",
      message: formData.get("message")?.toString() || "",
    };

    try {
      // 自分宛てメール送信
      await window.emailjs.send(
        "service_uuz9e5e",
        "template_ixcmwdn",
        templateParams
      );

      // お客様宛て自動返信メール送信
      await window.emailjs.send(
        "service_uuz9e5e",
        "template_azdpbmd",
        templateParams
      );

      setSubmitMessage("success");
      setSubmitData(templateParams);

      // フォームリセット（安全にチェック）
      if (form && typeof form.reset === "function") {
        form.reset();
      }
    } catch (error) {
      setSubmitMessage("error");
      console.error("送信エラー:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Breadcrumbs className="hidden" />

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
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-md">
              Contact Us
            </h1>
          </div>
        </div>
      </div>

      {/* Index Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              映像制作に関するご相談・お見積りはお気軽に
              <br />
              お問い合わせフォーム、またはLINEよりご連絡ください
            </p>

            <div className="flex flex-col gap-4 justify-center items-center">
              <a
                href="#line-contact"
                className="text-gray-800 font-semibold hover:text-blue-600 transition duration-300 inline-flex items-center"
              >
                LINEで問い合わせる
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </a>

              <a
                href="#faq"
                className="text-gray-800 font-semibold hover:text-blue-600 transition duration-300 inline-flex items-center"
              >
                「よくあるご質問」を見る
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

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
            <div className="bg-white rounded-lg shadow-sm p-8">
              {/* EmailJS フォーム */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* メールアドレス */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    メールアドレス <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                {/* お名前 */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    お名前 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                {/* 会社名・団体名 */}
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    会社名・団体名
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                {/* 電話番号 */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    電話番号（ハイフンを入れてください）
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="例: 090-1234-5678"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                {/* ご希望のサービス */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    ご希望のサービス <span className="text-red-500">*</span>
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="services[]"
                        value="企業プロモーション映像"
                        className="mr-2"
                      />
                      企業プロモーション映像
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="services[]"
                        value="イベント撮影・記録"
                        className="mr-2"
                      />
                      イベント撮影・記録
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="services[]"
                        value="セミナー・イベントなど配信"
                        className="mr-2"
                      />
                      セミナー・イベントなど配信
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="services[]"
                        value="ブライダル撮影"
                        className="mr-2"
                      />
                      ブライダル撮影
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="services[]"
                        value="広告・CM映像制作"
                        className="mr-2"
                      />
                      広告・CM映像制作
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="services[]"
                        value="その他"
                        className="mr-2"
                      />
                      その他
                    </label>
                  </div>
                </div>

                {/* 予算 */}
                <div>
                  <label
                    htmlFor="budget"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    予算
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">選択してください</option>
                    <option value="要相談">要相談</option>
                    <option value="～50万円">～50万円</option>
                    <option value="51～100万円">51～100万円</option>
                    <option value="101～300万円">101～300万円</option>
                    <option value="301～500万円">301～500万円</option>
                    <option value="500万円以上">500万円以上</option>
                  </select>
                </div>

                {/* 希望納期 */}
                <div>
                  <label
                    htmlFor="deadline"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    希望納期
                  </label>
                  <select
                    id="deadline"
                    name="deadline"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">選択してください</option>
                    <option value="急ぎ（1か月以内）">急ぎ（1か月以内）</option>
                    <option value="通常（3か月程度）">通常（3か月程度）</option>
                    <option value="余裕あり（3か月以上先）">
                      余裕あり（3か月以上先）
                    </option>
                    <option value="要相談">要相談</option>
                  </select>
                </div>

                {/* お問い合わせ内容 */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    お問い合わせ内容 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                {/* 送信ボタン */}
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition duration-300 font-medium disabled:bg-gray-400"
                  >
                    {isSubmitting ? "送信中..." : "送信する"}
                  </button>
                </div>
              </form>

              {/* 送信結果メッセージ */}
              {submitMessage === "success" && submitData && (
                <div className="mt-4 p-4 rounded-md text-center bg-gray-100 text-gray-800">
                  <h3 className="font-bold mb-2">送信完了</h3>
                  <p className="mb-4">
                    お問い合わせありがとうございます。以下の内容で承りました。
                  </p>
                  <div className="text-left bg-white p-4 rounded border text-sm">
                    <p>
                      <strong>お名前:</strong> {submitData.name}
                    </p>
                    <p>
                      <strong>メールアドレス:</strong> {submitData.email}
                    </p>
                    <p>
                      <strong>会社名・団体名:</strong> {submitData.company}
                    </p>
                    <p>
                      <strong>電話番号:</strong> {submitData.phone}
                    </p>
                    <p>
                      <strong>ご希望のサービス:</strong> {submitData.services}
                    </p>
                    <p>
                      <strong>予算:</strong> {submitData.budget}
                    </p>
                    <p>
                      <strong>希望納期:</strong> {submitData.deadline}
                    </p>
                    <p>
                      <strong>お問い合わせ内容:</strong>
                      <br />
                      {submitData.message}
                    </p>
                  </div>
                  <p className="mt-4">確認メールをお送りしました。</p>
                </div>
              )}

              {submitMessage === "error" && (
                <div className="mt-4 p-4 rounded-md text-center bg-red-100 text-red-800">
                  <h3 className="font-bold mb-2">送信エラー</h3>
                  <p>
                    申し訳ございませんが、送信に失敗しました。しばらく時間をおいて再度お試しください。
                  </p>
                </div>
              )}
            </div>

            <p className="text-center text-sm text-gray-500 mt-4">
              このフォームはEmailJSのセキュアなシステムを利用しています。
            </p>
          </div>
        </div>
      </section>

      {/* LINE Contact System */}
      <section id="line-contact" className="py-16">
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
      <section id="faq" className="py-16">
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
