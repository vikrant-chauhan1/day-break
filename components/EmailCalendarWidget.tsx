export default function EmailCalendarWidget() {
    const emails = [
      { subject: "Team meeting", sender: "boss@company.com" },
      { subject: "Project update", sender: "colleague@company.com" },
    ]
  
    const events = [
      { title: "Weekly standup", time: "10:00 AM" },
      { title: "Client call", time: "2:00 PM" },
    ]
  
    return (
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 w-full h-full">
        <h2 className="text-xl font-semibold mb-4">Emails & Calendar</h2>
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Recent Emails:</h3>
          <ul className="space-y-2">
            {emails.map((email, index) => (
              <li key={index} className="text-sm">
                <p className="font-medium">{email.subject}</p>
                <span className="text-gray-500">{email.sender}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Upcoming Events:</h3>
          <ul className="space-y-2">
            {events.map((event, index) => (
              <li key={index} className="text-sm">
                <p className="font-medium">{event.title}</p>
                <span className="text-gray-500">{event.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  
  