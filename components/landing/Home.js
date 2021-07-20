import Link from 'next/link';
import Image from 'next/image'

export default function Home(props) {

	return(
    <div className="first">
      <div className="video">
              <Image  layout="fill" className="imgcenter" objectFit="cover" src={"https://wokiee.reactdemo.hasthemes.com/assets/images/slides/01/slide-01.jpg"} alt="" />
      </div>
       <div className="placecenter">
         <div className="captions">
       Premium,Exclusive Clothes
      </div>
      <Link href="/shop">
        <button className="shoping">
         Shop Now
         </button>
      </Link>
       </div>
    </div>
		)
}




