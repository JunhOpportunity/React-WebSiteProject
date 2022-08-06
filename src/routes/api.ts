const BASE_URL = `https://api.coinpaprika.com/v1`;

export async function fetchCoins() {
  // 이 함수는 json 데이터를 반환해야 함.
  return fetch(`${BASE_URL}/coins`).then((response) => response.json());
}

export function fetchCoinInfo(coinId: string) {
  return fetch(`${BASE_URL}/coins/${coinId}}`).then((response) =>
    response.json()
  );
}

export function fetchCoinTickers(coinId: string) {
  return fetch(`${BASE_URL}/tickers/${coinId}}`).then((response) =>
    response.json()
  );
}

export function fetchCoinHistory(coinId: string) {
  const endDate = Math.floor(Date.now() / 1000);
  const startDate = endDate - 60 * 60 * 23;
  return fetch(
    `${BASE_URL}/coins/${coinId}}/ohlcv/historical?start=${startDate}&end=${endDate}`
  ).then((response) => response.json());
}
