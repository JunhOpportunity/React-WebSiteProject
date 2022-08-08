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
  const endDate = Math.floor(Date.now() / 1000); // 현재 시간을 초로 나타내기
  const startDate = endDate - 60 * 60 * 23 * 7 * 1;
  return fetch(
    `https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}`
  ).then((response) => response.json());
}
