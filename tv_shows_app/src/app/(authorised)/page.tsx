'use client';

import { useRouter } from 'next/navigation';

export default function HomeRedirect() {
  const router = useRouter();
  router.push('/shows');
  return null;
}
