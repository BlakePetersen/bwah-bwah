import Document, { Head, Main, NextScript } from 'next/document'
import Analytics from '../components/head/analytics'

import { ServerStyleSheet } from 'styled-components'
import './../styles/global-styles';

export default class SiteDocument extends Document {
	render () {
		const sheet = new ServerStyleSheet();
		const main = sheet.collectStyles(<Main />);
		const styleTags = sheet.getStyleElement();

		return (
			<html>
			<Head>
				<Analytics />
				{styleTags}
			</Head>

			<body>
			<div className="root">
				{main}
			</div>

			<NextScript />
			</body>
			</html>
		)
	}
}