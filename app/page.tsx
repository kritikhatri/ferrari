import Navbar from '@/components/Navbar';
import ZondaScrollCanvas from '@/components/ZondaScrollCanvas';
import ZondaExperience from '@/components/ZondaExperience';

export default function Home() {
  return (
    <main className="relative min-h-[500vh] selection:bg-yellow-500 selection:text-black">
      <Navbar />
      <ZondaScrollCanvas />
      <ZondaExperience />
    </main>
  );
}
