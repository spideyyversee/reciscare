"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, User } from "lucide-react";

export default function UploadPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    router.push("/thankyou");
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar Responsif */}
      <div className="px-6 py-6 lg:px-16 lg:py-8 flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-lg text-recl-dark hover:opacity-70 transition"
        >
          <div className="bg-white/20 p-2 rounded-full">
            <ChevronLeft className="w-6 h-6" />
          </div>
          <span className="hidden lg:block">Back to Home</span>
        </Link>
        <span className="font-black text-xl lg:text-2xl text-recl-dark tracking-widest uppercase">
          ReclsCare
        </span>
        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
          <User className="w-5 h-5 text-recl-dark" />
        </div>
      </div>

      {/* Container Utama: Center di Desktop */}
      <div className="flex-1 flex justify-center items-center px-4 pb-10">
        <div className="w-full max-w-md lg:max-w-4xl lg:flex lg:gap-10 lg:bg-white/20 lg:p-10 lg:backdrop-blur-lg lg:rounded-[40px] lg:shadow-2xl">
          {/* Sisi Kiri (Preview Upload) */}
          <div className="flex-1 mb-6 lg:mb-0">
            <h2 className="text-3xl lg:text-4xl font-black mb-6 text-recl-dark text-center lg:text-left">
              Upload Proof
            </h2>
            <div className="bg-recl-dark rounded-[30px] p-6 shadow-lg h-64 lg:h-80 relative group overflow-hidden">
              <label className="bg-white w-full h-full rounded-[20px] flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-all">
                <span className="text-green-700 font-bold text-lg group-hover:scale-110 transition-transform">
                  Tap to Upload
                </span>
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  required
                />
              </label>
            </div>
          </div>

          {/* Sisi Kanan (Form Input) */}
          <form
            onSubmit={handleSubmit}
            className="flex-1 flex flex-col justify-center space-y-4"
          >
            <div className="space-y-4">
              <div className="flex flex-col gap-1">
                <label className="text-recl-dark font-bold ml-2 text-sm">
                  Full Name
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Gafisa"
                  className="w-full bg-recl-dark/90 lg:bg-white text-white lg:text-recl-dark placeholder-white/60 lg:placeholder-gray-400 px-6 py-4 rounded-full font-medium outline-none focus:ring-4 focus:ring-green-400/50"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-recl-dark font-bold ml-2 text-sm">
                  Student Number
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. 14"
                  className="w-full bg-recl-dark/90 lg:bg-white text-white lg:text-recl-dark placeholder-white/60 lg:placeholder-gray-400 px-6 py-4 rounded-full font-medium outline-none focus:ring-4 focus:ring-green-400/50"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-recl-dark font-bold ml-2 text-sm">
                  Daily Task
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Menyapu"
                  className="w-full bg-recl-dark/90 lg:bg-white text-white lg:text-recl-dark placeholder-white/60 lg:placeholder-gray-400 px-6 py-4 rounded-full font-medium outline-none focus:ring-4 focus:ring-green-400/50"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="mt-8 bg-white lg:bg-recl-dark text-recl-dark lg:text-white font-black px-12 py-4 rounded-full shadow-xl hover:scale-[1.02] transition-all disabled:opacity-70 w-full"
            >
              {isLoading ? "SAVING..." : "SUBMIT DATA"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
