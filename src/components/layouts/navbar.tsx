"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu, X, TrendingDown, User, Settings, LogOut, LayoutDashboard } from "lucide-react"
import { cn } from "@/lib/utils"

// Placeholder user - replace with your auth system later
const PLACEHOLDER_USER = {
    name: "John Doe",
    email: "john@example.com",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=JD",
}

export function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    // Toggle this to simulate logged in/out state during development
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/calculator", label: "Calculator" },
        { href: "/pricing", label: "Pricing" },
    ]

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-lg">
            <div className="mx-auto max-w-7xl px-4">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 font-bold text-xl text-slate-900 dark:text-slate-50">
                        <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                            <TrendingDown className="h-5 w-5 text-white" />
                        </div>
                        <span className="hidden sm:inline">Debt Snowball</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop Auth Section */}
                    <div className="hidden md:flex items-center gap-4">
                        {isAuthenticated ? (
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                                            <User className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                                        </div>
                                        <span className="text-sm font-medium">{PLACEHOLDER_USER.name}</span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="w-56">
                                    <DropdownMenuLabel>
                                        <div className="flex flex-col space-y-1">
                                            <p className="text-sm font-medium">{PLACEHOLDER_USER.name}</p>
                                            <p className="text-xs text-slate-500">{PLACEHOLDER_USER.email}</p>
                                        </div>
                                    </DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem asChild>
                                        <Link href="/dashboard" className="cursor-pointer">
                                            <LayoutDashboard className="mr-2 h-4 w-4" />
                                            Dashboard
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild>
                                        <Link href="/settings" className="cursor-pointer">
                                            <Settings className="mr-2 h-4 w-4" />
                                            Settings
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem onClick={() => setIsAuthenticated(false)} className="cursor-pointer">
                                        <LogOut className="mr-2 h-4 w-4" />
                                        Log out
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        ) : (
                            <>
                                <Button variant="ghost" onClick={() => setIsAuthenticated(true)}>
                                    Log in
                                </Button>
                                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">Get Started</Button>
                            </>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </Button>
                </div>

                {/* Mobile Navigation */}
                <div className={cn("md:hidden overflow-hidden transition-all duration-300 ease-in-out", mobileMenuOpen ? "max-h-96 pb-4" : "max-h-0",)}>
                    <div className="flex flex-col space-y-4 pt-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}

                        <div className="border-t border-slate-200 dark:border-slate-800 pt-4">
                            {isAuthenticated ? (
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
                                        <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                                            <User className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-sm font-medium text-slate-900 dark:text-slate-50">
                                                {PLACEHOLDER_USER.name}
                                            </span>
                                            <span className="text-xs text-slate-500">{PLACEHOLDER_USER.email}</span>
                                        </div>
                                    </div>
                                    <Link
                                        href="/dashboard"
                                        className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <LayoutDashboard className="h-4 w-4" />
                                        Dashboard
                                    </Link>
                                    <Link
                                        href="/settings"
                                        className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <Settings className="h-4 w-4" />
                                        Settings
                                    </Link>
                                    <button
                                        onClick={() => {
                                            setIsAuthenticated(false)
                                            setMobileMenuOpen(false)
                                        }}
                                        className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 w-full"
                                    >
                                        <LogOut className="h-4 w-4" />
                                        Log out
                                    </button>
                                </div>
                            ) : (
                                <div className="flex flex-col gap-2">
                                    <Button
                                        variant="outline"
                                        className="w-full bg-transparent"
                                        onClick={() => {
                                            setIsAuthenticated(true)
                                            setMobileMenuOpen(false)
                                        }}
                                    >
                                        Log in
                                    </Button>
                                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">Get Started</Button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
