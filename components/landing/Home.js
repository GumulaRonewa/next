import Link from 'next/link';

export default function Home(props) {

	return(
    <div className="first">
      <video autoPlay  preLoad={true} id="video-background" muted loop  className="video">
        <source src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4" type="video/mp4" />
      </video>
      <Link href="/shop">
        <button className="shoping">
         Shop Now
         </button>
      </Link>
    </div>
		)
}




