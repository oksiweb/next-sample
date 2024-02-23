import course from "./course.json";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ul>
        {course.lessons.map((lesson) => (
          <li key={lesson.name}>{lesson.title}</li>
        ))}
      </ul>
    </main>
  );
}
