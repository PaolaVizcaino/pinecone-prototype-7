import MightyPost from "../../../../components/MightyPost";
import { module3, creditScoresPart } from "../../../../lib/module3";

export const metadata = { title: "Credit Scores: Your Financial Reputation | 3. Saving and Borrowing Decisions" };

export default function CreditScoresPage() {
  return <MightyPost mod={module3} part={creditScoresPart} icon="bars" closeHref="/app/saving-borrowing" />;
}
