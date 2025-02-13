export default function NewsFeedWidget() {
    const news = [
      { title: "Tech: New AI breakthrough", source: "TechCrunch" },
      { title: "Finance: Markets rally", source: "WSJ" },
      { title: "World: Climate summit begins", source: "BBC" },
      { title: "Sports: Underdog team wins championship", source: "ESPN" },
    ]
  
    return (
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 h-full">
        <h2 className="text-xl font-semibold mb-4">News Feed</h2>
        <ul className="space-y-3">
          {news.map((item, index) => (
            <li key={index} className="pb-2 border-b border-gray-100 last:border-b-0">
              <p className="font-medium">{item.title}</p>
              <span className="text-sm text-gray-500">{item.source}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  }
  
  