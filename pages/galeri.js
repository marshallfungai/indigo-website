import Head from 'next/head'
import Script from 'next/script';
import Layout, { siteTitle } from './components/layout';
import { FormattedMessage, useIntl } from "react-intl";

export default function Gallery() {
  
    const intl = useIntl();
    const title = intl.formatMessage({ id: "page.hakkimizda.head.title" });
  
    return (
        <Layout >
            <Head>
                <title>{title}</title>
            </Head>

            <main>
                <div
                    id='banner-section'
                    className='page-title'
                >
                    <div className='overlay'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-lg-12'>
                                    <div className='breadcrubms text-center'>
                                        <h2 className='title'>Galeri</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section id='gallery__section'>
                    <div className='container'>
                        <div id="pixlee_container"></div>

                    </div>
                    <div className='shape__img__one'>
                        <img src='assets/images/bean.png' alt='' />
                    </div>
                </section>
            </main>
            <Script
                src="//instafeed.assets.pxlecdn.com/assets/pixlee_widget_1_0_0.js"
                strategy="beforeInteractive"
                onReady={() =>
                    window.PixleeAsyncInit = function() {Pixlee.init({apiKey:'ovygNg9Ec15YKLZ7ye1D'});Pixlee.addSimpleWidget({widgetId:'36975'});}
                }
            />
        </Layout>
    );
}