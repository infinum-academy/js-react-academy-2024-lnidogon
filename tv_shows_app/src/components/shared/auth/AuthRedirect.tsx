'use client';
import { useRouter } from 'next/navigation';
import { LoadingScreen } from '../LoadingScreen/LoadingScreen';
import { useEffect } from 'react';

export const AuthRedirect = () => {
  const router = useRouter();
  useEffect(() => {
    console.log(localStorage.getItem('tv-shows-uid'));
    if (localStorage.getItem('tv-shows-uid') != undefined)
      router.push('/shows');
    else router.push('/login');
  }, []);
  return null;
};
