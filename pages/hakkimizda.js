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
                  <span>Suriçi’ndeki Eviniz </span>
                  
                </h2>
                <p className='text mt-30'>
                Tarihi Suriçi dokusuyla modernliğin harmanlandığı, dünyanın dört bir yanından gelen
                  lezzetlerin, deneyimin ve yenilikçiliğin bir araya geldiği INDIGO Bar & Lounge 2020 yılından
                  beri sizlere hizmet vermeye devam ediyor.
                </p>
                <p className='text mt-30'>
                  2013 yılında bir ilk olarak başlayan ve eğlence anlayışına farklılık getiren, Lefkoşa Suriçi’nin
                  bugünkü halini almasına öncülük eden Çıkmaz Sokak Partileri bünyesinde INDIGO Bar &
                  Lounge, sıcak atmosferi, misafirperver personeli, birbirinden lezzetli kokteylleri, eşsiz doku ve
                  tasarımı ile Lefkoşa’nın gözde mekanlarından biri oldu.
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
                      <a href='#'>Yemekler</a>
                    </h3>
                    <p className='text'>
                      ‘İyi bir aşçı, mutluluğu dağıtan bir büyücü gibidir’ sözünden yola çıkarak bizi tercih eden her
                      müşterimize mutluluk dağıtmayı görev bildik.
                    </p>
                      <p className='text'>
                      Soğuk kış günlerinde içinizi ısıtacak eşsiz çorbamız, ev yapımı hamburgerlerimiz ve birbirinden
                      güzel bar yemeklerimizle sizleri mutlu edeceğimiz konusunda iddialıyız.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 col-sm-12 col-md-6'>
                <div className='exclusive__block style-03 mt-25'>
                  <div className='exclusive__block__overlay'>
                    <span>02.</span>
                    <h3 className='title'>
                      <a href='#'>Kahve</a>
                    </h3>
                    <p className='text'>
                      100 yılı aşkın tecrübesiyle dünyaca ünlü İtalyan kahve markası Bristot Coffee’nin eşsiz kahve
                      çekirdekleri, INDIGO Bar’ın baristaları ellerinde eşsiz bir sanat eserine dönüşüyor. Sizlere de
                      sadece en sevdiğiniz kahve çeşitlerini INDIGO Bar’da keyifle içmek kalıyor.
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