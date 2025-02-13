export default function GitHubStatsWidget() {
    const stats = {
      contributions: 247,
      issues: 5,
      prs: 12,
      watching: 8,
    }
  
    return (
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 h-full">
        <h2 className="text-xl font-semibold mb-4">GitHub Stats</h2>
        <div className="grid grid-cols-2 gap-4">
          {Object.entries(stats).map(([key, value]) => (
            <div key={key} className="text-center">
              <span className="block text-2xl font-bold">{value}</span>
              <span className="text-sm text-gray-500 capitalize">{key}</span>
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  