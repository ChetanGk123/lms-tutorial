import Image from "next/image";

export default function logo() {
  return (
    <Image
    height={130}
    width={130}
    alt="logo"
    src="/logo.svg"/>
  )
}