'use client'

import Link from 'next/link'
import { MoreVertical, X } from 'lucide-react'
import { StatusBar } from './status-bar'

function InstructorBlock() {
  return (
    <div className="mt-6 flex items-center gap-3">
      <span className="flex h-[46px] w-[46px] shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#8A2338]">
        <img src="/figma/pinecone-icon.svg" alt="Pinecone by Stanford" className="h-[22px] w-auto" />
      </span>
      <div className="min-w-0">
        <p className="text-[17px] font-bold leading-tight text-[#1a1a1a]">Pinecone by Stanford</p>
      </div>
    </div>
  )
}

export function CreditScoresLesson() {
  return (
    <div className="flex min-h-full flex-col bg-white">
      <StatusBar variant="dark" />
      <header className="flex items-center justify-between px-5 pb-1 pt-1">
        <Link
          href="/module/3"
          aria-label="Close lesson"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#1a1a1a] shadow-[0_1px_6px_rgba(0,0,0,0.12)]"
        >
          <X className="h-6 w-6" strokeWidth={2.5} />
        </Link>
        <button
          type="button"
          aria-label="More options"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#1a1a1a] shadow-[0_1px_6px_rgba(0,0,0,0.12)]"
        >
          <MoreVertical className="h-6 w-6" strokeWidth={2.5} />
        </button>
      </header>

      <article className="px-6 pt-4 pb-10 text-[#293141]">
        <h1 className="text-[24px] font-extrabold leading-[1.2] text-balance">
          Credit Scores: Your Financial Reputation
        </h1>
        <InstructorBlock />

        <img
          src="/quote-credit-score.png"
          alt="A credit score is a three-digit number that summarizes how likely you are to repay borrowed money on time."
          className="mt-7 w-full rounded-2xl"
        />

        <p className="mt-6 text-[17px] leading-relaxed">
          Lenders&mdash;like banks, credit card companies, auto lenders, and mortgage lenders&mdash;use your credit
          score to decide:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-[17px] leading-relaxed marker:text-[#293141]">
          <li>Whether to approve you for credit</li>
          <li>How much credit to offer</li>
          <li>What interest rate to charge</li>
        </ul>

        <p className="mt-5 text-[17px] leading-relaxed">
          Just like a GPA makes it easier for schools or employers to compare students, a credit score makes it
          easier for lenders to compare borrowers.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed">
          A higher score generally signals a higher likelihood of paying back money on time&mdash;meaning lower
          risk for lenders and better offers (and lower costs) for you.
        </p>

        <h2 className="mt-8 text-[21px] font-extrabold">Credit Score Ranges</h2>
        <p className="mt-3 text-[17px] leading-relaxed">
          Credit scores are normally grouped into ranges, such as <em>poor, fair, good, very good,</em> and{' '}
          <em>exceptional</em>.
        </p>
        <p className="mt-3 text-[17px] leading-relaxed">Here&rsquo;s an example:</p>

        <img
          src="/table-fico-ranges.png"
          alt="FICO Credit Score Ranges: 300-579 Poor, 580-669 Fair, 670-739 Good, 740-799 Very Good, 800-850 Exceptional"
          className="mt-5 w-full rounded-2xl"
        />

        <p className="mt-6 text-[17px] leading-relaxed">
          Your credit score is basically your <strong>financial reputation</strong> in number form. In general,
          the higher it is, the more doors open and the less you pay to borrow.
        </p>

        <img
          src="/credit-score-financial-reputation.png"
          alt="Illustration: a person checking a credit score app on their phone, reading Very Good, 750"
          className="mt-6 w-full rounded-2xl"
        />
      </article>

      <footer className="border-t border-[#eee] px-6 pb-6 pt-4">
        <div className="flex items-center gap-3">
          <Link
            href="/module/3"
            className="flex flex-1 items-center justify-center rounded-full border border-[#d9d9d9] py-3.5 text-[16px] font-bold text-[#1a1a1a] transition active:scale-[0.98]"
          >
            Back
          </Link>
          <Link
            href="/lesson/benefits"
            className="flex flex-1 items-center justify-center rounded-full bg-[#3E7B88] py-3.5 text-[16px] font-bold text-white transition active:scale-[0.98]"
          >
            Next
          </Link>
        </div>
        <div className="mt-4 flex justify-center">
          <div className="h-[5px] w-32 rounded-full bg-black/80" />
        </div>
      </footer>
    </div>
  )
}
