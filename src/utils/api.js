const API_BASE_URL =
  "http://api.weatherbit.io/v2.0/forecast/daily?lat=28&lon=-82&key=d2daa371a17d4ab3aa812131b5e9423c&units=I&days=5";

const headers = new Headers();
headers.append("Content-Type", "application/json");

async function fetchJson(url, options, onCancel) {
  try {
    const response = await fetch(url, options);

    if (response.status === 204) {
      return null;
    }

    const payload = await response.json();

    if (payload.error) {
      return Promise.reject({ message: payload.error });
    }
    return payload.data;
  } catch (error) {
    if (error.name !== "AbortError") {
      console.error(error.stack);
      throw error;
    }
    return Promise.resolve(onCancel);
  }
}

export async function listTemperatures(signal) {
  const url = new URL(`${API_BASE_URL}`);
  return await fetchJson(url, { headers, signal }, []);
}
