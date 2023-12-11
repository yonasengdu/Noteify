"use client";

import useScrollTop from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import Logo from "./logo";
import ModeToggle from "@/components/mode-toggle";
import { useConvexAuth } from "convex/react";
import { SignInButton, SignUpButton, UserButton } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import Spinner from "@/components/spinner";
import Link from "next/link";


const Navbar = () => {
  const {isAuthenticated,isLoading} = useConvexAuth()
  const scrolled = useScrollTop();

  return (
    <div
      className={cn(
        "z-50 bg-background top-0 dark:bg-[#1f1f1f] flex items-center w-full p-6",
        scrolled && "border-b shadow-sm ",
      )}
    >
      <Logo />
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
        {
          isLoading && (
            <Spinner/>
          )
        }
      {!isAuthenticated && !isLoading && (
        <>
        <SignInButton mode="modal"> 
            <Button variant='ghost' size='sm'>
              log in
            </Button>
          </SignInButton>
        
        <SignUpButton mode="modal">
          <Button>
            Get Notify free
          </Button>
        </SignUpButton>
        
        </>
      )}
      { isAuthenticated && !isLoading && (
        <>
          <Button variant='ghost' size='sm' asChild>
           <Link href='/documents'>
            Enter Notify
           </Link> 
          </Button>

          <UserButton
           afterSignOutUrl="/"

          />
          
        </>
      )
        
      }
      <ModeToggle/> 
      </div>
     
    </div>
  );
};

export default Navbar;
