import React from 'react';
import Layout from '../components/Layout';
import Landing from '../sections/landing/Landing';
import CallToAction from '../sections/landing/CallToAction';
import LandingAbout from '../sections/landing/LandingAbout';
import LandingServices from '../sections/landing/LandingServices';

const IndexPage = () => (
  <Layout>
    <Landing />
    <CallToAction />
    <LandingAbout />
    <LandingServices />
  </Layout>
);

export default IndexPage;
