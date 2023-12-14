import Image from "next/image";
import brand from "./brand.png";
import Link from "next/link";

export default function Logo() {
  return (
    <div>
      <Link legacyBehavior href="/">
        <a>
          <Image src={brand} width={234} height={37} alt={"Website name"} />
        </a>
      </Link>
    </div>
  );
}
