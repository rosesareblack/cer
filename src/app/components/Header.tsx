import Image from "next/image";
import PineconeLogo from "../../../public/pinecone.svg";
import VercelLogo from "../../../public/vercel.svg";

export default function Header({ className }: { className?: string }) {
  return (
    <header
      className={`flex items-center justify-center p-4 border-b ${className}`}
    >
      <Image
        src={PineconeLogo}
        alt="pinecone-logo"
        width="230"
        height="50"
        className="mx-2"
      />{" "}
      <div className="text-4xl mx-2">+</div>
      <Image
        src={VercelLogo}
        alt="vercel-logo"
        width="160"
        height="50"
        className="mx-2"
      />
    </header>
  );
}
