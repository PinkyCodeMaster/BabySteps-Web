import { Navbar } from '@/components/layouts/navbar';
import React from 'react'

export default function AppLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50/20 to-slate-50 dark:from-slate-950 dark:via-emerald-950/10 dark:to-slate-950">
            {/* Navbar */}
            <Navbar />
            {/* Content */}
            <main className="px-4 py-8">
                <div className="mx-auto max-w-6xl">{children}</div>
            </main>
            {/* Footer */}
            <footer className="px-4 py-8 border-t border-slate-200 dark:border-slate-800">
                <div className="mx-auto max-w-6xl text-center text-sm text-slate-600 dark:text-slate-400">
                    <p>© 2025 Debt Snowball Calculator. Free financial tools for everyone.</p>
                </div>
            </footer>
        </div>
    )
}

