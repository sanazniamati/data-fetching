import Image from "next/image";
import Link from "next/link";

// async function getDog() {
//   const responce = await fetch("https://dog.ceo/api/breeds/image/random", {
//     cache: "no-cache",
//   });
//   const data = await responce.json();
//   console.log(data);
//   return data;
// }

export default function Home() {
  // const dogs = getDog();
  return (
    <div>
      <h1>Home</h1>
      {/* <Image
        src={dogs.message}
        width={500}
        height={500}
        alt={"dogs"}
        priority
      /> */}
      <Link href={"/users"}>Go to users</Link>
    </div>
  );
}
