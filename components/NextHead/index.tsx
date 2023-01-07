import Head from "next/head"

type NextHeadT = {
  title: string
  metaDescription: string
}

const NextHead = ({ title='NextJS app', metaDescription='NextJS app'}: NextHeadT) => (
	<Head>
		<title>Chat | {title}</title>
		<meta name="description" content={`Chat | ${metaDescription}`} />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<link rel="icon" href="/favicon.ico" />
	</Head>
)

export default NextHead
