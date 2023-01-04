/** @format */

import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Placeholder from '../components/Placeholder';

function ErrorView() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="container mx-auto flex grow flex-col">
        <Placeholder message="Sorry, this page doesn't exist" />
      </div>
      <Footer />
    </div>
  );
}

export default ErrorView;
