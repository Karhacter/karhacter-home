import PageTransition from "@/components/PageTransition";

export default function Home() {
  return (
    <main>
      <PageTransition delay={0.2}>
        <h1 className="text-xl ms-4">HomePage</h1>
      </PageTransition>
    </main>
  );
}
