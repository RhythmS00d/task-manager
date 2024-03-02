import { WidgetCard } from "@/components/WidgetCard";

export default function Home() {
  return (
    <section className="flex gap-10 p-4">
      <WidgetCard name="Weather" />
      <WidgetCard name="Task Manager" />
      <WidgetCard name="News" />
    </section>
  );
}
