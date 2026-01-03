import React from "react";
import { motion as Motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};
const cardVariants = {
  hidden: {
    opacity: 0,
    x: 60,
    y: -40,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 85,
      damping: 16,
    },
  },
};

const Feature = () => {
  return (
    <section className="w-11/12 mx-auto py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Powerful <span className="text-[#894fed]">Features</span>
      </h2>

      <p className="text-center max-w-xl mx-auto mb-12">
        Explore how our Social Events Manager helps communities stay connected,
        informed, and engaged in meaningful activities.
      </p>

      <Motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {[
          {
            icon: "📅",
            title: "Create & Manage Events",
            desc: "Easily organize community activities with event creation, scheduling, and management tools.",
          },
          {
            icon: "🌍",
            title: "Join Local Events",
            desc: "Explore nearby social development events and participate in initiatives that make real impact.",
          },
          {
            icon: "📊",
            title: "Track Event Progress",
            desc: "Monitor community-driven projects and stay updated on event outcomes and volunteer contributions.",
          },
          {
            icon: "🤝",
            title: "Connect With Organizers",
            desc: "Communicate with event creators directly to get details, contribute, or volunteer.",
          },
          {
            icon: "🔔",
            title: "Real-Time Notifications",
            desc: "Stay updated with reminders and alerts for events you have joined or created.",
          },
          {
            icon: "🛡️",
            title: "Secure & Easy Platform",
            desc: "A safe, user-friendly interface designed for both event organizers and community users.",
          },
        ].map((item, index) => (
          <Motion.div
            key={index}
            variants={cardVariants}
            className="p-6 bg-white shadow-lg rounded-2xl"
          >
            <div className="text-purple-600 text-4xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-bold text-gray-700 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </Motion.div>
        ))}
      </Motion.div>
    </section>
  );
};

export default Feature;
