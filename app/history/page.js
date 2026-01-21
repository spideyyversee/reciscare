import Link from "next/link";
import { ChevronLeft, User } from "lucide-react";

export default function HistoryPage() {
  const historyData = [
    {
      date: "Monday, 12 January 2026",
      name: "Gafisa",
      number: "14",
      task: "Menyapu",
      id: 1,
    },
    {
      date: "Monday, 5 January 2026",
      name: "Gafisa",
      number: "14",
      task: "Menaikkan kursi",
      id: 2,
    },
    {
      date: "Monday, 29 December 2025",
      name: "Gafisa",
      number: "14",
      task: "Menyapu",
      id: 3,
    },
    {
      date: "Monday, 1 December 2025",
      name: "Gafisa",
      number: "14",
      task: "Menyapu",
      id: 4,
    },
    {
      date: "Monday, 1 December 2025",
      name: "Andi",
      number: "02",
      task: "Papan Tulis",
      id: 5,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col px-5 py-6 lg:px-16 lg:py-10">
      <div className="flex justify-between items-center mb-8">
        <Link
          href="/"
          className="flex items-center gap-1 font-bold text-recl-dark text-lg bg-white/20 lg:bg-transparent p-2 rounded-full lg:p-0"
        >
          <ChevronLeft className="w-6 h-6" />
          <span className="hidden lg:block">Back</span>
        </Link>
        <div className="bg-[#1a2e22] text-white px-10 py-2 rounded-full shadow-lg">
          <h2 className="text-xl lg:text-2xl font-black tracking-wide">
            History
          </h2>
        </div>
        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
          <User className="w-5 h-5 text-recl-dark" />
        </div>
      </div>

      {/* Grid Responsive: 
          HP: space-y-6 (tumpuk ke bawah)
          Desktop (lg): grid-cols-3 (3 kolom ke samping) 
      */}
      <div className="flex flex-col space-y-6 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-6 pb-10 max-w-7xl mx-auto w-full">
        {historyData.map((item) => (
          <div
            key={item.id}
            className="group hover:-translate-y-1 transition-transform duration-300"
          >
            <p className="text-[10px] lg:text-xs font-bold text-recl-dark mb-2 ml-1 opacity-70">
              {item.date}
            </p>

            {/* Kartu */}
            <div className="bg-gradient-to-r from-[#5a8d6a] to-[#7eb68d] lg:to-[#5a8d6a] lg:hover:to-[#7eb68d] p-3 lg:p-5 rounded-[20px] flex lg:flex-col gap-3 lg:gap-4 shadow-md items-center lg:items-start transition-colors">
              {/* Gambar */}
              <div className="w-24 h-20 lg:w-full lg:h-48 bg-gray-300 rounded-xl overflow-hidden flex-shrink-0 border border-white/30 shadow-inner">
                <img
                  src={`https://source.unsplash.com/random/400x300?classroom&sig=${item.id}`}
                  alt="Bukti"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Detail Data */}
              <div className="flex flex-col lg:flex-row lg:flex-wrap gap-1.5 w-full">
                <div className="bg-white/90 px-3 py-1 rounded-full text-[10px] lg:text-xs font-bold text-recl-dark truncate shadow-sm">
                  👤 {item.name}
                </div>
                <div className="bg-white/90 px-3 py-1 rounded-full text-[10px] lg:text-xs font-bold text-recl-dark w-fit shadow-sm">
                  #{item.number}
                </div>
                <div className="bg-white/90 px-3 py-1 rounded-full text-[10px] lg:text-xs font-bold text-recl-dark w-full lg:w-auto shadow-sm">
                  🧹 {item.task}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
