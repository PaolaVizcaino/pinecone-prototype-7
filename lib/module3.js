// Module 3 "Saving and Borrowing Decisions" as it appears in the Pinecone app
// (Mighty Networks). Lesson 3 is open; only one part is clickable in this
// prototype: "Credit Scores: Your Financial Reputation".
// Content transcribed from the live Mighty lesson post.

export const module3 = {
  slug: "saving-borrowing",
  number: 3,
  title: "Saving and Borrowing Decisions",
  subtitle: "Make the most of your money",
  lessons: [
    {
      title: "Lesson 1: Saving and the Life-Cycle Model",
      collapsed: true,
      parts: [
        { title: "The Life-Cycle Model: Planning for Stability Over Time", type: "read" },
        { title: "Save for Retirement", type: "read" },
        { title: "Life Is Uncertain: Save for the Unexpected", type: "read" },
        { title: "Sam’s Smooth Money Experiment", type: "video" },
        { title: "Lesson 1 Checkpoint", type: "quiz" },
        { title: "Time to Ask Pinecone", type: "read" },
        { title: "Where to Next?", type: "read" },
      ],
    },
    {
      title: "Lesson 2: Managing Credit",
      collapsed: true,
      parts: [
        { title: "Why People Borrow (and When It Makes Sense)", type: "read" },
        { title: "What Is Credit and How Does It Work?", type: "read" },
        { title: "Credit Cards: Convenient but Costly", type: "read" },
        { title: "Smarter Credit Card Habits", type: "read" },
        { title: "Podcast: The Minimum Payment Trap", type: "read" },
        { title: "Escaping the Credit Jungle: Paying Down Credit Card Debt", type: "read" },
        { title: "Auto Loans and Installment Borrowing", type: "read" },
        { title: "Sam’s Test Drive Simulator: The Auto Loan Edition", type: "video" },
        { title: "Lesson 2 Checkpoint", type: "quiz" },
        { title: "Time to Ask Pinecone", type: "read" },
        { title: "Where to Next?", type: "read" },
      ],
    },
    {
      title: "Lesson 3: Maximizing Your Credit Score",
      parts: [
        { title: "Credit Scores: Your Financial Reputation", type: "read", slug: "credit-scores" },
        { title: "What Goes Into Your Credit Score?", type: "read" },
        { title: "Jasmine & Sophia’s Credit Score Glow-Up", type: "video" },
        { title: "The Benefits of a High Credit Score", type: "read" },
        { title: "Habits That Build (and Hurt) Your Credit Score", type: "read" },
        { title: "Lesson 3 Checkpoint", type: "quiz" },
        { title: "Time to Ask Pinecone", type: "read" },
        { title: "Where to Next?", type: "read" },
      ],
    },
    {
      title: "Lesson 4: Housing and Mortgages",
      collapsed: true,
      parts: [
        { title: "Housing Matters", type: "read" },
        { title: "What Is a Mortgage and How Does It Work?", type: "read" },
        { title: "How Interest Rates and Credit Scores Affect the Cost of a Mortgage", type: "read" },
        { title: "Sam’s Home-Buying Scenario", type: "video" },
        { title: "Lesson 4 Checkpoint", type: "quiz" },
        { title: "Time to Ask Pinecone", type: "read" },
        { title: "Where to Next?", type: "read" },
      ],
    },
  ],
};

export const creditScoresPart = {
  slug: "credit-scores",
  lesson: "Lesson 3: Maximizing Your Credit Score",
  title: "Credit Scores: Your Financial Reputation",
  host: "Pinecone by Stanford",
  prev: { title: "Lesson 3: Maximizing Your Credit Score" },
  next: null,
  blocks: [
    { type: "image", src: "/quote-credit-score.png", alt: "A credit score is a three-digit number that summarizes how likely you are to repay borrowed money on time.", fit: "card" },
    { type: "p", html: "Lenders—like banks, credit card companies, auto lenders, and mortgage lenders—use your credit score to decide:" },
    { type: "ul", items: [
      ["", "Whether to approve you for credit"],
      ["", "How much credit to offer"],
      ["", "What interest rate to charge"],
    ] },
    { type: "p", html: "Just like a GPA makes it easier for schools or employers to compare students, a credit score makes it easier for lenders to compare borrowers." },
    { type: "p", html: "A higher score generally signals a higher likelihood of paying back money on time—meaning lower risk for lenders and better offers (and lower costs) for you." },
    { type: "h2", text: "Credit Score Ranges" },
    { type: "p", html: "Credit scores are normally grouped into ranges, such as <em>poor, fair, good, very good,</em> and <em>exceptional</em>." },
    { type: "p", html: "Here’s an example:" },
    { type: "image", src: "/table-fico-ranges.png", alt: "FICO Credit Score Ranges: 300-579 Poor, 580-669 Fair, 670-739 Good, 740-799 Very Good, 800-850 Exceptional", fit: "card" },
    { type: "p", html: "Your credit score is basically your <strong>financial reputation</strong> in number form. In general, the higher it is, the more doors open and the less you pay to borrow." },
    { type: "image", src: "/credit-score-financial-reputation.jpg", alt: "Illustration: a person checking a credit score app on their phone, reading Very Good, 745", fit: "photo" },
  ],
};
