import { Mainpage } from "@/components/page/Mainpage"
import Script from "next/script"

export default function Home() {
  return (
    <>
      <html>
        <head>
          <Script
            async
            defer
            data-website-id="f8190cf5-691d-41e2-bce8-0917c93c6c74"
            src="https://cloud.umami.is/script.js"
          />
        </head>
        <body>
          <Mainpage />
        </body>
      </html>
    </>
  )
}

