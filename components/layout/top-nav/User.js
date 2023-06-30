import Image from "next/image";

export default function User() {
  return (
    <Image
      className="circle circle-border nav-icon user-nav-icon"
      src="/images/profile.jpg"
      height={40}
      width={40}
    />
  );
}
