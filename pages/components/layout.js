import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import Link from 'next/link';
import Script from 'next/script';
import { useState } from 'react';


export const siteTitle = 'Indigo Bar and Cafe';


export default function Layout({ children, home }) {

  return (
      <div>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
              name="description"
              content="Çıkmaz Sokak Partileri bünyesinde INDIGO Bar & Lounge sıcak atmosferi, birbirinden lezzetli kokteylleri ve eşsiz dokusuyla sizleri bekliyor... "
          />

        </Head>

        <link
            rel='shortcut icon'
            type='image/x-icon'
            href='assets/images/favicon.png'
        />
        <link rel='stylesheet' href='assets/css/animate.css' />
        <link rel='stylesheet' href='assets/css/bootstrap.min.css' />
        <link rel='stylesheet' href='assets/css/all.min.css' />
        <link rel='stylesheet' href='assets/css/fontawesome.min.css' />
        <link rel='stylesheet' href='assets/fonts/flaticon.css' />
        <link rel='stylesheet' href='assets/css/owl.carousel.min.css' />
        <link rel='stylesheet' href='assets/css/swiper-bundle.css' />
        <link rel='stylesheet' href='assets/css/backtotop.css' />
        <link rel='stylesheet' href='assets/css/style.css' />

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
                              <span>Hotlne:</span>
                              +90 546 991 12 03
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className='col-lg-4 col-md-4'>
                        <div className='brand d-flex justify-content-center'>

                          <img src='assets/images/brand-logo.png' alt='' />
                        </div>
                      </div>
                      <div className='col-lg-4 col-md-4'>
                        <div className='header__social'>
                          <ul className='d-flex justify-content-end'>
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
                                    Ana Sayfa
                                  </a>
                                </Link>

                              </li>
                              <li >
                                <Link href="hakkimizda">
                                  <a  title=''>
                                    Hakkımızda
                                  </a>
                                </Link>

                              </li>
                              <li >
                                <a href='https://menu.indigobarnicosia.com'>Menü</a>

                              </li>
                              <li >
                                <Link href="galeri">
                                  <a    title=''>
                                    Galeri
                                  </a>
                                </Link>

                              </li>
                              <li >
                                <Link href="bize-ulasin">
                                  <a   title=''>
                                    Rezervasyon
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
                      <div className='col-xl-2 col-lg-3 col-md-3 col-12'>
                        <div className='header-btn d-flex justify-content-lg-end'>
                          <a
                              href='https://menu.indigobarnicosia.com'
                              className='btn btn-secondary xs-mt-35'
                          >
                            <i className='flaticon-right icon-arrow before' />
                            <span className='label'>Menü Listesi</span>
                            <i className='flaticon-right icon-arrow after' />
                          </a>
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
                <a>← Back to home</a>
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