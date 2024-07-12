'use client';
import { useRouter } from 'next/navigation';
import { LoadingScreen } from '../LoadingScreen/LoadingScreen';
import { useEffect, useState } from 'react';

interface IAuthRedirect {
  loginFunc: (login: boolean) => void;
}

export const AuthRedirect = ({ loginFunc }: IAuthRedirect) => {
  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem('tv-shows-uid') != undefined) {
      router.push('/shows');
      loginFunc(true);
    } else {
      router.push('/login');
      loginFunc(false);
    }
  }, []);
  return null;
};
