import Link from 'next/link';

export default function Home(props) {

	return(
    <div className="first">
      <video autoPlay={true} muted loop  className="video">
        <source src="https://cdn.videvo.net/videvo_files/video/free/2015-03/small_watermarked/Water_9_150fps_videvo_preview.webm" type="video/webm"/>
      </video>
        <button className="shoping">
         Shop Now
         </button>
    </div>
		)
}




