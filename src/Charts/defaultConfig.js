export const defaultConfig = {
  interval: "1m",
  exchanges: [
    "markets/bitfinex/btc/usd",
    "markets/bitstamp/btc/usd",
    "markets/gdax/btc/usd",
    "markets/okex/btc/usdt",
    "futures/bitmex/btc/usd/perpetual",
    "futures/bitmex/btc/usd/quarterly",
    "markets/bitflyer/btcfx/jpy",
    "futures/okcoin/btc/usd/quarterly"
  ],

  // Config to be sent to the cryptowatch charts via postMessage
  cryptowatch: {
    theme: "candycane",
    config: {
      grid: true,
      indicators: {
        volume: {
          show: true
        },
        bollingerBands: {
          show: true,
          period: 20,
          stddevs: 2,
          fill: false
        },
        chandelierExit: {
          show: false,
          periods: 22,
          atrs: 1
        },
        macd: {
          show: false
        },
        ema: {
          periods: [10, 21, 100, null, null],
          show: false
        },
        ichimoku: {
          show: false,
          tenkanPeriod: 20,
          kijunPeriod: 60,
          senkouSpanBPeriod: 120,
          displacement: 30
        },
        keltnerChannel: {
          show: false,
          atrPeriod: 14,
          atrs: 2,
          fill: false
        },
        sar: {
          step: 0.025,
          maxStep: 0.05,
          show: false
        },
        sma: {
          periods: [15, 50, null, null, null],
          show: false
        },
        zigzag: {
          show: false,
          threshold: 7
        }
      },
      yAxis: "log"
    }
  }
};
