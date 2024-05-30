const navItems = [
  { name: "Home", url: "/" },
  { name: "Candidates", url: "/candidates" },
  { name: "News", url: "/news" },
  { name: "How to Vote", url: "/howtovote" },
  { name: "Forum", url: "/forum" },
  { name: "Profile", url: "/profile" },
];

const authButton = [
  { name: "Sign up", url: "/signup" },
  { name: "Log in", url: "/login" },
  { name: "Forgot your password", url: "/forgot" },
  { name: "Sign out", url: "/" },
]

const socialAuths = [
  { name: "Facebook", src: "/images/facebook-color.svg", action: () => { throw "Not implemented yet!"; } },
  { name: "Google", src: "/images/google-color.svg", action: () => { throw "Not implemented yet!" } },
]

export {navItems, authButton, socialAuths}
