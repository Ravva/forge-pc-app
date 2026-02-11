import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-white overflow-hidden font-sans flex flex-col">
      {/* Background Glows */}
      <div className="absolute top-[-300px] right-[-200px] w-[800px] height-[800px] glow-purple z-0 rounded-full" />
      <div className="absolute bottom-[-200px] left-[-200px] w-[600px] height-[600px] glow-blue z-0 rounded-full" />

      <header className="relative z-10 px-[8%] py-10 flex justify-between items-center">
        <div className="text-3xl font-black tracking-tighter text-grad">
          FORGE.PC
        </div>
        <nav className="hidden md:flex gap-10">
          {["Конфигуратор", "Каталог", "Билды", "Pro-Сборка"].map((item) => (
            <a 
              key={item} 
              href="#" 
              className="text-sm font-medium text-gray-400 hover:text-white transition-all hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
            >
              {item}
            </a>
          ))}
        </nav>
      </header>

      <main className="relative z-10 flex-1 flex flex-col lg:flex-row items-center justify-between px-[8%] pb-20 max-w-[1600px] mx-auto w-full gap-20">
        <div className="max-w-[700px] text-left">
          <Badge variant="outline" className="mb-6 px-4 py-1 text-[0.8rem] uppercase tracking-[3px] text-accent-blue border-accent-blue border-l-2 rounded-none bg-transparent">
            Engineering Excellence
          </Badge>
          
          <h1 className="text-[5rem] lg:text-[6.5rem] font-black leading-[0.85] mb-8 tracking-[-4px] uppercase">
            КУЙ СВОЮ<br />
            <span className="text-transparent" style={{ WebkitTextStroke: "1px #fff" }}>МОЩЬ</span>
          </h1>
          
          <p className="text-xl text-gray-400 font-light leading-relaxed mb-14 max-w-[550px]">
            Ультимативная нейро-платформа для создания ПК. Умный подбор компонентов, проверка совместимости в 1 клик и доступ к эксклюзивному железу.
          </p>
          
          <div className="flex flex-wrap gap-6">
            <Button className="bg-grad text-white font-bold py-7 px-10 rounded-xl text-lg hover:scale-105 transition-transform shadow-[0_10px_40px_rgba(157,80,187,0.25)] border-none">
              Начать сборку
            </Button>
            <Button variant="secondary" className="glass text-white font-bold py-7 px-10 rounded-xl text-lg hover:bg-white/10 border-white/10">
              Кастомные решения
            </Button>
          </div>

          <div className="flex gap-16 mt-20">
            <div className="space-y-1">
              <h3 className="text-4xl font-black bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">12.4k</h3>
              <p className="text-[0.75rem] text-gray-400 uppercase tracking-[2px]">Железа в базе</p>
            </div>
            <div className="space-y-1">
              <h3 className="text-4xl font-black bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">99.9%</h3>
              <p className="text-[0.75rem] text-gray-400 uppercase tracking-[2px]">Точность подбора</p>
            </div>
          </div>
        </div>

        <div className="relative w-full max-w-[600px] h-[600px] flex justify-center items-center">
          {/* GPU Card */}
          <Card className="absolute top-[20px] -right-[20px] w-[380px] glass border-white/10 rounded-[32px] p-8 shadow-2xl z-30 animate-float">
            <CardContent className="p-0">
              <div className="text-[0.6rem] uppercase tracking-[2px] text-accent-blue mb-3">Graphics processing</div>
              <div className="text-2xl font-bold mb-1">RTX 5090 FOUNDER</div>
              <div className="text-lg font-bold text-accent-blue mb-6">$1,999.00</div>
              <Progress value={98} className="h-1.5 bg-white/5" />
            </CardContent>
          </Card>

          {/* CPU Card */}
          <Card className="absolute top-[280px] -left-[40px] w-[280px] glass border-white/10 rounded-[32px] p-8 shadow-2xl z-20 animate-float-delay-1">
            <CardContent className="p-0">
              <div className="text-[0.6rem] uppercase tracking-[2px] text-accent-blue mb-3">Computational unit</div>
              <div className="text-2xl font-bold mb-6">Core i9-15900K</div>
              <Progress value={92} className="h-1.5 bg-white/5" />
            </CardContent>
          </Card>

          {/* RAM Card */}
          <Card className="absolute bottom-[40px] right-[20px] w-[240px] glass border-white/10 rounded-[32px] p-8 shadow-2xl z-40 animate-float-delay-2">
            <CardContent className="p-0">
              <div className="text-[0.6rem] uppercase tracking-[2px] text-accent-blue mb-3">High-speed Memory</div>
              <div className="text-2xl font-bold mb-1">DDR5 128GB</div>
              <div className="text-lg font-bold text-accent-blue">8400 MHz</div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
