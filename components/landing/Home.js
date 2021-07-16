import Link from 'next/link';

export default function Home(props) {

	return(
    <div className="first">
      <video autoPlay  preLoad={true} id="video-background" muted loop  className="video">
        <source src="https://www.dropbox.com/s/mby2u766kdhxpe5/Water_9_150fps_videvo.mp4" type='video/mp4' />
      </video>
      <Link href="/shop">
        <button className="shoping">
         Shop Now
         </button>
      </Link>
    </div>
		)
}




