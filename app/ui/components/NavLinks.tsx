"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";


const links = [
  { name: "Home", href: "/" },
  { name: "All Players", href: "/players" },
  { name: "T20 Batting", href: "/t20-batting" },
  { name: "ODI Batting", href: "/odi-batting" },
  { name: "Test Batting", href: "/test-batting" },
  { name: "T20 Bowling", href: "/t20-bowling" },

  { name: "ODI Bowling", href: "/odi-bowling" },

  { name: "Test Bowling", href: "/test-bowling" },
];

export default function NavLinks() {
  const pathname = usePathname();

  const bowlingIcon =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAqxJREFUSEu11UvoVVUUBvCfFUYkohQS5EACg6CClHykqIPKCCoUUSwHaj6gNMpAlFJDB5KiGSGCpVAY+BqYUmJpIWUPRMpKw4lNnCRG+EpE1PaKdeO6vQ8a/Dcczr1nr7O/tb7vW+v00sOrVw+frxvAbXgWwzAEj+JvHMnre+zrlGQngMHYhke6VHkAz+N0q7h2AC9hLW7Pl97DXhzDn3gYD2F6qWBkPnuxJPNJDdIKYDY2ZmC81B/rcLVFhrcUyhZiBYLOp2rKaoCB+A198rDDeALn8QbWpAY11lB8izOF1gdwrhFQA4RgT+JVTMZj+CGfbSi09S3iPtNGk5nYhI8xrRXA/TiRGzOwswB8nhyHW6L8yC5+t1sRHxXfgz8iqLmCF7AFq7E4OQ+qvsCIPDhevpZ0LS9xlyukSdiBCdhVA7yLV9LvP6ZDwvtvpnANkOiLD3ASr1UA9+IU3saiGuCbku2oFPhiumJ7CXoLvyddDZDxWf3ZCuCONMFBjKsBwgXh6bBbbcl+uJ6VDE/hH8d9SVc0WuOdS/gpz7pBg2imlxHerlfQN6iUP6tQuDs1+S6Fj4bcj61oUPQ+5tQVhHM259wJ/zev6OglpbNXZgIhfFQSjgrhL5Rmu7UYYGle87C+Boj2P4rgfUoHK4ZOv6a7YvhFJdE7U5smwBh8XQPE/4aPwyl72oB8lrNnfsYHSOgX9nwn9YkGDTvfNK6jQY6jd+F1dIpV49xZRsfrOX+is2OaxqiIFaM8hmBY+N/Vatg9l01yJflc1cimQgrOF5TGDMBluTe3iaa2ALER8yaaaUAR8RA+xC/4GXeXMfIgnk7XRfxfOb8+qsvt9MG5K7OZ2EHw2PoUMej+1wen+czw/9jszLhHt35Znn2V9//4bpVIt29yl+S7b/c4wD/T7ogZThmkyAAAAABJRU5ErkJggg==";
  const battingIcon = "https://cdn-icons-png.flaticon.com/512/1454/1454437.png";
  const groupIcon = "https://cdn-icons-png.flaticon.com/512/32/32441.png";
  const homeIcon = "https://cdn-icons-png.flaticon.com/512/25/25694.png";
  return (
    <>
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={clsx(
            "flex h-[48px] grow items-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600",
            link.name === "Home"
              ? " md:h-[100px] bg-red-50 md:bg-red-500"
              : "bg-red-200 md:justify-start md:p-2 md:px-3",
            {
              "bg-sky-100 text-blue-600": pathname === link.href,
            }
          )}
        >
          <img
            src={
              link.name.includes("Batting")
                ? battingIcon
                : link.name.includes("All Players")
                ? groupIcon
                : link.name.includes("Home")
                ? homeIcon
                : bowlingIcon
            }
            className="w-8"
            alt={link.name}
          />
          <p className="md:block">{link.name}</p>
        </Link>
      ))}
    </>
  );
}
