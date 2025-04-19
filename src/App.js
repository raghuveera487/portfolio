import React from "react";
import "./index.css";

function App() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-4">👋 Hi, I'm Raghuveera!</h1>
        <p className="text-center text-lg mb-6">
          🎓 Computer Science Student | 💻 Aspiring Software Engineer | ☕ Java & Python Enthusiast
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold">🧠 About Me</h2>
          <ul className="list-disc list-inside">
            <li>🔭 Currently learning full-stack development</li>
            <li>🌱 Exploring data structures, algorithms, and clean code</li>
            <li>👯 Looking to collaborate on Java or Python projects</li>
            <li>🧩 Fun fact: I love logic puzzles and games like 2048</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold">💻 Technologies I Work With</h2>
          <p>Java, Python, C, HTML, CSS, JavaScript (learning React), Git, GitHub, VS Code, Eclipse</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold">📌 Projects</h2>
          <ul className="list-disc list-inside">
            <li>🎮 2048 Game using Python</li>
            <li>🏦 Banking System in Java</li>
            <li>⏰ GUI Alarm App</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">📫 Let's Connect</h2>
          <a
            href="https://www.linkedin.com/in/boya-raghuveera/"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn Profile
          </a>
        </section>
      </div>
    </main>
  );
}

export default App;
