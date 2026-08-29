import smartCity from "@/assets/event-smart-city.jpg";
import robotics from "@/assets/event-robotics.jpg";
import agri from "@/assets/event-agri.jpg";
import health from "@/assets/event-health.jpg";
import projectIot from "@/assets/project-iot.jpg";

export type TeamMember = { name: string; role: string };

export type Team = {
  id: string;
  name: string;
  members: TeamMember[];
  about: string;
  image: string;
  votes: number;
};

export type VotingEvent = {
  id: string;
  title: string;
  tagline: string;
  date: string;
  time: string;
  location: string;
  groups: number;
  image: string;
  status: "upcoming" | "active";
  teams: Team[];
};

const baseTeam = (id: string, name: string, about: string, votes: number): Team => ({
  id,
  name,
  about,
  votes,
  image: projectIot,
  members: [
    { name: "Hnin", role: "Team Lead" },
    { name: "Moon", role: "Hardware" },
    { name: "Aung", role: "Firmware" },
    { name: "Zaw", role: "Cloud" },
    { name: "Shin", role: "Design" },
  ],
});

export const events: VotingEvent[] = [
  {
    id: "smart-city-innovation",
    title: "Smart City Innovation",
    tagline: "Sensors, data and safer streets",
    date: "May 20, 2026",
    time: "9:00 AM – 12:00 PM",
    location: "Time City",
    groups: 5,
    image: smartCity,
    status: "active",
    teams: [
      baseTeam(
        "smart-city-team",
        "Smart City Team",
        "Our project uses IoT sensors and real-time data to improve traffic management, energy usage, and public safety in urban areas.",
        128,
      ),
      baseTeam(
        "urban-pulse",
        "Urban Pulse",
        "A city-wide mesh of low-power air quality nodes that streams live pollution maps to residents and city planners.",
        96,
      ),
      baseTeam(
        "grid-guardians",
        "Grid Guardians",
        "Smart meters and edge analytics that predict district power peaks and automatically balance street lighting loads.",
        74,
      ),
    ],
  },
  {
    id: "robotics-challenge",
    title: "Autonomous Robotics Challenge",
    tagline: "Line following, vision and speed",
    date: "June 4, 2026",
    time: "10:00 AM – 3:00 PM",
    location: "Time City",
    groups: 5,
    image: robotics,
    status: "upcoming",
    teams: [
      baseTeam(
        "path-finders",
        "Path Finders",
        "A vision-guided rover that maps unknown indoor spaces and delivers supplies without any human control.",
        41,
      ),
      baseTeam(
        "servo-squad",
        "Servo Squad",
        "High-torque differential drive robot tuned for the fastest lap on the obstacle track.",
        33,
      ),
      baseTeam(
        "mecha-minds",
        "Mecha Minds",
        "Swarm robots that cooperate over an ESP-NOW mesh to sort and carry objects together.",
        27,
      ),
    ],
  },
  {
    id: "smart-agriculture",
    title: "Smart Agriculture Expo",
    tagline: "Soil, water and yield intelligence",
    date: "June 18, 2026",
    time: "8:30 AM – 1:00 PM",
    location: "Time City",
    groups: 4,
    image: agri,
    status: "upcoming",
    teams: [
      baseTeam(
        "green-nodes",
        "Green Nodes",
        "Solar powered soil moisture probes that trigger drip irrigation only where the field actually needs water.",
        58,
      ),
      baseTeam(
        "harvest-ai",
        "Harvest AI",
        "Greenhouse cameras with on-device inference that flag plant disease days before it spreads.",
        44,
      ),
      baseTeam(
        "aqua-sense",
        "Aqua Sense",
        "A floating sensor buoy that tracks pond water quality for small scale fish farms.",
        30,
      ),
    ],
  },
  {
    id: "health-wearables",
    title: "Health Wearables Showcase",
    tagline: "Care that travels with you",
    date: "July 2, 2026",
    time: "9:00 AM – 12:00 PM",
    location: "Time City",
    groups: 6,
    image: health,
    status: "upcoming",
    teams: [
      baseTeam(
        "pulse-lab",
        "Pulse Lab",
        "A wrist band that streams ECG and SpO2 to a clinician dashboard and raises alerts on arrhythmia.",
        67,
      ),
      baseTeam(
        "care-link",
        "Care Link",
        "Fall detection pendant for elderly patients with offline buzzer alerts and family SMS notification.",
        52,
      ),
      baseTeam(
        "vital-mesh",
        "Vital Mesh",
        "Low-power ward-wide patient monitoring mesh built on BLE and a tiny gateway.",
        38,
      ),
    ],
  },
];

export const getEvent = (id: string) => events.find((e) => e.id === id);
