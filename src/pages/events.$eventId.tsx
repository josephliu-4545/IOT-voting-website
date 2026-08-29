import {
  createFileRoute,
  Link,
  notFound,
} from "@tanstack/react-router";

import { useState, useEffect } from "react";

import {
  ArrowLeft,
  CalendarDays,
  MapPin,
  Users,
  X,
  BriefcaseBusiness,
} from "lucide-react";

import { getEvent, type Team } from "@/lib/events-data";

/* =========================================================
   ROUTE
   ========================================================= */

export const Route = createFileRoute("/events/$eventId")({
  loader: ({ params }) => {
    const event = getEvent(params.eventId);

    if (!event) {
      throw notFound();
    }

    return { event };
  },

  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          {
            title: "Event unavailable — IoT Voting System",
          },
          {
            name: "robots",
            content: "noindex",
          },
        ],
      };
    }

    const { event } = loaderData;

    const title = `${event.title} — Teams | IoT Voting System`;
    const description = `Meet the ${event.teams.length} teams competing at ${event.title} on ${event.date}.`;

    return {
      meta: [
        {
          title,
        },
        {
          name: "description",
          content: description,
        },
        {
          property: "og:title",
          content: title,
        },
        {
          property: "og:description",
          content: description,
        },
      ],
    };
  },

  component: EventTeams,
});

/* =========================================================
   MEMBER COLORS
   ========================================================= */

const memberTone = [
  "border-blue-200 bg-blue-50 text-blue-700",
  "border-cyan-200 bg-cyan-50 text-cyan-700",
  "border-purple-200 bg-purple-50 text-purple-700",
  "border-amber-200 bg-amber-50 text-amber-700",
  "border-rose-200 bg-rose-50 text-rose-700",
];

/* =========================================================
   MEMBER PROFILE TYPE
   ========================================================= */

type TeamMember = Team["members"][number];

/* =========================================================
   MEMBER PROFILE MODAL
   ========================================================= */

function MemberProfile({
  member,
  onClose,
}: {
  member: TeamMember;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-slate-950/25
        p-4
        backdrop-blur-sm
      "
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`${member.name} profile`}
        className="
          relative
          w-full
          max-w-md
          overflow-hidden
          rounded-2xl

          border
          border-white/80

          bg-white/75
          backdrop-blur-2xl
          backdrop-saturate-150

          p-5

          shadow-[0_25px_80px_rgba(15,23,42,0.20)]

          animate-in
          fade-in
          zoom-in-95
          duration-200
        "
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close profile"
          className="
            absolute
            right-3
            top-3
            grid
            size-8
            place-items-center
            rounded-full

            border
            border-slate-200

            bg-white/70

            text-slate-600

            transition-all
            hover:bg-white
            hover:text-slate-900
            hover:shadow-sm

            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-blue-400
          "
        >
          <X className="size-4" />
        </button>

        {/* Profile Header */}
        <div className="flex flex-col items-center text-center">
          <div
            className="
              grid
              size-20
              place-items-center
              rounded-full

              border-2
              border-white

              bg-gradient-to-br
              from-blue-100
              via-cyan-50
              to-purple-100

              text-xl
              font-bold
              text-blue-700

              shadow-[0_8px_25px_rgba(59,130,246,0.15)]
            "
          >
            {member.name.slice(0, 2).toUpperCase()}
          </div>

          <h2
            className="
              mt-3
              text-xl
              font-bold
              tracking-tight
              text-slate-900
            "
          >
            {member.name}
          </h2>

          <div
            className="
              mt-1.5
              inline-flex
              items-center
              gap-1.5
              rounded-full
              border
              border-blue-200
              bg-blue-50/80
              px-2.5
              py-1
              text-xs
              font-semibold
              text-blue-700
            "
          >
            <BriefcaseBusiness className="size-3.5" />
            {member.role}
          </div>
        </div>

        {/* Profile Details */}
        <div className="mt-5 space-y-2">
          <div
            className="
              rounded-xl
              border
              border-slate-200/80
              bg-white/55
              p-3
            "
          >
            <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">
              TEAM MEMBERS
            </p>
            <p className="mt-0.5 text-xs font-semibold text-slate-900">
              {member.name}
            </p>
          </div>

          <div
            className="
              rounded-xl
              border
              border-slate-200/80
              bg-white/55
              p-3
            "
          >
            <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">
              Role
            </p>
            <p className="mt-0.5 text-xs font-semibold text-slate-900">
              {member.role}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="
            mt-4
            w-full
            rounded-xl
            border
            border-slate-200
            bg-white/70
            px-3
            py-2.5
            text-xs
            font-semibold
            text-slate-800
            transition-all
            hover:bg-white
            hover:shadow-sm
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-blue-400
          "
        >
          Close Profile
        </button>
      </div>
    </div>
  );
}

/* =========================================================
   TEAM ROW (REDUCED HEIGHT CARD)
   ========================================================= */

function TeamRow({
  team,
  index,
  onMemberClick,
}: {
  team: Team;
  index: number;
  onMemberClick: (member: TeamMember) => void;
}) {
  return (
    <article
      className="
        grid
        gap-4
        overflow-hidden
        rounded-2xl

        border
        border-slate-200/80

        bg-white/65
        backdrop-blur-xl
        backdrop-saturate-150

        p-3.5

        shadow-[0_4px_20px_rgba(15,23,42,0.06)]

        transition-all
        duration-300

        hover:border-blue-200
        hover:bg-white/75
        hover:shadow-[0_10px_30px_rgba(15,23,42,0.1)]

        md:grid-cols-[minmax(0,14rem)_minmax(0,1fr)_minmax(0,15rem)]
        md:p-4
      "
    >
      {/* 1. Image */}
      <div className="relative overflow-hidden rounded-xl bg-slate-100">
        <img
          src={team.image}
          alt={`${team.name} prototype`}
          loading="lazy"
          width={1024}
          height={768}
          className="
            h-36
            w-full
            object-cover

            transition-transform
            duration-500

            hover:scale-105

            md:h-full
          "
        />

        <span
          className="
            absolute
            left-2.5
            top-2.5

            rounded-full

            border
            border-white/50

            bg-black/45
            px-2.5
            py-0.5

            text-[11px]
            font-bold
            text-white

            backdrop-blur-md
          "
        >
          #{index + 1}
        </span>
      </div>

      {/* 2. Team Info */}
      <div className="flex min-w-0 flex-col justify-start">
        <h2
          className="
            text-lg
            font-bold
            tracking-tight
            text-slate-900
          "
        >
          {team.name}
        </h2>

        <div className="mt-0.5 flex items-center gap-1.5 text-[11px] text-slate-500">
          <Users
            className="size-3 text-slate-400"
            aria-hidden
          />
          <span>{team.members.length} members</span>
        </div>

        <h3 className="mt-3 text-[10px] font-bold uppercase tracking-wider text-sky-700">
          ABOUT PROJECT
        </h3>

        <p className="mt-1 text-[11px] leading-relaxed text-slate-500">
          {team.about}
        </p>
      </div>

      {/* 3. Team Members */}
      <div>
        <h3
          className="
            text-[10px]
            font-bold
            uppercase
            tracking-wider
            text-slate-700
          "
        >
          TEAM MEMBERS
        </h3>

        <ul className="mt-2 space-y-1.5">
          {team.members.map((member, i) => (
            <li key={member.name}>
              <button
                type="button"
                onClick={() => onMemberClick(member)}
                className="
                  group/member

                  flex
                  w-full
                  items-center
                  gap-2.5

                  rounded-xl

                  border
                  border-slate-200/80

                  bg-white/60

                  px-3
                  py-1.5

                  text-left

                  shadow-[0_2px_8px_rgba(15,23,42,0.03)]

                  backdrop-blur-xl

                  transition-all
                  duration-200

                  hover:-translate-y-0.5
                  hover:border-blue-200
                  hover:bg-white/85
                  hover:shadow-[0_4px_12px_rgba(15,23,42,0.06)]

                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-blue-400
                "
              >
                {/* Avatar Initial */}
                <span
                  className={`
                    grid
                    size-7
                    shrink-0
                    place-items-center
                    rounded-full

                    border

                    text-[10px]
                    font-bold

                    transition-transform
                    duration-200

                    group-hover/member:scale-105

                    ${memberTone[i % memberTone.length]}
                  `}
                >
                  {member.name.slice(0, 2).toUpperCase()}
                </span>

                {/* Name + Role */}
                <span className="min-w-0 flex-1">
                  <span
                    className="
                      block
                      truncate
                      text-xs
                      font-bold
                      text-slate-900

                      transition-colors
                      group-hover/member:text-blue-700
                    "
                  >
                    {member.name}
                  </span>

                  <span
                    className="
                      block
                      truncate
                      text-[10px]
                      font-medium
                      text-slate-600
                    "
                  >
                    {member.role}
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

/* =========================================================
   EVENT PAGE
   ========================================================= */

function EventTeams() {
  const { event } = Route.useLoaderData();

  const [selectedMember, setSelectedMember] =
    useState<TeamMember | null>(null);

  return (
    <main className="min-h-screen bg-transparent text-foreground">
      {/* Event Header */}
      <section className="relative overflow-hidden border-b border-slate-200/70 bg-transparent">
        <div className="relative mx-auto max-w-6xl px-6 py-10">
          <Link
            to="/"
            className="
              inline-flex
              items-center
              gap-2

              rounded-full

              border
              border-slate-200

              bg-white/60

              px-3.5
              py-1.5

              text-xs
              font-semibold
              text-slate-600

              backdrop-blur-xl

              transition-all

              hover:bg-white
              hover:text-slate-900
              hover:shadow-sm

              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-blue-400
            "
          >
            <ArrowLeft className="size-3.5" aria-hidden />
            Back to events
          </Link>

          <h1
            className="
              mt-4
              text-2xl
              font-bold
              tracking-tight
              text-slate-900
              sm:text-3xl
              lg:text-4xl
            "
          >
            {event.title}
          </h1>

          <p className="mt-2 max-w-xl text-xs text-slate-600">
            {event.tagline}
          </p>

          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-600">
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="size-3.5 text-blue-600" aria-hidden />
              {event.date} · {event.time}
            </span>

            <span className="inline-flex items-center gap-1.5">
              <MapPin className="size-3.5 text-blue-600" aria-hidden />
              {event.location}
            </span>

            <span className="inline-flex items-center gap-1.5">
              <Users className="size-3.5 text-blue-600" aria-hidden />
              {event.teams.length} teams competing
            </span>
          </div>
        </div>
      </section>

      {/* Team List */}
      <section className="mx-auto max-w-6xl space-y-4 px-6 py-8">
        {event.teams.map((team, i) => (
          <TeamRow
            key={team.id}
            team={team}
            index={i}
            onMemberClick={setSelectedMember}
          />
        ))}
      </section>

      {/* Profile Modal */}
      {selectedMember && (
        <MemberProfile
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
        />
      )}
    </main>
  );
}