"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { FiMenu, FiX, FiXCircle } from "react-icons/fi";
import { IoBagOutline, IoSearch } from "react-icons/io5";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  return (
    <header className="border-b border-border bg-background">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-bold tracking-tight text-foreground"
        >
          Fashion.
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive = pathName == link.href;
            return (
              <Link
                className={`relative text-sm font-medium uppercase transition-colors ${isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
                href={link.href}
                key={link.href}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop Buttons */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            {/* search icon */}
            <button className="rounded-full p-2 text-foreground transition-colors hover:bg-surface">
              <IoSearch size={22} />
            </button>

            {/* User */}
            <button
              className="rounded-full p-2 text-foreground transition-colors hover:bg-surface"
              onClick={() => router.push("/sign-in")}
            >
              <FaRegUser size={22} />
            </button>

            {/* cart badge */}
            <button
              className="rounded-full p-2 text-foreground transition-colors hover:bg-surface"
              onClick={() => router.push("/cart")}
            >
              <IoBagOutline size={23} />
            </button>
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="text-2xl text-foreground md:hidden"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="flex flex-col px-4 py-4">
            {navLinks.map((link) => (
              <Link
                onClick={() => {
                  setIsOpen(false);
                }}
                className="rounded-md px-2 py-3 text-muted-foreground transition hover:bg-surface hover:text-forground"
                href={link.href}
                key={link.href}
              >
                {link.label}
              </Link>
            ))}

            <button
              className="mt-4 rounded-lg bg-primary py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary-hover "
              onClick={() => router.push("/sign-in")}
            >
              Sign In
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
