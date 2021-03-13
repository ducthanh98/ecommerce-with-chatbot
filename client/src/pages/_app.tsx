import '../../styles/globals.css'

import {Layout} from "../components/shared/Layout";
import StoreProvider from "../utils/store/Store"

function MyApp({Component, pageProps}) {
    return (
        <StoreProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </StoreProvider>

    )

}

export default MyApp
