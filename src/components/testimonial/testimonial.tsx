import './testimonial.css';
import { FC } from 'react';
import useTestimonial from '../../hooks/useTestimonial';
import SourceSetImage from '../sourceSetImage/sourceSetImage.component';
import { isNil } from 'lodash';

interface TestimonialProps {
  customerName: string
}

const Testimonial:FC<TestimonialProps> = ({
  customerName,
}) => {
  const testimonial = useTestimonial(customerName);

  return (
    <>
      {!isNil(testimonial) && <section className='testimonial'>
        <div className='testimonial-heading'>
          <SourceSetImage imageName={testimonial.imageName} sizesRules={['250px']} />
          <h2>{testimonial.customer}</h2>
        </div>
        <div className='testimonial-content'>
          {testimonial.review.map((paragraph, key) => <p key={key}>{paragraph}</p>)}
        </div>
      </section>}
    </>
  );
};

export default Testimonial;