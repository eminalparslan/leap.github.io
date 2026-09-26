/* Shared LEAP content. All five site variants read from this file.
   Source: docs/MASTER PLAYBOOK.md, docs/OPERATIONAL CHARTER..., docs/LEAP_One_Pager.pdf */

window.LEAP = {
  name: "LEAP",
  fullName: "Leaders Emerge and Partner",
  tagline: ["Network.", "Grow.", "Serve."],
  region: "Northern Virginia",
  domain: "leapnova.org",
  email: "hello@leapnova.org", // placeholder until a real inbox exists

  whoWeAre:
    "A regional community of emerging leaders ages 18 to 35 from diverse backgrounds — here to network, grow, and serve.",

  mission:
    "Our mission is to offer a platform where emerging leaders from diverse backgrounds come together — building a regional network that opens doors, fosters growth, and gives back.",

  vision:
    "We envision a connected generation of emerging leaders whose friendships across backgrounds strengthen our region.",

  values: [
    {
      name: "Dignity first",
      text: "Everyone here is met with respect and accepted as they are."
    },
    {
      name: "Difference is richness",
      text: "Different faiths, cultures, and perspectives are what we're built on — they make us stronger, together."
    },
    {
      name: "Service over self",
      text: "We volunteer our time and energy, because contributing to the community is the whole point."
    },
    {
      name: "Shared wisdom",
      text: "Decisions are shaped together, with every voice at the table."
    },
    {
      name: "Integrity in everything",
      text: "Good goals deserve good means. We act honestly, transparently, and well."
    },
    {
      name: "Voluntarism",
      text: "Driven by free will, dedication, and selfless service to society."
    }
  ],

  /* Why people join — condensed from docs/IMPORTANT QUESTIONS.md */
  whyJoin: [
    {
      name: "Friends you would not otherwise meet",
      text: "Work alongside people from other professions, cultures, and faiths. The friendships are real because the work is real."
    },
    {
      name: "Proof of what you did",
      text: "Every project you volunteer on comes with an official certificate you can put on a resume, a LinkedIn profile, or a school application."
    },
    {
      name: "Mentors who show up",
      text: "Experienced leaders from business and civic life advise the platform. You get access to them while you are still early in your career."
    },
    {
      name: "Ideas without paperwork",
      text: "You do not need to found a nonprofit to run a good project. LEAP provides the templates, sign-up tools, and announcement channels."
    },
    {
      name: "Time that means something",
      text: "Spend a Saturday building something for the region instead of just consuming one."
    }
  ],

  /* How a committee works, in plain terms (kept light — no governance detail) */
  committeeFacts: [
    "Every committee designs and runs at least three projects a year.",
    "Committees choose their own projects, guided by LEAP's values and a shared project template.",
    "Volunteers on each project receive an official completion certificate.",
    "Each committee shares the story, photos, and results after every event."
  ],

  committees: [
    {
      id: "interfaith",
      name: "Interfaith & Dialogue",
      short: "Service projects and conversation across faiths and cultures.",
      focus:
        "Curates interfaith service projects, cross-cultural dialogue circles, and judgment-free community spaces.",
      does: [
        "Runs dialogue circles where people of different faiths meet as neighbors, not representatives.",
        "Pairs conversation with service — a shared volunteering day followed by a shared meal.",
        "Hosts open houses and visits to places of worship across the region."
      ],
      fit: "You are curious about other people's beliefs and comfortable holding a room where nobody has to agree."
    },
    {
      id: "finance",
      name: "Finance & Resources",
      short: "Micro-grants, resource requests, and transparent books.",
      focus:
        "Oversees project resource requests, manages micro-grant allocations, and ensures financial transparency.",
      does: [
        "Reviews resource requests from other committees and helps them budget realistically.",
        "Allocates small grants so good ideas do not stall on a few hundred dollars.",
        "Publishes clear, simple reports so every member can see where money went."
      ],
      fit: "You like spreadsheets, fairness, and helping other people's projects actually happen."
    },
    {
      id: "arts",
      name: "Arts, Culture & Innovation",
      short: "Creative arts, music, AI exhibitions, and digital media.",
      focus:
        "Runs creative arts, music, AI technology exhibitions, and digital media production initiatives.",
      does: [
        "Organizes exhibitions, performances, and showcases from artists in the community.",
        "Explores new technology in public — demo nights, AI exhibitions, maker sessions.",
        "Produces photo, video, and design work for LEAP projects."
      ],
      fit: "You make things — music, film, code, paintings — and want an audience and collaborators."
    },
    {
      id: "career",
      name: "Civic & Career",
      short: "Mentorship, job-seeker pairing, mock interviews, networking.",
      focus:
        "Manages mentorship programs, job-seeker pairing drives, mock interviews, and professional networking workshops.",
      does: [
        "Matches members with mentors a few steps ahead in their field.",
        "Runs mock interview nights and resume clinics before hiring seasons.",
        "Hosts small networking evenings built around a topic, not a name tag."
      ],
      fit: "You have been helped in your career and want to pay it forward, or you are early on and want to learn how."
    },
    {
      id: "wellness",
      name: "Health & Wellness",
      short: "Group hikes, outdoor activities, and mental health awareness.",
      focus:
        "Designs structured outdoor activities such as guided group hikes, mental health awareness, and wellness initiatives.",
      does: [
        "Leads guided hikes and outdoor days on the region's trails and parks.",
        "Runs mental health awareness sessions with qualified speakers.",
        "Plans recurring wellness activities that members can rely on."
      ],
      fit: "You are happiest outside and believe a community should look after its people's health."
    },
    {
      id: "safeguarding",
      name: "Vetting & Safeguarding",
      short: "Background checks, safety compliance, and access rules.",
      focus:
        "Oversees background verifications, safety compliance, and enforces restricted-access rules for sensitive projects.",
      does: [
        "Runs background verification for roles that work with vulnerable people.",
        "Sets and checks safety standards for events before they happen.",
        "Handles access rules so members' and volunteers' data stays protected."
      ],
      fit: "You are careful, discreet, and take other people's safety personally."
    },
    {
      id: "outreach",
      name: "Outreach",
      short: "Grassroots partnerships and diverse volunteer recruiting.",
      focus:
        "Builds grassroots community partnerships, recruits diverse volunteers, and connects local youth organizations.",
      does: [
        "Meets with local organizations and brings them into the LEAP network.",
        "Recruits volunteers from communities that are not yet represented.",
        "Connects youth groups across the region with each other and with LEAP projects."
      ],
      fit: "You know your community, enjoy meeting new people, and are comfortable making the first call."
    },
    {
      id: "marketing",
      name: "Marketing",
      short: "Storytelling, social campaigns, and event announcements.",
      focus:
        "Drives platform storytelling, social media campaigns, event announcements, and post-project publicity.",
      does: [
        "Tells the story of each project after it happens — photos, words, results.",
        "Runs LEAP's social channels and announces upcoming events.",
        "Keeps LEAP's voice consistent and honest across everything it publishes."
      ],
      fit: "You write well, notice good photos, and like turning a real event into a story worth sharing."
    },
    {
      id: "operations",
      name: "Operations & Logistics",
      short: "Venues, event-day materials, sign-ups, and volunteer care.",
      focus:
        "Manages venue coordination, event-day materials, sign-up tools, and on-site volunteer care.",
      does: [
        "Finds and books venues, and makes sure they work for the people attending.",
        "Prepares materials and runs the day so committees can focus on their program.",
        "Looks after volunteers on site — check-in, breaks, water, thanks."
      ],
      fit: "You are the person who already made the checklist. Events run because you are there."
    }
  ]
};
