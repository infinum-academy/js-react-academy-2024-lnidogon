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
  return await response.json;
}
