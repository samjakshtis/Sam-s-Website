import { Mainpage } from "@/components/page/Mainpage"
import { Html, Head, Main, NextScript } from 'next/document';

export default function Home() {
  return (
    <>
      <script
        async
        defer
        data-website-id="f8190cf5-691d-41e2-bce8-0917c93c6c74"
        src="https://cloud.umami.is/script.js"
      ></script>

      <Mainpage />
    </>
  )
}

