export async function fetcher<T>(
  input: string | URL | globalThis.Request,
  init?: RequestInit
): Promise<T> {
  const headerJSON = localStorage.getItem('tv-shows-header');
  if (headerJSON == null) throw new Error('Problem while accessing user data');
  const header = JSON.parse(headerJSON);
  const response = await fetch(input, {
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
    ...init,
  });
  if (!response.ok) {
    throw new Error(`Dogodila se greška kod fetchanja`);
  }
  return await response.json();
}
