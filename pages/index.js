import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>TNT Line Bot See My Eyes</title>
        <meta name="description" content="LINE Bot 官方網站，提供 AI 聊天與自動化服務" />
        <meta name="keywords" content="LINE Bot, Chatbot, AI, SeeMyEyes" />
        <meta property="og:title" content="TNT Line Bot See My Eyes" />
        <meta property="og:description" content="打造智慧聊天體驗的 LINE Bot 平台" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tntlinebotseemyeyes.online/" />
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen p-8">
        <h1 className="text-4xl font-bold mb-4">TNT Line Bot - See My Eyes</h1>
        <p className="text-lg text-gray-600 text-center max-w-xl">
          這是 SEO 友好的靜態網站範例。可自由修改內容與樣式，並能被 Google 搜尋引擎完整收錄。
        </p>
      </main>
    </>
  )
}
