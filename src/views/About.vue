<script setup>
import { BadgeCheck, Users, Clock, ShieldCheck, Truck, Scale, Banknote, Phone, ArrowRight, Heart, Handshake, Award, MapPin } from 'lucide-vue-next';
</script>

<template>
  <div class="bg-neutral-950 relative overflow-hidden">
    <!-- Decorative Background Elements -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-brand-900/10 rounded-full blur-3xl -z-10"></div>
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-brand-950/10 rounded-full blur-3xl -z-10"></div>

    <!-- Header Banner -->
    <div class="bg-black text-white py-20 md:py-28 relative overflow-hidden" data-aos="fade-up">
      <div class="absolute inset-x-0 bottom-0 h-full opacity-[0.08] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" style="background-color: rgb(220, 38, 38); background-blend-mode: multiply;"></div>
      <div class="absolute inset-0 bg-gradient-to-br from-brand-950/30 via-transparent to-black/50"></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-950/50 text-brand-400 text-xs font-bold mb-6 border border-brand-900/30">
          <ShieldCheck class="w-3.5 h-3.5" />
          OD 2007 ROKU
        </div>
        <h1 class="text-3xl md:text-5xl font-black tracking-tight mb-4 text-white leading-tight">
          Ponad <span class="text-brand-500">18 lat doświadczenia</span><br>w skupie bydła
        </h1>
        <p class="text-neutral-400 text-lg max-w-2xl mx-auto">Firma Logos prowadzona przez Marcina Kiedla to gwarancja uczciwości i profesjonalizmu.</p>
      </div>
    </div>

    <!-- Main Content Split - O firmie -->
    <section class="py-16 md:py-24 relative" data-aos="fade-up">
      <!-- Decorative Background Elements -->
      <div class="absolute inset-x-0 inset-y-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-brand-500" style="background-blend-mode: multiply; mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent); -webkit-mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);"></div>
      <div class="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-900/10 rounded-full blur-3xl -translate-y-1/2 -ml-40 pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <!-- Text Content -->
          <div>
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-950 text-brand-400 text-sm font-bold mb-6 border border-brand-900">
              <Heart class="w-4 h-4" />
              Nasza historia
            </div>
            <h2 class="text-3xl md:text-4xl font-black text-white mb-6 leading-tight tracking-tight">
              Szanujemy ciężką pracę rolnika. <br>
              <span class="text-brand-500">Wspieramy lokalne rolnictwo.</span>
            </h2>
            <div class="relative bg-gradient-to-br from-brand-900 via-brand-950 to-neutral-900 p-8 rounded-2xl rounded-tl-none border border-brand-800/30 shadow-xl" data-aos="fade-right" data-aos-delay="200">
                <div class="absolute -top-[1px] -left-[1px] w-8 h-8 bg-brand-900 border-t border-l border-brand-800/30 transform -skew-y-[45deg] origin-top-left"></div>
                <div class="space-y-4 text-neutral-400 text-base md:text-lg leading-relaxed relative z-10">
                  <p>
                    Z głębokim szacunkiem podchodzimy do trudu pracy rolnika, dlatego naszą misją jest realne wsparcie lokalnego rolnictwa. Nazywam się <strong class="text-white">Marcin Kiedel</strong> i od ponad 18 lat prowadzę firmę Logos.
                  </p>
                  <p>
                    Choć działamy głównie w powiatach <strong class="text-white">szczecineckim, świdwińskim, wałeckim, koszalińskim i drawskim</strong>, jesteśmy w pełni otwarci na współpracę z rolnikami na terenie całego kraju.
                  </p>
                  <p>
                    W codziennej pracy stawiamy na solidność, rzetelność i pełną przejrzystość transakcji. Dzięki ugruntowanej współpracy z wiodącymi ubojniami w kraju i za granicą, gwarantujemy naszym dostawcom <strong class="text-white">konkurencyjne warunki cenowe</strong>.
                  </p>
                </div>
            </div>

            <!-- Trust Badges -->
            <div class="mt-8 grid grid-cols-2 gap-4">
              <div class="flex items-center gap-3 p-3 bg-gradient-to-br from-brand-900 via-brand-950 to-neutral-900 rounded-lg border border-brand-800/30 hover:shadow-md hover:shadow-brand-950/30 transition-all duration-300 cursor-default">
                <BadgeCheck class="w-5 h-5 text-brand-500" />
                <span class="font-bold text-neutral-300 text-sm">Legalny Skup</span>
              </div>
              <div class="flex items-center gap-3 p-3 bg-gradient-to-br from-brand-900 via-brand-950 to-neutral-900 rounded-lg border border-brand-800/30 hover:shadow-md hover:shadow-brand-950/30 transition-all duration-300 cursor-default">
                <Users class="w-5 h-5 text-brand-500" />
                <span class="font-bold text-neutral-300 text-sm">Rodzinna Firma</span>
              </div>
            </div>
          </div>

          <!-- Image -->
          <div class="relative group" data-aos="fade-left">
              <div class="absolute inset-0 bg-brand-900/20 rounded-2xl transform rotate-3 scale-105 group-hover:rotate-2 transition-transform duration-500"></div>
              <img 
                src="/about-cows-v2.webp" 
                alt="Transport bydła - krowy na pastwisku" 
                class="relative rounded-2xl shadow-2xl border border-neutral-800 w-full object-cover h-[500px]"
                loading="lazy" decoding="async" width="800" height="500"
              />
              <div class="absolute top-6 right-6 bg-neutral-900/90 backdrop-blur-sm px-6 py-3 rounded-xl shadow-lg border border-neutral-700 z-20">
                <span class="block text-brand-400 font-black text-lg tracking-tight uppercase">Transport Bydła</span>
              </div>
            <div class="absolute -bottom-6 -left-6 bg-neutral-900 p-6 rounded-xl shadow-xl border border-neutral-800 max-w-xs hidden md:block">
              <p class="italic text-neutral-400 mb-4">"Współpracuję z nimi od lat. Zawsze na czas i kasa się zgadza."</p>
              <div class="flex items-center gap-2">
                <div class="w-8 h-8 bg-brand-950 rounded-full flex items-center justify-center">
                  <Users class="w-4 h-4 text-brand-500" />
                </div>
                <div>
                  <p class="font-bold text-white text-sm">Pan Marek</p>
                  <p class="text-xs text-neutral-500">Hodowca z Bornego Sulinowa</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Nasza misja — wartości firmy -->
    <section class="py-16 md:py-24 bg-black border-y border-neutral-800 relative" data-aos="fade-up">
      <!-- Decorative Background Elements -->
      <div class="absolute inset-x-0 inset-y-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-brand-500" style="background-blend-mode: multiply;"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center mb-14">
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-950 text-brand-400 text-xs font-bold mb-4 border border-brand-900 shadow-sm">
            <Award class="w-3.5 h-3.5" />
            NASZE WARTOŚCI
          </div>
          <h2 class="text-3xl md:text-4xl font-black text-white tracking-tight mb-4">Na czym budujemy naszą firmę?</h2>
          <p class="text-neutral-400 text-lg max-w-2xl mx-auto">Każda transakcja opiera się na prostych, ale niezłomnych zasadach.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          
          <!-- Value 1 -->
          <div class="bg-gradient-to-br from-brand-900 via-brand-950 to-neutral-900 rounded-2xl p-8 border border-brand-800/30 shadow-xl hover:shadow-brand-950/50 transition-all duration-300 group" data-aos="fade-up" data-aos-delay="0">
            <div class="w-14 h-14 bg-brand-950/50 rounded-xl flex items-center justify-center text-brand-500 mb-6 group-hover:scale-110 transition-transform">
              <Handshake class="w-7 h-7" />
            </div>
            <h3 class="text-xl font-bold text-white mb-3">Uczciwe warunki</h3>
            <p class="text-neutral-400 leading-relaxed">Cena jest zawsze uczciwa i transparentna. Ważymy w Twojej obecności na legalizowanych wagach — żadnych ukrytych potrąceń.</p>
          </div>

          <!-- Value 2 -->
          <div class="bg-gradient-to-br from-brand-900 via-brand-950 to-neutral-900 rounded-2xl p-8 border border-brand-800/30 shadow-xl hover:shadow-brand-950/50 transition-all duration-300 group" data-aos="fade-up" data-aos-delay="150">
            <div class="w-14 h-14 bg-brand-950/50 rounded-xl flex items-center justify-center text-brand-500 mb-6 group-hover:scale-110 transition-transform">
              <Truck class="w-7 h-7" />
            </div>
            <h3 class="text-xl font-bold text-white mb-3">Szybki odbiór</h3>
            <p class="text-neutral-400 leading-relaxed">Przyjeżdżamy nawet w ciągu 24 godzin. Posiadamy własną flotę transportową, więc nie musisz martwić się o logistykę.</p>
          </div>

          <!-- Value 3 -->
          <div class="bg-gradient-to-br from-brand-900 via-brand-950 to-neutral-900 rounded-2xl p-8 border border-brand-800/30 shadow-xl hover:shadow-brand-950/50 transition-all duration-300 group" data-aos="fade-up" data-aos-delay="300">
            <div class="w-14 h-14 bg-brand-950/50 rounded-xl flex items-center justify-center text-brand-500 mb-6 group-hover:scale-110 transition-transform">
              <Banknote class="w-7 h-7" />
            </div>
            <h3 class="text-xl font-bold text-white mb-3">Gotówka od ręki</h3>
            <p class="text-neutral-400 leading-relaxed">Płacimy natychmiast po załadunku. Gotówka do ręki lub przelew nawet tego samego dnia.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Oferta — co kupujemy i sprzedajemy -->
    <section class="py-16 md:py-24 relative" data-aos="fade-up">
      <!-- Decorative Background Elements -->
      <div class="absolute inset-x-0 inset-y-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-brand-500" style="background-blend-mode: multiply; mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent); -webkit-mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);"></div>
      <div class="absolute top-1/2 right-0 w-[500px] h-[500px] bg-brand-900/10 rounded-full blur-3xl -translate-y-1/2 -mr-40 pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <!-- Image side -->
          <div class="relative order-last lg:order-first" data-aos="fade-right">
            <div class="rounded-2xl overflow-hidden shadow-xl border border-neutral-800">
              <img 
                src="/wmremove-transformed.webp" 
                alt="Bydło na pastwisku" 
                class="w-full h-80 lg:h-[420px] object-cover"
                loading="lazy" decoding="async" width="800" height="420"
              />
            </div>
            <!-- Floating badge -->
            <div class="absolute -bottom-4 -right-4 md:bottom-6 md:right-6 bg-brand-700 text-white px-6 py-3 rounded-xl shadow-lg">
              <p class="text-xs font-bold uppercase tracking-wider text-brand-200 mb-0.5">Skup & Sprzedaż</p>
              <p class="text-lg font-black">Cała Polska</p>
            </div>
          </div>

          <!-- Text content -->
          <div>
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-950 text-brand-400 text-sm font-bold mb-6 border border-brand-900">
              <Scale class="w-4 h-4" />
              Zakres działalności
            </div>
            <h2 class="text-3xl md:text-4xl font-black text-white mb-6 leading-tight tracking-tight">
              Skupujemy i <span class="text-brand-500">sprzedajemy</span><br>bydło na terenie całej Polski
            </h2>
            
            <p class="text-neutral-400 text-base md:text-lg leading-relaxed mb-8">
              Nasza oferta obejmuje nie tylko profesjonalny skup, ale również sprzedaż wysokiej klasy bydła. Współpracujemy z wiodącymi ubojniami w kraju i za granicą.
            </p>

            <div class="space-y-3 mb-8">
              <div class="flex items-center gap-3 p-3 bg-gradient-to-br from-brand-900 via-brand-950 to-neutral-900 rounded-lg border border-brand-800/30 hover:border-brand-800/60 transition-colors">
                <div class="p-1.5 bg-brand-600 rounded-full shrink-0">
                  <BadgeCheck class="w-4 h-4 text-white" />
                </div>
                <span class="text-neutral-300 font-medium">Buhaje i byki rzeźne — wszystkie klasy WBC</span>
              </div>
              <div class="flex items-center gap-3 p-3 bg-gradient-to-br from-brand-900 via-brand-950 to-neutral-900 rounded-lg border border-brand-800/30 hover:border-brand-800/60 transition-colors">
                <div class="p-1.5 bg-brand-600 rounded-full shrink-0">
                  <BadgeCheck class="w-4 h-4 text-white" />
                </div>
                <span class="text-neutral-300 font-medium">Krowy i jałówki — rasy mięsne i mleczne</span>
              </div>
              <div class="flex items-center gap-3 p-3 bg-gradient-to-br from-brand-900 via-brand-950 to-neutral-900 rounded-lg border border-brand-800/30 hover:border-brand-800/60 transition-colors">
                <div class="p-1.5 bg-brand-600 rounded-full shrink-0">
                  <BadgeCheck class="w-4 h-4 text-white" />
                </div>
                <span class="text-neutral-300 font-medium">Cielaki, odsadki i byki rozpłodniki (sprzedaż)</span>
              </div>
            </div>

            <RouterLink to="/oferta/skup-bydla" class="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold rounded-xl text-white bg-brand-600 hover:bg-brand-700 transition-all shadow-lg hover:shadow-brand-600/30 active:scale-95 group">
              Zobacz pełną ofertę
              <ArrowRight class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="bg-black text-white py-16 md:py-20 relative overflow-hidden" data-aos="fade-up">
      <div class="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-black text-white tracking-tight mb-4">Liczby mówią same</h2>
          <p class="text-neutral-500 text-lg max-w-xl mx-auto">Nasze wyniki to efekt lat ciężkiej pracy i zaufania rolników.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div class="p-6">
            <p class="text-4xl md:text-5xl font-black text-white mb-2 cursor-default">18+</p>
            <p class="text-neutral-400 font-medium tracking-wide">Lat na rynku</p>
          </div>
          <div class="p-6 border-t md:border-t-0 md:border-l border-neutral-800">
            <p class="text-4xl md:text-5xl font-black text-white mb-2 cursor-default">1000+</p>
            <p class="text-neutral-400 font-medium tracking-wide">Zadowolonych rolników</p>
          </div>
          <div class="p-6 border-t md:border-t-0 md:border-l border-neutral-800">
            <p class="text-4xl md:text-5xl font-black text-white mb-2 cursor-default">24h</p>
            <p class="text-neutral-400 font-medium tracking-wide">Czas reakcji</p>
          </div>
          <div class="p-6 border-t md:border-t-0 md:border-l border-neutral-800">
            <p class="text-4xl md:text-5xl font-black text-white mb-2 cursor-default">100%</p>
            <p class="text-neutral-400 font-medium tracking-wide">Uczciwa waga</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="relative py-16 md:py-20 bg-gradient-to-br from-brand-900 via-brand-950 to-neutral-900 overflow-hidden" data-aos="fade-up">
      <div class="absolute inset-0 opacity-[0.04] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" style="background-color: rgb(220, 38, 38); background-blend-mode: multiply;"></div>
      <div class="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center border border-brand-800/30 rounded-3xl p-8 shadow-2xl bg-neutral-900/40 backdrop-blur-sm">
        <h2 class="text-3xl md:text-4xl font-black text-white tracking-tight mb-4" data-aos="fade-up">
          Chcesz sprzedać bydło?
        </h2>
        <p class="text-neutral-400 text-lg max-w-xl mx-auto mb-8" data-aos="fade-up" data-aos-delay="100">
          Zadzwoń i umów się na wycenę. Obsługujemy cały teren Polski — odbieramy od pojedynczych sztuk.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center" data-aos="fade-up" data-aos-delay="200">
          <a href="tel:+48500277836" class="inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-bold rounded-2xl text-white bg-brand-600 hover:bg-brand-700 transition-all shadow-xl hover:shadow-brand-600/30 active:scale-95 group">
            <Phone class="w-5 h-5 group-hover:rotate-12 transition-transform" />
            +48 500 277 836
          </a>
          <RouterLink to="/kontakt" class="inline-flex items-center justify-center gap-2 px-8 py-4 border border-brand-700/50 text-base font-bold rounded-2xl text-neutral-300 bg-brand-900/30 hover:bg-brand-900/50 transition-all shadow-sm hover:border-brand-500">
            Formularz kontaktowy
            <ArrowRight class="w-4 h-4" />
          </RouterLink>
        </div>
      </div>
    </section>

  </div>
</template>
