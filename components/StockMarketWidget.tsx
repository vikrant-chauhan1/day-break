export default function StockMarketWidget() {
    const stocks = [
      { symbol: "AAPL", price: 150.25, change: 2.5 },
      { symbol: "GOOGL", price: 2750.8, change: -0.8 },
      { symbol: "TSLA", price: 725.6, change: 1.2 },
    ]
  
    const crypto = [
      { symbol: "BTC", price: 45000, change: 3.2 },
      { symbol: "ETH", price: 3200, change: 1.5 },
    ]
  
    return (
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 h-full">
        <h2 className="text-xl font-semibold mb-4">Stock Market & Crypto</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold mb-2">Stocks</h3>
            <ul className="space-y-2">
              {stocks.map((stock, index) => (
                <li key={index} className="text-sm">
                  <span className="font-medium">{stock.symbol}</span>: ${stock.price.toFixed(2)}
                  <span className={`ml-1 ${stock.change >= 0 ? "text-green-600" : "text-red-600"}`}>
                    {stock.change >= 0 ? "▲" : "▼"} {Math.abs(stock.change)}%
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Crypto</h3>
            <ul className="space-y-2">
              {crypto.map((coin, index) => (
                <li key={index} className="text-sm">
                  <span className="font-medium">{coin.symbol}</span>: ${coin.price.toFixed(2)}
                  <span className={`ml-1 ${coin.change >= 0 ? "text-green-600" : "text-red-600"}`}>
                    {coin.change >= 0 ? "▲" : "▼"} {coin.change}%
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
  
  