import CounterStats from "../components/CounterStats";
import Link from "../components/Link";

export default function HomePage({ dragonCount, countSum, countAverage }) {
  return (
    <>
      <CounterStats
        countSum={countSum}
        countAverage={countAverage}
        dragonCount={dragonCount}
      />

      <Link href="/counters">To the counters →</Link>
    </>
  );
}
