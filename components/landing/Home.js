import Link from 'next/link';
import Image from 'next/image'

export default function Home(props) {

	return(
    <div className="first">
      <div className="video">
              <Image  layout="fill" className=" mb-10" objectFit="cover" src={"https://cdn.zmescience.com/wp-content/uploads/2017/03/drops-of-water-578897_1280-1024x682.jpg"} alt="" />
      </div>
      <Link href="/shop">
        <button className="shoping">
         Shop Now
         </button>
      </Link>
    </div>
		)
}




