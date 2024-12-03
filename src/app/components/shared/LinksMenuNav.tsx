import Link from "next/link";

const LinksMenu = [
  {
    name: "Home",
    path: "/",
    delay: "150ms",
  },
  {
    name: "About",
    path: "/about",
    delay: "175ms",
  },
  {
    name: "Projects",
    path: "/projects",
    delay: "200ms",
  },
  // {
  //   name: 'Blog',
  //   path: '/blog',
  //   delay: '225ms'
  // },
];

const LinksMenuNav = () => {
  return (
    <>
      {LinksMenu.map(({ name, path, delay }) => (
        <li
          key={name}
          className="border-gray-700 text-sm font-semibold shadow-xl"
          style={{ transitionDelay: delay }}
        >
          <Link
            href={path}
            className="pb-4 text-foreground hover:text-primary font-poppins capitalize"
          >
            {name}
          </Link>
        </li>
      ))}
    </>
  );
};

export default LinksMenuNav;
