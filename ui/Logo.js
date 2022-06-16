import Image from "next/image"
import Traveloop from "../assets/images/traveloop.svg"

const Logo = () => {
  return (
    <>
      <Image src={Traveloop} alt='logo' />
    </>
  )
}

export default Logo
