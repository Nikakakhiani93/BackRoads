import React from 'react';
import { tours } from '../data';

function Tour() {
  return (
    <div className='section-center featured-center'>
      {tours.map((tour) => {
        return (
          <article className='tour-card' key={tour.id}>
            <div className='tour-img-container'>
              <img src={tour.image} className='tour-img' alt='' />
              <p className='tour-date'>{tour.date}</p>
            </div>
            <div className='tour-info'>
              <div className='tour-title'>
                <h4>{tour.title}</h4>
              </div>
              <p>{tour.text}</p>
              <div className='tour-footer'>
                <p>
                  <span>
                    <i className={tour.icon}></i>
                  </span>{' '}
                  {tour.country}
                </p>
                <p>{tour.day} days</p>
                <p>from ${tour.price}</p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default Tour;
