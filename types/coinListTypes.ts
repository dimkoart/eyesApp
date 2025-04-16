export type CoinsList = { coins: Coin[] };

export type Coin = {
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  circulating_supply: number;
  current_price: number;
  fully_diluted_valuation: number;
  high_24h: number;
  id: string;
  image: string;
  last_updated: string;
  low_24h: number;
  market_cap: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  market_cap_rank: number;
  max_supply: number;
  name: string;
  price_change_24h: number;
  price_change_percentage_24h: number;
  roi: null;
  symbol: string;
  total_supply: number;
  total_volume: number;
};

export type CoinDetails = {
  id: string;
  symbol: string;
  name: string;
  image: {
    thumb: string;
    small: string;
    large: string;
  };
  market_data: {
    current_price: {
      [currency: string]: number;
    };
    market_cap: {
      [currency: string]: number;
    };
    price_change_24h: number;
    price_change_percentage_24h: number;
    total_volume: {
      [currency: string]: number;
    };
    high_24h: {
      [currency: string]: number;
    };
    low_24h: {
      [currency: string]: number;
    };
  };
  description: {
    [language: string]: string;
  };
  genesis_date: string | null;
  hashing_algorithm: string | null;
  categories: string[];
  links: {
    homepage: string[];
    blockchain_site: string[];
    official_forum_url: string[];
    twitter_screen_name: string | null;
    facebook_username: string | null;
    subreddit_url: string | null;
  };
};

export type MarketChartData = {
  prices: [number, number][];
  market_caps: [number, number][];
  total_volumes: [number, number][];
};
