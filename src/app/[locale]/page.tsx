import HomePage from "@/components/Pages/Home/HomePage";
import ScrollProgressBar from "@/components/UI/ScrollBar/ScrollProgressBar";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return (
    <main>
      <ScrollProgressBar />
      <HomePage />
    </main>
  );
}
