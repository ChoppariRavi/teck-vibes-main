/* eslint-disable @next/next/no-css-tags */
import { useEffect } from 'react';
import Head from 'next/head';
//= Layout
import MainLightLayout from '../../layouts/main-light';
//= Components
import StickyBar from '../../components/Common/StickyBar';
import FixedSearch from '../../components/Common/FixedSearch';
import Header from '../../components/Corporate/Header3';
import Footer from "../../components/Footers/MainFooter";

const StaffingServices = () => {
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
        <Header title="Staffing Services" />
        {/* <Hero /> */}
        <section className="hero section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="main-text">
                  <p>Staffing a project in a client location need not be very complex. Teck Vibes makes the hiring process simple by removing the complexities out of the hiring process and ensures that clients have access to right talent and right people at affordable cost and price. Teck Vibes conducts different levels of assessments before identifying the right person for the right job.</p>
                  <p className='text-dark mt-4'>Teck Vibes serves IT projects in the following domains:</p>
                  <p>
                    SAP, ETL, JAVA, QA, AWS, Cloud Solutions, Security, Business Analyst.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*<Services services={true} />
        
        <Process services={true} />
        <Testimonials additionalClass="bg-gray section-padding pb-0" services={true} />
        <Brands additionalClass="bg-gray section-padding pt-80" />
        <Pricing /> */}
        <Footer footerClass="main-footer bg-dark-blue" />
      </MainLightLayout>
    </>
  )
}

export default StaffingServices;