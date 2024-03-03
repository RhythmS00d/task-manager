import { WidgetCard } from "@/components/WidgetCard";

export default function Home() {
  return (
    <section className="flex gap-10 p-4">
      <WidgetCard name="Weather" imageUrl="/weather.png"/>
      <WidgetCard name="Task-Manager" imageUrl="/task-manager.png"/>
      <WidgetCard name="News" imageUrl="/news.png"/>
    </section>
  );
}
