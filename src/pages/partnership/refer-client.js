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

const ReferClient = () => {
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
        <Header title="Refer a Client" />
        <section className="hero section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="main-text">
                  <p>If you know of a client willing to work with Teck Vibes, feel free to refer and earn perks based on the total business done with the client after the initial agreement. Please fill out the form below and a representative from Teck Vibes will be in touch with you.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <Services services={true} /> */}

        
        <Footer footerClass="main-footer bg-dark-blue" />
      </MainLightLayout>
    </>
  )
}

export default ReferClient;