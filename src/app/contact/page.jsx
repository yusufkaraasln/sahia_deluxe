"use client"
import React from "react";
import SideBar from "../../components/SideBar";
import Footer from "../../components/Footer";
import PreLoader from "@/components/PreLoader";
import ScrollToTop from "@/components/ScrollToTop";
import { useFormik } from "formik";
import { ToastContainer, toast } from 'react-toastify';
import * as Yup from "yup"
import { sendContactForm } from "@/services";
import 'react-toastify/dist/ReactToastify.css';


const ContactPage = () => {


  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Ad Soyad alanı zorunludur.'),
      email: Yup.string().email('Geçersiz e-posta adresi.').required('E-posta zorunludur.'),
      message: Yup.string(),
      phone: Yup.string()
        .required('Telefon numarası zorunludur.')
        .matches(/^[+0-9]+$/, 'Geçerli bir telefon numarası giriniz.'),
      subject: Yup.string().required('Konu alanı zorunludur.'),
      message: Yup.string().required('Mesaj alanı zorunludur.')
    }),



    onSubmit: async (values) => {
      setIsSubmitted(true);

      try {
        await sendContactForm({
          ...values,
          type: 'contact'
        });
        // props.setShow(false);
        // onHide();
        setIsSubmitted(false);
        toast.success('İletişim talebiniz başarıyla gönderildi.');
        formik.resetForm();
      } catch (error) {
        toast.error('Bir hata oluştu. Lütfen tekrar deneyiniz.');
        setIsSubmitted(false);
        // props.setShow(false);
        // onHide();
        formik.resetForm();
      }
    }
  });



  return (
    <>
      <PreLoader></PreLoader>
      <ScrollToTop></ScrollToTop>
      <SideBar></SideBar>
      <div id="cappa-main">
        {/* Header Banner */}
        <div
          className="banner-header section-padding valign bg-img bg-fixed bg-position-bottom"
          data-overlay-dark={6}
          data-background="img/slider/1.jpg"
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center mt-20">
                <h1>Bize Ulaşın</h1>
              </div>
            </div>
          </div>
        </div>



        {/* İletişim */}
        <section className="contact section-padding">
          <div className="container">
            <div className="row mb-90">
              <div className="col-lg-5 col-md-12 mb-60">

                <div className="reservations mb-30">
                  <div className="icon">
                    <span className="flaticon-call" />
                  </div>
                  <div className="text">
                    <p>Rezervasyon</p>{" "}
                    <a href="tel:02642990144">0264 299 0144</a>
                  </div>
                </div>
                <div className="reservations mb-30">
                  <div className="icon">
                    <span className="flaticon-envelope" />
                  </div>
                  <div className="text">
                    <p>Email Bilgisi</p>{" "}
                    <a href="mailto:sapanca@thegreenpark.com">
                      sapanca@thegreenpark.com
                    </a>
                    <br />
                    <a href="mailto:sapanca@thegreenpark.com">
                      sapancarezervasyon@thegreenpark.com
                    </a>
                  </div>
                </div>
                <div className="reservations">
                  <div className="icon">
                    <span className="flaticon-location-pin" />
                  </div>
                  <div className="text">
                    <p>Adres</p> The Green Park Sapanca Otel<br />
                    Kahraman 1 sokak No:57/1  İlmiye/Sapanca SAKARYA
                  </div>
                </div>
              </div>
              <div className="col-lg-6 offset-lg-1 col-md-12 mb-30">
                <h3>İletişime Geçin</h3>
                <form className="contact__form"  >
                  {/* form message */}
                  <div className="row">
                    <div className="col-12">
                      <div
                        className="alert alert-success contact__msg"
                        style={{ display: "none" }}
                        role="alert"
                      >
                        {" "}
                        Mesajınız başarıyla gönderildi.{" "}
                      </div>
                    </div>
                  </div>
                  {/* form elements */}
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                        name="name"
                        type="text"
                        placeholder="Ad Soyad *"
                      />
                      {formik.touched.name && formik.errors.name ? (
                        <p style={{ color: 'red' }}>{formik.errors.name}</p>
                      ) : null}
                    </div>
                    <div className="col-md-6 form-group">
                      <input
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        placeholder="E-posta Adresiniz *"
                        required=""
                      />
                      {formik.touched.email && formik.errors.email ? (
                        <p style={{ color: 'red' }}>{formik.errors.email}</p>
                      ) : null}
                    </div>
                    <div className="col-md-6 form-group">
                      <input
                        name="phone"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phone}
                        type="text"
                        placeholder="Telefon Numaranız *"
                        required=""
                      />
                      {formik.touched.phone && formik.errors.phone ? (
                        <p style={{ color: 'red' }}>{formik.errors.phone}</p>
                      ) : null}
                    </div>
                    <div className="col-md-6 form-group">
                      <input
                        name="subject"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.subject}
                        placeholder="Konu *"
                        required=""
                      />
                      {formik.touched.subject && formik.errors.subject ? (
                        <p style={{ color: 'red' }}>{formik.errors.subject}</p>
                      ) : null}
                    </div>
                    <div className="col-md-12 form-group">
                      <textarea
                        name="message"
                        id="message"
                        cols={30}
                        rows={4}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.message}
                        placeholder="Mesajınız *"
                        required=""
                        defaultValue={""}
                      />
                      {formik.touched.message && formik.errors.message ? (
                        <p style={{ color: 'red' }}>{formik.errors.message}</p>
                      ) : null}
                    </div>
                    <div className="col-md-12">
                      <button onClick={formik.handleSubmit} className="butn-dark2">
                        <span>Mesaj Gönder</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* Harita Bölümü */}
            <div className="row">
              <div
                className="col-md-12 map animate-box"
                data-animate-effect="fadeInUp"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.9442155612537!2d30.28352487578933!3d40.67519807139914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ccaf5aa9e78523%3A0xc9690426f5529184!2sSahia%20Deluxe%20Sapanca!5e0!3m2!1str!2str!4v1728231079743!5m2!1str!2str"
                  width="100%"
                  height={450}
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>
        <ToastContainer />
        <Footer></Footer>
      </div>
    </>
  );
};

export default ContactPage;
