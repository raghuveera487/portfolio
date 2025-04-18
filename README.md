# portfolio
Personal portfolio website built with React
import React from "react";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 p-6">
      <section className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-2">👋 Hi, I'm Raghuveera</h1>
        <p className="text-lg text-gray-600 mb-4">
          🎓 Computer Science Student | 💻 Aspiring Software Engineer | ☕ Java & Python Enthusiast
        </p>
      </section>

      <section className="max-w-4xl mx-auto mt-10">
        <h2 className="text-2xl font-semibold mb-4">🧠 About Me</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>🔭 Learning full-stack development</li>
          <li>🌱 Exploring DSA and clean code principles</li>
          <li>👯 Open to collaborating on open-source Java or Python projects</li>
          <li>🧩 Love logic puzzles and coding games like 2048</li>
        </ul>
      </section>

      <section className="max-w-4xl mx-auto mt-10">
        <h2 className="text-2xl font-semibold mb-4">📌 Projects</h2>
        <ul className="space-y-4">
          <li>
            <strong>🎮 2048 Game (Python)</strong><br />
            A terminal version of the classic game with logic-based tile movement.
          </li>
          <li>
            <strong>🏦 Banking System (Java)</strong><br />
            A simulation of basic banking operations and account management.
          </li>
          <li>
            <strong>⏰ GUI Alarm App (Python)</strong><br />
            A simple alarm clock app with GUI using Tkinter.
          </li>
          <li>
            <strong>📋 Attendance System (Java)</strong><br />
            Console-based tracker for managing student records.
          </li>
        </ul>
      </section>

      <section className="max-w-4xl mx-auto mt-10">
        <h2 className="text-2xl font-semibold mb-4">💻 Skills & Tools</h2>
        <div className="flex flex-wrap gap-4">
          <span className="bg-gray-200 rounded-xl px-4 py-1">Java</span>
          <span className="bg-gray-200 rounded-xl px-4 py-1">Python</span>
          <span className="bg-gray-200 rounded-xl px-4 py-1">C</span>
          <span className="bg-gray-200 rounded-xl px-4 py-1">HTML</span>
          <span className="bg-gray-200 rounded-xl px-4 py-1">CSS</span>
          <span className="bg-gray-200 rounded-xl px-4 py-1">JavaScript</span>
          <span className="bg-gray-200 rounded-xl px-4 py-1">Git</span>
          <span className="bg-gray-200 rounded-xl px-4 py-1">GitHub</span>
          <span className="bg-gray-200 rounded-xl px-4 py-1">VS Code</span>
          <span className="bg-gray-200 rounded-xl px-4 py-1">Eclipse</span>
        </div>
      </section>

      <section className="max-w-4xl mx-auto mt-10 mb-20">
        <h2 className="text-2xl font-semibold mb-4">📫 Let's Connect</h2>
        <p>
          <a
            href="https://www.linkedin.com/in/boya-raghuveera/"
            className="text-blue-600 hover:underline"
            target="_blank"
          >
            LinkedIn
          </a>{" "}
          | <a href="mailto:raghuveeraboya3@gmail.com" className="text-blue-600 hover:underline">Email Me</a>
        </p>
      </section>
    </main>
  );
}
