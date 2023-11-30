const PageContent = () => {
  return (
    <div>
<div>
  <section id="about" className="section-padding">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <div className="img-thumb wow fadeInLeft" data-wow-delay="0.3s">
            <img className="img-fluid" src="/img/about/Licenes.jpg" alt />
          </div>
        </div> 
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <div className="profile-wrapper wow fadeInRight" data-wow-delay="0.3s">
            <h3>Hi Guys!</h3>
            <p>Saya adalah seorang profesional yang memiliki keahlian dalam front-end developer dan design graphic. Melalui pengalaman kerja dan pendidikan, saya telah berhasil menerapkan solusi yang meningkatkan efisiensi dan memberikan kontribusi positif pada tujuan perusahaan. Saya yakin bahwa kemampuan saya sebagai front-end developer juga design graphic dapat memberikan nilai tambah yang signifikan. Selain itu, saya dikenal sebagai pemimpin yang berdedikasi dan kolaboratif. Saya siap untuk membawa kontribusi positif pada tim dan organisasi Anda.</p>
            <div className="about-profile">
              <ul className="admin-profile">
                <li><span className="pro-title"> Name </span> <span className="pro-detail">Christina Golung</span></li>
                <li><span className="pro-title"> Age </span> <span className="pro-detail">20 Years</span></li>
                <li><span className="pro-title"> Experience </span> <span className="pro-detail">4 Years</span></li>
                <li><span className="pro-title"> Country </span> <span className="pro-detail">Indonesia</span></li>
                <li><span className="pro-title"> Location </span> <span className="pro-detail">Universitas Klabat Airmadidi</span></li>
                <li><span className="pro-title"> e-mail </span> <span className="pro-detail">christinagolung77@gmail.com</span></li>
                <li><span className="pro-title"> Phone </span> <span className="pro-detail">+6281234567</span></li>
                <li><span className="pro-title"> Freelance </span> <span className="pro-detail">Available</span></li>
              </ul>
            </div>
            <a href="#" className="btn btn-common"><i className="icon-paper-clip" /> Download Resume</a>
            <a href="https://www.linkedin.com/in/christina-grace-golung-0939b82a2/" className="btn btn-danger"><i className="icon-speech" /> Contact Me</a>
          </div>
        </div>   
      </div>
    </div>
  </section>
  {/* About Section End */}
  {/* Services Section Start */}
  <section id="services" className="services section-padding">
    <h2 className="section-title wow flipInX" data-wow-delay="0.4s">What I do</h2>
    <div className="container">
      <div className="row">
        {/* Services item */}
        <div className="col-md-6 col-lg-3 col-xs-12">
          <div className="services-item wow fadeInDown" data-wow-delay="0.3s">
            <div className="icon">
              <i className="icon-grid" />
            </div>
            <div className="services-content">
              <h3><a href="#">Front-end Development</a></h3>
              <p>Saat ini, saya tengah mengejar karier sebagai Front-end Developer, fokus pada pembuatan antarmuka pengguna yang responsif dan menarik. Dengan pengalaman dan keahlian dalam pengembangan web, saya berkomitmen untuk memberikan pengalaman pengguna yang optimal dan inovatif.</p>
            </div>
          </div>
        </div>
        {/* Services item */}
        <div className="col-md-6 col-lg-3 col-xs-12">
          <div className="services-item wow fadeInDown" data-wow-delay="0.6s">
            <div className="icon">
              <i className="icon-layers" />
            </div>
            <div className="services-content">
              <h3><a href="#">Graphic Design</a></h3>
              <p>Saat ini, saya sedang aktif bekerja sebagai Graphic Designer, menggabungkan kreativitas dan keahlian desain untuk menciptakan visual yang menarik dan berkesan. Dedikasi saya terhadap estetika dan detail membantu memperkuat merek dan pesan visual dengan cermat.</p>
            </div>
          </div>
        </div>
        {/* Services item */}
        <div className="col-md-6 col-lg-3 col-xs-12">
          <div className="services-item wow fadeInDown" data-wow-delay="0.9s">
            <div className="icon">
              <i className="icon-briefcase" />
            </div>
            <div className="services-content">
              <h3><a href="#">Business Branding</a></h3>
              <p>Saya sedang berfokus pada pekerjaan dalam dunia bisnis branding, menggali potensi dan strategi untuk memperkuat identitas merek. Dengan fokus pada pengembangan brand yang kuat, saya berupaya menciptakan narasi visual yang kohesif dan membangun kesan positif di kalangan audiens target.</p>
            </div>
          </div>
        </div>
        {/* Services item */}
        <div className="col-md-6 col-lg-3 col-xs-12">
          <div className="services-item wow fadeInDown" data-wow-delay="1.2s">
            <div className="icon">
              <i className="icon-bubbles" />
            </div>
            <div className="services-content">
              <h3><a href="#">Consultancy</a></h3>
              <p>Saat ini, saya tengah bekerja di bidang konsultasi, menyediakan solusi dan rekomendasi strategis kepada klien. Melalui analisis mendalam dan pemahaman yang matang terhadap industri, saya berupaya memberikan nilai tambah dan dukungan konsultatif yang efektif untuk mencapai tujuan bisnis.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Services Section End */}
  {/* Resume Section Start */}
  <div id="resume" className="section-padding">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-6">
          <div className="education wow fadeInRight" data-wow-delay="0.3s">
            <ul className="timeline">
              <li>
                <i className="icon-graduation" />
                <h2 className="timelin-title">Education</h2>
              </li>
              <li>
                <div className="content-text">
                  <h3 className="line-title">Universitas Klabat</h3>
                  <span>2017 - 2020</span>
                  <p className="line-text">Berkuliah di Universitas Klabat, Fakultas Ilmu Komputer (FILKOM) dengan jurusan Informatika.</p>
                </div>
              </li>
              <li>
                <div className="content-text">
                  <h3 className="line-title">SMA - SMA Negeri 1 Tondano</h3>
                  <span>2010 - 2012</span>
                  <p className="line-text">Pernah bersekolah di salah satu sekolah negeri di Tondano yaitu, SMA Negeri 1 Tondano dengan mengambil jurusan Ilmu Pengetahuan Alam (IPA).</p>
                </div>
              </li>
              <li>
                <div className="content-text">
                  <h3 className="line-title">SMP - SMP Negeri 2 Tondano</h3>
                  <span>2005 - 2010</span>
                  <p className="line-text">Pernah bersekolah di salah satu sekolah negeri di Tondano yaitu, bersekolah di SMP Negeri 2 Tondano </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6">
          <div className="experience wow fadeInRight" data-wow-delay="0.6s">
            <ul className="timeline">
              <li>
                <i className="icon-briefcase" />
                <h2 className="timelin-title">Experience</h2>
              </li>
              <li>
                <div className="content-text">
                  <h3 className="line-title">Make Roll A Ball Game </h3>
                  <span>Agustus 2022- Desember 2022</span>
                  <p className="line-text">Memenangkan lomba Roll A Ball di kelas Computer Graphic 2022.</p>
                </div>
              </li>
              <li>
                <div className="content-text">
                  <h3 className="line-title">UX/UI Designer - Pengembangan Museum Digital Sulawesi Utara</h3>
                  <span>Agustus 2023 - Present</span>
                  <p className="line-text">Bekerja sebagai UX/UI Designer pada project pemerintahan Sulawesi Utara</p>
                </div>
              </li>
              <li>
                <div className="content-text">
                  <h3 className="line-title">GDSC - Google Developer Student Clubs</h3>
                  <span>Januari 2022 - Present</span>
                  <p className="line-text">Bagian dari Google Developer Student Clubs di Universitas Klabat.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Resume Section End */}
  {/* Portfolio Section */}
  <section id="portfolios" className="section-padding">
    {/* Container Starts */}
    <div className="container">        
      <h2 className="section-title wow flipInX" data-wow-delay="0.4s">My Remarkable Works</h2>
      <div className="row">          
        <div className="col-md-12">
          {/* Portfolio Controller/Buttons */}
          <div className="controls text-center">
            <a className="filter active btn btn-common" data-filter="all">
              All 
            </a>
            <a className="filter btn btn-common" data-filter=".design">
              Design 
            </a>
            <a className="filter btn btn-common" data-filter=".development">
              Development
            </a>
            <a className="filter btn btn-common" data-filter=".print">
              Print 
            </a>
          </div>
          {/* Portfolio Controller/Buttons Ends*/}
        </div>
        {/* Portfolio Recent Projects */}
        <div id="portfolio" className="row wow fadeInDown" data-wow-delay="0.4s">
          <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 mix development print">
            <div className="portfolio-item">
              <div className="shot-item">
                <img src="/img/gallery/img-1.jpg" alt />  
                <div className="overlay">
                  <div className="icons">
                    <a className="lightbox preview" href="public/img/gallery/img-1.jpg">
                      <i className="icon-eye" />
                    </a>
                    <a className="link" href="#">
                      <i className="icon-link" />
                    </a>
                  </div>
                </div>
              </div>               
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 mix design print">
            <div className="portfolio-item">
              <div className="shot-item">
                <img src="/img/gallery/img-2.jpg" alt /> 
                <div className="overlay">
                  <div className="icons">
                    <a className="lightbox preview" href="public/img/gallery/img-2.jpg">
                      <i className="icon-eye" />
                    </a>
                    <a className="link" href="#">
                      <i className="icon-link" />
                    </a>
                  </div>
                </div>
              </div>               
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 mix development">
            <div className="portfolio-item">
              <div className="shot-item">
                <img src="/img/gallery/img-3.jpg" alt /> 
                <div className="overlay">
                  <div className="icons">
                    <a className="lightbox preview" href="public/img/gallery/img-3.jpg">
                      <i className="icon-eye" />
                    </a>
                    <a className="link" href="#">
                      <i className="icon-link" />
                    </a>
                  </div>
                </div>
              </div>               
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 mix development design">
            <div className="portfolio-item">
              <div className="shot-item">
                <img src="/img/gallery/img-4.jpg" alt /> 
                <div className="overlay">
                  <div className="icons">
                    <a className="lightbox preview" href="public/img/gallery/img-4.jpg">
                      <i className="icon-eye" />
                    </a>
                    <a className="link" href="#">
                      <i className="icon-link" />
                    </a>
                  </div>
                </div>
              </div>               
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 mix development">
            <div className="portfolio-item">
              <div className="shot-item">
                <img src="/img/gallery/img-5.jpg" alt /> 
                <div className="overlay">
                  <div className="icons">
                    <a className="lightbox preview" href="public/img/gallery/img-5.jpg">
                      <i className="icon-eye" />
                    </a>
                    <a className="link" href="#">
                      <i className="icon-link" />
                    </a>
                  </div>
                </div>
              </div>               
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 mix print design">
            <div className="portfolio-item">
              <div className="shot-item">
                <img src="/img/gallery/img-6.jpg" alt />
                <div className="overlay">
                  <div className="icons">
                    <a className="lightbox preview" href="public/img/gallery/img-6.jpg">
                      <i className="icon-eye" />
                    </a>
                    <a className="link" href="#">
                      <i className="icon-link" />
                    </a>
                  </div>
                </div>
              </div>               
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Container Ends */}
  </section>
  {/* Portfolio Section Ends */} 
  {/* Counter Area Start*/}
  <section className="counter-section section-padding">
    <div className="container">
      <div className="row">
        {/* Counter Item */}
        <div className="col-md-3 col-sm-6 work-counter-widget text-center">
          <div className="counter wow fadeInDown" data-wow-delay="0.3s">
            <div className="icon"><i className="icon-briefcase" /></div>
            <div className="counterUp">250</div>
            <p>Project Working</p>
          </div>
        </div>
        {/* Counter Item */}
        <div className="col-md-3 col-sm-6 work-counter-widget text-center">
          <div className="counter wow fadeInDown" data-wow-delay="0.6s">
            <div className="icon"><i className="icon-check" /></div>
            <div className="counterUp">950</div>
            <p>Project Done</p>
          </div>
        </div>
        {/* Counter Item */}
        <div className="col-md-3 col-sm-6 work-counter-widget text-center">
          <div className="counter wow fadeInDown" data-wow-delay="0.9s">
            <div className="icon"><i className="icon-diamond" /></div>
            <div className="counterUp">150</div>
            <p>Awards Received</p>
          </div>
        </div>
        {/* Counter Item */}
        <div className="col-md-3 col-sm-6 work-counter-widget text-center">
          <div className="counter wow fadeInDown" data-wow-delay="1.2s">
            <div className="icon"><i className="icon-heart" /></div>
            <div className="counterUp">299</div>
            <p>Happy Clients</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Counter Area End*/}
  {/* Contact Section Start */}
  <section id="contact" className="section-padding">      
    <div className="contact-form">
      <div className="container">
        <div className="row contact-form-area wow fadeInUp" data-wow-delay="0.4s">          
          <div className="col-md-6 col-lg-6 col-sm-12">
            <div className="contact-block">
              <h2>Contact Form</h2>
              <form id="contactForm">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="text" className="form-control" id="name" name="name" placeholder="Name" required data-error="Please enter your name" />
                      <div className="help-block with-errors" />
                    </div>                                 
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="text" placeholder="Email" id="email" className="form-control" name="email" required data-error="Please enter your email" />
                      <div className="help-block with-errors" />
                    </div> 
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <input type="text" placeholder="Subject" id="msg_subject" className="form-control" required data-error="Please enter your subject" />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group"> 
                      <textarea className="form-control" id="message" placeholder="Your Message" rows={5} data-error="Write your message" required defaultValue={""} />
                      <div className="help-block with-errors" />
                    </div>
                    <div className="submit-button">
                      <button className="btn btn-common" id="submit" type="submit">Send Message</button>
                      <div id="msgSubmit" className="h3 text-center hidden" /> 
                      <div className="clearfix" /> 
                    </div>
                  </div>
                </div>            
              </form>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-sm-12">
            <div className="footer-right-area wow fadeIn">
              <h2>Contact Address</h2>
              <div className="footer-right-contact">
                <div className="single-contact">
                  <div className="contact-icon">
                    <i className="fa fa-map-marker" />
                  </div>
                  <p>Manado, Airmadidi</p>
                </div>
                <div className="single-contact">
                  <div className="contact-icon">
                    <i className="fa fa-envelope" />
                  </div>
                  <p><a href="mailto:christinagolung77@gmail.com">christinagolung77@gmail.com</a></p>
                  <p><a href="mailto:s2200499@student.unklab.ac.id">s2200499@student.unklab.ac.id</a></p>
                </div>
                <div className="single-contact">
                  <div className="contact-icon">
                    <i className="fa fa-phone" />
                  </div>
                  <p><a href="#">+ 628123456</a></p>
                  <p><a href="#">+ 628789101</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>   
  </section>
</div>

    </div>
  )
}

export default PageContent