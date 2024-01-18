import { useEffect } from 'react';
import './Catalog.scss';

export const Catalog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <p>Catalog</p>
  )
}