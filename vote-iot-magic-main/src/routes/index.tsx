import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import axios from "axios"; // 1. Axios ကို Import လုပ်ပါ
import logo from "@/assets/gusto-logo.png";
import hero from "@/assets/hero.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Let's Vote — Gusto College IoT Project Voting" },
      {
        name: "description",
        content:
          "Vote for the best IoT student projects at Gusto College across Innovation, Design, Functionality and Impact.",
      },
      { property: "og:title", content: "Let's Vote — Gusto College IoT Project Voting" },
      {
        property: "og:description",
        content:
          "Choose one group per category: Innovation, Design, Functionality and Impact.",
      },
    ],
  }),
  component: VotePage,
});

type Group = { id: string; name: string; team: string };

type Category = { id: string; icon: string; title: string; question: string };

const categories: Category[] = [
  { id: "innovation", icon: "💡", title: "Innovation", question: "Which group has the most innovative idea?" },
  { id: "design", icon: "🎨", title: "Design", question: "Which Project has the best design?" },
  { id: "functionality", icon: "⚙️", title: "Functionality", question: "Which project works most effectively?" },
  { id: "impact", icon: "🌍", title: "Impact", question: "Which project could have the greatest impact?" },
];

const groupsByCategory: Record<string, Group[]> = {
  innovation: [
    { id: "inn-1", name: "Group-1", team: "AI Smart City Team" },
    { id: "inn-2", name: "Group-2", team: "Autonomous Drone Team" },
    { id: "inn-3", name: "Group-3", team: "Green Energy Grid" },
    { id: "inn-4", name: "Group-4", team: "AR Medical Assistant" },
    { id: "inn-5", name: "Group-5", team: "Eco Plastic Recycler" },
  ],
  design: [
    { id: "des-1", name: "Group-1", team: "UI/UX Redesign Team" },
    { id: "des-2", name: "Group-2", team: "3D Product Modeling" },
    { id: "des-3", name: "Group-3", team: "Minimalist Brand Kit" },
    { id: "des-4", name: "Group-4", team: "Interactive Dashboard" },
    { id: "des-5", name: "Group-5", team: "Creative Motion Design" },
  ],
  functionality: [
    { id: "func-1", name: "Group-1", team: "Smart Home Automation" },
    { id: "func-2", name: "Group-2", team: "High-Speed DBMS" },
    { id: "func-3", name: "Group-3", team: "Real-time Chat Engine" },
    { id: "func-4", name: "Group-4", team: "E-Commerce Gateway" },
    { id: "func-5", name: "Group-5", team: "Automated Testing Bot" },
  ],
  impact: [
    { id: "imp-1", name: "Group-1", team: "Clean Water Filter Tech" },
    { id: "imp-2", name: "Group-2", team: "Disaster Alert System" },
    { id: "imp-3", name: "Group-3", team: "Solar Grid Optimizer" },
    { id: "imp-4", name: "Group-4", team: "EduTech for Rural Areas" },
    { id: "imp-5", name: "Group-5", team: "Waste Management Network" },
  ],
};

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`h-5 w-5 text-primary transition-transform duration-300 ${open ? "rotate-180" : ""}`}
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function VotePage() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [selections, setSelections] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // 2. Submitting Loading State

  const allAnswered = categories.every((c) => selections[c.id]);

  // 3. Backend သို့ API Post Request ပို့ပေးမည့် Function
  const handleVoteSubmit = async () => {
    if (!allAnswered || isSubmitting) return;

    setIsSubmitting(true);
    try {
      // သင့် Backend Port (ဥပမာ 5000) နှင့် Route ထဲသို့ selections data လှမ်းပို့မည်
      const response = await axios.post("http://localhost:5000/api/vote", {
        votes: selections,
      });

      if (response.status === 200 || response.status === 201) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error("Failed to submit vote:", error);
      alert(" Failed to submit vote. Please make sure the backend server is running.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background pb-16">
      <header className="w-full max-w-md md:max-w-2xl lg:max-w-5xl xl:max-w-7xl mx-auto px-6 pt-5">
        <img src={logo} alt="Gusto College" className="h-8 w-auto" />
      </header>

      <main className="w-full max-w-md md:max-w-2xl lg:max-w-5xl xl:max-w-7xl mx-auto px-6">
        <div className="flex justify-start">
          <button
            type="button"
            onClick={() => window.history.back()}
            aria-label="Go back"
            className="mt-4 -ml-2 inline-flex h-9 w-9 items-center justify-center rounded-full text-foreground transition-colors hover:bg-secondary"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
              <path d="M19 12H5" />
              <path d="m12 19-7-7 7-7" />
            </svg>
          </button>
        </div>

        <h1 className="mt-2 text-center text-3xl font-bold tracking-tight text-foreground">
          Let&apos;s Vote
        </h1>
        <p className="mt-1 text-center text-sm text-muted-foreground">
          Choose one group for each category
        </p>

        <img
          src={hero}
          alt="Student IoT robot project on display"
          loading="lazy"
          className="mt-6 aspect-[16/10] w-full rounded-2xl object-cover shadow-[var(--shadow-card)]"
        />

        <div className="mt-8 space-y-4">
          {categories.map((category) => {
            const open = openId === category.id;
            const chosen = selections[category.id];
            const categoryGroups = groupsByCategory[category.id] || [];
            const selectedGroup = categoryGroups.find((g) => g.id === chosen);

            return (
              <section
                key={category.id}
                className="overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]"
              >
                <button
                  type="button"
                  aria-expanded={open}
                  onClick={() => setOpenId(open ? null : category.id)}
                  className="flex w-full items-center gap-3 px-4 py-4 text-left"
                >
                  <div className="min-w-0 flex-1">
                    <h2 className="flex items-center gap-2 text-base font-semibold text-foreground">
                      <span aria-hidden="true">{category.icon}</span>
                      {category.title}
                    </h2>
                    <p className="mt-1 text-xs text-muted-foreground">{category.question}</p>
                    {chosen && !open && (
                      <p className="mt-1 text-xs font-medium text-primary">
                        Selected: {selectedGroup?.name} ({selectedGroup?.team})
                      </p>
                    )}
                  </div>
                  <ChevronIcon open={open} />
                </button>

                <div
                  className={`grid transition-all duration-300 ease-out ${
                    open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="space-y-3 px-4 pb-4">
                      {categoryGroups.map((group) => {
                        const active = chosen === group.id;
                        return (
                          <label
                            key={group.id}
                            className={`flex cursor-pointer items-center justify-between rounded-xl border px-4 py-3 transition-colors ${
                              active
                                ? "border-primary bg-accent/40"
                                : "border-border hover:border-primary/40"
                            }`}
                          >
                            <span className="min-w-0">
                              <span className="block text-sm font-bold text-foreground">
                                {group.name}
                              </span>
                              <span className="block text-sm text-muted-foreground">
                                {group.team}
                              </span>
                            </span>
                            <input
                              type="radio"
                              name={category.id}
                              value={group.id}
                              checked={active}
                              onChange={() =>
                                setSelections((prev) => ({ ...prev, [category.id]: group.id }))
                              }
                              className="h-4 w-4 shrink-0 appearance-none rounded-full border border-input checked:border-[5px] checked:border-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                            />
                          </label>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        {/* 4. Vote Button တွင် API Handler ချိတ်ဆက်ခြင်း */}
        <button
          type="button"
          disabled={!allAnswered || isSubmitting}
          onClick={handleVoteSubmit}
          className="mt-8 w-full rounded-xl bg-primary py-3.5 text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {isSubmitting ? "Submitting..." : "Vote"}
        </button>

        {submitted && (
          <p className="mt-4 text-center text-sm font-medium text-primary">
            Thanks! Your vote has been recorded.
          </p>
        )}
      </main>
    </div>
  );
}