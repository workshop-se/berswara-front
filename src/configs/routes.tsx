const navItems = [
  { name: "Home", url: "/" },
  { name: "Candidates", url: "/candidates" },
  { name: "News", url: "/news" },
  { name: "How to Vote", url: "/howtovote" },
  { name: "Forum", url: "/forum" },
  { name: "Profile", url: "/profile" },
];

const authButton = [
  { name: "Sign up", url: "/auth/signup" },
  { name: "Log in", url: "/auth/login" },
  { name: "Forgot your password", url: "/auth/forgot" },
]

const socialAuths = [
  { name: "Facebook", src: "/images/facebook-color.svg", action: () => { throw "Not implemented yet!"; } },
  { name: "Google", src: "/images/google-color.svg", action: () => { throw "Not implemented yet!" } },
]

export {navItems, authButton, socialAuths}
