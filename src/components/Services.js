import React from 'react';
import { Title } from './Title';
import Service from './Service';
function Services() {
  return (
    <section className='section services' id='services'>
      <Title title='our' subTitle='services' />
      <Service />
    </section>
  );
}

export default Services;
