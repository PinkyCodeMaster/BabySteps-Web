import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, TrendingDown, DollarSign, Target, CheckCircle2, Zap, Shield, BarChart3 } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  const features = [
    {
      icon: TrendingDown,
      title: "Debt Snowball Method",
      description: "Pay off smallest debts first to build momentum and motivation toward financial freedom.",
    },
    {
      icon: BarChart3,
      title: "Visual Payoff Timeline",
      description: "See exactly when each debt will be paid off and your journey to becoming debt-free.",
    },
    {
      icon: Target,
      title: "Smart Calculations",
      description: "Automatic interest calculations and optimized payment strategies for faster payoff.",
    },
    {
      icon: Zap,
      title: "Instant Results",
      description: "Get your personalized debt payoff plan in seconds with real-time calculations.",
    },
    {
      icon: Shield,
      title: "100% Private",
      description: "Your financial data stays on your device. No account required, no data collection.",
    },
    {
      icon: DollarSign,
      title: "Free Forever",
      description: "All essential features are completely free. Take control of your finances today.",
    },
  ]

  const benefits = [
    "Pay off debt faster with proven snowball method",
    "See your debt-free date in minutes",
    "Track multiple debts in one place",
    "Understand total interest costs",
    "Build momentum with quick wins",
    "100% free, no hidden fees",
  ]

  return (
    <>

      {/* Hero Section */}
      <section className="px-4 pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="mx-auto max-w-6xl text-center space-y-8">
          <Badge
            variant="outline"
            className="border-emerald-500 text-emerald-600 dark:text-emerald-400 text-sm px-4 py-1"
          >
            Free Debt Payoff Calculator
          </Badge>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-slate-50 text-balance">
            Become Debt-Free
            <br />
            <span className="text-emerald-600 dark:text-emerald-400">Faster Than Ever</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto text-balance leading-relaxed">
            Use the proven debt snowball method to eliminate your debts one by one. Get your personalized payoff plan in
            seconds and see exactly when you'll be debt-free.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link href="/calculator">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white text-lg px-8 h-14">
                Start Free Calculator
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <p className="text-sm text-slate-500">No signup required • 100% free</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-3xl mx-auto">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-emerald-600 dark:text-emerald-400">100%</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Free Forever</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-emerald-600 dark:text-emerald-400">&lt;1min</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Get Your Plan</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-emerald-600 dark:text-emerald-400">$0</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Hidden Fees</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-4 py-16 md:py-24 bg-white dark:bg-slate-900">
        <div className="mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50">How It Works</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Get your personalized debt payoff plan in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-slate-200 dark:border-slate-800 relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                1
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-6 w-6 text-emerald-500" />
                  Enter Your Debts
                </CardTitle>
                <CardDescription>
                  Add your credit cards, loans, and other debts with their balances, interest rates, and minimum
                  payments.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-slate-200 dark:border-slate-800 relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                2
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-6 w-6 text-emerald-500" />
                  Set Extra Payment
                </CardTitle>
                <CardDescription>
                  Tell us how much extra you can put toward debt each month. Even small amounts make a big difference.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-slate-200 dark:border-slate-800 relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                3
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="h-6 w-6 text-emerald-500" />
                  Get Your Plan
                </CardTitle>
                <CardDescription>
                  See your complete payoff timeline, debt-free date, and exactly how much interest you'll save.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/calculator">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                Try It Now - It's Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50">
              Everything You Need to Get Debt-Free
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Powerful tools to help you take control of your finances
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <Card key={feature.title} className="border-slate-200 dark:border-slate-800">
                <CardHeader>
                  <div className="mb-4 w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="leading-relaxed">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-4 py-16 md:py-24 bg-emerald-50 dark:bg-emerald-950/20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50">
              Why Use Our Debt Calculator?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/calculator">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white text-lg px-8 h-14">
                Start Your Debt-Free Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <Card className="border-2 border-emerald-500 bg-gradient-to-br from-emerald-50 to-slate-50 dark:from-emerald-950/30 dark:to-slate-950">
            <CardContent className="p-8 md:p-12 text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 text-balance">
                Ready to Become Debt-Free?
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-balance leading-relaxed">
                Join thousands of people who have taken control of their finances. Get your free personalized debt
                payoff plan in under 60 seconds.
              </p>
              <div className="pt-4">
                <Link href="/calculator">
                  <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white text-lg px-8 h-14">
                    Calculate Your Payoff Plan
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <p className="text-sm text-slate-500 mt-4">No credit card required • No signup • Completely free</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>


    </>
  )
}
