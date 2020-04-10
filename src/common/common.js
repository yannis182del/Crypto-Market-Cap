// URLS
export const marketCapUrl = (num) => {
  return `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${num}&page=1&sparkline=false`;
};

// COLORS
export const COLOR_RED = "rgb(217, 64, 64)";
export const COLOR_GREEN = "rgb(0, 158, 115)";
