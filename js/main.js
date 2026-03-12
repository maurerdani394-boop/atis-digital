/* ============================================
   ATIS Digital — main.js
   Handles: Custom cursor, nav scroll, scroll reveal, language switcher
   ============================================ */

/* ------------------------------------------
   Translations
------------------------------------------ */
const translations = {

  en: {
    // Nav
    nav_services:   'Services',
    nav_port:       'Projects',
    nav_process:    'Process',
    nav_why:        'Why Us',
    nav_industries: 'Industries',
    nav_cta:        'Get in Touch',

    // Hero
    hero_tag:       'Digital Agency in Mallorca',
    hero_h1_line1:  'We Build Digital',
    hero_h1_line2:  'Presences',
    hero_h1_line3:  'That Win.',
    hero_sub:       'Modern websites, sharp branding, and smart SEO — everything a business needs to dominate online. Seriously.',
    hero_btn1:      'Start a Project',
    hero_btn2:      'Explore Services',

    // Stats
    stat1: 'Custom Design',
    stat2: 'Response Time',
    stat3: 'Client Rated',

    // Marquee
    marq1: 'Web Design',
    marq2: 'Branding',
    marq3: 'SEO',
    marq4: 'Digital Strategy',
    marq5: 'E-Commerce',
    marq6: 'UX / UI',
    marq7: 'Performance Optimisation',
    marq8: 'Online Presence',

    // Portfolio
    port_tag:   'Our Work',
    port_h2a:   'Projects',
    port_h2b:   'That Speak for Themselves.',
    port_intro: "Every website we deliver has one clear goal: make our client's business look better, rank higher and convert more.",
    port_visit: 'View Project',
    p1desc:     'Nightclub in Cala Egos, Mallorca. Website with events, gallery and karaoke.',
    p2desc:     'Plumbing and HVAC in Felanitx. Trilingual website with services and contact.',
    p3desc:     'Family construction company since 1998 in Felanitx. Trilingual site with projects and quotes.',
    pt_web:     'Web Design',
    pt_multi:   'Multilingual',
    pt_night:   'Hospitality',
    pt_svc:     'Services',
    pt_const:   'Construction',

    // Services
    svc_tag:   'What We Do',
    svc_h2a:   'Services Built for',
    svc_h2b:   'Real Growth',
    svc_desc:  "We don't do cookie-cutter. Every service is tailored to make your business look credible, modern, and unmissable online.",
    svc1_title: 'Website Design & Development',
    svc1_desc:  'Our flagship service. We create fast, modern, fully custom websites that reflect your brand and convert visitors into clients. From landing pages to full multi-page sites — built to impress from the first scroll.',
    svc2_title: 'Brand Identity',
    svc2_desc:  'Logo, colours, typography, and visual language — built to tell your story and make you stand out in every touchpoint.',
    svc3_title: 'SEO & Visibility',
    svc3_desc:  "Rank higher, be found faster. We optimise your site's structure, content, and authority to bring real organic traffic.",
    svc4_title: 'Digital Strategy',
    svc4_desc:  'Not sure where to start? We map your digital presence, identify gaps, and build a clear roadmap to grow online.',
    svc5_title: 'Maintenance & Support',
    svc5_desc:  'Keep your website running perfectly. Updates, security, performance monitoring, and priority fixes — covered.',

    // Process
    proc_tag:    'How We Work',
    proc_h2a:    'How We',
    proc_h2b:    'Work.',
    proc1_title: 'Discovery Call',
    proc1_desc:  'We start with a focused conversation to understand your business, goals, audience, and competitive landscape. No lengthy forms — just a real conversation that gets us aligned fast.',
    proc2_title: 'Strategy & Proposal',
    proc2_desc:  'We translate insights into a clear project plan — scope, timeline, tech choices, and visual direction — delivered as a concise proposal you can act on.',
    proc3_title: 'Design & Build',
    proc3_desc:  "We design and develop in tight feedback loops so you always know what's happening. No black-box development — you review at every key milestone.",
    proc4_title: 'Launch & Optimise',
    proc4_desc:  'We handle the technical launch, SEO setup, performance checks, and post-launch tweaks. Your site goes live polished, not patched.',

    // Why Us
    why_tag:    'Why ATIS Digital',
    why_h2a:    'Results,',
    why_h2b:    'Not Promises.',
    why1_title: 'Premium Quality, Boutique Scale',
    why1_desc:  'You get a dedicated partner, not a ticket number in a big agency queue. Every project gets full focus and craft.',
    why2_title: 'Tech-First Thinking',
    why2_desc:  "Studying Electrical Engineering & IT gives us a technical foundation most design agencies simply don't have. Smart decisions from the start.",
    why3_title: 'Local Market Intelligence',
    why3_desc:  'Deep knowledge of the Mallorca business landscape — tourism, real estate, hospitality — means strategies that actually land locally.',
    why4_title: 'Results-Oriented, Always',
    why4_desc:  'Beautiful design is the baseline. The real goal is more clients, more trust, and a stronger competitive position for your business.',

    // Industries
    ind_tag:    'Industries',
    ind_h2a:    'We Know Your',
    ind_h2b:    'Market',
    ind1_title: 'Hospitality & Tourism',
    ind1_desc:  'Hotels, restaurants, and tourism operators that need to convert browsers into bookings.',
    ind2_title: 'Real Estate',
    ind2_desc:  'Agents and developers who need a site as premium as the properties they sell.',
    ind3_title: 'Service Businesses',
    ind3_desc:  'Local professionals and service companies ready to look credible and get found online.',
    ind4_title: 'Retail & E-Commerce',
    ind4_desc:  'Shops and brands that need fast, beautiful online stores that actually drive sales.',

    // CTA
    cta_tag:        'Contact',
    cta_h2a:        'Ready to take the',
    cta_h2b:        'next step?',
    cta_desc:       "Tell us your idea and we'll prepare a no-commitment proposal. That simple.",
    cta_btn1:       'Message us on WhatsApp',
    cta_btn2:       'Send an email',
    cta_email_note: 'Or write to us at',

    // Footer
    footer_brand_desc:   'A digital agency helping businesses in Mallorca and beyond build stronger, more professional online presences.',
    footer_col_services: 'Services',
    footer_col_company:  'Company',
    footer_col_contact:  'Contact',
    footer_about:        'About',
    footer_copy:         '© 2025 ATIS Digital. All rights reserved.',
    footer_credit:       'Designed & built by ATIS Digital',
    wa_tooltip:          "Let's Talk",
  },

  // ─────────────────────────────────────────
  es: {
    // Nav
    nav_services:   'Servicios',
    nav_port:       'Proyectos',
    nav_process:    'Proceso',
    nav_why:        'Por Qué Nosotros',
    nav_industries: 'Sectores',
    nav_cta:        'Hablemos',

    // Hero
    hero_tag:       'Agencia Digital en Mallorca',
    hero_h1_line1:  'Creamos Presencias',
    hero_h1_line2:  'Digitales',
    hero_h1_line3:  'Que Conquistan.',
    hero_sub:       'Webs modernas, identidad de marca sólida y SEO estratégico. Todo lo que tu negocio necesita para destacar online — de verdad.',
    hero_btn1:      'Iniciar Proyecto',
    hero_btn2:      'Ver Servicios',

    // Stats
    stat1: 'Diseño Único',
    stat2: 'Tiempo de Respuesta',
    stat3: 'Valoración Clientes',

    // Marquee
    marq1: 'Diseño Web',
    marq2: 'Branding',
    marq3: 'SEO',
    marq4: 'Estrategia Digital',
    marq5: 'E-Commerce',
    marq6: 'UX / UI',
    marq7: 'Optimización de Rendimiento',
    marq8: 'Presencia Online',

    // Portfolio
    port_tag:   'Nuestro Trabajo',
    port_h2a:   'Proyectos',
    port_h2b:   'Que Hablan Solos.',
    port_intro: 'Cada web que entregamos tiene un objetivo claro: hacer que el negocio de nuestro cliente se vea mejor, se encuentre antes y convierta más.',
    port_visit: 'Ver Proyecto',
    p1desc:     'Discoteca en Cala Egos, Mallorca. Web con eventos, galería y karaoke.',
    p2desc:     'Fontanería y climatización en Felanitx. Web trilingüe con servicios y contacto.',
    p3desc:     'Constructora familiar desde 1998 en Felanitx. Web trilingüe con proyectos y presupuestos.',
    pt_web:     'Diseño Web',
    pt_multi:   'Multilingüe',
    pt_night:   'Hostelería',
    pt_svc:     'Servicios',
    pt_const:   'Construcción',

    // Services
    svc_tag:   'Qué Hacemos',
    svc_h2a:   'Servicios Pensados',
    svc_h2b:   'para Crecer',
    svc_desc:  'Nada de plantillas ni soluciones genéricas. Cada proyecto se trabaja a medida para que tu negocio transmita profesionalidad, modernidad y autoridad online.',
    svc1_title: 'Diseño y Desarrollo Web',
    svc1_desc:  'Nuestro servicio estrella. Creamos webs rápidas, modernas y completamente personalizadas que reflejan tu marca y convierten visitas en clientes. Desde landing pages hasta sitios completos — hechos para impresionar desde el primer scroll.',
    svc2_title: 'Identidad de Marca',
    svc2_desc:  'Logo, colores, tipografía y lenguaje visual — construidos para contar tu historia y diferenciarte en cada punto de contacto.',
    svc3_title: 'SEO y Visibilidad',
    svc3_desc:  'Posiciona más alto, que te encuentren antes. Optimizamos la estructura, el contenido y la autoridad de tu web para atraer tráfico orgánico real.',
    svc4_title: 'Estrategia Digital',
    svc4_desc:  '¿No sabes por dónde empezar? Analizamos tu presencia digital, detectamos oportunidades y trazamos el camino para crecer online.',
    svc5_title: 'Mantenimiento y Soporte',
    svc5_desc:  'Tu web siempre en perfecto estado. Actualizaciones, seguridad, monitoreo de rendimiento y correcciones prioritarias — todo cubierto.',

    // Process
    proc_tag:    'Cómo Trabajamos',
    proc_h2a:    'Así',
    proc_h2b:    'Trabajamos.',
    proc1_title: 'Primera Llamada',
    proc1_desc:  'Empezamos con una conversación directa para entender tu negocio, tus objetivos y tu mercado. Sin formularios interminables — solo una charla real que nos alinea desde el principio.',
    proc2_title: 'Estrategia y Propuesta',
    proc2_desc:  'Convertimos lo aprendido en un plan claro — alcance, plazos, tecnología y dirección visual — en una propuesta concisa sobre la que puedes actuar.',
    proc3_title: 'Diseño y Desarrollo',
    proc3_desc:  'Diseñamos y desarrollamos con revisiones continuas para que siempre sepas qué está pasando. Sin cajas negras — tú validas en cada hito clave.',
    proc4_title: 'Lanzamiento y Optimización',
    proc4_desc:  'Gestionamos el lanzamiento técnico, la configuración SEO, las pruebas de rendimiento y los ajustes post-lanzamiento. Tu web sale pulida, no parcheada.',

    // Why Us
    why_tag:    'Por Qué ATIS Digital',
    why_h2a:    'Resultados,',
    why_h2b:    'No Promesas.',
    why1_title: 'Calidad Premium, Escala Boutique',
    why1_desc:  'Tienes un socio dedicado, no un número de ticket en una gran agencia. Cada proyecto recibe atención y craft completos.',
    why2_title: 'Mentalidad Técnica',
    why2_desc:  'Estudiar Ingeniería Eléctrica e Informática nos da una base técnica que la mayoría de agencias creativas simplemente no tiene. Decisiones inteligentes desde el inicio.',
    why3_title: 'Conocimiento del Mercado Local',
    why3_desc:  'Conocemos a fondo el tejido empresarial de Mallorca — turismo, inmobiliaria, hostelería — y eso se traduce en estrategias que funcionan aquí.',
    why4_title: 'Siempre Orientados a Resultados',
    why4_desc:  'El buen diseño es el punto de partida. El objetivo real es más clientes, más confianza y una posición competitiva más fuerte para tu negocio.',

    // Industries
    ind_tag:    'Sectores',
    ind_h2a:    'Conocemos',
    ind_h2b:    'Tu Mercado',
    ind1_title: 'Hostelería y Turismo',
    ind1_desc:  'Hoteles, restaurantes y operadores turísticos que necesitan convertir visitas en reservas.',
    ind2_title: 'Inmobiliaria',
    ind2_desc:  'Agentes y promotores que necesitan una web tan premium como las propiedades que venden.',
    ind3_title: 'Empresas de Servicios',
    ind3_desc:  'Profesionales locales listos para ganar credibilidad y ser encontrados online.',
    ind4_title: 'Retail y E-Commerce',
    ind4_desc:  'Tiendas y marcas que necesitan una tienda online rápida, atractiva y que realmente venda.',

    // CTA
    cta_tag:        'Contacto',
    cta_h2a:        '¿Listo para dar el',
    cta_h2b:        'siguiente paso?',
    cta_desc:       'Cuéntanos tu idea y te preparamos una propuesta sin compromiso. Así de sencillo.',
    cta_btn1:       'Escríbenos por WhatsApp',
    cta_btn2:       'Enviar email',
    cta_email_note: 'O escríbenos a',

    // Footer
    footer_brand_desc:   'Agencia digital que ayuda a empresas de Mallorca y más allá a construir presencias online más sólidas y profesionales.',
    footer_col_services: 'Servicios',
    footer_col_company:  'Empresa',
    footer_col_contact:  'Contacto',
    footer_about:        'Quiénes Somos',
    footer_copy:         '© 2025 ATIS Digital. Todos los derechos reservados.',
    footer_credit:       'Diseñado y desarrollado por ATIS Digital',
    wa_tooltip:          '¿Hablamos?',
  },

  // ─────────────────────────────────────────
  de: {
    // Nav
    nav_services:   'Leistungen',
    nav_port:       'Projekte',
    nav_process:    'Ablauf',
    nav_why:        'Warum Wir',
    nav_industries: 'Branchen',
    nav_cta:        'Kontakt',

    // Hero
    hero_tag:       'Digitalagentur in Mallorca',
    hero_h1_line1:  'Wir bauen Digitale',
    hero_h1_line2:  'Präsenzen',
    hero_h1_line3:  'Die gewinnen.',
    hero_sub:       'Moderne Websites, starke Markenidentität und durchdachtes SEO — alles, was ein Unternehmen braucht, um online zu dominieren. Ernsthaft.',
    hero_btn1:      'Projekt starten',
    hero_btn2:      'Leistungen entdecken',

    // Stats
    stat1: 'Individuelles Design',
    stat2: 'Reaktionszeit',
    stat3: 'Kundenbewertung',

    // Marquee
    marq1: 'Webdesign',
    marq2: 'Branding',
    marq3: 'SEO',
    marq4: 'Digitalstrategie',
    marq5: 'E-Commerce',
    marq6: 'UX / UI',
    marq7: 'Performance-Optimierung',
    marq8: 'Online-Präsenz',

    // Portfolio
    port_tag:   'Unsere Arbeit',
    port_h2a:   'Projekte',
    port_h2b:   'Die für sich sprechen.',
    port_intro: 'Jede Website hat ein klares Ziel: das Unternehmen besser aussehen lassen, höher ranken und mehr konvertieren.',
    port_visit: 'Projekt ansehen',
    p1desc:     'Nachtclub in Cala Egos, Mallorca. Website mit Events, Galerie und Karaoke.',
    p2desc:     'Sanitär und Klimatechnik in Felanitx. Dreisprachige Website.',
    p3desc:     'Familienunternehmen im Bauwesen seit 1998. Dreisprachige Seite.',
    pt_web:     'Webdesign',
    pt_multi:   'Mehrsprachig',
    pt_night:   'Gastgewerbe',
    pt_svc:     'Dienstleistungen',
    pt_const:   'Bauwesen',

    // Services
    svc_tag:   'Was Wir Tun',
    svc_h2a:   'Leistungen für',
    svc_h2b:   'Echtes Wachstum',
    svc_desc:  'Kein Copy-Paste, keine Massenware. Jede Leistung ist darauf ausgelegt, Ihr Unternehmen online glaubwürdig, modern und unübersehbar zu machen.',
    svc1_title: 'Webdesign & Entwicklung',
    svc1_desc:  'Unser Kernservice. Wir entwickeln schnelle, moderne, vollständig individuelle Websites, die Ihre Marke widerspiegeln und Besucher zu Kunden machen. Von Landing Pages bis zu kompletten Unternehmensseiten — überzeugend ab dem ersten Scroll.',
    svc2_title: 'Markenidentität',
    svc2_desc:  'Logo, Farben, Typografie und visuelle Sprache — gestaltet, um Ihre Geschichte zu erzählen und Sie an jedem Touchpoint unverwechselbar zu machen.',
    svc3_title: 'SEO & Sichtbarkeit',
    svc3_desc:  'Besser ranken, schneller gefunden werden. Wir optimieren Struktur, Inhalte und Autorität Ihrer Website für nachhaltigen organischen Traffic.',
    svc4_title: 'Digitalstrategie',
    svc4_desc:  'Nicht sicher, wo anfangen? Wir analysieren Ihre digitale Präsenz, identifizieren Potenziale und entwickeln eine klare Roadmap für Ihr Online-Wachstum.',
    svc5_title: 'Wartung & Support',
    svc5_desc:  'Ihre Website immer in Topform. Updates, Sicherheit, Performance-Monitoring und schnelle Fehlerbehebung — alles inklusive.',

    // Process
    proc_tag:    'Unser Ablauf',
    proc_h2a:    'So arbeiten',
    proc_h2b:    'wir.',
    proc1_title: 'Erstgespräch',
    proc1_desc:  'Wir beginnen mit einem fokussierten Gespräch, um Ihr Unternehmen, Ihre Ziele, Ihre Zielgruppe und den Wettbewerb zu verstehen. Kein langes Ausfüllen — einfach ein echtes Gespräch, das uns schnell auf Kurs bringt.',
    proc2_title: 'Strategie & Angebot',
    proc2_desc:  'Wir übersetzen Erkenntnisse in einen klaren Projektplan — Umfang, Zeitplan, Technologie und visuelle Richtung — als prägnantes Angebot, auf dessen Basis Sie direkt entscheiden können.',
    proc3_title: 'Design & Entwicklung',
    proc3_desc:  'Wir gestalten und entwickeln in engen Feedback-Schleifen, damit Sie stets wissen, was passiert. Kein Blindflug — Sie prüfen bei jedem wichtigen Meilenstein.',
    proc4_title: 'Launch & Optimierung',
    proc4_desc:  'Wir übernehmen den technischen Launch, SEO-Setup, Performance-Checks und Nachbesserungen. Ihre Website geht poliert online — nicht halbfertig.',

    // Why Us
    why_tag:    'Warum ATIS Digital',
    why_h2a:    'Ergebnisse,',
    why_h2b:    'Keine Versprechen.',
    why1_title: 'Premium-Qualität, Boutique-Format',
    why1_desc:  'Sie bekommen einen engagierten Partner, keine Ticketnummer in einer großen Agenturwarteschlange. Jedes Projekt bekommt volle Aufmerksamkeit und Sorgfalt.',
    why2_title: 'Technisch fundiertes Denken',
    why2_desc:  'Das Studium der Elektrotechnik & Informatik gibt uns ein technisches Fundament, das die meisten Designagenturen schlicht nicht haben. Kluge Entscheidungen von Anfang an.',
    why3_title: 'Kenntnis des lokalen Marktes',
    why3_desc:  'Tiefes Verständnis für die Mallorca-Geschäftswelt — Tourismus, Immobilien, Gastronomie — bedeutet Strategien, die tatsächlich vor Ort wirken.',
    why4_title: 'Immer ergebnisorientiert',
    why4_desc:  'Gutes Design ist der Mindestanspruch. Das eigentliche Ziel: mehr Kunden, mehr Vertrauen und eine stärkere Wettbewerbsposition für Ihr Unternehmen.',

    // Industries
    ind_tag:    'Branchen',
    ind_h2a:    'Wir Kennen',
    ind_h2b:    'Ihren Markt',
    ind1_title: 'Hotellerie & Tourismus',
    ind1_desc:  'Hotels, Restaurants und Tourismusanbieter, die Browser in Buchungen verwandeln müssen.',
    ind2_title: 'Immobilien',
    ind2_desc:  'Makler und Projektentwickler, die eine Website brauchen, die so hochwertig ist wie die Objekte, die sie vermarkten.',
    ind3_title: 'Dienstleistungsunternehmen',
    ind3_desc:  'Lokale Fachleute und Servicefirmen, die online Vertrauen aufbauen und gefunden werden wollen.',
    ind4_title: 'Handel & E-Commerce',
    ind4_desc:  'Shops und Marken, die einen schnellen, überzeugenden Online-Shop brauchen, der wirklich verkauft.',

    // CTA
    cta_tag:        'Kontakt',
    cta_h2a:        'Bereit für den',
    cta_h2b:        'nächsten Schritt?',
    cta_desc:       'Erzähl uns von deiner Idee und wir erstellen ein unverbindliches Angebot. Ganz einfach.',
    cta_btn1:       'WhatsApp schreiben',
    cta_btn2:       'E-Mail senden',
    cta_email_note: 'Oder schreib uns an',

    // Footer
    footer_brand_desc:   'Eine Digitalagentur, die Unternehmen auf Mallorca und darüber hinaus dabei hilft, eine stärkere, professionellere Online-Präsenz aufzubauen.',
    footer_col_services: 'Leistungen',
    footer_col_company:  'Unternehmen',
    footer_col_contact:  'Kontakt',
    footer_about:        'Über uns',
    footer_copy:         '© 2025 ATIS Digital. Alle Rechte vorbehalten.',
    footer_credit:       'Gestaltet & entwickelt von ATIS Digital',
    wa_tooltip:          'Schreib uns',
  },
};

let currentLang = 'es';

function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key] !== undefined) {
      el.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  document.documentElement.lang = lang;
}

/* ============================================
   DOM Ready
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {

  /* ------------------------------------------
     Custom Cursor
  ------------------------------------------ */
  const cursor     = document.getElementById('cursor');
  const cursorRing = document.getElementById('cursor-ring');

  if ('ontouchstart' in window) {
    cursor.style.display     = 'none';
    cursorRing.style.display = 'none';
  } else {

  let mouseX = 0, mouseY = 0;
  let ringX  = 0, ringY  = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top  = mouseY + 'px';
  });

  // Smooth ring follow
  function animateCursorRing() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    cursorRing.style.left = ringX + 'px';
    cursorRing.style.top  = ringY + 'px';
    requestAnimationFrame(animateCursorRing);
  }
  animateCursorRing();

  // Expand ring on hoverable elements
  const hoverables = document.querySelectorAll('a, button, .service-card, .industry-card, #wa-float');
  hoverables.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursorRing.style.width       = '54px';
      cursorRing.style.height      = '54px';
      cursorRing.style.borderColor = 'var(--accent)';
    });
    el.addEventListener('mouseleave', () => {
      cursorRing.style.width       = '36px';
      cursorRing.style.height      = '36px';
      cursorRing.style.borderColor = 'rgba(77,255,195,0.4)';
    });
  });
  } // end non-touch cursor

  /* ------------------------------------------
     Navbar — add .scrolled class on scroll
  ------------------------------------------ */
  const nav = document.getElementById('nav');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  });

  /* ------------------------------------------
     Mobile hamburger menu
  ------------------------------------------ */
  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  function closeMobileMenu() {
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('open');
    nav.classList.remove('menu-open');
  }

  hamburger.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('open', open);
    nav.classList.toggle('menu-open', open);
  });

  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  /* ------------------------------------------
     Scroll Reveal
     Adds .visible to .reveal elements when
     they enter the viewport
  ------------------------------------------ */
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger siblings slightly
        entry.target.style.transitionDelay = (i * 0.05) + 's';
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12
  });

  revealElements.forEach(el => revealObserver.observe(el));

  /* ------------------------------------------
     Language Switcher
  ------------------------------------------ */
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });

  setLanguage('es');

  /* ------------------------------------------
     Hero Canvas — Particle Network
  ------------------------------------------ */
  const heroCanvas = document.getElementById('hero-canvas');
  if (heroCanvas && !('ontouchstart' in window)) {
    const ctx2 = heroCanvas.getContext('2d');
    let cW, cH, pts = [];
    const COUNT   = 75;
    const MAX_DIST = 160;

    function canvasResize() {
      const dpr = window.devicePixelRatio || 1;
      cW = heroCanvas.offsetWidth;
      cH = heroCanvas.offsetHeight;
      heroCanvas.width  = cW * dpr;
      heroCanvas.height = cH * dpr;
      ctx2.scale(dpr, dpr);
    }

    function initPts() {
      pts = [];
      for (let i = 0; i < COUNT; i++) {
        pts.push({
          x:  Math.random() * cW,
          y:  Math.random() * cH,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          r:  Math.random() * 1.5 + 0.5,
          a:  Math.random() * 0.45 + 0.15
        });
      }
    }

    function drawCanvas() {
      ctx2.clearRect(0, 0, cW, cH);
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = cW;
        if (p.x > cW) p.x = 0;
        if (p.y < 0) p.y = cH;
        if (p.y > cH) p.y = 0;

        // dot
        ctx2.beginPath();
        ctx2.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx2.fillStyle = `rgba(77,255,195,${p.a})`;
        ctx2.fill();

        // connections
        for (let j = i + 1; j < pts.length; j++) {
          const q   = pts[j];
          const dx  = p.x - q.x;
          const dy  = p.y - q.y;
          const d   = Math.sqrt(dx * dx + dy * dy);
          if (d < MAX_DIST) {
            ctx2.beginPath();
            ctx2.moveTo(p.x, p.y);
            ctx2.lineTo(q.x, q.y);
            ctx2.strokeStyle = `rgba(77,255,195,${(1 - d / MAX_DIST) * 0.12})`;
            ctx2.lineWidth   = 0.5;
            ctx2.stroke();
          }
        }
      }
      requestAnimationFrame(drawCanvas);
    }

    canvasResize();
    initPts();
    drawCanvas();
    window.addEventListener('resize', () => { canvasResize(); initPts(); });
  }

  /* ------------------------------------------
     3D Tilt — Why Visual
  ------------------------------------------ */
  const whyVisual = document.querySelector('.why-visual');
  if (whyVisual && !('ontouchstart' in window)) {
    const logo  = whyVisual.querySelector('.why-logo-img');
    const glow  = whyVisual.querySelector('.why-logo-glow');
    const MAX   = 16;

    whyVisual.addEventListener('mousemove', (e) => {
      const rect  = whyVisual.getBoundingClientRect();
      const x     = (e.clientX - rect.left) / rect.width  - 0.5;
      const y     = (e.clientY - rect.top)  / rect.height - 0.5;
      const rotY  =  x * MAX;
      const rotX  = -y * MAX;

      whyVisual.style.transition = 'transform 0.08s ease';
      whyVisual.style.transform  =
        `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.02,1.02,1.02)`;

      if (logo) logo.style.transform =
        `translateZ(40px) drop-shadow(0 0 40px rgba(77,255,195,0.4))`;

      if (glow) {
        glow.style.transform = `translate(${x * 40}px, ${y * 40}px)`;
      }
    });

    whyVisual.addEventListener('mouseleave', () => {
      whyVisual.style.transition = 'transform 0.6s ease';
      whyVisual.style.transform  = 'perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)';
      if (logo) logo.style.transform = 'translateZ(0px)';
      if (glow) glow.style.transform = 'translate(0,0)';
    });
  }

});
