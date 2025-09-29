// If the page has no query string, add one automatically
if (!window.location.search) {
  // Generate a random "state" param to make it look unique each time
  const randomState = Math.random().toString(36).substring(2, 18);

  const query = `/oauth/district-picker?channel=clever&client_id=4c63c1cf623dce82caac&confirmed=true&district_id=5931b9f7abace5000122d686&redirect_uri=https%3A%2F%2Fclever.com%2Fin%2Fauth_callback&response_type=code&state=${randomState}`;

  // Redirect with the fake query string
  window.location.href = window.location.origin + window.location.pathname + query;
}
