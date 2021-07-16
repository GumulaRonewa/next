import Home from "../components/landing/Home"
import Countdown from "../components/landing/Countdown"
export default function HomePage(argument) {
  return(
			<main className="fit">
       <div className="Grid_root__2GDws">
        <Home />
        </div>
        <div className="Grid_root__2GDws">
                <Countdown />
        </div>
        
      </main>
          )
}
