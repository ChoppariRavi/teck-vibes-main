/* eslint-disable @next/next/no-css-tags */
import { useEffect } from 'react';
import Head from 'next/head';
//= Layout
import MainLightLayout from '../../layouts/main-light';
//= Components
import StickyBar from '../../components/Common/StickyBar';
import FixedSearch from '../../components/Common/FixedSearch';
import Header from '../../components/Corporate/Header3';
import Hero from '../../components/Corporate/Hero2';
import Services from '../../components/Corporate/Services';
import Process from '../../components/Corporate/Process';
import Testimonials from '../../components/Corporate/Testimonials';
import Brands from '../../components/Corporate/Brands';
import Pricing from '../../components/Corporate/Pricing';
import Footer from "../../components/Footers/MainFooter";

const TrainingServices = () => {
  useEffect(() => {
    document.body.classList.add('index-corporate');

    const removeClasses = [
      'land-demo2', 'index-bus1',
      'index-restaurant', 'index-arch',
      'index-freelancer', 'cr-agency',
      'index-main', 'mobile-app',
      'gr-orange-bg', 'nft-market'
    ];

    document.body.classList.remove(...removeClasses);
  }, []);

  return (
    <>
      <Head>
        <title>Ravo - Services Corporate</title>
      </Head>

      <MainLightLayout>
        <StickyBar />
        <FixedSearch />
        <Header title="Training Services" />
        
        <section className="hero section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="main-text">
                  <p>Are you a new college graduate looking for getting trained in some of the latest technologies, Are you an experienced candidate looking to enhance your skillset and in watch out for any training programs, or are you client looking to train your team on Some of missing skillset in your organization, Teck Vibes is here to help you out grow in your career and skillset. Feel free to reach out with the required training and someone will be in touch with you.</p>
                  <h2>Form Here</h2>
                  <p> Name: <br />
                  Training Course: <br />
                    Contact Information.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer footerClass="main-footer bg-dark-blue" />
      </MainLightLayout>
    </>
  )
}

export default TrainingServices;