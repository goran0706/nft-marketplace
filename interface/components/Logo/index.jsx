import Image from "next/image";

const Logo = () => {
  return (
    <a href="/">
      <Image src="/logo.svg" alt="brand" width="64" height="64" priority />
    </a>
  );
};

export default Logo;
