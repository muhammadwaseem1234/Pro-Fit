"use client";
import Link, { LinkProps } from "next/link";
import React, { ReactNode } from "react";
import { useRouter } from "next/navigation";
import { resolve } from "path";

interface TransitionLinkProps extends LinkProps {
  children: ReactNode;
  href:string,
  className?: string;
}

function sleep(ms:number): Promise<void>{
    return new Promise((resolve)=> setTimeout(resolve, ms));
}

export const TransitionLink = ({ children, className,href,...props }: TransitionLinkProps) => {
    const router = useRouter();
    const handletransistion = async (e : React.MouseEvent<HTMLAnchorElement,MouseEvent>) => {
        e.preventDefault();

        const body = document.querySelector("body");
        body?.classList.add("page-transition");
        await sleep(500);
        router.push(href);
        await sleep(500);
        body?.classList.remove("page-transition")
    }
  return (
    <Link onClick = {handletransistion} href={href} className={className} {...props}>
      {children}
    </Link>
  );
};