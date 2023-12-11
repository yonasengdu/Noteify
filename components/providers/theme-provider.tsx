"use client";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { getImgProps } from "next/dist/shared/lib/get-img-props";

const ThemeProvider = ({children,...props} : ThemeProviderProps) => {
    return <NextThemeProvider {...props}>{children}</NextThemeProvider>    
}