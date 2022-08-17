import Head from 'next/head'
import Layout, { siteTitle } from './components/layout';



export default function About() {
    return (
       <Layout >
        <Head>
          <title>{siteTitle}</title>
       </Head>
       <main>
      <div
        id='banner-section'
        className='page-title'
        data-jarallax='{"speed": 0.6}'
      >
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='breadcrubms text-center'>
                  <h2 className='title'>HAKKIMIZDA</h2>
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
                <h3 className='subtitle'>_Hakkımızda</h3>
                <h2 className='title'>
                  <span>Zengin bir tarihle çevrili </span>
                   eski şehirde dinlenmek için güzel bir yer..
                </h2>
                <p className='text mt-30'>
                  Eğlence anlayışına farklılık getiren, Lefkoşa Suriçi’nin bugünkü halini almasına öncülük eden Çıkmaz Sokak Partileri bünyesinde INDIGO Bar&Lounge sıcak atmosferi, birbirinden lezzetli kokteylleri ve eşsiz dokusuyla Ağustos 2020'den bugüne siz değerli müşterilerine hizmet vermeyi sürdürüyor...
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
              <div className='col-lg-4 col-sm-12 col-md-6'>
                <div className='exclusive__block style-01 mt-25'>
                  <div className='exclusive__block__overlay'>
                    <span>01.</span>
                    <h3 className='title'>
                      <a href='#'>Kokteyller, Şarap ve Bira</a>
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
                      <a href='#'>Güzel Yemek</a>
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
                      <a href='#'>Kahve ve İçecekler</a>
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
      <section id='choose__section' data-jarallax='{"speed": 0.6}'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12 col-md-12'>
                <div className='choose__title section__title style-01'>
                  <h3 className='subtitle'>_EN İYİ BAR & KAFE</h3>
                  <h2 className='title'>
                    İnsanlar neden 
                    <span>Indigo Bar'ı </span>
                    seçiyor?
                  </h2>
                  {/* <p className='text mt-30'>
                  Eğlence anlayışına farklılık getiren, Lefkoşa Suriçi’nin bugünkü halini almasına öncülük eden Çıkmaz Sokak Partileri bünyesinde INDIGO Bar&Lounge sıcak atmosferi, birbirinden lezzetli kokteylleri ve eşsiz dokusuyla Ağustos 2020'den bugüne siz değerli müşterilerine hizmet vermeyi sürdürüyor...
                  </p> */}
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
     
    </main>
       
      </Layout>
      );
}