import {useState, useEffect} from 'react'
export default function Countdown(props) {
  const [days,setDays]=useState(10);
  const [hours,setHours]=useState(10);
  const [minutes,setMinutes]=useState(10);
  const [seconds,setSeconds]=useState(10);
  const countdown = () =>{
    const endDate= new Date("September 19, 2021 02:00:00").getTime();
    const today=new Date().getTime();
    const timeDiff=endDate-today;
    const seconds=1000;
    const minutes=60*seconds;
    const hours= 60*minutes;
    const days=24*hours;

    let timeDays=Math.floor(timeDiff/days);
    let timeHours=Math.floor((timeDiff%days)/hours);
    let timeMinutes=Math.floor((timeDiff%hours)/minutes);
    let timeSeconds=Math.floor((timeDiff%minutes)/seconds);
    timeHours= timeHours<10 ? "0"+timeHours:timeHours;
    timeSeconds= timeSeconds<10 ? "0"+timeSeconds:timeSeconds;
    timeMinutes= timeMinutes<10 ? "0"+timeMinutes:timeMinutes;
    timeDays= timeDays<10 ? "0"+timeDays:timeDays;
    setDays(timeDays);
    setHours(timeHours);
    setMinutes(timeMinutes);
    setSeconds(timeSeconds);
  }
  useState(()=>{
    setInterval(countdown,1000)
  },[])
	return(
    <>

     <section className="countdowncontainer">

          <div className="countdown">
          <h1>
        Next Drop
      </h1>
              <article>
                <p>{days}</p>
                <h3>Days</h3>
              </article>
              <article>
                <p>{hours}</p>
                <h3>Hours</h3>
              </article>
              <article>
                <p>{minutes}</p>
                <h3>Minutes</h3>
              </article>
              <article>
                <p>{seconds}</p>
                <h3>Seconds</h3>
              </article>
          </div>
      </section>
    </>
		)
}
