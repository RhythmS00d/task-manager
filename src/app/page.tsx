import { WidgetCard } from "@/components/WidgetCard";

export default function Home() {
  return (
    <section className="flex gap-10 p-4 flex-col md:flex-wrap md:flex-row md:w-[140%]">
      <WidgetCard name="Weather" imageUrl="/weather.png" />
      <WidgetCard name="Task-Manager" imageUrl="/task-manager.png" />
      <WidgetCard name="News" imageUrl="/news.png" />
      <WidgetCard name="Quote-Generator" imageUrl="/quote.png" />
    </section>
  );
}
