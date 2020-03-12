export const FetchGet = async (urlWithParams = "", sessionToken = "") => {
  const rawResponse = await fetch(urlWithParams, {
    headers: {
      Authorization: `${sessionToken}`
    }
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err)
      return []
    });

  const result = rawResponse;
  return result;
};
