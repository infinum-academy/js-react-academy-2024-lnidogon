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
  console.log(responseData);
  const accessToken = response.headers.get('access-token');
  const client = response.headers.get('client');
  const tokenType = response.headers.get('token-type');
  return {
    data: responseData,
    headers: JSON.stringify({
      accessToken: accessToken,
      client: client,
      tokenType: tokenType,
    }),
  };
}
