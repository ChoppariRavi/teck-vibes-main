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

const IndependentProjects = () => {
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
        <Header title="Independent Projects" />
        <section className="hero section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="main-text">
                  <p>Teck Vibes is open to work with end clients and vendors on independent projects at affordable price. If you have a project or requirement and looking to get it done end to end, feel free to get in touch and we are happy to partner with you and be part of your success story.</p>
                  <h2>Form Here</h2>
                  <p> Name: <br />
                    Scope of Work: <br />
                    Contact Information.</p>
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

export default IndependentProjects;