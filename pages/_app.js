import App, { Container } from 'next/app'
import GlobalStyles from './../styles/global-styles'

export default class MyApp extends App {
	render () {
		const {Component, pageProps} = this.props;

		return <Container>
			<GlobalStyles />
			<Component {...pageProps} />
		</Container>
	}
}