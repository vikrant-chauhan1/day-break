
import { CheckSquare, CloudSun, Mail, Newspaper, Quote, Sun, Target, TrendingUp } from "lucide-react";
import Link from "next/link";
import { useRouter} from "next/navigation";
import "../app/globals.css";

export default function AboutPage() {
    const router = useRouter();

    const handleAuthRouter= async()=>{
        router.push("/auth")

    }
    return (
        <div className="min-h-screen flex flex-col bg-white text-black">
          <header className="p-4 border-b border-gray-200">
            <div className="container mx-auto flex justify-between items-center">
              <Link href="/" className="flex items-center space-x-2">
                <Sun className="h-6 w-6" />
                <span className="text-xl font-bold">DayBreak</span>
              </Link>
              <nav>
                <ul className="flex space-x-4">
                  <li>
                    <Link href="/" className="hover:underline">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/auth" className="hover:underline">
                      Sign In
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
    
          <main className="flex-grow">
            <section className="py-20">
              <div className="container mx-auto max-w-4xl text-center">
                <h1 className="text-4xl font-bold mb-8">About DayBreak</h1>
                <p className="text-xl mb-12 max-w-2xl mx-auto">
                  DayBreak is your all-in-one morning dashboard, designed to help you start your day informed, organized,
                  and inspired. We believe that how you begin your day sets the tone for everything that follows.
                </p>
    
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                  {[
                    { icon: Newspaper, title: "News" },
                    { icon: CloudSun, title: "Weather" },
                    { icon: TrendingUp, title: "Stocks" },
                    { icon: Mail, title: "Email" },
                    { icon: CheckSquare, title: "To-Do" },
                    { icon: Target, title: "Goals" },
                    { icon: Quote, title: "Quotes" },
                  ].map((feature, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <feature.icon className="h-12 w-12 mb-2" />
                      <h3 className="text-lg font-semibold">{feature.title}</h3>
                    </div>
                  ))}
                </div>
    
                <p className="text-lg mb-8">
                  Join thousands of users who have transformed their mornings with DayBreak. Experience the difference a
                  well-informed morning can make.
                </p>
    
                <button onClick={handleAuthRouter} className="bg-black text-white rounded-lg px-4 py-2">Get Started</button>
              </div>
            </section>
          </main>
    
          <footer className="py-6 border-t border-gray-200">
            <div className="container mx-auto text-center">
              <p>&copy; 2025 DayBreak. All rights reserved.</p>
            </div>
          </footer>
        </div>
    )
}






