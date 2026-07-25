import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

type GraphQLResponse = {
  data?: {
    hello: string;
    sprintGoal: string;
  };
  errors?: Array<{ message: string }>;
};

const GRAPHQL_URL = import.meta.env.VITE_GRAPHQL_URL ?? "http://localhost:8000/graphql";

function App(): React.JSX.Element {
  const [message, setMessage] = useState("Connecting to Atlas API…");
  const [goal, setGoal] = useState("");

  useEffect(() => {
    async function loadAtlasStatus(): Promise<void> {
      try {
        const response = await fetch(GRAPHQL_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: "{ hello sprintGoal }" }),
        });
        const result = (await response.json()) as GraphQLResponse;

        if (!response.ok || result.errors || !result.data) {
          throw new Error(result.errors?.[0]?.message ?? "GraphQL request failed");
        }

        setMessage(result.data.hello);
        setGoal(result.data.sprintGoal);
      } catch (error) {
        setMessage(error instanceof Error ? error.message : "Unknown error");
      }
    }

    void loadAtlasStatus();
  }, []);

  return (
    <main>
      <p className="eyebrow">ATLAS · v0.1</p>
      <h1>{message}</h1>
      <p className="goal">{goal || "The first sprint is ready to begin."}</p>
      <section>
        <h2>Initial domains</h2>
        <ul>
          <li>People: Glenn, Mei, family, Arepo</li>
          <li>Projects and decisions</li>
          <li>Technologies and learning entries</li>
          <li>Enerlink onboarding knowledge</li>
        </ul>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
