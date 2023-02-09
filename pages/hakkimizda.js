import Head from 'next/head'
import Layout, { siteTitle } from './components/layout';
import { FormattedMessage, useIntl } from "react-intl";


export default function About() {

  const intl = useIntl();
  const title = intl.formatMessage({ id: "page.hakkimizda.head.title" });

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
                  <h2 className='title'><FormattedMessage id="page.home.hakkimizda.h3" /></h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section id='about__section'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-7 col-md-12 col-12'>
              <div className='section__title style-01'>
                <h3 className='subtitle'>_<FormattedMessage id="page.home.hakkimizda.h3" /></h3>
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
               
                </div>
              </div>
            </div>
            <div className='col-lg-5 col-md-12 col-12'>
              <div className='about-img-box pl-30 xs-mt-70 md-mt-70'>
                <div className='about-img style-01'>
                  <img src='assets/images/about.jpg' alt='about image' />
                </div>
                {/* <div className='content'>
                  <h4>
                    <span>15</span>
                    Years
                  </h4>
                  <p>Experience</p>
                </div> */}
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
                {/* <div className='exclusive__content text-center mb-20'>
                  <h3 className='title'>Our exclusive bar</h3>
                </div> */}
              </div>
            </div>
            <div className='row'>
            <div className='col-lg-6 col-sm-12 col-md-6'>
                <div className='exclusive__block style-02 active mt-25'>
                  <div className='exclusive__block__overlay'>
                    <span>01.</span>
                    <h3 className='title'>
                      <a href='#'><FormattedMessage id="page.hakkimizda.foodblck1.h3" /></a>
                    </h3>
                    <p className='text'>
                      <FormattedMessage id="page.hakkimizda.foodblck1.p" />
                    </p>
                      
                  </div>
                </div>
              </div>
              <div className='col-lg-6 col-sm-12 col-md-6'>
                <div className='exclusive__block style-03 mt-25'>
                  <div className='exclusive__block__overlay'>
                    <span>02.</span>
                    <h3 className='title'>
                    <a href='#'><FormattedMessage id="page.hakkimizda.foodblck2.h3" /></a>
                    </h3>
                    <p className='text'>
                       <FormattedMessage id="page.hakkimizda.foodblck2.p" />
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
    </main>
       
      </Layout>
      );
}