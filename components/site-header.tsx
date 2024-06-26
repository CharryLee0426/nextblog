import {MainNav} from "@/components/main-nav";
import Link from "next/link";
import {siteConfig} from "@/config/site";
import {buttonVariants} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import { Icons } from "./icons";
import {ModeToggle} from "@/components/mode-toggle";
import {MobileNav} from "@/components/mobile-nav";

export const SiteHeader = () => {
    return (
      <header className="z-10 sticky top-0 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-14 max-w-screen-2xl items-center">
              <MainNav />
              <div className="flex flex-1 items-center justify-end space-x-2">
                  <nav className="flex items-center">
                      <Link
                          href={siteConfig.links.github}
                          target="_blank"
                          rel="noreferrer"
                      >
                          <div
                              className={cn(
                                  buttonVariants({variant: "ghost"}),
                                  "w-10 px-0 hidden sm:inline-flex"
                              )}
                          >
                              <Icons.gitHub className="h-4 w-4"/>
                              <span className="sr-only">GitHub</span>
                          </div>
                      </Link>

                      <Link
                          href={siteConfig.links.x}
                          target="_blank"
                          rel="noreferrer"
                      >
                          <div
                              className={cn(
                                  buttonVariants({ variant: "ghost" }),
                                  "w-10 px-0 hidden sm:inline-flex"
                              )}
                          >
                              <Icons.x className="h-4 w-4" />
                              <span className="sr-only">X</span>
                          </div>
                      </Link>

                      <ModeToggle />
                      <MobileNav />
                  </nav>
              </div>
          </div>
      </header>
    );
}