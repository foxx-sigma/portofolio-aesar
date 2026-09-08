import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

/**
 * Type-safe, locale-aware navigation utilities.
 * Import Link, usePathname, useRouter from here instead of next/navigation.
 */
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
