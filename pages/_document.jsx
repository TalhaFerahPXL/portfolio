// Default core packages
import { Html, Head, Main, NextScript } from 'next/document'

/**
 * Load custom scripts in <Head>
 * 
 * @returns <Html>
 */
export default function Document() {
	return (
		<Html lang="en">
<Head>
  {/* Page Metadata */}
  <title>Talha – Full Stack Developer Portfolio</title>
  <meta name="description" content="Portfolio of Talha Ferah, a full-stack web developer specializing in React, Node.js, Remix, and Shopify. Explore projects, skills, and experience." />
  <meta name="keywords" content="Talha Ferah, developer, portfolio, full stack, web developer, React, Node.js, Next.js, .net, Remix.js Shopify, Remix, TypeScript" />
  <meta name="author" content="Talha Ferah" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#ffffff" />
  <meta name="msapplication-TileColor" content="#da532c" />

  {/* Favicons */}
  <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
  <link rel="manifest" href="/favicon/site.webmanifest" />
  <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />

  {/* Open Graph (Facebook, LinkedIn, etc.) */}
  <meta property="og:title" content="Talha Ferah – Full Stack Developer Portfolio" />
  <meta property="og:description" content="Explore the work of Talha, a full-stack developer building modern, scalable web apps." />
  <meta property="og:type" content="website" />
</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}