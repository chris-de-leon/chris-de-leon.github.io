"use client"

import { Button } from "../ui/button"
import { Menu } from "lucide-react"
import { useState } from "react"
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
  const [open, setOpen] = useState(false)

  return (
    <div className="container mx-auto">
      {/* Mobile */}
      <div className="flex w-full flex-row items-center justify-between text-primary-foreground md:hidden">
        <div className="relative aspect-square w-1/12 overflow-clip rounded-full">
          <Image
            className="left-0 top-0 h-full w-full object-cover"
            src="/logo.webp"
            alt="my-personal-logo"
            fill
          />
        </div>
        <DropdownMenu open={open} onOpenChange={setOpen}>
          <DropdownMenuTrigger asChild>
            <Menu onClick={() => setOpen(true)} />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-primary text-primary-foreground">
            <DropdownMenuItem>
              <Link href={"/#banner"} onClick={() => setOpen(false)}>
                Home
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href={"/#about"} onClick={() => setOpen(false)}>
                About
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href={"/#experience"} onClick={() => setOpen(false)}>
                Experience
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href={"/#work"} onClick={() => setOpen(false)}>
                Work
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href={"/#testimonials"} onClick={() => setOpen(false)}>
                Testimonials
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href={"/#contact"} onClick={() => setOpen(false)}>
                Get In Touch
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Desktop */}
      <div className="hidden md:flex md:w-full md:flex-row md:items-center md:justify-between">
        <div className="flex w-1/6 justify-start">
          <div className="relative aspect-square w-1/4 overflow-clip rounded-full">
            <Image
              className="left-0 top-0 h-full w-full object-cover"
              src="/logo.webp"
              alt="my-personal-logo"
              fill
            />
          </div>
        </div>
        <div className="flex w-4/6 justify-center">
          <NavigationMenu>
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
                About
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
        </div>
        <div className="flex w-1/6 justify-end">
          <Button variant="outline" asChild>
            <Link href="/#contact">Get In Touch</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
