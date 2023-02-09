import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import Link from 'next/link';
import Script from 'next/script';
import {useRouter} from "next/router";
import Navbar from "./navbar";
import { FormattedMessage, useIntl } from "react-intl";
import getConfig from 'next/config';
import LocaleSwitcher from "./locale-switcher";


export const siteTitle = 'Indigo Bar and Cafe';


export default function Layout({ children, home }) {

  const {locale,locales,asPath } = useRouter();
  const webMenuLink = 'https://dash.indigobarnicosia.com';
  const mobileWebMenuLink = 'https://menu.indigobarnicosia.com';
  const { publicRuntimeConfig } = getConfig();

  ///CSS
  const animateCss = publicRuntimeConfig.staticFolder + 'assets/css/animate.css';
  const bootstrapCss = publicRuntimeConfig.staticFolder + 'assets/css/bootstrap.min.css';
  const allMinCss = publicRuntimeConfig.staticFolder + 'assets/css/all.min.css';
  const fontAwesomeCss = publicRuntimeConfig.staticFolder + 'assets/css/fontawesome.min.css';
  const flaticonCss = publicRuntimeConfig.staticFolder + 'assets/fonts/flaticon.css';
  const owlCarouselCss = publicRuntimeConfig.staticFolder + 'assets/css/owl.carousel.min.css';
  const swiperBundleCss = publicRuntimeConfig.staticFolder + 'assets/css/swiper-bundle.css';
  const backToTopCss = publicRuntimeConfig.staticFolder + 'assets/css/backtotop.css';
  const styleCss = publicRuntimeConfig.staticFolder + 'assets/css/style.css';

  return (
      <div>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
              name="description"
              content="Çıkmaz Sokak Partileri bünyesinde INDIGO Bar & Lounge sıcak atmosferi, birbirinden lezzetli kokteylleri ve eşsiz dokusuyla sizleri bekliyor... "
          />
          <title>{siteTitle}</title>
        </Head>
        <link
            rel='shortcut icon'
            type='image/x-icon'
            href='assets/images/favicon.png'
        />
        <link rel='stylesheet' href={animateCss} />
        <link rel='stylesheet' href={bootstrapCss } />
        <link rel='stylesheet' href={allMinCss}/>
        <link rel='stylesheet' href={fontAwesomeCss}/>
        <link rel='stylesheet' href={flaticonCss}/>
        <link rel='stylesheet' href={owlCarouselCss}/>
        <link rel='stylesheet' href={swiperBundleCss} />
        <link rel='stylesheet' href={backToTopCss} />
        <link rel='stylesheet' href={styleCss} />

        <header id='header-sticky' className='header-area style-01'>
          <div className='header__top d-none d-lg-block d-md-block'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-12'>
                  <div className='header__content'>
                    <div className='row'>
                      <div className='col-lg-4 col-md-4'>
                        <div className='header__info'>
                          <ul className='d-flex'>
                            <li>
                              <i className='fa-solid fa-phone' />
                              <span>Hotline:</span>
                              +90 546 991 12 03
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className='col-lg-4 col-md-4'>
                       
                      </div>
                      <div className='col-lg-4 col-md-4'>
                        <div className='header__social'>
                          <Navbar/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='header-navigation'>
            <div className='container'>
              <div className='row align-items-center'>
                <div className='col-lg-12'>
                  <div className='header-main-menu'>
                    <div className='row'>
                      <div className='col-xl-3 col-lg-3 col-md-3 col-12'>
                        <div className='logo-wrapper'>
                          <a href='/' className='logo'>
                            <img className='menuLogo' src='assets/images/logo.png' alt='Indigo Bar' />
                            {/* <Image
                                  priority
                                  src="/assets/images/logo.png"
                                  className={''}
                                  layout = 'responsive'
                                  height={28}
                                  width={44}
                                  alt={siteTitle}
                                /> */}
                          </a>
                        </div>
                      </div>
                      <div className='col-xl-7 col-lg-6 col-md-5 col-12'>
                        <div className='header-content'>
                          <a className='header-toggle-menu' href='#' title='Menu'>
                            <i className='fa fa-bars' />
                          </a>
                          <nav className='header-nav-wrap'>
                            <h2 className='header-nav-heading h6'>
                              Site Navigation
                            </h2>
                            <ul className='header-nav'>
                              <li>
                                <Link href="/">
                                  <a title=''>
                                   <FormattedMessage id="page.menu.home" />
                                  </a>
                                </Link>

                              </li>
                              <li >
                                <Link href="hakkimizda">
                                  <a  title=''>
                                  <FormattedMessage id="page.menu.hakkimizda" />
                                  </a>
                                </Link>

                              </li>
                              <li >
                                <a href={webMenuLink}><FormattedMessage id="page.menu.menu" /></a>
                              </li>

                              <li >
                                <Link href="galeri">
                                  <a    title=''>
                                  <FormattedMessage id="page.menu.galeri" />
                                  </a>
                                </Link>

                              </li>
                              <li >
                                <Link href="bize-ulasin">
                                  <a   title=''>
                                  <FormattedMessage id="page.menu.rezerve" />
                                  </a>
                                </Link>

                              </li>
                            </ul>
                            <a
                                href='#'
                                title='Close Menu'
                                className='header-overlay-close close-mobile-menu'
                            >
                              Kapat
                            </a>
                          </nav>
                        </div>
                      </div>
                      <div className='col-xl-2 col-lg-4 col-md-4 col-12'>
                        <div className='d-flex justify-content-lg-end'>
                        
                        <div className='header-btn d-flex justify-content-lg-end'>
                          <a
                              href='https://menu.indigobarnicosia.com'
                              className='btn btn-secondary xs-mt-35'
                          >
                            <i className='flaticon-right icon-arrow before' />
                            <span className='label'><FormattedMessage id="page.btn.menulist" /></span>
                            <i className='flaticon-right icon-arrow after' />
                          </a>
                          
                        </div>
                        <ul className='lang_ul'><LocaleSwitcher/></ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main>{children}</main>
        {!home && (
            <div className={styles.backToHome}>
              <Link href="/">
                <a>← <FormattedMessage id="page.btn.backtohome" /></a>
              </Link>
            </div>
        )}

        <footer id='footer-section' className='footer-area'>
          <div className='overlay'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-12'>
                  <div className='copyright'>
                    <div className='row'>
                      <div className='col-lg-6 col-sm-7'>
                        <div>
                          <p className='text'>
                            ©copyright <a href='https://marshallfungai.github.io/'>Digital Artist</a>, all right reserved 2022.
                          </p>
                        </div>
                      </div>
                      <div className='col-lg-6 col-sm-5'>
                        <ul className='footer-social d-flex justify-content-lg-end justify-content-sm-end'>
                          <li>
                            <a target='_blank' href='https://www.facebook.com/indigobarnicosia/'>
                              <i className='fa-brands fa-facebook-f' />
                            </a>
                          </li>
                          <li>
                            <a target='_blank' href='https://www.instagram.com/indigobarnicosia/'>
                              <i className='fa-brands fa-instagram' />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>

        <div className='progress-wrap'>
          <svg
              className='progress-circle svg-content'
              width='100%'
              height='100%'
              viewBox='-1 -1 102 102'
          >
            <path d='M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98' />
          </svg>
          <i className='fa-solid fa-arrow-up-long' />
        </div>

        <div className='preloader' id='preloader'>
          <div className='preloader-inner'>
            <div className='center'>
              <span />
              <span />
              <span />
              <span />
            </div>
            <hr />
          </div>
        </div>


        <Script async src='https://d2mpatx37cqexb.cloudfront.net/delightchat-whatsapp-widget/embeds/embed.min.js'></Script>
        <Script strategy={'beforeInteractive'} src="./assets/js/jquery-2.2.4.min.js"></Script>
        <Script strategy={'beforeInteractive'}  src="./assets/js/popper.min.js"></Script>
        <Script strategy={'beforeInteractive'}  src="./assets/js/bootstrap.min.js"></Script>
        <Script strategy={'beforeInteractive'}  src="./assets/js/wow.min.js"></Script>
        <Script strategy={'beforeInteractive'}  src="./assets/js/owl.carousel.min.js"></Script>
        <Script strategy={'beforeInteractive'}  src="./assets/js/waypoints.min.js"></Script>
        <Script strategy={'beforeInteractive'} src="./assets/js/quote-form.js"></Script>
        <Script strategy={'beforeInteractive'} src="./assets/js/jarallax.min.js"></Script>
        <Script strategy={'beforeInteractive'} src="./assets/js/swiper-bundle.js"></Script>
        <Script strategy={'beforeInteractive'}  src="./assets/js/backtotop.js"></Script>
        <Script strategy={'afterInteractive'} src="./assets/js/main.js"></Script>

      </div>
  );
}