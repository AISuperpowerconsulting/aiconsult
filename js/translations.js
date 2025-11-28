// Translations for AIConsult.ch
const translations = {
    de: {
        nav: {
            why: "Warum KI",
            solutions: "Lösungen",
            offers: "Angebote",
            success: "Erfolge",
            about: "Über uns",
            contact: "Kontakt"
        },
        hero: {
            overline: "SWISS AI CONSULTING",
            title: "Ihr Team wird KI lieben – nicht fürchten",
            subtitle: "Praxisnahe KI Workshops und Automatisierungen für Schweizer KMU. Ohne Fachchinesisch. Mit messbaren Resultaten. Von jemandem, der Ihren Alltag kennt.",
            cta_primary: "Jetzt 30min Gratis-Analyse buchen",
            cta_secondary: "Erfolgsgeschichten ansehen",
            trust: "Jahre Erfahrung · geschulte Personen · Schweizer KMU vertrauen uns"
        },
        why: {
            title: "Warum KI für Schweizer KMU jetzt wichtig ist",
            intro: "Generative KI wie ChatGPT oder Claude verändert Marketing, Vertrieb und Operations in hohem Tempo. In der Schweiz setzen immer mehr KMU KI für Texte, Analysen und Automatisierung ein. Wer früh lernt, diese Werkzeuge gezielt einzusetzen, spart Zeit, reduziert Fehler und verbessert die Qualität der Arbeit.",
            benefit1_title: "Mehr Zeit für Kunden",
            benefit1_text: "Wiederkehrende Aufgaben laufen im Hintergrund. Ihr Team konzentriert sich auf Beratung, Verkauf und Projekte mit Mehrwert.",
            benefit2_title: "Bessere Entscheide",
            benefit2_text: "KI unterstützt bei Analysen, Forecasts und Priorisierungen. Entscheidungen basieren stärker auf Daten als auf Bauchgefühl.",
            benefit3_title: "Attraktive Arbeitgeberin",
            benefit3_text: "Moderne Tools, klare Prozesse und digitale Skills machen Ihr Unternehmen interessanter für bestehende Mitarbeitende und neue Talente."
        },
        services: {
            title: "Lösungen für Ihre KI Reise",
            service1_title: "KI Strategie & Roadmap",
            service1_text: "Gemeinsam analysieren wir Geschäftsmodell und Prozesse, identifizieren konkrete KI Use Cases und erstellen eine klare Roadmap mit Prioritäten und Aufwand. So erhält die Geschäftsleitung eine Entscheidungsgrundlage, welche Projekte zuerst starten.",
            service2_title: "KI Workshops & Team-Trainings",
            service2_text: "Einsteiger Workshops für Teams ohne Erfahrung und Vertiefungstrainings für Marketing, Sales und Operations. Mit echten Beispielen aus Ihrem Alltag, Live Übungen und Vorlagen, die Ihr Team direkt weiter nutzt.",
            service3_title: "Automatisierung & AI Workflows",
            service3_text: "Aufbau von KI gestützten Workflows mit Tools wie Make, Zapier, n8n oder Microsoft Copilot. Verknüpfung Ihrer bestehenden Systeme und Einrichtung von AI Assistenten, die E-Mails, Dokumente und Datenflüsse unterstützen.",
            learn_more: "Mehr erfahren →"
        },
        testimonials: {
            title: "Was Kunden über die Zusammenarbeit sagen",
            subtitle: "Echte Ergebnisse von Schweizer KMU, die KI erfolgreich im Alltag einsetzen"
        },
        footer: {
            title: "Bereit für den nächsten Schritt mit KI?",
            subtitle: "Melden Sie sich für ein unverbindliches Gespräch.",
            response_time: "Antwort in der Regel innerhalb von 1–2 Arbeitstagen.",
            form_name: "Name",
            form_company: "Firma",
            form_email: "E-Mail",
            form_topic: "Thema",
            form_message: "Nachricht",
            form_submit: "Absenden",
            copyright: "2025 AIConsult.ch. Alle Rechte vorbehalten."
        }
    },
    en: {
        nav: {
            why: "Why AI",
            solutions: "Solutions",
            offers: "Offers",
            success: "Success Stories",
            about: "About us",
            contact: "Contact"
        },
        hero: {
            overline: "SWISS AI CONSULTING",
            title: "Your team will love AI – not fear it",
            subtitle: "Practical AI workshops and automation for Swiss SMEs. Without jargon. With measurable results. From someone who knows your daily business.",
            cta_primary: "Book free 30min analysis now",
            cta_secondary: "View success stories",
            trust: "years of experience · people trained · Swiss SMEs trust us"
        },
        why: {
            title: "Why AI is important for Swiss SMEs now",
            intro: "Generative AI like ChatGPT or Claude is transforming marketing, sales and operations at high speed. In Switzerland, more and more SMEs are using AI for texts, analysis and automation. Those who learn early to use these tools strategically save time, reduce errors and improve work quality.",
            benefit1_title: "More time for customers",
            benefit1_text: "Recurring tasks run in the background. Your team focuses on consulting, sales and projects with added value.",
            benefit2_title: "Better decisions",
            benefit2_text: "AI supports analysis, forecasts and prioritization. Decisions are based more on data than gut feeling.",
            benefit3_title: "Attractive employer",
            benefit3_text: "Modern tools, clear processes and digital skills make your company more interesting for existing employees and new talent."
        },
        services: {
            title: "Solutions for your AI journey",
            service1_title: "AI Strategy & Roadmap",
            service1_text: "Together we analyze business model and processes, identify concrete AI use cases and create a clear roadmap with priorities and effort. This gives management a decision basis on which projects to start first.",
            service2_title: "AI Workshops & Team Trainings",
            service2_text: "Beginner workshops for teams without experience and advanced trainings for marketing, sales and operations. With real examples from your daily work, live exercises and templates that your team can continue to use directly.",
            service3_title: "Automation & AI Workflows",
            service3_text: "Building AI-supported workflows with tools like Make, Zapier, n8n or Microsoft Copilot. Connecting your existing systems and setting up AI assistants that support emails, documents and data flows.",
            learn_more: "Learn more →"
        },
        testimonials: {
            title: "What customers say about working together",
            subtitle: "Real results from Swiss SMEs successfully using AI in their daily operations"
        },
        footer: {
            title: "Ready for the next step with AI?",
            subtitle: "Get in touch for a non-binding conversation.",
            response_time: "Response usually within 1-2 business days.",
            form_name: "Name",
            form_company: "Company",
            form_email: "Email",
            form_topic: "Topic",
            form_message: "Message",
            form_submit: "Submit",
            copyright: "2025 AIConsult.ch. All rights reserved."
        }
    }
};

// Language switching functionality
class LanguageSwitcher {
    constructor() {
        this.currentLang = localStorage.getItem('lang') || 'de';
        this.init();
    }

    init() {
        // Set initial language
        this.setLanguage(this.currentLang);

        // Add event listeners to language buttons
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const lang = e.target.dataset.lang;
                this.setLanguage(lang);
            });
        });
    }

    setLanguage(lang) {
        this.currentLang = lang;
        localStorage.setItem('lang', lang);

        // Update active button
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });

        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.dataset.i18n;
            const keys = key.split('.');
            let value = translations[lang];

            for (const k of keys) {
                value = value[k];
            }

            if (value) {
                element.textContent = value;
            }
        });

        // Update HTML lang attribute
        document.documentElement.lang = lang === 'de' ? 'de-CH' : 'en';
    }
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new LanguageSwitcher();
    });
} else {
    new LanguageSwitcher();
}
