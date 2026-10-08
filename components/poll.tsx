'use client'

import { useState } from 'react'
import { ShieldCheck, Star, SmilePlus, MessageSquare, Bookmark, Plus } from 'lucide-react'

export type PollOption = {
  label: string
  pct: number
}

// Real young Gen Z headshots used for the voter avatars.
const avatarPhotos = [
  '/avatars/person-1.png',
  '/avatars/person-2.png',
  '/avatars/person-3.png',
  '/avatars/person-4.png',
  '/avatars/person-5.png',
  '/avatars/person-6.png',
  '/avatars/person-7.png',
  '/avatars/person-8.png',
]

// Deterministic pick so avatars look random but stay stable across renders.
function avatarPhoto(optionIndex: number, avatarIndex: number) {
  const seed = optionIndex * 7 + avatarIndex * 3 + 5
  return avatarPhotos[(seed * 31) % avatarPhotos.length]
}

// Fake voter initials (no faces/photos) used for the voter avatars.
const initialsPool = [
  'A.R.', 'J.K.', 'M.T.', 'S.P.', 'D.L.', 'K.N.', 'R.C.', 'E.V.',
  'T.H.', 'B.W.', 'L.G.', 'N.F.',
]
const initialsColors = ['#8A2338', '#1F7D6B', '#3E7B88', '#C97A2F', '#5B6B9C', '#A14A8A']

function avatarInitials(optionIndex: number, avatarIndex: number) {
  const seed = optionIndex * 7 + avatarIndex * 3 + 5
  return initialsPool[(seed * 31) % initialsPool.length]
}
function avatarColor(optionIndex: number, avatarIndex: number) {
  const seed = optionIndex * 5 + avatarIndex * 11 + 2
  return initialsColors[(seed * 17) % initialsColors.length]
}

export function Poll({
  question,
  options,
  moduleLabel,
  avatarStyle = 'photos',
}: {
  question: string
  options: PollOption[]
  moduleLabel: string
  avatarStyle?: 'photos' | 'initials'
}) {
  const [voted, setVoted] = useState<number | null>(null)
  const hasVoted = voted !== null

  return (
    <section className="bg-[#3E7B88] px-5 pb-6 pt-5 text-white">
      {/* Author header */}
      <div className="flex items-center gap-2.5">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-maroon">
          <img
            src="/figma/pinecone-icon.svg"
            alt=""
            className="h-6 w-auto"
            aria-hidden="true"
          />
        </span>
        <div className="min-w-0">
          <div className="flex items-center gap-1">
            <span className="text-[16px] font-bold leading-tight">
              Pinecone by Stanford
            </span>
            <ShieldCheck className="h-4 w-4 fill-[#5b7cc4] text-white" />
            <Star className="h-4 w-4 fill-[#f2c14e] text-[#f2c14e]" />
            <span className="h-2 w-2 rounded-full bg-[#57d67d]" />
          </div>
          <p className="text-[13px] text-white/70">Posted 4mos ago</p>
        </div>
      </div>

      {/* Question */}
      <p className="mt-4 text-center text-[12px] font-medium uppercase tracking-wide text-white/85">
        Responses are public
      </p>
      <h2 className="mt-1 text-center text-[19px] font-bold leading-snug text-balance">
        {question}
      </h2>

      {/* Options */}
      <div className="mt-4 flex flex-col gap-2">
        {options.map((opt, i) => {
          const selected = voted === i
          return (
            <button
              key={opt.label}
              type="button"
              disabled={hasVoted}
              onClick={() => setVoted(i)}
              aria-pressed={selected}
              className={`relative min-h-[52px] w-full overflow-hidden rounded-xl bg-[#173a44]/55 px-4 py-3 text-left transition active:scale-[0.99] ${
                selected ? 'ring-2 ring-white' : 'ring-1 ring-white/10'
              } ${hasVoted ? 'cursor-default' : 'cursor-pointer'}`}
            >
              {/* Result fill bar */}
              {hasVoted && (
                <span
                  aria-hidden="true"
                  className="absolute inset-y-0 left-0 bg-[#5f9aa6] transition-[width] duration-700 ease-out"
                  style={{ width: `${opt.pct}%` }}
                />
              )}
              <span className="relative flex items-start justify-between gap-3">
                <span className="flex min-h-[28px] items-center text-[14px] font-medium leading-snug text-pretty">
                  {opt.label}
                </span>
                {hasVoted && opt.pct > 0 && (
                  <span className="flex shrink-0 flex-col items-end gap-1">
                    <span className="text-[13px] font-bold tabular-nums">
                      {opt.pct}%
                    </span>
                    <span className="flex -space-x-2">
                      {Array.from({
                        length: Math.max(1, Math.round(opt.pct / 20)),
                      }).map((_, a) =>
                        avatarStyle === 'initials' ? (
                          <span
                            key={a}
                            aria-hidden="true"
                            className="flex h-5 w-5 items-center justify-center rounded-full text-[7px] font-bold text-white ring-2 ring-[#3E7B88]"
                            style={{ backgroundColor: avatarColor(i, a) }}
                          >
                            {avatarInitials(i, a).replace(/\./g, '')}
                          </span>
                        ) : (
                          <img
                            key={a}
                            src={avatarPhoto(i, a) || '/placeholder.svg'}
                            alt=""
                            aria-hidden="true"
                            className="h-5 w-5 rounded-full object-cover ring-2 ring-[#3E7B88]"
                          />
                        )
                      )}
                    </span>
                  </span>
                )}
              </span>
            </button>
          )
        })}
      </div>

      {/* Module label */}
      <p className="mt-4 text-[13px] text-white/80">{moduleLabel}</p>

      {/* Reactions row */}
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#1a1a1a]">
            <SmilePlus className="h-5 w-5" strokeWidth={2} />
          </span>
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#1a1a1a]">
            <MessageSquare className="h-5 w-5" strokeWidth={2} />
          </span>
        </div>
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#1a1a1a]">
          <Bookmark className="h-5 w-5" strokeWidth={2} />
        </span>
      </div>

      {/* Comment bar */}
      <div className="mt-4 flex items-center gap-2.5 rounded-full bg-white/25 px-3.5 py-2.5">
        <Plus className="h-5 w-5 shrink-0 text-white" strokeWidth={2.5} />
        <span className="text-[14px] text-white/70">Write a comment&hellip;</span>
      </div>
    </section>
  )
}
