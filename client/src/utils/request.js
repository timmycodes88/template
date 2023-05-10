export default async function request(url, body) {
  const modifiedOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    method: body ? 'POST' : 'GET',
  }

  const response = await fetch(url, modifiedOptions)

  return response.json()
}
