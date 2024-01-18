import { useEffect } from 'react';
import './WineBlogPage.scss';

export const WineBlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <p>Wine Blog Page</p>
  )
}