//Der Dummy Endpoint aus der E-Mail müssen wir über http ansprechen

async function postToDummyEndpoint(url, apiKey, payload){
  const response = await fetch(url, {
      method: "POST",
      headers: {
        "Conten-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify(payload)m
  });
  if (!response.ok){
    throw new Error(response.statusText);
  }

  return response.json();

}

exports.postToDummyEndpoint = postToDummyEndpoint;
