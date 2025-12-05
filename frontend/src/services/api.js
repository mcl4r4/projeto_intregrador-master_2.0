import { getToken } from "../utils/auth";

const BASE_URL = "http://localhost:3333/";

async function request(endpoint, option = {}) {
  const url = `${BASE_URL}${endpoint}`;

  //header
  const headers = {
    "Content-Type": "application/json",
    ...option.headers,
  };

  //Adiciona o token no disponível
  const token = getToken();
  if (token) {
    headers.Authorization = `Baerer ${token}`;
  }

  const config = {
    method: option.method || "GET",
    headers,
    ...option,
  };

  //Se tiver o corpo, converto para JSON
  if (config.body && typeof config.body !== "string") {
    config.body = JSON.stringify(config.body);
  }

  try {
    const response = await fetch(url, config);
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData || `Error ${response.status}: ${response.statusText}`
      );
    }

    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      return await response.json();
    } else {
      return await response.json();
    }
  } catch (error) {
    console.log('Erro na requisição: ', error)
    throw error;
  }
}

export const api = {
  get: (endpoint) => request(endpoint),
  post: (endpoint, body) => request(endpoint, { method: "POST", body }),
};
