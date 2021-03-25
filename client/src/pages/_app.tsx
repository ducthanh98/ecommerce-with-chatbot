import '../../styles/globals.css'

import PageLayout from "../components/shared/PageLayout";
import StoreProvider from "../utils/store/Store"

function MyApp({Component, pageProps}) {
    return (
        <StoreProvider>
            <PageLayout {...pageProps}>
                <Component {...pageProps} />
            </PageLayout>
        </StoreProvider>
    )
}


MyApp.getInitialProps = async ({Component, ctx}) => {
    let pageProps = {}
    if (Component.getInitialProps) {
        console.log('component props')
        pageProps = await Component.getInitialProps(ctx)
    } else if (PageLayout.getInitialProps && ctx.req) {
        pageProps = await PageLayout.getInitialProps(ctx)
    }
    return {pageProps}
}
export default MyApp
