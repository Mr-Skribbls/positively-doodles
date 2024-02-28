import { useEffect, useState } from 'react';
import testimonials from '../json/testimonials.json';

interface Testimonial {
  customer: string
  imageName: string
  review: string[]
}

const getByCustomer = (customerName: string): Testimonial | undefined => testimonials.find((testimonial) => testimonial.customer === customerName);

const useTestimonial = (customerName: string) => {
  const [testimonial, setTestimonial] = useState<Testimonial>();

  useEffect(() => {
    setTestimonial(getByCustomer(customerName))
  }, [customerName]);

  return testimonial;
};

export default useTestimonial;