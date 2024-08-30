import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="navbar-brand w-100 d-table px-20 py-3 mb-3">
      <Image
        src="/assets/images/logo/dash-logo.png"
        alt="dashboard logo"
        width={168}
        height={60}
      />
    </Link>
  );
}
