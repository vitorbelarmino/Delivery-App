import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem('produtos');
    navigate('/login');
  });

  return (
    <div />
  );
}

export function teste() {}
