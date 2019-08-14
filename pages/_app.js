import App, { Container } from 'next/app'
import GlobalStyles from './../styles/global-styles'

export default class MyApp extends App {
	static async getInitialProps ({ Component, router, ctx }) {
		let pageProps = {};

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx)
		}

		pageProps.pathname = router.route;
		return { pageProps }
	}

	render () {
		const {Component, pageProps} = this.props;

		return <Container>
			<GlobalStyles />
			<Component {...pageProps} />
		</Container>
	}
}