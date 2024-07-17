import useSWRMutation from 'swr/mutation';
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
  return {
    data: responseData,
  };
}

export async function getMutator<T>(url: string, { arg }: { arg: T }) {
  const headerJSON = localStorage.getItem('tv-shows-header');
  if (headerJSON == null) throw new Error('Problem while accessing user data');
  const header = JSON.parse(headerJSON);
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'aplication/json',
      'access-token': header.accessToken,
      client: header.client,
      'token-type': header.tokenType,
      uid: header.uid,
      expiry: header.expiry,
    },
  });
  if (!response.ok) {
    throw new Error(`Dogodila se greška kod mutiranja na url: ${url}`);
  }
  return await response.json();
}

export async function createReviewMutator<T>(url: string, { arg }: { arg: T }) {
  const headerJSON = localStorage.getItem('tv-shows-header');
  if (headerJSON == null) throw new Error('Problem while accessing user data');
  const header = JSON.parse(headerJSON);
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'aplication/json',
      'access-token': header.accessToken,
      client: header.client,
      'token-type': header.tokenType,
      uid: header.uid,
      expiry: header.expiry,
    },
    body: JSON.stringify(arg),
  });
  if (!response.ok) {
    throw new Error(`Dogodila se greška kod mutiranja na url: ${url}`);
  }
  return await response.json();
}

export async function deleteReviewMutator<T>(url: string, { arg }: { arg: T }) {
  const headerJSON = localStorage.getItem('tv-shows-header');
  if (headerJSON == null) throw new Error('Problem while accessing user data');
  const header = JSON.parse(headerJSON);
  const response = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'aplication/json',
      'access-token': header.accessToken,
      client: header.client,
      'token-type': header.tokenType,
      uid: header.uid,
      expiry: header.expiry,
    },
    body: JSON.stringify(arg),
  });
  if (response.status == 204) return;
  if (!response.ok) {
    throw new Error(`Dogodila se greška kod mutiranja na url: ${url}`);
  }
  return await response.json();
}

export async function updateReviewMutator<T>(url: string, { arg }: { arg: T }) {
  const headerJSON = localStorage.getItem('tv-shows-header');
  if (headerJSON == null) throw new Error('Problem while accessing user data');
  const header = JSON.parse(headerJSON);
  const response = await fetch(url, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'aplication/json',
      'access-token': header.accessToken,
      client: header.client,
      'token-type': header.tokenType,
      uid: header.uid,
      expiry: header.expiry,
    },
    body: JSON.stringify(arg),
  });
  if (response.status == 204) return;
  if (!response.ok) {
    throw new Error(`Dogodila se greška kod mutiranja na url: ${url}`);
  }
  return await response.json();
}
