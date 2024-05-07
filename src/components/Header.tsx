import Link from "next/link";

export default function Header() {
  let navItems = [
    { name: "Home", url: "/" },
    { name: "Candidates", url: "/" },
    { name: "News", url: "/" },
    { name: "How to Vote", url: "/" },
    { name: "Forum", url: "/" },
    { name: "Profile", url: "/" },
  ];
  return (
    <nav className="flex h-[70px]">
      <div className="m-auto">Logo</div>
      <div className="grow flex justify-center m-auto">
        {navItems.map((item) => (
          <Link href={item.url} className="p-[10px]">{item.name}</Link>
        ))}
      </div>
      <div className="m-auto">Login signup</div>
    </nav>
  );
}
