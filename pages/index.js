import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from './components/layout';
import Image from "next/image";


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
                    <h4 className='subtitle'>Surlarla çevrili şehrin tadını çıkarın</h4>
                    <h1 className='title'>Zengin tarihe <br/>sahip bir bar</h1>
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
                <h3 className='subtitle'>Hakkımızda</h3>
                <h2 className='title'>
                  <span> Suriçi’ndeki Eviniz</span>

                </h2>
                <p className='text mt-30'>
                  Tarihi Suriçi dokusuyla modernliğin harmanlandığı, dünyanın dört bir yanından gelen
                  lezzetlerin, deneyimin ve yenilikçiliğin bir araya geldiği INDIGO Bar & Lounge 2020 yılından
                  beri sizlere hizmet vermeye devam ediyor.
                </p>
              </div>
              <div className='row'>
                <div className='col-lg-12 col-md-6'>
                <Link href="/hakkimizda">
                  <a  className='btn btn-secondary mt-40 xs-mt-40'>
                    <i className='flaticon-right icon-arrow before' />
                    <span className='label'>Devamını oku</span>
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
                  <h3 className='subtitle'>Kokteyl, Bira ve Şaraplar</h3>
                  <h2 className='title'>
                    <span> </span>

                  </h2>
                  <p className='text mt-30'>
                    Lefkoşa'nın kokteyl barı olarak çıktığımız bu yolculukta dünya genelinde milyonlarca insanın
                    damaklarında ve kalplerinde taht kurmuş vazgeçilemez kokteyller, craft biralar ve şarapları
                    suriçinde sizlerle buluşturduk.
                  </p>
                  <p className='text mt-30'>
                    Bu muazzam kavuşmaya sizler de kayıtsız kalmayarak Indigo Bar’ı suriçinin en çok tercih edilen
                    mekanı yaparak bizleri taçlandırdınız.
                  </p>

                  <p className='text mt-30'>
                    Size layık olabilmek her geçen gün dünyanın altını üstüne getirerek menümüzü geliştiriyor,
                    alkolü sanat ve kalite ile harmanlayıp en güzel kokteylleri sizlere sunuyoruz.
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
                  <h3 className='title'>Arkadaşlarınızla vakit geçirin</h3>
                </div>
              </div>
            </div>
            <div className='row'>

              <div className='col-lg-6 col-sm-12 col-md-6'>
                <div className='exclusive__block style-02 active mt-25'>
                  <div className='exclusive__block__overlay'>

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
      <section id='call__to__section'>
        <div className='overlay'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-lg-6 col-md-6 col-sm-7 col-12'>
                <div className='call__to__content'>

                  <h2 className='title mt-20'>Rezervasyon yaptırmak</h2>
                  <p className='text mt-30'>
                    Benzersiz atmosferde, tarihin modernlikle harmanlandığı, günün yorgunluğunu atmanız için
                    haftanın her günü açığız.

                  </p>
                  <p className='text mt-30'>

                    Cuma ve Cumartesi günleri Lounge'da Lefkoşa surliçi manzarası eşliğinde haftasonu keyfinizi
                    kat kat artırın.
                    Bar veya Lounge için bize tüm kanallarımızdan ulaşıp rezervasyon* yaptırabilirsiniz.

                  </p>
                  <p className='text mt-30'>
                    *Alınan rezervasyonlar saat 21.30'a kadar tutulmaktadır.
                  </p>
                  <div className='call__to__btn mt-40'>
                    <Link href='/bize-ulasin' >
                      <a className='btn btn-secondary'>
                        <i className='flaticon-right icon-arrow before' />
                        <span className='label'>Bize Ulaşın</span>
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