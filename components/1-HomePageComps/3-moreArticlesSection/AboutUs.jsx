import Image from "next/image"
import Authors from "../../../assets/images/author.png"

const AboutUs = () => {
  return (
    <>
      <div>
        <Image src={Authors} alt='blog writers' />
        <h3>About us</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis
          aliquam faucibus purus tristique tellus dignissim sagittis amet,
          suscipit. Risus elit, dignissim nam nibh duis eu ut auctor viverra.
          Sollicitudin.
        </p>
      </div>
    </>
  )
}

export default AboutUs
