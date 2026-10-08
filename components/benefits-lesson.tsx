'use client'

import { useState } from 'react'
import Link from 'next/link'
import { MoreVertical, X, ArrowLeft } from 'lucide-react'
import { StatusBar } from './status-bar'
import { Poll } from './poll'

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

function TakePollButton({ onOpen }: { onOpen: () => void }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label="Take a poll"
      className="mt-8 w-full rounded-full bg-gradient-to-br from-[#2f7f8f] to-[#0c4855] px-6 py-4 text-center text-[19px] font-extrabold text-white shadow-[0_4px_0_#0a3942,0_10px_18px_rgba(10,57,66,0.3)] transition active:translate-y-[2px] active:shadow-[0_2px_0_#0a3942,0_6px_12px_rgba(10,57,66,0.3)]"
    >
      Take a poll
    </button>
  )
}

export function BenefitsLesson() {
  const [showPoll, setShowPoll] = useState(false)

  if (showPoll) {
    return (
      <div className="flex min-h-full flex-col bg-[#3E7B88]">
        <StatusBar variant="light" />
        <div className="flex items-center justify-between px-5 pb-2 pt-1">
          <button
            type="button"
            onClick={() => setShowPoll(false)}
            aria-label="Back to lesson"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#bfe1e8] text-[#0f3d47] transition active:scale-95"
          >
            <ArrowLeft className="h-6 w-6" strokeWidth={2.5} />
          </button>
          <button
            type="button"
            aria-label="More options"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#bfe1e8] text-[#0f3d47] transition active:scale-95"
          >
            <MoreVertical className="h-6 w-6" strokeWidth={2.5} />
          </button>
        </div>

        <Poll
          question="Which benefit of a higher credit score motivates you the most right now?"
          moduleLabel="3. Saving and Borrowing Decisions"
          avatarStyle="initials"
          options={[
            { label: 'Getting approved more easily', pct: 18 },
            { label: 'Paying lower interest rates', pct: 24 },
            { label: 'Saving more money over time', pct: 40 },
            { label: 'Having more flexibility and less stress', pct: 16 },
            { label: "I'm not sure yet", pct: 2 },
          ]}
        />

        <div className="mt-4 flex justify-center pb-4">
          <div className="h-[5px] w-32 rounded-full bg-white/80" />
        </div>
      </div>
    )
  }

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
          The Benefits of a High Credit Score
        </h1>
        <InstructorBlock />

        <p className="mt-7 text-[17px] leading-relaxed">
          A high credit score can make a big difference in your personal finances. A stronger score can help you:
        </p>
        <ul className="mt-3 list-none space-y-3 text-[17px] leading-relaxed">
          <li>
            <strong>Get approved more easily.</strong> You may not need to apply to as many lenders, which also
            means fewer hard inquiries on your credit report.
          </li>
          <li>
            <strong>Qualify for lower interest rates.</strong> Lenders see you as lower risk, so they charge you
            less to borrow.
          </li>
          <li>
            <strong>Save a lot of money over time.</strong> Even a small difference in interest rates can add up
            to thousands&mdash;or tens of thousands&mdash;of dollars over the years.
          </li>
        </ul>

        <h2 className="mt-8 text-[21px] font-extrabold">Sam&rsquo;s $20,000 Car Loan</h2>
        <p className="mt-3 text-[17px] leading-relaxed">Remember Sam from the Auto Loan Simulator?</p>
        <p className="mt-4 text-[17px] leading-relaxed">
          Now imagine Sam takes out a <strong>$20,000 car loan</strong>, and his interest rate depends on his
          credit score:
        </p>

        <img
          src="/table-car-loan.jpg"
          alt="Sam's $20,000 Car Loan: Fair 10.0% APR $425/mo $25,500 total, Good 6.8% APR $394/mo $23,640 total, Very Good 5.3% APR $380/mo $22,800 total"
          className="mt-5 w-full rounded-2xl"
        />

        <p className="mt-6 text-[17px] leading-relaxed">
          <strong>Sam saves $45 per month</strong> with a very good credit score compared to a fair one. Over{' '}
          <strong>5 years (60 payments)</strong>, that adds up to <strong>about $2,700 saved</strong> on the exact
          same car&mdash;money that stays with Sam instead of going to interest.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed">Same car. Same 5-year term. Just a stronger credit score.</p>

        <img
          src="/credit-score-sam-car.png"
          alt="Illustration: Sam holding his new car keys and paperwork outside the dealership, with a thought bubble reading Saved $45/month and a note showing 5-year savings of $2,700"
          className="mt-6 w-full rounded-2xl"
        />

        <h2 className="mt-8 text-[21px] font-extrabold">What this means for your wallet</h2>
        <p className="mt-3 text-[17px] leading-relaxed">
          Your credit score quietly shapes many big financial moments&mdash;renting an apartment, buying a car,
          getting good terms on a mortgage, and sometimes even passing certain background checks. Treat it as an
          asset and make it a goal to keep your score as strong as possible.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed">
          Before you move on, take a second to notice what actually motivates you here. For you personally,
          what&rsquo;s the biggest reason to care about having a higher credit score?
        </p>

        <TakePollButton onOpen={() => setShowPoll(true)} />
      </article>

      <footer className="border-t border-[#eee] px-6 pb-6 pt-4">
        <div className="flex items-center gap-3">
          <Link
            href="/lesson/credit-scores"
            className="flex flex-1 items-center justify-center rounded-full border border-[#d9d9d9] py-3.5 text-[16px] font-bold text-[#1a1a1a] transition active:scale-[0.98]"
          >
            Back
          </Link>
          <Link
            href="/module/3"
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
