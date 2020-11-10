export const getUrls = () => {
  return fetch('http://localhost:3001/api/v1/urls')
      .then(response => response.json())
}

export const postUrl = (longUrl, title) => {
  return fetch ('http://localhost:3001/api/v1/urls', {
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: {long_url: longUrl, title: title}
  })
}
