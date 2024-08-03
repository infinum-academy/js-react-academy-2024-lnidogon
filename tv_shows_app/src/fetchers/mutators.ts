import { fetcher } from './fetcher';
import { IReview } from '@/components/features/reviews/ReviewItem/ReviewItem';
export async function mutator<T>(url: string, { arg }: { arg: T }) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(arg),
  });
  if (!response.ok) {
    throw new Error(`Dogodila se greška kod mutiranja na url: ${url}`);
  }

  const responseData = await response.json();
  const accessToken = response.headers.get('access-token');
  const client = response.headers.get('client');
  const tokenType = response.headers.get('token-type');
  const expiry = response.headers.get('expiry');
  const uid = response.headers.get('uid');

  localStorage.setItem(
    'tv-shows-header',
    JSON.stringify({
      accessToken: accessToken,
      client: client,
      tokenType: tokenType,
      expiry: expiry,
      uid: uid,
    })
  );
  localStorage.setItem('tv-shows-uid', responseData.user.id);

  return {
    data: responseData,
  };
}

export async function createReviewMutator<T>(url: string, { arg }: { arg: T }) {
  return await fetcher<{ review: IReview }>(url, {
    method: 'POST',
    body: JSON.stringify(arg),
  });
}

export async function deleteReviewMutator<T>(url: string, { arg }: { arg: T }) {
  return await fetcher<{ review: IReview }>(url, {
    method: 'DELETE',
    body: JSON.stringify(arg),
  });
}

export async function updateReviewMutator<T>(url: string, { arg }: { arg: T }) {
  return await fetcher<{ review: IReview }>(url, {
    method: 'PATCH',
    body: JSON.stringify(arg),
  });
}
