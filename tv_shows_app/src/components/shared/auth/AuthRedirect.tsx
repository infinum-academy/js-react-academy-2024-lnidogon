'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface IAuthRedirect {
  loginFunc: (login: boolean) => void;
}

export const AuthRedirect = ({ loginFunc }: IAuthRedirect) => {
  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem('tv-shows-uid') != undefined) loginFunc(true);
    else {
      router.push('/login');
      loginFunc(false);
    }
  }, []);
  return null;
};
