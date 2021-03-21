import '../../styles/globals.css'

import {PageLayout} from "../components/shared/PageLayout";
import StoreProvider from "../utils/store/Store"

function MyApp({Component, pageProps}) {
    return (
        <StoreProvider>
            <PageLayout>
                <Component {...pageProps} />
            </PageLayout>
        </StoreProvider>

    )

}

export default MyApp
