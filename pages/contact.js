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
        data-jarallax='{"speed": 0.6}'
      >
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='breadcrubms text-center'>
                  <h2 className='title'>Contact Us</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section id='contact__info__section' className='mt-120'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4'>
              <div className='info d-flex'>
                <div className='icon'>
                  <i className='flaticon-email' />
                </div>
                <div className='content'>
                  <h4 className='title'>Email Address</h4>
                  <ul>
                    <li>indigobarnicosia@gmail.com</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='info d-flex'>
                <div className='icon'>
                  <i className='flaticon-mobile' />
                </div>
                <div className='content'>
                  <h4 className='title'>Phone Number</h4>
                  <ul>
                    <li>+90 546 991 12 03</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='info d-flex'>
                <div className='icon'>
                  <i className='flaticon-placeholder' />
                </div>
                <div className='content'>
                  <h4 className='title'>Our Location</h4>
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
            <div className='col-lg-6'>
              <div className='section__title style-01'>
              <iframe
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.1634708841466!2d33.36168427414944!3d35.17747797617633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14de17882830802d%3A0x4276cae4c88c57d4!2sIndigo%20Bar!5e0!3m2!1sen!2s!4v1660235400259!5m2!1sen!2s'
                  width='100%'
                  height='450'
                  style={{
                    border: '0',
                  }}
                  allowFullScreen=''
                  loading='lazy'
                  referrerpolicy='no-referrer-when-downgrade'
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
            <div className='col-lg-6 col-md-12'>
              <div className='comment-form-wrap'>
                <div id='form-messages' />
                <form
                  id='ajax-contact'
                  method='post'
                  action='contact-form.php'
                  className='comment-form contact-form'
                >
                  <div className='row'>
                    <div className='col-lg-6 col-md-6'>
                      <div className='form-group'>
                        <input
                          id='name'
                          name='name'
                          className='form-control'
                          placeholder='Name'
                        />
                      </div>
                    </div>
                    <div className='col-lg-6 col-md-6'>
                      <div className='form-group xs-mt-30'>
                        <input
                          type='email'
                          id='email'
                          name='email'
                          className='form-control'
                          placeholder='Email'
                        />
                      </div>
                    </div>
                    <div className='col-lg-12'>
                      <div className='form-group mt-30'>
                        <input
                          id='subject'
                          name='subject'
                          className='form-control'
                          placeholder='Phone'
                        />
                      </div>
                    </div>
                    <div className='col-lg-12'>
                      <div className='form-group textarea mt-30'>
                        <textarea
                          id='message'
                          name='message'
                          rows='5'
                          className='form-control'
                          placeholder='Message'
                        />
                      </div>
                    </div>
                    <div className='col-lg-12'>
                      <div className='comment-btn mt-30'>
                        <button className='btn btn-secondary'>
                          <i className='flaticon-right icon-arrow before' />
                          <span className='label'>Send Message</span>
                          <i className='flaticon-right icon-arrow after' />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
       
      </Layout>
    );
}