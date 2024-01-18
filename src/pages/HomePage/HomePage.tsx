import { useEffect } from 'react';
import './HomePage.scss';

export const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <p>HomePage</p>
  )
}