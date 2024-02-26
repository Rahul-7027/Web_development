import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto relative">
      <Image className="mx-auto"  width={700} height={700} src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg" alt="" />
    </div>
  );
}
