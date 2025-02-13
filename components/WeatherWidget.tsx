export default function WeatherWidget() {
    return (
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 h-full">
        <h2 className="text-xl font-semibold mb-4">Weather</h2>
        <div className="flex flex-col items-center">
          <span className="text-5xl font-bold mb-2">72°F</span>
          <span className="text-lg mb-4">Sunny</span>
          <div className="flex justify-between w-full text-sm">
            <span>Today: 75°F / 65°F</span>
            <span>Tomorrow: 78°F / 67°F</span>
          </div>
        </div>
      </div>
    )
  }
  
  