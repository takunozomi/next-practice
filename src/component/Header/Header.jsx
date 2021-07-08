import Link from "next/link";

export const Header = () => {
  return (
    <header>
      <Link href="/">
        <a>index</a>
      </Link>
      <Link href="/about">
        <a>about</a>
      </Link>
    </header>
  );
};
