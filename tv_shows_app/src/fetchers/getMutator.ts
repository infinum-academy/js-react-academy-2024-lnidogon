import useSWRMutation from 'swr/mutation';

export async function getMutator<T>(url: string, { arg }: { arg: T }) {
  const headerJSON = localStorage.getItem('tv-shows-header');
  if (headerJSON == null) throw new Error('Problem while accessing user data');
  const header = JSON.parse(headerJSON);
  console.log(header);
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

  const responseData = await response.json();
  console.log(responseData);
  const accessToken = response.headers.get('access-token');
  const client = response.headers.get('client');
  const tokenType = response.headers.get('token-type');
  return {
    data: responseData,
  };
}
