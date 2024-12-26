import Image from "next/image";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const TeamMembers = () => {
  const teamMembers = [
    {
      name: "Username",
      profession: "Profession",
      image: "/username4.png",
    },
    {
      name: "Username",
      profession: "Profession",
      image: "/username5.png",
    },
    {
      name: "Username",
      profession: "Profession",
      image: "/username6.png",
    },
    {
      name: "Username",
      profession: "Profession",
      image: "/username3.png",
    },
    {
      name: "Username",
      profession: "Profession",
      image: "/username7.png",
    },
    {
      name: "Username",
      profession: "Profession",
      image: "/username1.png",
    },
    {
      name: "Username",
      profession: "Profession",
      image: "/username2.jpg",
    },
    {
      name: "Username",
      profession: "Profession",
      image: "/username8.png",
    },
    {
      name: "Username",
      profession: "Profession",
      image: "/username9.png",
    },
  ];

  return (
   
    
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center my-8">Meet Our Team</h1>
      <div className="flex flex-wrap -mx-4">
        {teamMembers.map((member) => (
          <div className="w-full md:w-1/3 p-4 lg:text-center" key={member.name}>
            <div className="bg-white rounded-lg lg:my-10 overflow-hidden lg:w-[316px] lg:h-[383px]">
              <Image
                src={member.image}
                alt={member.name}
                width={316}
                height={231}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  {member.name}
                </h2>
                <p className="text-gray-600">{member.profession}</p>
                <div className="flex justify-center mt-3">
                  <FaFacebook className="text-blue-500 mx-2" size={20} />
                  <FaInstagram className="text-pink-500 mx-2" size={20} />
                  <FaTwitter className="text-blue-400 mx-2" size={20} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default TeamMembers;
