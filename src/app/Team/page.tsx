import SecondaryNavbar from '@/components/Navbar';
import TeamMembers from '@/components/Team2';
import TrialButton from '@/components/Team3';
import Image from 'next/image';

export default function Team() {
  return (
    <>
    <SecondaryNavbar/>
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="text-center py-12">
        <h2 className="text-lg font-semibold tracking-wide text-gray-500">WHAT WE DO</h2>
        <h1 className="text-4xl font-bold text-gray-800 mt-2">Innovation tailored for you</h1>
        <nav className="text-sm text-gray-600 mt-4">
          <span>Home</span> <span className="mx-2">/</span> <span className="text-gray-900">Team</span>
        </nav>
      </div>

      {/* Team Gallery Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Replace with your own images */}
          <Image
            src="/team1.png"
            alt="Team member 1"
            className="rounded-md object-cover"
            width={700}
            height={530}
          />
          <Image
            src="/team2.png"
            alt="Team member 2"
            className="rounded-md object-cover"
            width={600}
            height={400}
          />
          <Image
            src="/team3.png"
            alt="Team member 3"
            className="rounded-md object-cover"
            width={600}
            height={400}
          />
          <Image
            src="/team4.png"
            alt="Team member 4"
            className="rounded-md object-cover"
            width={600}
            height={400}
          />
          <Image
            src="/team5.png"
            alt="Team member 5"
            className="rounded-md object-cover"
            width={600}
            height={400}
          />
         
        </div>
      </div>
     <div>
        <TeamMembers/>
     </div>
     <div>
        <TrialButton/>
     </div>
    </div>
    </>
  );
}
