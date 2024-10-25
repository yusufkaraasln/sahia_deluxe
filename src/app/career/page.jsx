"use client";
import React from "react";
import SideBar from "../../components/SideBar";
import Footer from "../../components/Footer";
import PreLoader from "@/components/PreLoader";
import ScrollToTop from "@/components/ScrollToTop";
import { useFormik } from "formik";
import { ToastContainer, toast } from 'react-toastify';
import * as Yup from "yup";
import { sendContactForm } from "@/services";
import 'react-toastify/dist/ReactToastify.css';


const CareerPage = () => {
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      position: '',
      coverLetter: '',
      experience: '',
      education: '',
      skills: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Ad Soyad alanı zorunludur.'),
      email: Yup.string().email('Geçersiz e-posta adresi.').required('E-posta zorunludur.'),
      phone: Yup.string()
        .required('Telefon numarası zorunludur.')
        .matches(/^[+0-9]+$/, 'Geçerli bir telefon numarası giriniz.'),
      position: Yup.string().required('Pozisyon alanı zorunludur.'),
      coverLetter: Yup.string(),
      experience: Yup.string().required('Tecrübe alanı zorunludur.'),
      education: Yup.string().required('Eğitim alanı zorunludur.'),
      skills: Yup.string()
    }),
    onSubmit: async (values) => {
      setIsSubmitted(true);

      try {
        await sendContactForm({
          ...values,
          type: 'career'
        });
        setIsSubmitted(false);
        toast.success('Başvurunuz başarıyla gönderildi.');
        formik.resetForm();
      } catch (error) {
        toast.error('Bir hata oluştu. Lütfen tekrar deneyiniz.');
        setIsSubmitted(false);
        formik.resetForm();
      }
    }
  });

  return (
    <>
      <PreLoader />
      <ScrollToTop />
      <SideBar />
      <div id="cappa-main">
        <div
          className="banner-header section-padding valign bg-img bg-fixed bg-position-bottom"
          data-overlay-dark={6}
          data-background="img/slider/1.jpg"
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center mt-20">
                <h1>Kariyer Başvurusu</h1>
              </div>
            </div>
          </div>
        </div>

        <section className="contact section-padding">
          <div className="container">
            <div className="row mb-90">
              <div className="col-lg-6 offset-lg-3 col-md-12 mb-30">
                <h3>Başvuru Formu</h3>
                <form className="contact__form" onSubmit={formik.handleSubmit}>
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
                      />
                      {formik.touched.phone && formik.errors.phone ? (
                        <p style={{ color: 'red' }}>{formik.errors.phone}</p>
                      ) : null}
                    </div>
                    <div className="col-md-6 form-group">
                      <input
                        name="position"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.position}
                        placeholder="Başvurulan Pozisyon *"
                      />
                      {formik.touched.position && formik.errors.position ? (
                        <p style={{ color: 'red' }}>{formik.errors.position}</p>
                      ) : null}
                    </div>
                    <div className="col-md-12 form-group">
                      <textarea
                        name="coverLetter"
                        cols={30}
                        rows={4}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.coverLetter}
                        placeholder="Ön Yazı"
                      />
                     
                    </div>
                    <div className="col-md-12 form-group">
                      <textarea
                        name="experience"
                        cols={30}
                        rows={2}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.experience}
                        placeholder="İş Tecrübesi (Özet) *"
                      />
                      {formik.touched.experience && formik.errors.experience ? (
                        <p style={{ color: 'red' }}>{formik.errors.experience}</p>
                      ) : null}
                    </div>
                    <div className="col-md-12 form-group">
                      <input
                        name="education"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.education}
                        placeholder="Eğitim Durumu *"
                      />
                      {formik.touched.education && formik.errors.education ? (
                        <p style={{ color: 'red' }}>{formik.errors.education}</p>
                      ) : null}
                    </div>
                  
                    <div className="col-md-12 form-group">
                      <textarea
                        name="skills"
                        cols={30}
                        rows={2}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.skills}
                        placeholder="Yetenekleriniz"
                      />
                     
                    </div>
                    <div className="col-md-12">
                      <button type="submit" className="butn-dark2">
                        <span>Başvuruyu Gönder</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <ToastContainer />
        <Footer />
      </div>
    </>
  );
};

export default CareerPage;
