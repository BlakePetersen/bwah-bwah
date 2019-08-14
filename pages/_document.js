import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import './../styles/global-styles';

import Analytics from '../components/head/analytics'

export default class SiteDocument extends Document {
	render () {
		const sheet = new ServerStyleSheet();
		const main = sheet.collectStyles(<Main />);
		const styleTags = sheet.getStyleElement();

		return (
			<html lang={`en`}>
			<Head>
				{/* Meta */}
				{/* Favicon */}
				{/* OpenGraph */}
				{/* Twitter */}
				{/* PWA */}
				{/* Fonts */}
				{ styleTags }
				<Analytics />
			</Head>

			<body>
			{ main }
			<NextScript />
			</body>

			</html>
		)
	}
}