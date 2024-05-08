import Link from "next/link";

export default function Header() {
  let navItems = [
    { name: "Home", url: "/" },
    { name: "Candidates", url: "/candidates" },
    { name: "News", url: "/news" },
    { name: "How to Vote", url: "/howtovote" },
    { name: "Forum", url: "/forum" },
    { name: "Profile", url: "/profile" },
  ];

  let authButton = [
    { name: "Sign up", url: "/auth/signup" },
    { name: "Log in", url: "/auth/login" },
  ]

  return (
    <nav className="flex h-[70px]">
      <div className="m-auto">Logo</div>
      <div className="grow flex justify-center m-auto">
        {navItems.map((item) => (
          <Link href={item.url} className="p-[10px]">{item.name}</Link>
        ))}
      </div>
      <div className="m-auto w-[206px] h-[36px] rounded-[10px] bg-red-100 mx-[12px] grid grid-cols-2 overflow-hidden">
        <Link href={authButton[0].url} className="bg-gray-800 flex items-center justify-center text-white">{authButton[0].name}</Link>
        <Link href={authButton[1].url} className="bg-red-700 flex items-center justify-center text-white">{authButton[1].name}</Link>
      </div>
    </nav>
  );
}
