import Head from 'next/head'
import Header from '../components/Header'
import ParentBox from '../components/ParentBox'
import ToolBox from '../components/ToolBox'

export default function Home() {
  return (
    <>
      <Head>
        <title>Pro Writer🚀</title>
        <meta name="description" content="Pro yet Minimal Writer for your all need!" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <body id="mainbody" className="bg-zinc-900 text-fuchsia-400 m-2 md:p-2 mon font-semibold">
          <Header/>
          <ParentBox/>
          <ToolBox/>
      </body>
    </>
  )
}
