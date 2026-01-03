import React from "react";

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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="p-6 bg-white shadow-lg rounded-2xl hover:shadow-xl transition">
          <div className="text-purple-600 text-4xl mb-4">📅</div>
          <h3 className="text-xl font-bold text-gray-700 mb-2">
            Create & Manage Events
          </h3>
          <p className="text-gray-600 text-sm">
            Easily organize community activities with event creation,
            scheduling, and management tools.
          </p>
        </div>

        <div className="p-6 bg-white shadow-lg rounded-2xl hover:shadow-xl transition">
          <div className="text-purple-600 text-4xl mb-4">🌍</div>
          <h3 className="text-xl font-bold text-gray-700 mb-2">
            Join Local Events
          </h3>
          <p className="text-gray-600 text-sm">
            Explore nearby social development events and participate in
            initiatives that make real impact.
          </p>
        </div>

        <div className="p-6 bg-white shadow-lg rounded-2xl hover:shadow-xl transition">
          <div className="text-purple-600 text-4xl mb-4">📊</div>
          <h3 className="text-xl font-bold text-gray-700 mb-2">
            Track Event Progress
          </h3>
          <p className="text-gray-600 text-sm">
            Monitor community-driven projects and stay updated on event outcomes
            and volunteer contributions.
          </p>
        </div>

        <div className="p-6 bg-white shadow-lg rounded-2xl hover:shadow-xl transition">
          <div className="text-purple-600 text-4xl mb-4">🤝</div>
          <h3 className="text-xl font-bold text-gray-700 mb-2">
            Connect With Organizers
          </h3>
          <p className="text-gray-600 text-sm">
            Communicate with event creators directly to get details, contribute,
            or volunteer.
          </p>
        </div>

        <div className="p-6 bg-white shadow-lg rounded-2xl hover:shadow-xl transition">
          <div className="text-purple-600 text-4xl mb-4">🔔</div>
          <h3 className="text-xl font-bold text-gray-700 mb-2">
            Real-Time Notifications
          </h3>
          <p className="text-gray-600 text-sm">
            Stay updated with reminders and alerts for events you have joined or
            created.
          </p>
        </div>

        <div className="p-6 bg-white shadow-lg rounded-2xl hover:shadow-xl transition">
          <div className="text-purple-600 text-4xl mb-4">🛡️</div>
          <h3 className="text-xl font-bold text-gray-700 mb-2">
            Secure & Easy Platform
          </h3>
          <p className="text-gray-600 text-sm">
            A safe, user-friendly interface designed for both event organizers
            and community users.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Feature;
