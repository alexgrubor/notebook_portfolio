import Image from "next/image";
import Logo from "../../public/Aleksandra-logo.webp";
import Link from "next/link";
import { ImLocation } from "react-icons/im";
import { BsLinkedin, BsGithub, BsFillHeartFill } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#eee7d7] px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-2 border-t-2 border-[#F4F7FA]">
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <div className="mb-4 sm:mb-0">
          <Link href="/">
            <Image src={Logo} alt="Aleksandra logo" width={150} height={40} />
          </Link>
        </div>
        <div className="flex flex-col mb-4 sm:mb-0">
          <Link href="/about" className="mr-4">
            About
          </Link>
          <Link href="/work" className="mr-4">
            Work
          </Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="mb-4 sm:mb-0">
          <p className="flex items-center justify-center gap-2">
            <ImLocation /> Essen, Germany
          </p>
          <p>
            <a href="mailto:alexgrubor@gmail.com">alexgrubor@gmail.com</a>
          </p>
          <p>
            <a href="tel:+4917643446757">+49 176 43 44 67 57</a>
          </p>
        </div>
      </div>
      <div className="flex justify-center gap-3 mt-4">
        <Link
          href="https://www.linkedin.com/in/aleksandragrubordev/"
          target="_blank"
        >
          <BsLinkedin size={28} />
        </Link>
        <Link href="https://github.com/alexgrubor" target="_blank">
          <BsGithub size={28} />
        </Link>
        <Link href="https://twitter.com/aleksandrag93" target="_blank">
          <FaXTwitter size={28} />
        </Link>
      </div>
      <p className="text-center justify-center items-center gap-3 flex my-2">
        © {year} Aleksandra Grubor{" "}
        <span>
          <BsFillHeartFill />
        </span>
      </p>
    </footer>
  );
};

export default Footer;
