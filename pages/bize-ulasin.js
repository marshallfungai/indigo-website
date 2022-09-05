import Layout, { siteTitle } from './components/layout';
import Head from 'next/head'

export default function Contact() {
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
                  <h2 className='title'>Bize Ulaşın</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section id='contact__info__section' className='mt-120'>
        <div className='container'>
          <div className='row'>

            <div className='col-lg-6'>
              <div className='info d-flex'>
                <div className='icon'>
                  <i className='flaticon-mobile' />
                </div>
                <div className='content'>
                  <h4 className='title'>Telefon numarası</h4>
                  <ul>
                    <li>+90 546 991 12 03</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='info d-flex'>
                <div className='icon'>
                  <i className='flaticon-placeholder' />
                </div>
                <div className='content'>
                  <h4 className='title'>Adres</h4>
                  <ul>
                    <li>Asmaaltı Sokak, No:38 Nicosia</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='contact__section' className='contact-area mt-120 mb-120'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12' />
          </div>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='section__title'>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6522.338573987079!2d33.361786!3d35.177333!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4276cae4c88c57d4!2sIndigo%20Bar!5e0!3m2!1sen!2sus!4v1662364025880!5m2!1sen!2sus"
                width="100%"
                height={600}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />


              </div>
              <div className='contact__social d-flex mt-30 xs-mb-50 sm-mb-50 md-mb-50'>
                <h6 className='title'>Follow us:</h6>
                <ul className='d-flex'>
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
      </section>
    </main>
       
      </Layout>
    );
}