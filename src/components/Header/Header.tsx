import Link from "next/link";

type Link = {
  name: string;
  href: string;
};

function Nav() {
  const links: Link[] = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Weather",
      href: "/weather",
    },
    {
      name: "News",
      href: "/news",
    },
    {
      name: "Task manager",
      href: "/task-manager",
    },
    {
      name: "Other Widgets",
      href: "/other-widgets",
    },
  ];

  return (
    <nav className="w-full h-full text-xl">
      <ul className="w-full h-full flex items-center justify-around">
        {links.map((link) => {
          return (
            <Link href={link.href} key={link.name}>
              <li className="hover:underline">{link.name}</li>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
}

export function Header() {
  return (
    <header className="h-24 shadow-lg">
      <Nav />
    </header>
  );
}
