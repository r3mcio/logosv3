import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';
import OfferSkup from '../views/OfferSkup.vue';
import OfferSprzedaz from '../views/OfferSprzedaz.vue';
import OfferTransport from '../views/OfferTransport.vue';
import OfferMiesa from '../views/OfferMiesa.vue';
import PrivacyPolicy from '../views/PrivacyPolicy.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/o-nas',
        name: 'About',
        component: About
    },
    {
        path: '/oferta',
        redirect: '/oferta/skup-bydla'
    },
    {
        path: '/oferta/skup-bydla',
        name: 'OfferSkup',
        component: OfferSkup
    },
    {
        path: '/oferta/sprzedaz-bydla',
        name: 'OfferSprzedaz',
        component: OfferSprzedaz
    },
    {
        path: '/oferta/transport-bydla',
        name: 'OfferTransport',
        component: OfferTransport
    },
    {
        path: '/oferta/sprzedaz-mies',
        name: 'OfferMiesa',
        component: OfferMiesa
    },
    {
        path: '/kontakt',
        name: 'Contact',
        component: Contact
    },
    {
        path: '/polityka-prywatnosci',
        name: 'PrivacyPolicy',
        component: PrivacyPolicy
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            }
        }
        // Always scroll to top with a slight delay to ensure DOM is ready
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ top: 0, left: 0 })
            }, 100)
        })
    },
});

export default router;
