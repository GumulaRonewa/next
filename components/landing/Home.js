import Link from 'next/link';
import Image from 'next/image'

export default function Home(props) {

	return(
    <div className="first">
      <div className="video">
              <Image  layout="fill" className=" mb-10" objectFit="cover" src={item.img} alt="" />
      </div>
      <Link href="/shop">
        <button className="shoping">
         Shop Now
         </button>
      </Link>
    </div>
		)
}




