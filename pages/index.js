import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from './components/layout';
import Image from "next/image";
import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";


export default function Home({ dir }) {
  const { locales } = useRouter();
  const intl = useIntl();

  const title = intl.formatMessage({ id: "page.home.head.title" });
  const description = intl.formatMessage({ id: "page.head.meta.description" });

  return (
    <Layout home>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="alternate" href="http://indigobarnicosia.com" hrefLang="x-default" />
        <link rel="alternate" href="http://indigobarnicosia.com" hrefLang="tr" />
        <link rel="alternate" href="http://indigobarnicosia.com/en" hrefLang="en" />
      </Head>
      <main>
      
      <section
        id='hero__section__one'
        className='hero__slider hero__slider__one style-01'
      >
        <div
          className='hero-bg-01'
          style={{ backgroundImage: 'url(./assets/images/hero/hero-01.jpg)' }}
        >
          <div className='overlay'>
            <div className='container'>
              <div className='row align-items-center'>
                <div className='col-lg-12'>
                  <div className='hero__content__one'>
                    <h4 className='subtitle'><FormattedMessage id="page.home.slide1-h1" />
</h4>
                    <h1 className='title'><FormattedMessage id="page.home.slide1-h4" values={{ b: (chunks) => <b>{chunks}</b> }} /></h1>
                    <div className='hero__social mt-30'>
                      <ul className='d-flex'>
                        <li>
                          <a target='_blank' href='https://www.facebook.com/indigobarnicosia/'>
                            <i className='fa-brands fa-facebook-f' />
                            <span>- Facebook</span>
                          </a>
                        </li>
                        <li>
                          <a target='_blank' href='https://www.instagram.com/indigobarnicosia/'>
                            <i className='fa-brands fa-instagram' />
                            <span>- Instagram</span>
                          </a>
                        </li>
                      
                      </ul>
                    </div>
                    {/* <div className='hero__btn mt-50 xs-mt-30'>
                      <a href='hakkimizda.html' className='btn btn-primary xs-mt-10'>
                        <i className='flaticon-right icon-arrow before' />
                        <span className='label'>Read More</span>
                        <i className='flaticon-right icon-arrow after' />
                      </a>
                      <a
                        href='contact.html'
                        className='btn btn-secondary xs-mt-10'
                      >
                        <i className='flaticon-right icon-arrow before' />
                        <span className='label'>Contact Us</span>
                        <i className='flaticon-right icon-arrow after' />
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </section>
      <section id='about__section'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-7 col-md-12 col-12'>
              <div className='section__title style-01'>
                <h3 className='subtitle'><FormattedMessage id="page.home.hakkimizda.h3" /></h3>
                <h2 className='title'>
                  <span><FormattedMessage id="page.home.hakkimizda.h2" /></span>

                </h2>
                <p className='text mt-30'>
                  <FormattedMessage id="page.home.hakkimizda.p1" />
                </p>
                <p className='text mt-30'>
                  <FormattedMessage id="page.home.hakkimizda.p2" />
                </p>
              </div>
              <div className='row'>
                <div className='col-lg-12 col-md-6'>
                <Link href="/hakkimizda">
                  <a  className='btn btn-secondary mt-40 xs-mt-40'>
                    <i className='flaticon-right icon-arrow before' />
                    <span className='label'><FormattedMessage id="page.btn.continue" /></span>
                    <i className='flaticon-right icon-arrow after' />
                  </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-lg-5 col-md-12 col-12'>
              <div className='about-img-box pl-30 xs-mt-70 md-mt-70'>
                <div className='about-img style-01'>
                  <img src='assets/images/about.jpg' alt='about image' />
                </div>
               
              </div>
            </div>
          </div>
        </div>
        <div className='shape__img__one'>
          <img src='assets/images/bean.png' alt='' />
        </div>
        <div className='shape__img__two'>
          <img src='assets/images/coffee-cup.png' alt='' />
        </div>
      </section>
        <section id='about__section'>
          <div className='container'>
            <div className='row align-items-center'>
              <div className='col-lg-5 col-md-12 col-12'>
                <div className='about-img-box pl-30 xs-mt-70 md-mt-70'>
                  <div className='about-img style-01'>
                    {/*<img src='assets/images/cocktails.jpg' alt="Cocktails" />*/}
                    <Image

                        src="/assets/images/cocktails.jpg"
                        alt="Cocktails"
                        width={400}
                        height={450}

                    />
                  </div>

                </div>
              </div>
              <div className='col-lg-7 col-md-12 col-12'>
                <div className='section__title style-01'>
                  <h3 className='subtitle'><FormattedMessage id="page.home.drinks.h3" /></h3>
                  <h2 className='title'>
                    <span> </span>

                  </h2>
                  <p className='text mt-30'>
                   <FormattedMessage id="page.home.drinks.p1" />
                  </p>
                  <p className='text mt-30'>
                   <FormattedMessage id="page.home.drinks.p2" />
                  </p>

                  <p className='text mt-30'>
                   <FormattedMessage id="page.home.drinks.p3" />
                  </p>
                </div>

              </div>

            </div>
          </div>
          <div className='shape__img__one'>
            <img src='assets/images/bean.png' alt='' />
          </div>
          <div className='shape__img__two'>
            <img src='assets/images/coffee-cup.png' alt='' />
          </div>
        </section>
      <section id='exclusive__section'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='exclusive__content text-center mb-20'>
                  <h3 className='title'><FormattedMessage id="page.home.spendtime.h3" /></h3>
                </div>
              </div>
            </div>
            <div className='row'>

              <div className='col-lg-6 col-sm-12 col-md-6'>
                <div className='exclusive__block style-02 active mt-25'>
                  <div className='exclusive__block__overlay'>

                    <h3 className='title'>
                      <a href='#'><FormattedMessage id="page.home.spendtime.title1.h3" /></a>
                    </h3>
                    <p className='text'>
                      <FormattedMessage id="page.home.spendtime.title1.p1" />
                    </p>
                      
                  </div>
                </div>
              </div>
              <div className='col-lg-6 col-sm-12 col-md-6'>
                <div className='exclusive__block style-03 mt-25'>
                  <div className='exclusive__block__overlay'>

                    <h3 className='title'>
                      <a href='#'><FormattedMessage id="page.home.spendtime.title2.h3" /></a>
                    </h3>
                    <p className='text'>
                     <FormattedMessage id="page.home.spendtime.title2.p1" />
                    </p>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='shape__img__one'>
          <img src='assets/images/leaf.png' alt='' />
        </div>
      </section>
      <section id='call__to__section'>
        <div className='overlay'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-lg-6 col-md-6 col-sm-7 col-12'>
                <div className='call__to__content'>

                  <h2 className='title mt-20'><FormattedMessage id="page.home.rezeve.h3" /></h2>
                  <p className='text mt-30'>
                   <FormattedMessage id="page.home.rezeve.p1" />

                  </p>
                  <p className='text mt-30'>
                    <FormattedMessage id="page.home.rezeve.p2" />
                  </p>
                  <p className='text mt-30'>
                   <FormattedMessage id="page.home.rezeve.p3" />
                  </p>
                  <div className='call__to__btn mt-40'>
                    <Link href='/bize-ulasin' >
                      <a className='btn btn-secondary'>
                        <i className='flaticon-right icon-arrow before' />
                        <span className='label'><FormattedMessage id="page.btn.contactus" /></span>
                        <i className='flaticon-right icon-arrow after' />
                      </a>
                      </Link> 
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='shape__img__one'>
          <img src='assets/images/bean_leaf.png' alt='' />
        </div>
      </section>
   
      <section id='gallery__section'>
        <div className='container'>
          <div className='row'>
         
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