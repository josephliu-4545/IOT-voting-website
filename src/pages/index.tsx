import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CalendarDays,
  Clock,
  MapPin,
  Users,
  ArrowRight,
  ShieldCheck,
  QrCode,
  Zap,
} from "lucide-react";

import heroImage from "@/assets/hero-vote.png";
import { events, type VotingEvent } from "@/lib/events-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "IoT Voting System — Secure QR Voting for IoT Events",
      },
      {
        name: "description",
        content:
          "Browse upcoming and active IoT showcase events, explore competing teams and cast a verified vote with QR code authentication.",
      },
      {
        property: "og:title",
        content: "IoT Voting System — Secure QR Voting for IoT Events",
      },
      {
        property: "og:description",
        content:
          "Upcoming and active IoT competitions with transparent, QR-verified voting.",
      },
    ],
  }),

  component: Home,
});

/* =========================================================
   EVENT CARD
   ========================================================= */

function EventCard({ event }: { event: VotingEvent }) {
  return (
    <Link
      to="/events/$eventId"
      params={{ eventId: event.id }}
      className="
        group
        relative
        flex
        flex-col
        overflow-hidden
        rounded-3xl

        border
        border-slate-200/80

        bg-white/65
        backdrop-blur-xl
        backdrop-saturate-150

        shadow-[0_8px_30px_rgba(15,23,42,0.08)]

        transition-all
        duration-300

        hover:-translate-y-1.5
        hover:border-blue-200
        hover:bg-white/80
        hover:shadow-[0_18px_45px_rgba(15,23,42,0.12)]

        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-blue-400
      "
    >
      {/* Event Image */}
      <div className="relative m-1 aspect-16/10 overflow-hidden rounded-[1.35rem]">
        <img
          src={event.image}
          alt={event.title}
          loading="lazy"
          width={1024}
          height={640}
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />

        {/* Image overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

        {/* Status */}
        <span
          className={`
            absolute
            left-4
            top-4
            inline-flex
            items-center
            gap-1.5
            rounded-full
            border
            px-3
            py-1.5
            text-xs
            font-semibold
            backdrop-blur-md
            shadow-sm

            ${
              event.status === "active"
                ? "border-emerald-400/40 bg-emerald-500/20 text-emerald-100"
                : "border-sky-400/40 bg-sky-500/20 text-sky-100"
            }
          `}
        >
          <span className="size-1.5 animate-pulse rounded-full bg-current" />

          {event.status === "active" ? "Voting open" : "Upcoming"}
        </span>
      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col gap-4 p-5">
        {/* Title */}
        <div>
          <h3
            className="
              text-lg
              font-bold
              tracking-tight
              text-slate-900
              transition-colors
              group-hover:text-blue-700
            "
          >
            {event.title}
          </h3>

          <p className="mt-1 text-sm text-slate-600">
            {event.tagline}
          </p>
        </div>

        {/* Event information */}
        <dl className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm text-slate-600">
          <div className="flex items-center gap-2">
            <CalendarDays
              className="size-4 shrink-0 text-blue-600"
              aria-hidden
            />
            <span className="truncate">{event.date}</span>
          </div>

          <div className="flex items-center gap-2">
            <Clock
              className="size-4 shrink-0 text-blue-600"
              aria-hidden
            />
            <span className="truncate">
              {event.time.split("–")[0]?.trim()}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin
              className="size-4 shrink-0 text-blue-600"
              aria-hidden
            />
            <span className="truncate">{event.location}</span>
          </div>

          <div className="flex items-center gap-2">
            <Users
              className="size-4 shrink-0 text-blue-600"
              aria-hidden
            />
            <span className="truncate">{event.groups} groups</span>
          </div>
        </dl>

        {/* Bottom action */}
        <div
          className="
            mt-auto
            flex
            items-center
            justify-between
            border-t
            border-slate-200/80
            pt-4
            text-sm
            font-semibold
            text-slate-800
          "
        >
          <span>View teams &amp; vote</span>

          <span
            className="
              grid
              size-8
              place-items-center
              rounded-full
              border
              border-slate-200
              bg-white/70
              transition-all
              duration-300
              group-hover:border-blue-200
              group-hover:bg-blue-50
              group-hover:text-blue-600
            "
          >
            <ArrowRight
              className="
                size-4
                transition-transform
                duration-300
                group-hover:translate-x-0.5
              "
            />
          </span>
        </div>
      </div>
    </Link>
  );
}

/* =========================================================
   HOME PAGE
   ========================================================= */

function Home() {
  const active = events.filter((e) => e.status === "active");
  const upcoming = events.filter((e) => e.status === "upcoming");

  return (
    <main className="min-h-screen bg-transparent text-foreground">
      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="relative overflow-hidden bg-transparent">
        <div
          className="
            relative
            mx-auto
            grid
            max-w-6xl
            items-center
            gap-10
            px-6
            py-20
            md:grid-cols-2
            md:py-28
          "
        >
          {/* Hero Text */}
          <div>
            <span
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-blue-200
                bg-white/60
                px-4
                py-1.5
                text-xs
                font-semibold
                uppercase
                tracking-wide
                text-blue-700
                shadow-sm
                backdrop-blur-xl
              "
            >
              <ShieldCheck className="size-3.5" aria-hidden />

              QR verified voting
            </span>

            <h1
              className="
                mt-6
                text-4xl
                font-bold
                leading-[1.05]
                tracking-tight
                text-slate-900
                sm:text-5xl
                lg:text-6xl
              "
            >
              The Future of{" "}
              <span className="text-gradient">Voting</span> is Here
            </h1>

            <p
              className="
                mt-5
                max-w-md
                text-base
                leading-relaxed
                text-slate-600
              "
            >
              IoT Voting System uses QR code verification and advanced edge
              technology to deliver a secure, efficient and fully transparent
              voting experience for every showcase.
            </p>

            {/* Features */}
            <div className="mt-8 flex flex-wrap gap-6 text-sm">
              {[
                {
                  icon: QrCode,
                  label: "One scan, one vote",
                },
                {
                  icon: Zap,
                  label: "Live result sync",
                },
                {
                  icon: ShieldCheck,
                  label: "Tamper proof log",
                },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 text-slate-600"
                >
                  <Icon
                    className="size-4 text-blue-600"
                    aria-hidden
                  />

                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <img
              src={heroImage}
              alt="Secure IoT ballot box with QR scanning phone and digital shield"
              width={1024}
              height={1024}
              className="
                relative
                mx-auto
                w-full
                max-w-md
                drop-shadow-[0_20px_40px_rgba(15,23,42,0.15)]
              "
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          ACTIVE EVENTS
          ===================================================== */}

      {active.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2
                className="
                  text-2xl
                  font-bold
                  tracking-tight
                  text-slate-900
                  sm:text-3xl
                "
              >
                Active Events
              </h2>

              <p className="mt-1 text-sm text-slate-600">
                Voting is open right now — tap a card to meet the teams.
              </p>
            </div>

            <span
              className="
                hidden
                rounded-full
                border
                border-emerald-200
                bg-emerald-50/80
                px-3
                py-1
                text-xs
                font-semibold
                text-emerald-700
                backdrop-blur-md
                sm:inline
              "
            >
              {active.length} live
            </span>
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {active.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </section>
      )}

      {/* =====================================================
          UPCOMING EVENTS
          ===================================================== */}

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <h2
          className="
            text-2xl
            font-bold
            tracking-tight
            text-slate-900
            sm:text-3xl
          "
        >
          Upcoming IoT Shows
        </h2>

        <p className="mt-1 text-sm text-slate-600">
          Don&apos;t miss our upcoming IoT competitions.
        </p>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {upcoming.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>
    </main>
  );
}