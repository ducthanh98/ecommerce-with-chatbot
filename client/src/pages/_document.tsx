import Document, {Html, Head, Main, NextScript} from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return {...initialProps}
    }

    render() {
        return (
            <Html>
                <Head/>
                <body>
                <Main/>
                <NextScript/>
                </body>
                
                <script src="/js/jquery-2.2.4.min.js"></script>
                <script src="/js/popper.min.js"></script>
                <script src="/js/bootstrap.min.js"></script>
                <script src="/js/jquery.magnific-popup.js"></script>
                <script src="/js/wow.min.js"></script>
                <script src="/js/owl.carousel.min.js"></script>
                <script src="/js/waypoints.min.js"></script>
                <script src="/js/jquery.counterup.min.js"></script>
                <script src="/js/imagesloaded.pkgd.min.js"></script>
                <script src="/js/isotope.pkgd.min.js"></script>

                <script src="/js/jquery.datetimepicker.full.min.js"></script>

                <script src="/js/countdown.js"></script>
                <script src="/js/slick.min.js"></script>
                <script src="/js/datepicker.min.js"></script>
                <script src="/js/datepicker-en.js"></script>
                <script src="/js/cookiealert.js"></script>

                <script src="/js/main.js"></script>
            </Html>
        )
    }
}

export default MyDocument