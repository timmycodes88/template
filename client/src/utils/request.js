export default async function request(url, options) {
  const modifiedOptions = {
    ...options,
    headers: {
      ...options?.headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(options?.body),
  }

  const response = await fetch(url, modifiedOptions)

  return response.json()
}
