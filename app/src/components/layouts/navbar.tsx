import { Button } from "../ui/button"
import Image from "next/image"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@app/components/ui/navigation-menu"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@app/components/ui/dropdown-menu"

export function Navbar() {
  return (
    <div className="container mx-auto">
      {/* Mobile */}
      <div className="flex w-full flex-row justify-between text-primary-foreground md:hidden">
        <Image
          className="rounded-full"
          src="/logo.webp"
          alt="my-personal-logo"
          width={50}
          height={50}
        />
        <DropdownMenu>
          <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
          <DropdownMenuContent className="bg-primary text-primary-foreground">
            <DropdownMenuItem>
              <Link href={"/#banner"} legacyBehavior passHref>
                Home
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href={"/#about"} legacyBehavior passHref>
                About Me
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href={"/#experience"} legacyBehavior passHref>
                Experience
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href={"/#work"} legacyBehavior passHref>
                Work
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href={"/#testimonials"} legacyBehavior passHref>
                Testimonials
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href={"/#contact"} legacyBehavior passHref>
                Get In Touch
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Desktop */}
      <div className="hidden md:flex md:w-full md:flex-row md:items-center md:justify-between md:gap-x-7">
        <Image
          className="rounded-full"
          src="/logo.webp"
          alt="my-personal-logo"
          width={50}
          height={50}
        />
        <NavigationMenu className="gap-x-3">
          <Link href={"/#banner"} legacyBehavior passHref>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle({
                className: "bg-primary text-primary-foreground",
              })}
            >
              Home
            </NavigationMenuLink>
          </Link>
          <Link href={"/#about"} legacyBehavior passHref>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle({
                className: "bg-primary text-primary-foreground",
              })}
            >
              About Me
            </NavigationMenuLink>
          </Link>
          <Link href={"/#experience"} legacyBehavior passHref>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle({
                className: "bg-primary text-primary-foreground",
              })}
            >
              Experience
            </NavigationMenuLink>
          </Link>
          <Link href={"/#work"} legacyBehavior passHref>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle({
                className: "bg-primary text-primary-foreground",
              })}
            >
              Work
            </NavigationMenuLink>
          </Link>
          <Link href={"/#testimonials"} legacyBehavior passHref>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle({
                className: "bg-primary text-primary-foreground",
              })}
            >
              Testimonials
            </NavigationMenuLink>
          </Link>
        </NavigationMenu>
        <Button variant="outline" asChild>
          <Link href="/#contact">Get In Touch</Link>
        </Button>
      </div>
    </div>
  )
}
