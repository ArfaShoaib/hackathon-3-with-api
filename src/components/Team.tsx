import React from "react";

const Team = () => {
  const teamMembers = [
    {
      name: "Username",
      profession: "Profession",
      image: "/images/member1.jpg", // Replace with actual image paths
    },
    {
      name: "Username",
      profession: "Profession",
      image: "/images/member2.jpg",
    },
    {
      name: "Username",
      profession: "Profession",
      image: "/images/member3.jpg",
    },
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Meet Our Team
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics.
        </p>
      </div>

      <div className="mt-10 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center border rounded-lg p-6 shadow-lg"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 rounded-full object-cover mb-4"
            />
            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="text-gray-500">{member.profession}</p>
            <div className="flex justify-center space-x-4 mt-4">
              <a href="#" className="text-blue-500">
                <i className="fab fa-facebook"></i> {/* Font Awesome */}
              </a>
              <a href="#" className="text-pink-500">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-blue-400">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
