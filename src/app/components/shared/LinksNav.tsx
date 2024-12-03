import { NavItemHeaderAnimation } from "@/types";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const navItemsSelected: { [key: string]: NavItemHeaderAnimation } = {
  "/": {
    name: "home",
    x: 1,
    y: -3,
    w: "60px",
  },
  "/about": {
    name: "about",
    x: 65,
    y: -3,
    w: "60px",
  },
  "/projects": {
    name: "projects",
    x: 130,
    y: -3,
    w: "75px",
  },
  // '/blog': {
  //   name: 'blog',
  //   x: 209,
  //   y: -3,
  //   w: '50px',
  // }
};

const LinksNav = () => {
  const pathname = usePathname();
  return (
    <>
      {Object.entries(navItemsSelected).map(([path, { name }]) => {
        const isActive = path === pathname;

        return (
          <Link
            key={path}
            href={path}
            className={clsx(
              "hidden lg:inline-block transition ease text-foreground hover:text-primary font-poppins py-[2px] px-[10px] capitalize",
              {
                "font-bold text-primary": isActive,
              }
            )}
          >
            {name}
          </Link>
        );
      })}
    </>
  );
};

export default LinksNav;
