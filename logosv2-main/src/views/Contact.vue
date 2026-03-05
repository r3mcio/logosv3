<script setup>
import { MapPin, Phone, Mail, Clock, Send, ShieldCheck, Banknote, Truck, ArrowRight } from 'lucide-vue-next';
</script>

<template>
  <div class="bg-neutral-950 min-h-screen flex flex-col relative overflow-hidden">
    <!-- Decorative Elements -->
    <div class="absolute top-10 left-0 w-80 h-80 bg-brand-900/10 rounded-full blur-3xl -z-10"></div>
    <div class="absolute bottom-20 right-0 w-96 h-96 bg-brand-950/10 rounded-full blur-3xl -z-10"></div>

    <!-- Header -->
    <div class="bg-black text-white py-20 md:py-28 relative overflow-hidden" data-aos="fade-up">
      <div class="absolute inset-x-0 bottom-0 h-full opacity-[0.08] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" style="background-color: rgb(220, 38, 38); background-blend-mode: multiply;"></div>
      <div class="absolute inset-0 bg-gradient-to-br from-brand-950/30 via-transparent to-black/50"></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-950/50 text-brand-400 text-xs font-bold mb-6 border border-brand-900/30">
          <Phone class="w-3.5 h-3.5" />
          DOSTĘPNI 24/7
        </div>
        <h1 class="text-3xl md:text-5xl font-black tracking-tight mb-4 text-white leading-tight">Skontaktuj się z nami</h1>
        <p class="text-neutral-400 text-lg max-w-2xl mx-auto">Masz pytania? Chcesz sprzedać bydło? Jesteśmy do Twojej dyspozycji każdego dnia.</p>
      </div>
    </div>

    <!-- Quick contact bar -->
    <div class="bg-neutral-950 border-b border-neutral-800 shadow-sm relative z-10 -mt-6" data-aos="fade-up">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-0 -mt-6">
          <a href="tel:+48500277836" class="flex items-center gap-4 bg-brand-700 text-white p-6 md:rounded-tl-2xl md:rounded-bl-2xl hover:bg-brand-800 transition-colors group">
            <div class="w-12 h-12 bg-brand-600 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <Phone class="w-6 h-6" />
            </div>
            <div>
              <p class="text-xs font-bold uppercase tracking-wider text-brand-200">Zadzwoń</p>
              <p class="text-xl font-black">500 277 836</p>
            </div>
          </a>
          <a href="mailto:biuro@bydlo-trans.pl" class="flex items-center gap-4 bg-brand-800 text-white p-6 hover:bg-brand-900 transition-colors group">
            <div class="w-12 h-12 bg-brand-700 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <Mail class="w-6 h-6" />
            </div>
            <div>
              <p class="text-xs font-bold uppercase tracking-wider text-brand-200">Email</p>
              <p class="text-lg font-bold">biuro@bydlo-trans.pl</p>
            </div>
          </a>
          <div class="flex items-center gap-4 bg-brand-900 text-white p-6 md:rounded-tr-2xl md:rounded-br-2xl">
            <div class="w-12 h-12 bg-brand-800 rounded-xl flex items-center justify-center shrink-0">
              <MapPin class="w-6 h-6" />
            </div>
            <div>
              <p class="text-xs font-bold uppercase tracking-wider text-brand-300">Adres bazy</p>
              <p class="text-lg font-bold">Szczecinek</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Content Grid -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex-grow w-full" data-aos="fade-up">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        
        <!-- Left: Info -->
        <div class="space-y-8">
          <div>
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-950 text-brand-400 text-sm font-bold mb-6 border border-brand-900">
              <ShieldCheck class="w-4 h-4" />
              Dlaczego warto zadzwonić?
            </div>
            <h2 class="text-3xl md:text-4xl font-black text-white tracking-tight mb-6 leading-tight">
              Jeden telefon<br><span class="text-brand-500">załatwia sprawę.</span>
            </h2>
            <p class="text-neutral-400 text-base md:text-lg leading-relaxed mb-8">Nie musisz szukać transportu ani jechać na giełdę. Wystarczy, że zadzwonisz — resztą zajmiemy się my.</p>
          </div>

          <!-- Benefits list -->
          <div class="space-y-4">
            <div class="flex items-start gap-4 p-4 bg-gradient-to-br from-brand-900 via-brand-950 to-neutral-900 rounded-xl border border-brand-800/30 hover:border-brand-800/60 transition-colors">
              <div class="w-10 h-10 bg-brand-950/50 rounded-lg flex items-center justify-center text-brand-500 shrink-0 border border-brand-800/30">
                <Truck class="w-5 h-5" />
              </div>
              <div>
                <p class="font-bold text-white mb-1">Darmowy dojazd i załadunek</p>
                <p class="text-neutral-400 text-sm">Przyjeżdżamy na Twoje gospodarstwo z transportem — bez dodatkowych kosztów.</p>
              </div>
            </div>
            <div class="flex items-start gap-4 p-4 bg-gradient-to-br from-brand-900 via-brand-950 to-neutral-900 rounded-xl border border-brand-800/30 hover:border-brand-800/60 transition-colors">
              <div class="w-10 h-10 bg-brand-950/50 rounded-lg flex items-center justify-center text-brand-500 shrink-0 border border-brand-800/30">
                <Banknote class="w-5 h-5" />
              </div>
              <div>
                <p class="font-bold text-white mb-1">Gotówka natychmiast</p>
                <p class="text-neutral-400 text-sm">Płacimy od ręki po zważeniu. Bez czekania na przelew, bez formalności.</p>
              </div>
            </div>
            <div class="flex items-start gap-4 p-4 bg-gradient-to-br from-brand-900 via-brand-950 to-neutral-900 rounded-xl border border-brand-800/30 hover:border-brand-800/60 transition-colors">
              <div class="w-10 h-10 bg-brand-950/50 rounded-lg flex items-center justify-center text-brand-500 shrink-0 border border-brand-800/30">
                <Clock class="w-5 h-5" />
              </div>
              <div>
                <p class="font-bold text-white mb-1">Odbiór w 24-48h</p>
                <p class="text-neutral-400 text-sm">W pilnych przypadkach jesteśmy w stanie odebrać bydło już następnego dnia.</p>
              </div>
            </div>
          </div>

          <!-- Working hours card -->
          <div class="bg-brand-950 p-6 rounded-xl border border-brand-900">
             <h4 class="font-bold text-brand-400 mb-2 flex items-center gap-2">
               <Clock class="w-4 h-4" />
               Godziny pracy
             </h4>
             <p class="text-neutral-400 text-sm">Jesteśmy dostępni pod telefonem 7 dni w tygodniu. Odbiory zwierząt realizujemy również w weekendy po wcześniejszym umówieniu.</p>
          </div>
        </div>

        <!-- Right: Form -->
        <div>
          <div class="bg-gradient-to-br from-brand-900 via-brand-950 to-neutral-900 rounded-2xl shadow-2xl border border-brand-800/30 p-8 sticky top-24">
            <h3 class="text-xl font-bold text-white mb-2">Napisz do nas</h3>
            <p class="text-neutral-400 text-sm mb-6">Opisz czego szukasz lub co chcesz sprzedać — oddzwonimy w ciągu 15 minut.</p>
            <form class="space-y-4">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-bold text-neutral-300 mb-1">Imię i Nazwisko</label>
                  <input type="text" class="w-full rounded-xl border border-neutral-800 bg-neutral-900/50 p-3.5 focus:ring-4 focus:ring-brand-500/20 focus:border-brand-500 transition-all outline-none text-sm text-white placeholder-neutral-500" placeholder="Jan Kowalski">
                </div>
                <div>
                  <label class="block text-sm font-bold text-neutral-300 mb-1">Telefon</label>
                  <input type="tel" class="w-full rounded-xl border border-neutral-800 bg-neutral-900/50 p-3.5 focus:ring-4 focus:ring-brand-500/20 focus:border-brand-500 transition-all outline-none text-sm text-white placeholder-neutral-500" placeholder="000-000-000">
                </div>
              </div>
              
              <div>
                <label class="block text-sm font-bold text-neutral-300 mb-1">Miejscowość</label>
                <input type="text" class="w-full rounded-xl border border-neutral-800 bg-neutral-900/50 p-3.5 focus:ring-4 focus:ring-brand-500/20 focus:border-brand-500 transition-all outline-none text-sm text-white placeholder-neutral-500" placeholder="np. Barwice">
              </div>

              <div>
                <label class="block text-sm font-bold text-neutral-300 mb-1">Wiadomość</label>
                <textarea rows="4" class="w-full rounded-xl border border-neutral-800 bg-neutral-900/50 p-3.5 focus:ring-4 focus:ring-brand-500/20 focus:border-brand-500 transition-all outline-none text-sm resize-none text-white placeholder-neutral-500" placeholder="Mam do sprzedania 5 byków..."></textarea>
              </div>

              <button type="button" class="w-full bg-brand-600 text-white font-bold py-4 rounded-xl hover:bg-brand-700 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-brand-600/30 active:scale-[0.98]">
                <Send class="w-4 h-4" />
                Wyślij wiadomość
              </button>

              <p class="text-xs text-neutral-500 text-center">Odpowiadamy zwykle w ciągu 15 minut w godzinach pracy.</p>
            </form>
          </div>
        </div>

      </div>
    </section>

    <!-- Map Section -->
    <div class="w-full relative" data-aos="fade-up">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div class="text-center">
          <h2 class="text-2xl md:text-3xl font-black text-white tracking-tight mb-2">Nasza lokalizacja</h2>
          <p class="text-neutral-500">Baza transportowa w Szczecinku, woj. zachodniopomorskie</p>
        </div>
      </div>
      <div class="w-full h-96 bg-neutral-800 relative overflow-hidden rounded-t-3xl md:rounded-t-none border-t border-neutral-800">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37905.7726488665!2d16.63852230623194!3d53.70868115664972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470220fc59547563%3A0xb35a90714757c9a2!2sSzczecinek!5e0!3m2!1spl!2spl!4v1707390000000!5m2!1spl!2spl" 
          width="100%" 
          height="100%" 
          style="border:0;" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </div>
  </div>
</template>
