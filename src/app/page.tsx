"use client";
import WalletBar from "@/components/WalletBar";
import Balance from "@/components/Balance";
import Approve from "@/components/Approve";
import Mint from "@/components/Mint";
import Spawn from "@/components/Spawn";
import Bets from "@/components/Bets";
import SetWinner from "@/components/SetWinner";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-12">
      <WalletBar />
      <Balance />
      <Spawn />
      <Mint />
      <Approve />
      <Bets />
      <SetWinner />

       
    </main>
  );
}
