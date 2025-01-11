import React from 'react';

const WhatIsFTC = () => {
  return (
    <div className="bg-gray-800 p-10 rounded-lg shadow-xl flex flex-col md:flex-row items-center max-w-6xl mx-auto space-y-6 md:space-y-0 md:space-x-8">
      {/* Left Side: Logo */}
      <div className="flex-shrink-0">
        <img
          src="src/assets/first.png"
          alt="FTC Logo"
          className="w-40 h-40 object-contain"
        />
      </div>

      {/* Right Side: Content */}
      <div className="flex-1 text-white">
        <h2 className="text-4xl font-bold mb-4">What is FTC?</h2>
        <p className="mb-6 text-lg leading-relaxed">
          The FIRST Tech Challenge (FTC) engages students to use their knowledge
          and teamwork to create a working robot under specific constraints to
          accomplish a task. In FTC, teams of 7th-12th graders partake in
          tournaments around the world in order to win a variety of awards.
        </p>
        <p className="mb-6 text-lg leading-relaxed">
          FTC is a fantastic opportunity for students interested in gaining STEM
          experience because it teaches problem-solving, collaboration, and
          leadership inside their teams. Although FTC is a robotics competition,
          there are also non-technical fields open, such as marketing and
          documentation, which are equally important and allow students to gain
          interest in STEM.
        </p>

        {/* Card Image Below Text */}
        <img
          src="src/assets/2.jpg"
          alt="FTC Robotics Competition"
          className="rounded-lg mt-6 w-full max-h-96 object-cover"
        />

        {/* Learn More Button */}
        <a
          href="https://www.firstinspires.org/robotics/ftc"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 px-6 py-3 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default WhatIsFTC;
