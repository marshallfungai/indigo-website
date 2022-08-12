import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from './components/layout';


export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <main>
      <section
        id='hero__section__one'
        className='hero__slider hero__slider__one style-01'
      >
        <div
          className='hero-bg-01'
         
          style={{
            backgroundImage: 'url(./assets/images/hero/hero-01.jpg)',
          }}
        >
          <div className='overlay'>
            <div className='container'>
              <div className='row align-items-center'>
                <div className='col-lg-12'>
                  <div className='hero__content__one'>
                    <h4 className='subtitle'>Enjoy the old City</h4>
                    <h1 className='title'>Centuries old location for you</h1>
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
                      <a href='about.html' className='btn btn-primary xs-mt-10'>
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
                <h3 className='subtitle'>_About Us</h3>
                <h2 className='title'>
                  <span>Since 2010 we are</span>
                  achiving no. 01 position arround the world.
                </h2>
                <p className='text mt-30'>
                  Çıkmaz Sokak Partileri bünyesinde INDIGO Bar&Lounge sıcak atmosferi, birbirinden lezzetli kokteylleri ve eşsiz dokusuyla sizleri bekliyor...
                </p>
              </div>
              <div className='row'>
                <div className='col-lg-12 col-md-6'>
                <Link href="/about">
                  <a className='btn btn-secondary mt-40 xs-mt-40'>
                    <i className='flaticon-right icon-arrow before' />
                    <span className='label'>Read More</span>
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
                <div className='content'>
                  <h4>
                    <span>15</span>
                    Years
                  </h4>
                  <p>Experience</p>
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
      <section id='exclusive__section'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='exclusive__content text-center mb-20'>
                  <h3 className='title'>Chillout Place with friends</h3>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-4 col-sm-12 col-md-6'>
                <div className='exclusive__block style-01 mt-25'>
                  <div className='exclusive__block__overlay'>
                    <span>01.</span>
                    <h3 className='title'>
                      <a href='#'>Cocktails, Wine & Beer</a>
                    </h3>
                    <p className='text'>
                      Agrecultural Loan provide low interest many variations of
                      passages.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-sm-12 col-md-6'>
                <div className='exclusive__block style-02 active mt-25'>
                  <div className='exclusive__block__overlay'>
                    <span>02.</span>
                    <h3 className='title'>
                      <a href='#'>Nice Food</a>
                    </h3>
                    <p className='text'>
                      Agrecultural Loan provide low interest many variations of
                      passages.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-sm-12 col-md-6'>
                <div className='exclusive__block style-03 mt-25'>
                  <div className='exclusive__block__overlay'>
                    <span>03.</span>
                    <h3 className='title'>
                      <a href='#'>Coffee & Drinks</a>
                    </h3>
                    <p className='text'>
                      Agrecultural Loan provide low interest many variations of
                      passages.
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
                  <span className='subtitle'>Let's talk with us</span>
                  <h2 className='title mt-20'>Happy journey with Indigo bar</h2>
                  <p className='text mt-30'>
                    It is a long established fact that a reader will be
                    distracted by the readable content your browser to improve
                    your experience and security agrecultural Loan provide low
                    interest many variations of passages.
                  </p>
                  <div className='call__to__btn mt-40'>
                    <Link href='/contact'>
                      <a  className='btn btn-secondary'>
                        <i className='flaticon-right icon-arrow before' />
                        <span className='label'>Contact Us</span>
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
      <section id='choose__section' >
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12 col-md-12'>
                <div className='choose__title section__title style-01'>
                  <h3 className='subtitle'>_Best Coffee</h3>
                  <h2 className='title'>
                    <span>Why people choose</span>
                    Indigo Bar
                  </h2>
                  <p className='text mt-30'>
                    It is a long established fact that a reader will be
                    distracted by the readable content your browser to improve
                    your experience and security agrecultural Loan provide low
                    interest many variations of passages.
                  </p>
                </div>
              </div>
              <div className='col-lg-12 col-md-12'>
                <div className='row'>
                  <div className='col-lg-3 col-sm-6'>
                    <div className='choose__block mt-50'>
                      <span className='choose__subtitle'>01.</span>
                      <h4 className='title'>Spet one title</h4>
                      <p className='text'>
                        Petro will helps to make contact with a perfect deal.
                      </p>
                    </div>
                  </div>
                  <div className='col-lg-3 col-sm-6'>
                    <div className='choose__block mt-50'>
                      <span className='choose__subtitle'>02.</span>
                      <h4 className='title'>Step two title</h4>
                      <p className='text'>
                        Petro will helps to make contact with a perfect deal.
                      </p>
                    </div>
                  </div>
                  <div className='col-lg-3 col-sm-6'>
                    <div className='choose__block mt-50'>
                      <span className='choose__subtitle'>03.</span>
                      <h4 className='title'>Spet three title</h4>
                      <p className='text'>
                        Petro will helps to make contact with a perfect deal.
                      </p>
                    </div>
                  </div>
                  <div className='col-lg-3 col-sm-6'>
                    <div className='choose__block mt-50'>
                      <span className='choose__subtitle'>04.</span>
                      <h4 className='title'>Step four title</h4>
                      <p className='text'>
                        Petro will helps to make contact with a perfect deal.
                      </p>
                    </div>
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