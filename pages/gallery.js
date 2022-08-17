import Head from 'next/head'
import Layout, { siteTitle } from './components/layout';

export default function Gallery() {
    return (
        <Layout >
            <Head>
                <title>{siteTitle}</title>
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
                        <div className='row'>
                            <div className='col-lg-4 col-sm-6'>
                                <div className='gallery__block mt-20'>
                                    <img src='assets/images/gallery/01.jpg' alt='' />
                                    
                                </div>
                            </div>
                            <div className='col-lg-4 col-sm-6'>
                                <div className='gallery__block mt-20'>
                                    <img src='assets/images/gallery/02.jpg' alt='' />
                                  
                                </div>
                            </div>
                            <div className='col-lg-4 col-sm-6'>
                                <div className='gallery__block mt-20'>
                                    <img src='assets/images/gallery/03.jpg' alt='' />
                                
                                </div>
                            </div>
                            <div className='col-lg-4 col-sm-6'>
                                <div className='gallery__block mt-20'>
                                    <img src='assets/images/gallery/04.jpg' alt='' />
                                
                                </div>
                            </div>
                            <div className='col-lg-4 col-sm-6'>
                                <div className='gallery__block mt-20'>
                                    <img src='assets/images/gallery/05.jpg' alt='' />
                                
                                </div>
                            </div>
                            <div className='col-lg-4 col-sm-6'>
                                <div className='gallery__block mt-20'>
                                    <img src='assets/images/gallery/06.jpg' alt='' />
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='shape__img__one'>
                        <img src='assets/images/bean.png' alt='' />
                    </div>
                </section>
            </main>
        </Layout>
    );
}