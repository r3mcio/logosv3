<script setup>
import { Check, Phone, Beef, ExternalLink, FileText, ChevronRight, ShieldCheck } from 'lucide-vue-next';
import { ref } from 'vue';

const faqItems = ref([
  { question: 'Jak wygląda proces sprzedaży bydła?', answer: 'To proste — dzwonisz do nas, ustalamy termin, przyjeżdżamy z transportem i wagą. Po zważeniu płacimy gotówką od ręki lub przelewem na konto.', open: false },
  { question: 'Jakie gatunki bydła skupujecie?', answer: 'Skupujemy buhaje, byki rzeźne, jałówki, krowy (również po laktacji i wybrakowane). Przyjmujemy zarówno rasy mięsne (Limousine, Charolaise), jak i mleczne (HF) oraz mieszańce.', open: false },
  { question: 'Czy odbieracie pojedyncze sztuki?', answer: 'Tak! Odbieramy nawet pojedyncze sztuki. Nie ma minimum — każda transakcja jest dla nas ważna.', open: false },
  { question: 'Ile czasu trwa odbiór od momentu kontaktu?', answer: 'Standardowo od 2 do 7 dni, ale w pilnych przypadkach jesteśmy w stanie przyjechać nawet w ciągu 24 godzin.', open: false },
  { question: 'Czy wystawiacie faktury?', answer: 'Tak, wystawiamy faktury RR i VAT. Prowadzimy również pełny wykaz przemieszczeń bydła zgodnie z przepisami.', open: false },
]);

const toggleFaq = (index) => {
  faqItems.value[index].open = !faqItems.value[index].open;
};
</script>

<template>
  <div class="bg-neutral-950 min-h-screen relative overflow-hidden">
    <!-- Decorative Background -->
    <div class="absolute top-20 right-10 w-72 h-72 bg-brand-900/10 rounded-full blur-3xl -z-10"></div>
    <div class="absolute bottom-40 left-10 w-96 h-96 bg-brand-950/10 rounded-full blur-3xl -z-10"></div>

    <!-- Header -->
    <div class="bg-black text-white py-14 md:py-28 relative overflow-hidden" data-aos="fade-up">
      <div class="absolute inset-x-0 bottom-0 h-full opacity-[0.08] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" style="background-color: rgb(220, 38, 38); background-blend-mode: multiply;"></div>
      <div class="absolute inset-0 bg-gradient-to-br from-brand-950/30 via-transparent to-black/50"></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-950/50 text-brand-400 text-xs font-bold mb-4 md:mb-6 border border-brand-900/30">
          <Beef class="w-3.5 h-3.5" />
          SKUP BYDŁA
        </div>
        <h1 class="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight mb-3 md:mb-4 text-white leading-tight">
          <span class="text-brand-500">Skup</span> bydła rzeźnego
        </h1>
        <p class="text-neutral-400 text-base md:text-lg max-w-2xl mx-auto px-2">Skupujemy buhaje, byki, jałówki i krowy. Płatność gotówką od ręki lub przelewem — uczciwe ceny i szybki odbiór.</p>
      </div>
    </div>

    <!-- Offer Cards -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 md:-mt-10 relative z-10">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8" data-aos="fade-up" data-aos-delay="100">
        
        <!-- Offer Card 1: Byki -->
        <div class="bg-gradient-to-br from-brand-900 via-brand-950 to-neutral-900 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-brand-800/30 group relative">
          <div class="absolute bottom-0 left-0 w-full h-1 bg-brand-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          <div class="h-40 sm:h-44 md:h-52 bg-neutral-800 relative overflow-hidden">
            <img src="/bulls_premium_1772742794993.png" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 text-transparent" alt="Byki" loading="lazy" decoding="async" width="600" height="208">
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
            <div class="absolute bottom-0 left-0 w-full p-4 flex justify-between items-end">
              <h3 class="text-white text-xl font-black">Buhaje / Byki</h3>
              <span class="text-xs font-bold bg-brand-600 text-white px-2.5 py-1 rounded-full">SKUP</span>
            </div>
          </div>
          <div class="p-5 sm:p-6 md:p-8">
            <p class="text-neutral-400 mb-6 font-medium text-sm">Poszukujemy bydła o wysokiej mięsności. Interesują nas zarówno rasy mięsne (Limousine, Charolaise), jak i mieszańce.</p>
            <ul class="space-y-3">
              <li class="flex items-center text-sm text-neutral-300">
                <Check class="w-5 h-5 text-brand-500 mr-3 flex-shrink-0" />
                Waga powyżej 450kg
              </li>
              <li class="flex items-center text-sm text-neutral-300">
                <Check class="w-5 h-5 text-brand-500 mr-3 flex-shrink-0" />
                Waga ciężka +800kg (Premium)
              </li>
              <li class="flex items-center text-sm text-neutral-300">
                <Check class="w-5 h-5 text-brand-500 mr-3 flex-shrink-0" />
                Wszystkie klasy WBC
              </li>
            </ul>
          </div>
        </div>

        <!-- Offer Card 2: Jałówki -->
        <div class="bg-gradient-to-br from-brand-900 via-brand-950 to-neutral-900 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-brand-800/30 group relative">
          <div class="absolute bottom-0 left-0 w-full h-1 bg-brand-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          <div class="h-40 sm:h-44 md:h-52 bg-neutral-800 relative overflow-hidden">
             <img src="/heifers_premium_1772742810159.png" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 text-transparent" alt="Jałówki" loading="lazy" decoding="async" width="600" height="208">
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
            <div class="absolute bottom-0 left-0 w-full p-4 flex justify-between items-end">
              <h3 class="text-white text-xl font-black">Jałówki</h3>
              <span class="text-xs font-bold bg-brand-600 text-white px-2.5 py-1 rounded-full">SKUP</span>
            </div>
          </div>
          <div class="p-5 sm:p-6 md:p-8">
            <p class="text-neutral-400 mb-6 font-medium text-sm">Skupujemy jałówki przeznaczone na rzeź. Szczególnie cenimy sztuki dobrze odchowane i zdrowe.</p>
            <ul class="space-y-3">
              <li class="flex items-center text-sm text-neutral-300">
                <Check class="w-5 h-5 text-brand-500 mr-3 flex-shrink-0" />
                Rasy mleczne i mięsne
              </li>
              <li class="flex items-center text-sm text-neutral-300">
                <Check class="w-5 h-5 text-brand-500 mr-3 flex-shrink-0" />
                Dobra kondycja zdrowotna
              </li>
              <li class="flex items-center text-sm text-neutral-300">
                <Check class="w-5 h-5 text-brand-500 mr-3 flex-shrink-0" />
                Płatność od wagi żywej lub WBC
              </li>
            </ul>
          </div>
        </div>

        <!-- Offer Card 3: Krowy -->
        <div class="bg-gradient-to-br from-brand-900 via-brand-950 to-neutral-900 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-brand-800/30 group relative">
          <div class="absolute bottom-0 left-0 w-full h-1 bg-brand-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          <div class="h-40 sm:h-44 md:h-52 bg-neutral-800 relative overflow-hidden">
             <img src="/cows_premium_1772742826381.png" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 text-transparent" alt="Krowy" loading="lazy" decoding="async" width="600" height="208">
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
            <div class="absolute bottom-0 left-0 w-full p-4 flex justify-between items-end">
              <h3 class="text-white text-xl font-black">Krowy</h3>
              <span class="text-xs font-bold bg-brand-600 text-white px-2.5 py-1 rounded-full">SKUP</span>
            </div>
          </div>
          <div class="p-5 sm:p-6 md:p-8">
            <p class="text-neutral-400 mb-6 font-medium text-sm">Kupujemy krowy wybrakowane, po laktacji oraz sztuki rzeźne. Każdą sztukę wyceniamy indywidualnie.</p>
            <ul class="space-y-3">
              <li class="flex items-center text-sm text-neutral-300">
                <Check class="w-5 h-5 text-brand-500 mr-3 flex-shrink-0" />
                Krowy HF i mieszańce
              </li>
              <li class="flex items-center text-sm text-neutral-300">
                <Check class="w-5 h-5 text-brand-500 mr-3 flex-shrink-0" />
                Odbiór nawet pojedynczych sztuk
              </li>
              <li class="flex items-center text-sm text-neutral-300">
                <Check class="w-5 h-5 text-brand-500 mr-3 flex-shrink-0" />
                Konkurencyjne stawki
              </li>
            </ul>
          </div>
        </div>

      </div>

      <!-- OLX CTA -->
      <div class="mt-8 md:mt-12 flex justify-center px-2" data-aos="fade-up" data-aos-delay="200">
        <a
          href="https://www.olx.pl/d/oferta/skup-bydla-zywca-platnosc-od-reki-konkurencyjne-ceny-CID4371-IDjqga6.html?srsltid=AfmBOop8xz6KA0dOOi0ED6KHbSPsi8uy51Gl5ssLnAjo_zXK7D3SPSPk"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-brand-600 text-white font-bold text-sm sm:text-base rounded-xl shadow-lg shadow-brand-500/25 hover:bg-brand-700 hover:shadow-xl hover:shadow-brand-500/30 hover:-translate-y-0.5 transition-all duration-300 group"
        >
          Sprawdź naszą ofertę na OLX
          <ExternalLink class="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
        </a>
      </div>

      <!-- Co zapewniamy — dark block -->
      <div class="mt-12 md:mt-24 bg-gradient-to-br from-brand-900 via-brand-950 to-neutral-900 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 relative overflow-hidden shadow-2xl border border-brand-800/30" data-aos="fade-up">
        <div class="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        <div class="absolute -right-20 -top-20 w-64 h-64 bg-brand-600/10 rounded-full blur-3xl pointer-events-none"></div>
        <div class="absolute -left-20 -bottom-20 w-64 h-64 bg-brand-600/5 rounded-full blur-3xl pointer-events-none"></div>
        
        <div class="relative z-10">
          <div class="max-w-4xl mx-auto text-center">
            
            <div class="mb-10 sm:mb-12">
              <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500 text-black text-xs font-bold mb-4 shadow-sm">
                <ShieldCheck class="w-3.5 h-3.5" />
                Nasze standardy
              </div>
              <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">Co zapewniamy<br class="hidden sm:block"/> przy każdej transakcji?</h2>
            </div>
            
            <div class="flex flex-col items-center gap-3 sm:gap-4 text-left text-brand-100 text-base max-w-xl mx-auto">
                  <div class="group relative flex items-center gap-4 px-6 py-4 bg-brand-950/40 rounded-full cursor-default border border-brand-800/30 shadow-md w-full overflow-hidden transition-all duration-300 hover:border-brand-500/50 hover:shadow-brand-500/10 hover:-translate-y-0.5">
                      <div class="absolute inset-0 bg-gradient-to-r from-brand-900/0 via-brand-900/10 to-brand-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div class="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div class="p-2 bg-brand-600 rounded-full shadow-lg shrink-0 relative z-10 group-hover:scale-110 group-hover:bg-brand-500 transition-all duration-300">
                          <Check class="w-5 h-5 text-white"/> 
                      </div>
                      <span class="relative z-10 font-bold group-hover:text-white transition-colors">Krótki termin odbioru (2-7 dni)</span>
                  </div>
                  <div class="group relative flex items-center gap-4 px-6 py-4 bg-brand-950/40 rounded-full cursor-default border border-brand-800/30 shadow-md w-full overflow-hidden transition-all duration-300 hover:border-brand-500/50 hover:shadow-brand-500/10 hover:-translate-y-0.5">
                      <div class="absolute inset-0 bg-gradient-to-r from-brand-900/0 via-brand-900/10 to-brand-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div class="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div class="p-2 bg-brand-600 rounded-full shadow-lg shrink-0 relative z-10 group-hover:scale-110 group-hover:bg-brand-500 transition-all duration-300">
                          <Check class="w-5 h-5 text-white"/> 
                      </div>
                      <span class="relative z-10 font-bold group-hover:text-white transition-colors">Płatność gotówką od ręki lub przelew z VAT</span>
                  </div>
                  <div class="group relative flex items-center gap-4 px-6 py-4 bg-brand-950/40 rounded-full cursor-default border border-brand-800/30 shadow-md w-full overflow-hidden transition-all duration-300 hover:border-brand-500/50 hover:shadow-brand-500/10 hover:-translate-y-0.5">
                      <div class="absolute inset-0 bg-gradient-to-r from-brand-900/0 via-brand-900/10 to-brand-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div class="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div class="p-2 bg-brand-600 rounded-full shadow-lg shrink-0 relative z-10 group-hover:scale-110 group-hover:bg-brand-500 transition-all duration-300">
                          <Check class="w-5 h-5 text-white"/> 
                      </div>
                      <span class="relative z-10 font-bold group-hover:text-white transition-colors">Pomoc w załadunku</span>
                  </div>
                  <div class="group relative flex items-center gap-4 px-6 py-4 bg-brand-950/40 rounded-full cursor-default border border-brand-800/30 shadow-md w-full overflow-hidden transition-all duration-300 hover:border-brand-500/50 hover:shadow-brand-500/10 hover:-translate-y-0.5">
                      <div class="absolute inset-0 bg-gradient-to-r from-brand-900/0 via-brand-900/10 to-brand-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div class="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div class="p-2 bg-brand-600 rounded-full shadow-lg shrink-0 relative z-10 group-hover:scale-110 group-hover:bg-brand-500 transition-all duration-300">
                          <Check class="w-5 h-5 text-white"/> 
                      </div>
                      <span class="relative z-10 font-bold group-hover:text-white transition-colors">Wystawiamy faktury RR i VAT</span>
                  </div>
                  <div class="group relative flex items-center gap-4 px-6 py-4 bg-brand-950/40 rounded-full cursor-default border border-brand-800/30 shadow-md w-full overflow-hidden transition-all duration-300 hover:border-brand-500/50 hover:shadow-brand-500/10 hover:-translate-y-0.5">
                      <div class="absolute inset-0 bg-gradient-to-r from-brand-900/0 via-brand-900/10 to-brand-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div class="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div class="p-2 bg-brand-600 rounded-full shadow-lg shrink-0 relative z-10 group-hover:scale-110 group-hover:bg-brand-500 transition-all duration-300">
                          <Check class="w-5 h-5 text-white"/> 
                      </div>
                      <span class="relative z-10 font-bold group-hover:text-white transition-colors">Prowadzimy wykaz przemieszczeń bydła</span>
                  </div>
              </div>
            
          </div>
        </div>
      </div>

      <!-- Enhanced Contact CTA -->
      <div class="mt-8 md:mt-12 pb-12 md:pb-20 px-4" data-aos="fade-up">
        <div class="max-w-5xl mx-auto bg-gradient-to-br from-brand-900 via-brand-950 to-neutral-900 rounded-3xl p-8 sm:p-12 border border-brand-800/50 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div class="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
          <div class="absolute -right-20 -top-20 w-64 h-64 bg-brand-600/20 rounded-full blur-3xl pointer-events-none"></div>
          <div class="absolute -left-20 -bottom-20 w-64 h-64 bg-brand-600/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div class="relative z-10 flex-1">
            <h2 class="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">Sprzedajesz <span class="text-brand-400">bydło?</span></h2>
            <p class="text-brand-100/90 text-base md:text-lg max-w-xl">
              Gwarantujemy uczciwe ceny podążające za rynkiem WJH, płatność od ręki i błyskawiczny odbiór z każdej lokalizacji. Nie czekaj – przygotujemy wycenę specjalnie dla Ciebie!
            </p>
          </div>
          
          <div class="relative z-10 shrink-0 w-full md:w-auto">
            <a href="tel:+48500277836" class="group flex flex-col items-center justify-center bg-neutral-950 rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-brand-500/20 transition-all duration-300 hover:-translate-y-1 w-full md:w-64 border border-neutral-800 hover:border-brand-500/50">
                <div class="w-14 h-14 bg-brand-900/30 text-brand-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300">
                    <Phone class="w-6 h-6" />
                </div>
                <p class="text-xs text-brand-300/80 font-bold uppercase tracking-wider mb-1">Zadzwoń teraz</p>
                <p class="text-xl sm:text-2xl font-black text-white group-hover:text-brand-400 transition-colors whitespace-nowrap">500 277 836</p>
            </a>
          </div>
        </div>
      </div>

      <!-- FAQ Section -->
      <div class="mt-4 md:mt-8 pb-12 md:pb-20" data-aos="fade-up">
        <div class="text-center mb-8 md:mb-12">
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-950 text-brand-400 text-xs font-bold mb-4 border border-brand-900 shadow-sm">
            <FileText class="w-3.5 h-3.5" />
            FAQ
          </div>
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight mb-3 md:mb-4">Najczęściej zadawane pytania</h2>
          <p class="text-neutral-400 text-base md:text-lg max-w-2xl mx-auto px-2">Odpowiedzi na pytania, które słyszymy najczęściej od naszych klientów.</p>
        </div>

        <div class="max-w-3xl mx-auto space-y-4">
          <div 
            v-for="(item, index) in faqItems" 
            :key="index" 
            class="bg-neutral-900 rounded-xl border shadow-sm overflow-hidden transition-all duration-300"
            :class="item.open ? 'border-brand-200 shadow-md' : 'border-neutral-800 hover:border-brand-200'"
          >
            <button 
              @click="toggleFaq(index)" 
              class="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none group"
            >
              <span class="font-bold transition-colors" :class="item.open ? 'text-brand-700' : 'text-white group-hover:text-brand-700'">{{ item.question }}</span>
              <span 
                class="text-brand-500 text-xl font-bold shrink-0 w-7 h-7 flex items-center justify-center rounded-full transition-all duration-300" 
                :class="item.open ? 'rotate-45 bg-brand-600 text-white scale-90' : 'bg-neutral-800 hover:bg-brand-50'"
              >+</span>
            </button>
            <div class="faq-answer-grid" :class="item.open ? 'faq-answer-open' : 'faq-answer-closed'">
              <div class="overflow-hidden">
                <div class="px-6 pb-5">
                  <p class="text-neutral-400 leading-relaxed border-t border-neutral-800 pt-4">{{ item.answer }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.faq-answer-grid {
  display: grid;
  transition: grid-template-rows 0.35s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.25s ease;
}

.faq-answer-closed {
  grid-template-rows: 0fr;
  opacity: 0;
}

.faq-answer-open {
  grid-template-rows: 1fr;
  opacity: 1;
}
</style>
