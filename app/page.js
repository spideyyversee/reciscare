import Link from "next/link";
import { User, Sparkles } from "lucide-react";

export default function Home() {
  return (
    // lg:flex-row = Di laptop jadi jejer ke samping
    // flex-col = Di HP jadi tumpuk ke bawah
    <div className="min-h-screen flex flex-col lg:flex-row p-6 lg:p-16 relative gap-10 lg:gap-0">
      {/* Header Profile (Absolute biar nempel di pojok) */}
      <header className="absolute top-6 left-6 right-6 lg:top-10 lg:left-16 lg:right-16 flex justify-between items-center z-20">
        <div className="flex items-center gap-2">
          <div className="bg-white/80 p-1.5 rounded-full">
            <Sparkles className="w-4 h-4 text-recl-dark" />
          </div>
          <span className="font-bold text-recl-dark tracking-wide text-lg">
            ReclsCare
          </span>
        </div>
        <div className="w-10 h-10 bg-white/20 border border-white/40 rounded-full flex items-center justify-center backdrop-blur-sm cursor-pointer hover:bg-white/40 transition">
          <User className="w-5 h-5 text-recl-dark" />
        </div>
      </header>

      {/* Bagian KIRI (Judul) */}
      <div className="flex-1 flex flex-col justify-center pt-20 lg:pt-0 z-10">
        <h1 className="text-[42px] lg:text-[80px] font-black text-white leading-[1.1] drop-shadow-sm mb-6 lg:mb-12 tracking-wide">
          Keep Our <br />
          Classroom <br />
          Spotlessy <br />
          <span className="text-recl-dark">Clean</span>
        </h1>
        <p className="text-white/80 text-lg hidden lg:block max-w-md">
          Platform monitoring kebersihan kelas digital. Upload bukti piketmu
          dengan mudah dan cepat.
        </p>
      </div>

      {/* Bagian KANAN (Menu Tombol) */}
      <div className="flex-1 flex flex-col justify-center items-center lg:items-end z-10">
        <div className="space-y-4 w-full lg:w-[400px] bg-white/10 lg:bg-white/20 p-6 rounded-[40px] backdrop-blur-md border border-white/20">
          <h3 className="text-white font-bold text-xl mb-2 lg:hidden">Menu</h3>

          <Link href="/upload" className="block">
            <button className="w-full bg-recl-dark text-white font-bold py-5 px-8 rounded-full shadow-xl hover:scale-[1.02] hover:bg-[#0f1f16] transition-all text-left flex justify-between items-center group">
              <span>Upload Proof Now</span>
              <span className="bg-white/20 rounded-full p-1 group-hover:bg-white/30 transition">
                →
              </span>
            </button>
          </Link>

          <Link href="/history" className="block">
            <button className="w-full bg-white text-recl-dark font-bold py-5 px-8 rounded-full shadow-xl hover:scale-[1.02] hover:bg-gray-100 transition-all text-left flex justify-between items-center">
              <span>View History</span>
            </button>
          </Link>
        </div>
      </div>

      {/* Dekorasi Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] pointer-events-none -z-0"></div>
    </div>
  );
}
