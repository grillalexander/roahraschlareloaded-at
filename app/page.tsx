'use client';
import { useState, useEffect } from 'react';

export default function RoahRaschlaReloaded() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [imageModalOpen, setImageModalOpen] = useState(false);
    const [impressumModalOpen, setImpressumModalOpen] = useState(false);
    const [datenschutzModalOpen, setDatenschutzModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState('');
    const [scrollY, setScrollY] = useState(0);

    const openModal = (imageSrc: string) => {
        setModalImage(imageSrc);
        setImageModalOpen(true);
    };

    const closeModal = () => {
        setImageModalOpen(false);
    };

    const openImpressum = () => {
        setImpressumModalOpen(true);
    };

    const closeImpressum = () => {
        setImpressumModalOpen(false);
    };

    const openDatenschutz = () => {
        setDatenschutzModalOpen(true);
    };

    const closeDatenschutz = () => {
        setDatenschutzModalOpen(false);
    };

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMobileMenuOpen(false);
        }
    };

    useEffect(() => {
        const handleEscKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setImageModalOpen(false);
                setImpressumModalOpen(false);
                setDatenschutzModalOpen(false);
            }
        };

        const handleScroll = () => setScrollY(window.scrollY);

        document.addEventListener('keydown', handleEscKey);
        window.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('keydown', handleEscKey);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {/* Load custom fonts */}
            <link rel="stylesheet" href="/fonts/fonts.css" />

            <div className="font-body text-gray-900 bg-white">
                {/* Navigation */}
                <nav className="fixed top-0 w-full z-50 bg-white border-b border-gray-100 shadow-sm">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="flex justify-between items-center h-16">
                            <div className="flex-shrink-0 flex items-center">
                                <img
                                    src="/logo-full.jpg"
                                    alt="Roah Raschla Reloaded Logo"
                                    className="h-12 w-auto"
                                />
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-8">
                                    <a
                                        onClick={() => scrollToSection('home')}
                                        className="text-gray-900 hover:text-red-800 transition-colors duration-200 cursor-pointer font-medium">
                                        Home
                                    </a>
                                    <a
                                        onClick={() =>
                                            scrollToSection('ueber-uns')
                                        }
                                        className="text-gray-600 hover:text-red-800 transition-colors duration-200 cursor-pointer font-medium">
                                        Über uns
                                    </a>
                                    <a
                                        onClick={() =>
                                            scrollToSection('events')
                                        }
                                        className="text-gray-600 hover:text-red-800 transition-colors duration-200 cursor-pointer font-medium">
                                        Events
                                    </a>
                                    <a
                                        onClick={() =>
                                            scrollToSection('galerie')
                                        }
                                        className="text-gray-600 hover:text-red-800 transition-colors duration-200 cursor-pointer font-medium">
                                        Galerie
                                    </a>
                                    <a
                                        onClick={() =>
                                            scrollToSection('kontakt')
                                        }
                                        className="text-gray-600 hover:text-red-800 transition-colors duration-200 cursor-pointer font-medium">
                                        Kontakt
                                    </a>
                                </div>
                            </div>
                            <div className="flex space-x-4">
                                <a
                                    href="https://www.facebook.com/roahraschla_reloaded/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-red-800 transition-colors duration-200">
                                    <i className="fab fa-facebook"></i>
                                </a>
                                <a
                                    href="https://www.instagram.com/roahraschla_reloaded/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-red-800 transition-colors duration-200">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a
                                    href="https://open.spotify.com/user/31fas3j4lxldgcus5xzmpo7ypqdi"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-red-800 transition-colors duration-200">
                                    <i className="fab fa-spotify"></i>
                                </a>
                            </div>
                            {/* Mobile menu button */}
                            <div className="md:hidden">
                                <button
                                    onClick={() =>
                                        setMobileMenuOpen(!mobileMenuOpen)
                                    }
                                    className="text-gray-600 hover:text-red-800">
                                    <i className="fas fa-bars text-xl"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Mobile menu */}
                    {mobileMenuOpen && (
                        <div className="md:hidden bg-white border-t border-gray-100">
                            <div className="px-6 py-4 space-y-2">
                                <a
                                    onClick={() => scrollToSection('home')}
                                    className="block text-gray-900 hover:text-red-800 transition-colors duration-200 cursor-pointer font-medium">
                                    Home
                                </a>
                                <a
                                    onClick={() => scrollToSection('ueber-uns')}
                                    className="block text-gray-600 hover:text-red-800 transition-colors duration-200 cursor-pointer font-medium">
                                    Über uns
                                </a>
                                <a
                                    onClick={() => scrollToSection('events')}
                                    className="block text-gray-600 hover:text-red-800 transition-colors duration-200 cursor-pointer font-medium">
                                    Events
                                </a>
                                <a
                                    onClick={() => scrollToSection('galerie')}
                                    className="block text-gray-600 hover:text-red-800 transition-colors duration-200 cursor-pointer font-medium">
                                    Galerie
                                </a>
                                <a
                                    onClick={() => scrollToSection('kontakt')}
                                    className="block text-gray-600 hover:text-red-800 transition-colors duration-200 cursor-pointer font-medium">
                                    Kontakt
                                </a>
                            </div>
                        </div>
                    )}
                </nav>

                {/* Hero Section with Parallax */}
                <section
                    id="home"
                    className="relative min-h-screen flex items-center justify-center overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: `url('/hero-accordion.jpg')`,
                            transform: `translateY(${scrollY * 0.5}px)`,
                            willChange: 'transform',
                        }}></div>
                    <div className="absolute inset-0 bg-black/40"></div>

                    <div className="relative text-center px-6 max-w-4xl mx-auto text-white z-10">
                        <h1 className="text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight">
                            <span className="font-script font-bold text-yellow-400 block mb-4">
                                Tradition
                            </span>
                            <span className="font-script text-4xl md:text-6xl lg:text-7xl text-white">
                                & Leidenschaft
                            </span>
                        </h1>
                        <p className="font-script text-2xl md:text-3xl mb-12 max-w-2xl mx-auto leading-relaxed opacity-90 text-yellow-200">
                            Roah Raschla Reloaded - Musik aus dem Herzen des
                            Burgenlandes
                        </p>
                        <button
                            onClick={() => scrollToSection('ueber-uns')}
                            className="inline-flex items-center px-8 py-4 bg-red-800 text-white font-medium rounded-full hover:bg-red-700 transition-all duration-300 transform hover:scale-105 text-lg tracking-wide">
                            Mehr erfahren
                            <i className="fas fa-arrow-right ml-2"></i>
                        </button>
                    </div>
                </section>

                {/* Über uns Section */}
                <section id="ueber-uns" className="py-32 bg-white">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="text-center mb-20">
                            <h2 className="font-script text-5xl md:text-7xl font-bold text-red-800 mb-4">
                                Über uns
                            </h2>
                            <div className="w-24 h-1 bg-red-800 mx-auto mb-12"></div>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                Lernen Sie die talentierten Musiker unseres
                                Vereins kennen
                            </p>
                        </div>

                        <div className="mb-20">
                            <div className="mb-20">
                                <div className="max-w-4xl mx-auto text-center">
                                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
                                        Roah Raschla Reloaded ist ein
                                        traditionsreicher Musikverein, der seit
                                        Jahrzehnten die Blasmusik in unserer
                                        Region pflegt und weiterentwickelt.
                                        Unser Ensemble besteht aus
                                        leidenschaftlichen Musikern aller
                                        Altersgruppen, die gemeinsam ein
                                        vielfältiges Repertoire von klassischer
                                        Blasmusik bis hin zu modernen
                                        Arrangements darbieten.
                                    </p>
                                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
                                        Wir sind stolz auf unsere musikalische
                                        Tradition und freuen uns darauf, diese
                                        mit der Gemeinschaft zu teilen. Ob bei
                                        festlichen Anlässen, Konzerten oder
                                        geselligen Veranstaltungen – unsere
                                        Musik bringt Menschen zusammen und
                                        schafft unvergessliche Momente.
                                    </p>
                                    <div className="grid md:grid-cols-3 gap-8 mt-12">
                                        <div className="text-center">
                                            <div className="w-16 h-16 bg-red-800 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <i className="fas fa-music text-white text-2xl"></i>
                                            </div>
                                            <h4 className="font-glitch-sm text-lg text-gray-900 mb-2 tracking-wide">
                                                TRADITION
                                            </h4>
                                            <p className="text-gray-600">
                                                Seit Generationen pflegen wir
                                                die österreichische
                                                Blasmusiktradition
                                            </p>
                                        </div>
                                        <div className="text-center">
                                            <div className="w-16 h-16 bg-red-800 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <i className="fas fa-users text-white text-2xl"></i>
                                            </div>
                                            <h4 className="font-glitch-sm text-lg text-gray-900 mb-2 tracking-wide">
                                                GEMEINSCHAFT
                                            </h4>
                                            <p className="text-gray-600">
                                                Musik verbindet uns und schafft
                                                starke Gemeinschaftsgefühle
                                            </p>
                                        </div>
                                        <div className="text-center">
                                            <div className="w-16 h-16 bg-red-800 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <i className="fas fa-heart text-white text-2xl"></i>
                                            </div>
                                            <h4 className="font-glitch-sm text-lg text-gray-900 mb-2 tracking-wide">
                                                LEIDENSCHAFT
                                            </h4>
                                            <p className="text-gray-600">
                                                Mit Herzblut und Begeisterung
                                                musizieren wir für unser
                                                Publikum
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h3 className="font-script text-4xl font-bold text-center text-red-800 mb-16">
                                Unsere Besetzung
                            </h3>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                                {/* Musician Cards */}
                                <div className="text-center group">
                                    <div className="relative mb-6 overflow-hidden rounded-2xl">
                                        <img
                                            src="/musicians/alex.jpg"
                                            alt="Alex"
                                            className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                    <h4 className="font-glitch-sm text-lg text-gray-900 mb-2 tracking-wide">
                                        ALEX
                                    </h4>
                                    <p className="font-script text-lg text-red-800 font-semibold">
                                        Flügelhorn
                                    </p>
                                </div>

                                <div className="text-center group">
                                    <div className="relative mb-6 overflow-hidden rounded-2xl">
                                        <img
                                            src="/musicians/dominik.jpg"
                                            alt="Dominik"
                                            className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                    <h4 className="font-glitch-sm text-lg text-gray-900 mb-2 tracking-wide">
                                        DOMINIK
                                    </h4>
                                    <p className="font-script text-lg text-red-800 font-semibold">
                                        Trompete
                                    </p>
                                </div>

                                <div className="text-center group">
                                    <div className="relative mb-6 overflow-hidden rounded-2xl">
                                        <img
                                            src="/musicians/philipp.jpg"
                                            alt="Philipp"
                                            className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                    <h4 className="font-glitch-sm text-lg text-gray-900 mb-2 tracking-wide">
                                        PHILIPP
                                    </h4>
                                    <p className="font-script text-lg text-red-800 font-semibold">
                                        Trompete
                                    </p>
                                </div>

                                <div className="text-center group">
                                    <div className="relative mb-6 overflow-hidden rounded-2xl">
                                        <img
                                            src="/musicians/michael.jpg"
                                            alt="Michael"
                                            className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                    <h4 className="font-glitch-sm text-lg text-gray-900 mb-2 tracking-wide">
                                        MICHAEL
                                    </h4>
                                    <p className="font-script text-lg text-red-800 font-semibold">
                                        Akkordeon
                                    </p>
                                </div>

                                <div className="text-center group">
                                    <div className="relative mb-6 overflow-hidden rounded-2xl">
                                        <img
                                            src="/musicians/alex_2.jpg"
                                            alt="Michael"
                                            className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                    <h4 className="font-glitch-sm text-lg text-gray-900 mb-2 tracking-wide">
                                        ALEX
                                    </h4>
                                    <p className="font-script text-lg text-red-800 font-semibold">
                                        Akkordeon
                                    </p>
                                </div>

                                <div className="text-center group">
                                    <div className="relative mb-6 overflow-hidden rounded-2xl">
                                        <img
                                            src="/musicians/fabian.jpg"
                                            alt="Michael"
                                            className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                    <h4 className="font-glitch-sm text-lg text-gray-900 mb-2 tracking-wide">
                                        FABIAN
                                    </h4>
                                    <p className="font-script text-lg text-red-800 font-semibold">
                                        Akkordeon
                                    </p>
                                </div>

                                <div className="text-center group">
                                    <div className="relative mb-6 overflow-hidden rounded-2xl">
                                        <img
                                            src="/musicians/alex_3.jpg"
                                            alt="Michael"
                                            className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                    <h4 className="font-glitch-sm text-lg text-gray-900 mb-2 tracking-wide">
                                        ALEX
                                    </h4>
                                    <p className="font-script text-lg text-red-800 font-semibold">
                                        Akkordeon
                                    </p>
                                </div>

                                <div className="text-center group">
                                    <div className="relative mb-6 overflow-hidden rounded-2xl">
                                        <img
                                            src="/musicians/richi.jpg"
                                            alt="Michael"
                                            className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                    <h4 className="font-glitch-sm text-lg text-gray-900 mb-2 tracking-wide">
                                        RICHI
                                    </h4>
                                    <p className="font-script text-lg text-red-800 font-semibold">
                                        Akkordeon
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Events Section */}
                <section id="events" className="py-32 bg-gray-50">
                    <div className="max-w-6xl mx-auto px-6 lg:px-8">
                        <div className="text-center mb-20">
                            <h2 className="font-script text-5xl md:text-7xl font-bold text-red-800 mb-4">
                                Events
                            </h2>
                            <div className="w-24 h-1 bg-red-800 mx-auto mb-12"></div>
                        </div>

                        {/* Upcoming Events */}
                        <div className="mb-16">
                            <h3 className="text-2xl text-gray-900 mb-12 text-center">
                                KOMMENDE VERANSTALTUNGEN
                            </h3>
                            <div className="space-y-8">
                                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <div className="flex flex-col md:flex-row gap-8">
                                        <div className="md:w-1/3">
                                            <img
                                                src="/event-lanterns.jpg"
                                                alt="Dämmerschoppen Müllendorf Lindenfest"
                                                className="w-full h-48 object-cover rounded-xl"
                                            />
                                        </div>
                                        <div className="md:w-2/3">
                                            <h4 className="text-xl text-gray-900 mb-3">
                                                DÄMMERSCHOPPEN MÜLLENDORF
                                                LINDENFEST
                                            </h4>
                                            <p className="text-gray-600 mb-4 leading-relaxed">
                                                Probe für das traditionelle
                                                Lindenfest in Müllendorf. Wir
                                                bereiten uns auf einen
                                                stimmungsvollen Auftritt vor.
                                            </p>
                                            <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                                                <span>
                                                    <i className="fas fa-calendar mr-2"></i>
                                                    13. Juli 2025, 12:00
                                                </span>
                                                <span>
                                                    <i className="fas fa-music mr-2"></i>
                                                    Probe
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <div className="flex flex-col md:flex-row gap-8">
                                        <div className="md:w-1/3">
                                            <img
                                                src="/event-lanterns.jpg"
                                                alt="Frühschoppen MV Marz"
                                                className="w-full h-48 object-cover rounded-xl"
                                            />
                                        </div>
                                        <div className="md:w-2/3">
                                            <h4 className="text-xl text-gray-900 mb-3">
                                                FRÜHSCHOPPEN MV MARZ
                                            </h4>
                                            <p className="text-gray-600 mb-4 leading-relaxed">
                                                Auftritt beim traditionellen
                                                Frühschoppen des Musikvereins
                                                Marz. Ein geselliger Vormittag
                                                mit Blasmusik.
                                            </p>
                                            <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                                                <span>
                                                    <i className="fas fa-calendar mr-2"></i>
                                                    24. August 2025, 11:00
                                                </span>
                                                <span>
                                                    <i className="fas fa-map-marker-alt mr-2"></i>
                                                    Marz
                                                </span>
                                                <span>
                                                    <i className="fas fa-music mr-2"></i>
                                                    Auftritt
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <div className="flex flex-col md:flex-row gap-8">
                                        <div className="md:w-1/3">
                                            <img
                                                src="/event-lanterns.jpg"
                                                alt="Kirtag Mörbisch"
                                                className="w-full h-48 object-cover rounded-xl"
                                            />
                                        </div>
                                        <div className="md:w-2/3">
                                            <h4 className="text-xl text-gray-900 mb-3">
                                                KIRTAG MÖRBISCH
                                            </h4>
                                            <p className="text-gray-600 mb-4 leading-relaxed">
                                                Auftritt beim traditionellen
                                                Kirtag in Mörbisch. Ein
                                                Höhepunkt im
                                                Veranstaltungskalender mit
                                                festlicher Atmosphäre.
                                            </p>
                                            <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                                                <span>
                                                    <i className="fas fa-calendar mr-2"></i>
                                                    12. September 2025, 19:00
                                                </span>
                                                <span>
                                                    <i className="fas fa-map-marker-alt mr-2"></i>
                                                    Mörbisch
                                                </span>
                                                <span>
                                                    <i className="fas fa-music mr-2"></i>
                                                    Auftritt
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <div className="flex flex-col md:flex-row gap-8">
                                        <div className="md:w-1/3">
                                            <img
                                                src="/event-lanterns.jpg"
                                                alt="Auftrittsanfrage in Stotzing"
                                                className="w-full h-48 object-cover rounded-xl"
                                            />
                                        </div>
                                        <div className="md:w-2/3">
                                            <h4 className="text-xl text-gray-900 mb-3">
                                                AUFTRITTSANFRAGE IN STOTZING
                                            </h4>
                                            <p className="text-gray-600 mb-4 leading-relaxed">
                                                Probe für eine mögliche
                                                Auftrittsanfrage in Stotzing.
                                                Wir bereiten uns auf
                                                verschiedene Repertoire-Stücke
                                                vor.
                                            </p>
                                            <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                                                <span>
                                                    <i className="fas fa-calendar mr-2"></i>
                                                    27. September 2025, 19:00
                                                </span>
                                                <span>
                                                    <i className="fas fa-map-marker-alt mr-2"></i>
                                                    Stotzing
                                                </span>
                                                <span>
                                                    <i className="fas fa-music mr-2"></i>
                                                    Probe
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Past Events */}
                        <div>
                            <h3 className="text-2xl text-gray-900 mb-12 text-center">
                                VERGANGENE VERANSTALTUNGEN
                            </h3>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="bg-white rounded-2xl p-6 shadow-lg">
                                    <div className="flex items-start justify-between mb-3">
                                        <h4 className="font-glitch-sm text-lg text-gray-900 tracking-wide">
                                            REMUSHOF - WEINFEST JAGSCHITZ
                                        </h4>
                                        <span className="bg-red-100 text-red-800 text-xs font-glitch-sm px-2.5 py-0.5 rounded-full tracking-wider">
                                            PERFORMANCE
                                        </span>
                                    </div>
                                    <p className="text-gray-600 mb-4">
                                        Gemütlicher Auftritt beim
                                        traditionsreichen Remushof der Familie
                                        Jagschitz. Wein, Musik und pannonisches
                                        Flair.
                                    </p>
                                    <div className="text-sm text-gray-500 mb-3">
                                        <span>
                                            <i className="fas fa-calendar mr-2"></i>
                                            Samstag, 17. August, 18:00
                                        </span>
                                    </div>
                                    <a
                                        href="https://www.facebook.com/remushofjagschitz.at/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-glitch-sm text-red-800 hover:text-red-600 text-sm tracking-wide">
                                        MEHR INFOS{' '}
                                        <i className="fas fa-external-link-alt ml-1"></i>
                                    </a>
                                </div>

                                <div className="bg-white rounded-2xl p-6 shadow-lg">
                                    <div className="flex items-start justify-between mb-3">
                                        <h4 className="font-glitch-sm text-lg text-gray-900 tracking-wide">
                                            ORF AUFNAHME – „ÖSTERREICH HEUTE"
                                        </h4>
                                        <span className="bg-blue-100 text-blue-800 text-xs font-glitch-sm px-2.5 py-0.5 rounded-full tracking-wider">
                                            RECORDING
                                        </span>
                                    </div>
                                    <p className="text-gray-600 mb-4">
                                        Fernsehauftritt für die Sendung
                                        „Österreich heute" – Musikbeitrag im
                                        Rahmen der regionalen
                                        Kulturberichterstattung.
                                    </p>
                                    <div className="text-sm text-gray-500 mb-3">
                                        <span>
                                            <i className="fas fa-calendar mr-2"></i>
                                            Mittwoch, 4. September, 17:00
                                        </span>
                                    </div>
                                    <a
                                        href="https://tv.orf.at/program/orf2/oesterreic9716.html"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-glitch-sm text-red-800 hover:text-red-600 text-sm tracking-wide">
                                        ZUR SENDUNG{' '}
                                        <i className="fas fa-external-link-alt ml-1"></i>
                                    </a>
                                </div>

                                <div className="bg-white rounded-2xl p-6 shadow-lg md:col-span-2">
                                    <div className="flex items-start justify-between mb-3">
                                        <h4 className="font-glitch-sm text-lg text-gray-900 tracking-wide">
                                            KIRTAG MÖRBISCH – AUFTRITT CSÁRDA
                                        </h4>
                                        <span className="bg-red-100 text-red-800 text-xs font-glitch-sm px-2.5 py-0.5 rounded-full tracking-wider">
                                            PERFORMANCE
                                        </span>
                                    </div>
                                    <p className="text-gray-600 mb-4">
                                        Stimmungsvolle Musik beim traditionellen
                                        Kirtag in Mörbisch – diesmal im
                                        kleineren Rahmen bei der Csárda.
                                    </p>
                                    <div className="text-sm text-gray-500 mb-3">
                                        <span>
                                            <i className="fas fa-calendar mr-2"></i>
                                            Sonntag, 22. September, 14:00
                                        </span>
                                    </div>
                                    <a
                                        href="https://www.bvz.at/eisenstadt/kirtag-goes-csarda-in-moerbisch-gab-s-wetterbedingt-die-kleine-version-des-kirtags-440087135"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-glitch-sm text-red-800 hover:text-red-600 text-sm tracking-wide">
                                        ZUM BERICHT{' '}
                                        <i className="fas fa-external-link-alt ml-1"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Galerie Section */}
                <section id="galerie" className="py-32 bg-white">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="text-center mb-20">
                            <h2 className="font-script text-5xl md:text-7xl font-bold text-red-800 mb-4">
                                Galerie
                            </h2>
                            <div className="w-24 h-1 bg-red-800 mx-auto mb-12"></div>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                Eindrücke von unseren Auftritten und
                                Veranstaltungen
                            </p>
                        </div>

                        {/* Gallery Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                            {/* Large Featured Image */}
                            <div className="md:col-span-2 md:row-span-2">
                                <div
                                    className="cursor-pointer h-full hover:scale-105 transition-transform duration-300"
                                    onClick={() =>
                                        openModal('/gallery/rrr_1.jpg')
                                    }>
                                    <img
                                        src="/gallery/rrr_1.jpg"
                                        alt="Musikgruppe im Freien"
                                        className="w-full h-full object-cover rounded-2xl shadow-lg"
                                    />
                                </div>
                            </div>

                            {/* Regular Images */}
                            {[
                                {
                                    src: '/gallery/rrr_2.jpg',
                                    alt: 'Probe der Musikgruppe',
                                },
                                {
                                    src: '/gallery/rrr_3.jpg',
                                    alt: 'Auftritt bei Veranstaltung',
                                },
                                {
                                    src: '/gallery/rrr_4.jpg',
                                    alt: 'Gruppenfoto der Musiker',
                                },
                                {
                                    src: '/gallery/rrr_5.jpg',
                                    alt: 'Musikinstrumente im Einsatz',
                                },
                                {
                                    src: '/gallery/rrr_6.jpg',
                                    alt: 'Dirigent bei der Arbeit',
                                },
                                {
                                    src: '/gallery/rrr_7.jpg',
                                    alt: 'Festliche Veranstaltung',
                                },
                                {
                                    src: '/gallery/rrr_8.jpg',
                                    alt: 'Begeistertes Publikum',
                                },
                            ].map((image, index) => (
                                <div
                                    key={index}
                                    className="cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openModal(image.src)}>
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="w-full h-64 object-cover rounded-2xl shadow-lg"
                                    />
                                </div>
                            ))}

                            {/* Wide Image at the Bottom */}
                            <div className="md:col-span-2">
                                <div
                                    className="cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() =>
                                        openModal('/gallery/rrr_9.jpg')
                                    }>
                                    <img
                                        src="/gallery/rrr_9.jpg"
                                        alt="Bühnenauftritt der Musikgruppe"
                                        className="w-full h-64 object-cover rounded-2xl shadow-lg"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Kontakt Section */}
                <section id="kontakt" className="py-32 bg-gray-50">
                    <div className="max-w-6xl mx-auto px-6 lg:px-8">
                        <div className="text-center mb-20">
                            <h2 className="font-script text-5xl md:text-7xl font-bold text-red-800 mb-4">
                                Kontakt
                            </h2>
                            <div className="w-24 h-1 bg-red-800 mx-auto mb-12"></div>
                        </div>

                        <div className="max-w-2xl mx-auto">
                            <h3 className="heading-script text-xl text-gray-900 mb-8 text-center">
                                Nehmen Sie Kontakt auf
                            </h3>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-red-800 rounded-full flex items-center justify-center text-white">
                                        <i className="fas fa-map-marker-alt"></i>
                                    </div>
                                    <div>
                                        <h4 className="text-gray-900 mb-1">
                                            Adresse
                                        </h4>
                                        <p className="text-gray-600">
                                            Mühlweg 4
                                            <br />
                                            7062 St. Margarethen im Burgenland
                                            <br />
                                            Österreich
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-red-800 rounded-full flex items-center justify-center text-white">
                                        <i className="fas fa-phone"></i>
                                    </div>
                                    <div>
                                        <h4 className="text-gray-900 mb-1">
                                            Telefon
                                        </h4>
                                        <p className="text-gray-600">
                                            +43 676 4072973
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-red-800 rounded-full flex items-center justify-center text-white">
                                        <i className="fas fa-envelope"></i>
                                    </div>
                                    <div>
                                        <h4 className="text-gray-900 mb-1">
                                            E-Mail
                                        </h4>
                                        <p className="text-gray-600">
                                            roahraschlareloaded@gmail.com
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-white py-16 border-t border-gray-100">
                    <div className="max-w-6xl mx-auto px-6 lg:px-8">
                        <div className="grid md:grid-cols-3 gap-12">
                            <div>
                                <div className="flex items-center mb-4">
                                    <img
                                        src="/logo-full.jpg"
                                        alt="Roah Raschla Reloaded Logo"
                                        className="h-16 w-auto"
                                    />
                                </div>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Seit 1920 bringen wir Musik in unsere
                                    Gemeinde und pflegen die Tradition der
                                    Blasmusik mit Leidenschaft und Hingabe.
                                </p>
                                <div className="flex space-x-4">
                                    <a
                                        href="https://www.instagram.com/roahraschla_reloaded/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-red-800 hover:text-white transition-all duration-300"
                                        title="Instagram">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                    <a
                                        href="https://open.spotify.com/user/31fas3j4lxldgcus5xzmpo7ypqdi"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-red-800 hover:text-white transition-all duration-300"
                                        title="Spotify">
                                        <i className="fab fa-spotify"></i>
                                    </a>
                                </div>
                            </div>

                            <div>
                                <h4 className="heading-script text-lg text-gray-900 mb-6">
                                    Schnelllinks
                                </h4>
                                <ul className="space-y-3">
                                    <li>
                                        <a
                                            onClick={() =>
                                                scrollToSection('home')
                                            }
                                            className="text-gray-600 hover:text-red-800 transition-colors duration-200 cursor-pointer font-medium">
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            onClick={() =>
                                                scrollToSection('ueber-uns')
                                            }
                                            className="text-gray-600 hover:text-red-800 transition-colors duration-200 cursor-pointer font-medium">
                                            Über uns
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            onClick={() =>
                                                scrollToSection('events')
                                            }
                                            className="text-gray-600 hover:text-red-800 transition-colors duration-200 cursor-pointer font-medium">
                                            Events
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            onClick={() =>
                                                scrollToSection('galerie')
                                            }
                                            className="text-gray-600 hover:text-red-800 transition-colors duration-200 cursor-pointer font-medium">
                                            Galerie
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            onClick={() =>
                                                scrollToSection('kontakt')
                                            }
                                            className="text-gray-600 hover:text-red-800 transition-colors duration-200 cursor-pointer font-medium">
                                            Kontakt
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="heading-script text-lg text-gray-900 mb-6">
                                    Kontakt
                                </h4>
                                <ul className="space-y-3">
                                    <li className="text-gray-600">Mühlweg 4</li>
                                    <li className="text-gray-600">
                                        7062 St. Margarethen im Burgenland
                                    </li>
                                    <li className="text-gray-600">
                                        +43 676 4072973
                                    </li>
                                    <li className="text-gray-600">
                                        roahraschlareloaded@gmail.com
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="border-t border-gray-100 mt-12 pt-8 text-center">
                            <div className="flex justify-center space-x-6 mb-4">
                                <button
                                    onClick={openImpressum}
                                    className="text-gray-600 hover:text-red-800 transition-colors duration-200 text-sm font-medium">
                                    Impressum
                                </button>
                                <button
                                    onClick={openDatenschutz}
                                    className="text-gray-600 hover:text-red-800 transition-colors duration-200 text-sm font-medium">
                                    Datenschutz
                                </button>
                            </div>
                            <p className="text-gray-600">
                                &copy; 2025 Roah Raschla Reloaded. Alle Rechte
                                vorbehalten.
                            </p>
                        </div>
                    </div>
                </footer>

                {/* Image Modal */}
                {imageModalOpen && (
                    <div
                        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
                        onClick={closeModal}>
                        <div
                            className="relative max-w-4xl max-h-full"
                            onClick={(e) => e.stopPropagation()}>
                            <img
                                src={modalImage || '/placeholder.svg'}
                                alt=""
                                className="max-w-full max-h-full object-contain rounded-lg"
                            />
                            <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300">
                                <i className="fas fa-times"></i>
                            </button>
                        </div>
                    </div>
                )}

                {/* Impressum Modal */}
                {impressumModalOpen && (
                    <div
                        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
                        onClick={closeImpressum}>
                        <div
                            className="bg-white rounded-2xl max-w-2xl max-h-[80vh] overflow-y-auto p-8 relative"
                            onClick={(e) => e.stopPropagation()}>
                            <button
                                onClick={closeImpressum}
                                className="absolute top-4 right-4 text-gray-600 hover:text-red-800 text-2xl">
                                <i className="fas fa-times"></i>
                            </button>
                            <h2 className="font-glitch-sm text-2xl text-gray-900 mb-6 tracking-wide">
                                IMPRESSUM
                            </h2>

                            <div className="space-y-6 text-gray-700">
                                <div>
                                    <h3 className="font-glitch-sm text-lg text-gray-900 mb-2 tracking-wide">
                                        ROAH-RASCHLA RELOADED
                                    </h3>
                                    <p>
                                        Mühlweg 4<br />
                                        7062 St. Margarethen im Burgenland
                                        <br />
                                        Österreich
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-glitch-sm text-lg text-gray-900 mb-2 tracking-wide">
                                        VEREINSREGISTER
                                    </h3>
                                    <p>
                                        Roah-Raschla Reloaded
                                        <br />
                                        Sitz des Vereins: Sankt Margarethen im
                                        Burgenland
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-glitch-sm text-lg text-gray-900 mb-2 tracking-wide">
                                        VERTRETUNGSBEFUGTE PERSON
                                    </h3>
                                    <p>Obmann: Michael Artner</p>
                                </div>

                                <div>
                                    <h3 className="font-glitch-sm text-lg text-gray-900 mb-2 tracking-wide">
                                        KONTAKT
                                    </h3>
                                    <p>
                                        E-Mail: roahraschlareloaded@gmail.com
                                        <br />
                                        Telefon: +43 676 4072973
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-glitch-sm text-lg text-gray-900 mb-2 tracking-wide">
                                        MEDIENINHABER, HERAUSGEBER UND FÜR DEN
                                        INHALT VERANTWORTLICH
                                    </h3>
                                    <p>
                                        Roah-Raschla Reloaded
                                        <br />
                                        Obmann: Michael Artner
                                        <br />
                                        Mühlweg 4<br />
                                        7062 St. Margarethen im Burgenland
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-glitch-sm text-lg text-gray-900 mb-2 tracking-wide">
                                        GRUNDLEGENDE RICHTUNG DER WEBSITE
                                    </h3>
                                    <p>
                                        Diese Website dient der Information über
                                        den Musikverein Roah-Raschla Reloaded,
                                        seine Aktivitäten und Veranstaltungen.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-glitch-sm text-lg text-gray-900 mb-2 tracking-wide">
                                        HINWEIS
                                    </h3>
                                    <p>
                                        Roah-Raschla Reloaded ist ein
                                        gemeinnütziger Verein gemäß den
                                        Bestimmungen des österreichischen
                                        Vereinsgesetzes.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-glitch-sm text-lg text-gray-900 mb-2 tracking-wide">
                                        HAFTUNGSAUSSCHLUSS
                                    </h3>
                                    <h4 className="font-glitch-sm font-semibold mb-2 tracking-wide">
                                        HAFTUNG FÜR INHALTE
                                    </h4>
                                    <p className="mb-4">
                                        Als Diensteanbieter sind wir gemäß § 7
                                        Abs.1 TMG für eigene Inhalte auf diesen
                                        Seiten nach den allgemeinen Gesetzen
                                        verantwortlich. Nach §§ 8 bis 10 TMG
                                        sind wir als Diensteanbieter jedoch
                                        nicht unter der Verpflichtung,
                                        übermittelte oder gespeicherte fremde
                                        Informationen zu überwachen oder nach
                                        Umständen zu forschen, die auf eine
                                        rechtswidrige Tätigkeit hinweisen.
                                    </p>

                                    <h4 className="font-glitch-sm font-semibold mb-2 tracking-wide">
                                        HAFTUNG FÜR LINKS
                                    </h4>
                                    <p>
                                        Unser Angebot enthält Links zu externen
                                        Websites Dritter, auf deren Inhalte wir
                                        keinen Einfluss haben. Deshalb können
                                        wir für diese fremden Inhalte auch keine
                                        Gewähr übernehmen. Für die Inhalte der
                                        verlinkten Seiten ist stets der
                                        jeweilige Anbieter oder Betreiber der
                                        Seiten verantwortlich.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Datenschutz Modal */}
                {datenschutzModalOpen && (
                    <div
                        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
                        onClick={closeDatenschutz}>
                        <div
                            className="bg-white rounded-2xl max-w-4xl max-h-[80vh] overflow-y-auto p-8 relative"
                            onClick={(e) => e.stopPropagation()}>
                            <button
                                onClick={closeDatenschutz}
                                className="absolute top-4 right-4 text-gray-600 hover:text-red-800 text-2xl">
                                <i className="fas fa-times"></i>
                            </button>

                            <div className="container mx-auto max-w-4xl">
                                <h1 className="heading-script text-3xl mb-6 text-gray-900">
                                    Datenschutzerklärung
                                </h1>

                                <div className="mb-8 p-4 border border-gray-300 rounded-md bg-gray-50">
                                    <p className="text-gray-700">
                                        Diese Datenschutzerklärung ist das
                                        deutsche Original. Die Übersetzungen
                                        dienen nur zur Information. Im Falle von
                                        Abweichungen oder Unstimmigkeiten hat
                                        die deutsche Version Vorrang.
                                    </p>
                                </div>

                                <div className="space-y-6 text-gray-700">
                                    <div>
                                        <h2 className="heading-script text-xl mb-3 text-gray-900">
                                            Einleitung und Überblick
                                        </h2>
                                        <p className="mb-4">
                                            Wir haben diese Datenschutzerklärung
                                            (Fassung 12.03.2025-112963921)
                                            verfasst, um Ihnen gemäß der
                                            Vorgaben der{' '}
                                            <a
                                                className="text-blue-600 hover:underline"
                                                href="https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32016R0679&from=DE&tid=112963921#d1e2269-1-1"
                                                target="_blank"
                                                rel="noreferrer noopener">
                                                Datenschutz-Grundverordnung (EU)
                                                2016/679
                                            </a>{' '}
                                            und anwendbaren nationalen Gesetzen
                                            zu erklären, welche
                                            personenbezogenen Daten (kurz Daten)
                                            wir als Verantwortliche – und die
                                            von uns beauftragten
                                            Auftragsverarbeiter (z. B. Provider)
                                            – verarbeiten, zukünftig verarbeiten
                                            werden und welche rechtmäßigen
                                            Möglichkeiten Sie haben.
                                            <br />
                                            <strong>Kurz gesagt:</strong> Wir
                                            informieren Sie umfassend über
                                            Daten, die wir über Sie verarbeiten.
                                        </p>
                                        <p className="mb-4">
                                            Datenschutzerklärungen klingen für
                                            gewöhnlich sehr technisch und
                                            verwenden juristische Fachbegriffe.
                                            Diese Datenschutzerklärung soll
                                            Ihnen hingegen die wichtigsten Dinge
                                            so einfach und transparent wie
                                            möglich beschreiben. Soweit es der
                                            Transparenz förderlich ist, werden
                                            technische{' '}
                                            <strong>
                                                Begriffe leserfreundlich erklärt
                                            </strong>
                                            , Links zu weiterführenden
                                            Informationen geboten und{' '}
                                            <strong>Grafiken</strong> zum
                                            Einsatz gebracht. Wir informieren
                                            damit in klarer und einfacher
                                            Sprache, dass wir im Rahmen unserer
                                            Geschäftstätigkeiten nur dann
                                            personenbezogene Daten verarbeiten,
                                            wenn eine entsprechende gesetzliche
                                            Grundlage gegeben ist. Das ist
                                            sicher nicht möglich, wenn man
                                            möglichst knappe, unklare und
                                            juristisch-technische Erklärungen
                                            abgibt, so wie sie im Internet oft
                                            Standard sind, wenn es um
                                            Datenschutz geht. Ich hoffe, Sie
                                            finden die folgenden Erläuterungen
                                            interessant und informativ und
                                            vielleicht ist die eine oder andere
                                            Information dabei, die Sie noch
                                            nicht kannten.
                                            <br />
                                            Wenn trotzdem Fragen bleiben,
                                            möchten wir Sie bitten, sich an die
                                            unten genannte verantwortliche
                                            Stelle zu wenden, den vorhandenen
                                            Links zu folgen und sich weitere
                                            Informationen auf Drittseiten
                                            anzusehen. Unsere Kontaktdaten
                                            finden Sie selbstverständlich auch
                                            im Impressum.
                                        </p>
                                    </div>

                                    <div>
                                        <h2 className="heading-script text-xl mb-3 text-gray-900">
                                            Anwendungsbereich
                                        </h2>
                                        <p className="mb-4">
                                            Diese Datenschutzerklärung gilt für
                                            alle von uns im Unternehmen
                                            verarbeiteten personenbezogenen
                                            Daten und für alle personenbezogenen
                                            Daten, die von uns beauftragte
                                            Firmen (Auftragsverarbeiter)
                                            verarbeiten. Mit personenbezogenen
                                            Daten meinen wir Informationen im
                                            Sinne des Art. 4 Nr. 1 DSGVO wie zum
                                            Beispiel Name, E-Mail-Adresse und
                                            postalische Anschrift einer Person.
                                            Die Verarbeitung personenbezogener
                                            Daten sorgt dafür, dass wir unsere
                                            Dienstleistungen und Produkte
                                            anbieten und abrechnen können, sei
                                            es online oder offline. Der
                                            Anwendungsbereich dieser
                                            Datenschutzerklärung umfasst:
                                        </p>
                                        <ul className="list-disc list-inside mb-4 space-y-1">
                                            <li>
                                                alle Onlineauftritte (Websites,
                                                Onlineshops), die wir betreiben
                                            </li>
                                            <li>
                                                Social Media Auftritte und
                                                E-Mail-Kommunikation
                                            </li>
                                            <li>
                                                mobile Apps für Smartphones und
                                                andere Geräte
                                            </li>
                                        </ul>
                                        <p className="mb-4">
                                            <strong>Kurz gesagt:</strong> Die
                                            Datenschutzerklärung gilt für alle
                                            Bereiche, in denen personenbezogene
                                            Daten im Unternehmen über die
                                            genannten Kanäle strukturiert
                                            verarbeitet werden. Sollten wir
                                            außerhalb dieser Kanäle mit Ihnen in
                                            Rechtsbeziehungen eintreten, werden
                                            wir Sie gegebenenfalls gesondert
                                            informieren.
                                        </p>
                                    </div>

                                    <div>
                                        <h2 className="heading-script text-xl mb-3 text-gray-900">
                                            Rechtsgrundlagen
                                        </h2>
                                        <p className="mb-4">
                                            In der folgenden
                                            Datenschutzerklärung geben wir Ihnen
                                            transparente Informationen zu den
                                            rechtlichen Grundsätzen und
                                            Vorschriften, also den
                                            Rechtsgrundlagen der
                                            Datenschutz-Grundverordnung, die uns
                                            ermöglichen, personenbezogene Daten
                                            zu verarbeiten.
                                            <br />
                                            Was das EU-Recht angeht, beziehen
                                            wir uns auf die VERORDNUNG (EU)
                                            2016/679 DES EUROPÄISCHEN PARLAMENTS
                                            UND DES RATES vom 27. April 2016.
                                            Diese Datenschutz-Grundverordnung
                                            der EU können Sie selbstverständlich
                                            online auf EUR-Lex, dem Zugang zum
                                            EU-Recht, unter{' '}
                                            <a
                                                className="text-blue-600 hover:underline"
                                                href="https://eur-lex.europa.eu/legal-content/DE/ALL/?uri=celex%3A32016R0679"
                                                target="_blank"
                                                rel="noreferrer noopener">
                                                https://eur-lex.europa.eu/legal-content/DE/ALL/?uri=celex%3A32016R0679
                                            </a>{' '}
                                            nachlesen.
                                        </p>
                                        <p className="mb-4">
                                            Wir verarbeiten Ihre Daten nur, wenn
                                            mindestens eine der folgenden
                                            Bedingungen zutrifft:
                                        </p>
                                        <ol className="list-decimal list-inside mb-4 space-y-2">
                                            <li>
                                                <strong>Einwilligung</strong>{' '}
                                                (Artikel 6 Absatz 1 lit. a
                                                DSGVO): Sie haben uns Ihre
                                                Einwilligung gegeben, Daten zu
                                                einem bestimmten Zweck zu
                                                verarbeiten. Ein Beispiel wäre
                                                die Speicherung Ihrer
                                                eingegebenen Daten eines
                                                Kontaktformulars.
                                            </li>
                                            <li>
                                                <strong>Vertrag</strong>{' '}
                                                (Artikel 6 Absatz 1 lit. b
                                                DSGVO): Um einen Vertrag oder
                                                vorvertragliche Verpflichtungen
                                                mit Ihnen zu erfüllen,
                                                verarbeiten wir Ihre Daten. Wenn
                                                wir zum Beispiel einen
                                                Kaufvertrag mit Ihnen
                                                abschließen, benötigen wir vorab
                                                personenbezogene Informationen.
                                            </li>
                                            <li>
                                                <strong>
                                                    Rechtliche Verpflichtung
                                                </strong>{' '}
                                                (Artikel 6 Absatz 1 lit. c
                                                DSGVO): Wenn wir einer
                                                rechtlichen Verpflichtung
                                                unterliegen, verarbeiten wir
                                                Ihre Daten. Zum Beispiel sind
                                                wir gesetzlich verpflichtet
                                                Rechnungen für die Buchhaltung
                                                aufzuheben. Diese enthalten in
                                                der Regel personenbezogene
                                                Daten.
                                            </li>
                                            <li>
                                                <strong>
                                                    Berechtigte Interessen
                                                </strong>{' '}
                                                (Artikel 6 Absatz 1 lit. f
                                                DSGVO): Im Falle berechtigter
                                                Interessen, die Ihre Grundrechte
                                                nicht einschränken, behalten wir
                                                uns die Verarbeitung
                                                personenbezogener Daten vor. Wir
                                                müssen zum Beispiel gewisse
                                                Daten verarbeiten, um unsere
                                                Website sicher und
                                                wirtschaftlich effizient
                                                betreiben zu können. Diese
                                                Verarbeitung ist somit ein
                                                berechtigtes Interesse.
                                            </li>
                                        </ol>
                                        <p className="mb-4">
                                            Weitere Bedingungen wie die
                                            Wahrnehmung von Aufnahmen im
                                            öffentlichen Interesse und Ausübung
                                            öffentlicher Gewalt sowie dem Schutz
                                            lebenswichtiger Interessen treten
                                            bei uns in der Regel nicht auf.
                                            Soweit eine solche Rechtsgrundlage
                                            doch einschlägig sein sollte, wird
                                            diese an der entsprechenden Stelle
                                            ausgewiesen.
                                        </p>
                                        <p className="mb-4">
                                            Zusätzlich zu der EU-Verordnung
                                            gelten auch noch nationale Gesetze:
                                        </p>
                                        <ul className="list-disc list-inside mb-4 space-y-1">
                                            <li>
                                                In <strong>Österreich</strong>{' '}
                                                ist dies das Bundesgesetz zum
                                                Schutz natürlicher Personen bei
                                                der Verarbeitung
                                                personenbezogener Daten (
                                                <strong>
                                                    Datenschutzgesetz
                                                </strong>
                                                ), kurz <strong>DSG</strong>.
                                            </li>
                                            <li>
                                                In <strong>Deutschland</strong>{' '}
                                                gilt das{' '}
                                                <strong>
                                                    Bundesdatenschutzgesetz
                                                </strong>
                                                , kurz <strong>BDSG</strong>.
                                            </li>
                                        </ul>
                                        <p>
                                            Sofern weitere regionale oder
                                            nationale Gesetze zur Anwendung
                                            kommen, informieren wir Sie in den
                                            folgenden Abschnitten darüber.
                                        </p>
                                    </div>

                                    <div>
                                        <h2 className="heading-script text-xl mb-3 text-gray-900">
                                            Kontaktdaten des Verantwortlichen
                                        </h2>
                                        <p className="mb-4">
                                            Sollten Sie Fragen zum Datenschutz
                                            oder zur Verarbeitung
                                            personenbezogener Daten haben,
                                            finden Sie nachfolgend die
                                            Kontaktdaten der verantwortlichen
                                            Person bzw. Stelle:
                                            <br />
                                            <br />
                                            Roah-Raschla Reloaded
                                            <br />
                                            Mühlweg 4, 7062 St. Margarethen im
                                            Burgenland
                                            <br />
                                            Vertretungsberechtigt: Michael
                                            Artner
                                            <br />
                                            E-Mail:
                                            roahraschlareloaded@gmail.com
                                            <br />
                                            Telefon: +43 676 4072973
                                            <br />
                                            Impressum:{' '}
                                            <a
                                                className="text-blue-600 hover:underline"
                                                href="#"
                                                onClick={openImpressum}>
                                                https://roah-raschla-reloaded.at/impressum
                                            </a>
                                        </p>
                                    </div>

                                    <div>
                                        <h2 className="heading-script text-xl mb-3 text-gray-900">
                                            Speicherdauer
                                        </h2>
                                        <p className="mb-4">
                                            Dass wir personenbezogene Daten nur
                                            so lange speichern, wie es für die
                                            Bereitstellung unserer
                                            Dienstleistungen und Produkte
                                            unbedingt notwendig ist, gilt als
                                            generelles Kriterium bei uns. Das
                                            bedeutet, dass wir personenbezogene
                                            Daten löschen, sobald der Grund für
                                            die Datenverarbeitung nicht mehr
                                            vorhanden ist. In einigen Fällen
                                            sind wir gesetzlich dazu
                                            verpflichtet, bestimmte Daten auch
                                            nach Wegfall des ursprünglichen
                                            Zwecks zu speichern, zum Beispiel zu
                                            Zwecken der Buchführung.
                                        </p>
                                        <p className="mb-4">
                                            Sollten Sie die Löschung Ihrer Daten
                                            wünschen oder die Einwilligung zur
                                            Datenverarbeitung widerrufen, werden
                                            die Daten so rasch wie möglich und
                                            soweit keine Pflicht zur Speicherung
                                            besteht, gelöscht.
                                        </p>
                                        <p>
                                            Über die konkrete Dauer der
                                            jeweiligen Datenverarbeitung
                                            informieren wir Sie weiter unten,
                                            sofern wir weitere Informationen
                                            dazu haben.
                                        </p>
                                    </div>

                                    <div>
                                        <h2 className="heading-script text-xl mb-3 text-gray-900">
                                            Rechte laut
                                            Datenschutz-Grundverordnung
                                        </h2>
                                        <p className="mb-4">
                                            Gemäß Artikel 13, 14 DSGVO
                                            informieren wir Sie über die
                                            folgenden Rechte, die Ihnen
                                            zustehen, damit es zu einer fairen
                                            und transparenten Verarbeitung von
                                            Daten kommt:
                                        </p>
                                        <ul className="list-disc list-inside mb-4 space-y-2">
                                            <li>
                                                Sie haben laut Artikel 15 DSGVO
                                                ein Recht auf Auskunft darüber,
                                                ob wir Daten von Ihnen
                                                verarbeiten. Sollte das
                                                zutreffen, haben Sie Recht
                                                darauf eine Kopie der Daten zu
                                                erhalten und die folgenden
                                                Informationen zu erfahren:
                                                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                                                    <li>
                                                        zu welchem Zweck wir die
                                                        Verarbeitung
                                                        durchführen;
                                                    </li>
                                                    <li>
                                                        die Kategorien, also die
                                                        Arten von Daten, die
                                                        verarbeitet werden;
                                                    </li>
                                                    <li>
                                                        wer diese Daten erhält
                                                        und wenn die Daten an
                                                        Drittländer übermittelt
                                                        werden, wie die
                                                        Sicherheit garantiert
                                                        werden kann;
                                                    </li>
                                                    <li>
                                                        wie lange die Daten
                                                        gespeichert werden;
                                                    </li>
                                                    <li>
                                                        das Bestehen des Rechts
                                                        auf Berichtigung,
                                                        Löschung oder
                                                        Einschränkung der
                                                        Verarbeitung und dem
                                                        Widerspruchsrecht gegen
                                                        die Verarbeitung;
                                                    </li>
                                                    <li>
                                                        dass Sie sich bei einer
                                                        Aufsichtsbehörde
                                                        beschweren können (Links
                                                        zu diesen Behörden
                                                        finden Sie weiter
                                                        unten);
                                                    </li>
                                                    <li>
                                                        die Herkunft der Daten,
                                                        wenn wir sie nicht bei
                                                        Ihnen erhoben haben;
                                                    </li>
                                                    <li>
                                                        ob Profiling
                                                        durchgeführt wird, ob
                                                        also Daten automatisch
                                                        ausgewertet werden, um
                                                        zu einem persönlichen
                                                        Profil von Ihnen zu
                                                        gelangen.
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                Sie haben laut Artikel 16 DSGVO
                                                ein Recht auf Berichtigung der
                                                Daten, was bedeutet, dass wir
                                                Daten richtig stellen müssen,
                                                falls Sie Fehler finden.
                                            </li>
                                            <li>
                                                Sie haben laut Artikel 17 DSGVO
                                                das Recht auf Löschung („Recht
                                                auf Vergessenwerden"), was
                                                konkret bedeutet, dass Sie die
                                                Löschung Ihrer Daten verlangen
                                                können.
                                            </li>
                                            <li>
                                                Sie haben laut Artikel 18 DSGVO
                                                das Recht auf Einschränkung der
                                                Verarbeitung, was bedeutet, dass
                                                wir die Daten nur mehr speichern
                                                dürfen aber nicht weiter
                                                verwenden.
                                            </li>
                                            <li>
                                                Sie haben laut Artikel 20 DSGVO
                                                das Recht auf
                                                Datenübertragbarkeit, was
                                                bedeutet, dass wir Ihnen auf
                                                Anfrage Ihre Daten in einem
                                                gängigen Format zur Verfügung
                                                stellen.
                                            </li>
                                            <li>
                                                Sie haben laut Artikel 21 DSGVO
                                                ein Widerspruchsrecht, welches
                                                nach Durchsetzung eine Änderung
                                                der Verarbeitung zur Folge hat.
                                                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                                                    <li>
                                                        Wenn die Verarbeitung
                                                        Ihrer Daten auf Artikel
                                                        6 Abs. 1 lit. e
                                                        (öffentliches Interesse,
                                                        Ausübung öffentlicher
                                                        Gewalt) oder Artikel 6
                                                        Abs. 1 lit. f
                                                        (berechtigtes Interesse)
                                                        basiert, können Sie
                                                        gegen die Verarbeitung
                                                        Widerspruch einlegen.
                                                        Wir prüfen danach so
                                                        rasch wie möglich, ob
                                                        wir diesem Widerspruch
                                                        rechtlich nachkommen
                                                        können.
                                                    </li>
                                                    <li>
                                                        Werden Daten verwendet,
                                                        um Direktwerbung zu
                                                        betreiben, können Sie
                                                        jederzeit gegen diese
                                                        Art der
                                                        Datenverarbeitung
                                                        widersprechen. Wir
                                                        dürfen Ihre Daten danach
                                                        nicht mehr für
                                                        Direktmarketing
                                                        verwenden.
                                                    </li>
                                                    <li>
                                                        Werden Daten verwendet,
                                                        um Profiling zu
                                                        betreiben, können Sie
                                                        jederzeit gegen diese
                                                        Art der
                                                        Datenverarbeitung
                                                        widersprechen. Wir
                                                        dürfen Ihre Daten danach
                                                        nicht mehr für Profiling
                                                        verwenden.
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                Sie haben laut Artikel 22 DSGVO
                                                unter Umständen das Recht, nicht
                                                einer ausschließlich auf einer
                                                automatisierten Verarbeitung
                                                (zum Beispiel Profiling)
                                                beruhenden Entscheidung
                                                unterworfen zu werden.
                                            </li>
                                            <li>
                                                Sie haben laut Artikel 77 DSGVO
                                                das Recht auf Beschwerde. Das
                                                heißt, Sie können sich jederzeit
                                                bei der Datenschutzbehörde
                                                beschweren, wenn Sie der Meinung
                                                sind, dass die Datenverarbeitung
                                                von personenbezogenen Daten
                                                gegen die DSGVO verstößt.
                                            </li>
                                        </ul>
                                        <p className="mb-4">
                                            <strong>Kurz gesagt:</strong> Sie
                                            haben Rechte – zögern Sie nicht, die
                                            oben gelistete verantwortliche
                                            Stelle bei uns zu kontaktieren!
                                        </p>
                                        <p>
                                            Wenn Sie glauben, dass die
                                            Verarbeitung Ihrer Daten gegen das
                                            Datenschutzrecht verstößt oder Ihre
                                            datenschutzrechtlichen Ansprüche in
                                            sonst einer Weise verletzt worden
                                            sind, können Sie sich bei der
                                            Aufsichtsbehörde beschweren. Diese
                                            ist für Österreich die
                                            Datenschutzbehörde, deren Website
                                            Sie unter{' '}
                                            <a
                                                className="text-blue-600 hover:underline"
                                                href="https://www.dsb.gv.at/?tid=112963921"
                                                target="_blank"
                                                rel="noreferrer noopener">
                                                https://www.dsb.gv.at/
                                            </a>{' '}
                                            finden. In Deutschland gibt es für
                                            jedes Bundesland einen
                                            Datenschutzbeauftragten. Für nähere
                                            Informationen können Sie sich an die{' '}
                                            <a
                                                className="text-blue-600 hover:underline"
                                                href="https://www.bfdi.bund.de/DE/Home/home_node.html"
                                                target="_blank"
                                                rel="noreferrer noopener">
                                                Bundesbeauftragte für den
                                                Datenschutz und die
                                                Informationsfreiheit (BfDI)
                                            </a>{' '}
                                            wenden. Für unser Unternehmen ist
                                            die oben genannte österreichische
                                            Behörde zuständig.
                                        </p>
                                    </div>

                                    <div>
                                        <h2 className="heading-script text-xl mb-3 text-gray-900">
                                            Sicherheit der Datenverarbeitung
                                        </h2>
                                        <p className="mb-4">
                                            Um personenbezogene Daten zu
                                            schützen, haben wir sowohl
                                            technische als auch organisatorische
                                            Maßnahmen umgesetzt. Wo es uns
                                            möglich ist, verschlüsseln oder
                                            pseudonymisieren wir
                                            personenbezogene Daten. Dadurch
                                            machen wir es im Rahmen unserer
                                            Möglichkeiten so schwer wie möglich,
                                            dass Dritte aus unseren Daten auf
                                            persönliche Informationen schließen
                                            können.
                                        </p>
                                        <p className="mb-4">
                                            Art. 25 DSGVO spricht hier von
                                            "Datenschutz durch Technikgestaltung
                                            und durch datenschutzfreundliche
                                            Voreinstellungen" und meint damit,
                                            dass man sowohl bei Software (z. B.
                                            Formularen) also auch Hardware (z.
                                            B. Zugang zum Serverraum) immer an
                                            Sicherheit denkt und entsprechende
                                            Maßnahmen setzt. Im Folgenden gehen
                                            wir, falls erforderlich, noch auf
                                            konkrete Maßnahmen ein.
                                        </p>
                                    </div>

                                    <div>
                                        <h2 className="heading-script text-xl mb-3 text-gray-900">
                                            TLS-Verschlüsselung mit https
                                        </h2>
                                        <p className="mb-4">
                                            TLS, Verschlüsselung und https
                                            klingen sehr technisch und sind es
                                            auch. Wir verwenden HTTPS (das
                                            Hypertext Transfer Protocol Secure
                                            steht für „sicheres
                                            Hypertext-Übertragungsprotokoll"),
                                            um Daten abhörsicher im Internet zu
                                            übertragen.
                                            <br />
                                            Das bedeutet, dass die komplette
                                            Übertragung aller Daten von Ihrem
                                            Browser zu unserem Webserver
                                            abgesichert ist – niemand kann
                                            "mithören".
                                        </p>
                                        <p className="mb-4">
                                            Damit haben wir eine zusätzliche
                                            Sicherheitsschicht eingeführt und
                                            erfüllen den Datenschutz durch
                                            Technikgestaltung ({' '}
                                            <a
                                                className="text-blue-600 hover:underline"
                                                href="https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32016R0679&from=DE&tid=112963921"
                                                target="_blank"
                                                rel="noreferrer noopener">
                                                Artikel 25 Absatz 1 DSGVO
                                            </a>
                                            ). Durch den Einsatz von TLS
                                            (Transport Layer Security), einem
                                            Verschlüsselungsprotokoll zur
                                            sicheren Datenübertragung im
                                            Internet, können wir den Schutz
                                            vertraulicher Daten sicherstellen.
                                            <br />
                                            Sie erkennen die Benutzung dieser
                                            Absicherung der Datenübertragung am
                                            kleinen Schlosssymbol{' '}
                                            <img
                                                role="img"
                                                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='15' viewBox='0 0 12 15'%3E%3Cpath d='M8.1 6.5V5.1c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5v1.4H2v8h8v-8H8.1zM4.6 5.1c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v1.4H4.6V5.1z'/%3E%3C/svg%3E"
                                                alt="TLS-Verschlüsselung"
                                                width="12"
                                                height="15"
                                                className="inline"
                                            />{' '}
                                            links von der Internetadresse (z. B.
                                            beispielseite.de) und der Verwendung
                                            des Schemas https (anstatt http) als
                                            Teil unserer Internetadresse.
                                            <br />
                                            Wenn Sie mehr zum Thema
                                            Verschlüsselung wissen möchten,
                                            empfehlen wir die Google Suche nach
                                            "Hypertext Transfer Protocol Secure
                                            wiki" um gute Links zu
                                            weiterführenden Informationen zu
                                            erhalten.
                                        </p>
                                    </div>

                                    <div>
                                        <h2 className="heading-script text-xl mb-3 text-gray-900">
                                            Kommunikation
                                        </h2>
                                        <h3 className="heading-script-sm text-lg mb-2 text-gray-900">
                                            Kommunikation Zusammenfassung
                                        </h3>
                                        <p className="mb-4">
                                            👥 Betroffene: Alle, die mit uns per
                                            Telefon, E-Mail oder Online-Formular
                                            kommunizieren
                                            <br />
                                            📓 Verarbeitete Daten: z. B.
                                            Telefonnummer, Name, E-Mail-Adresse,
                                            eingegebene Formulardaten. Mehr
                                            Details dazu finden Sie bei der
                                            jeweils eingesetzten Kontaktart
                                            <br />
                                            🤝 Zweck: Abwicklung der
                                            Kommunikation mit Kunden,
                                            Geschäftspartnern usw.
                                            <br />
                                            📅 Speicherdauer: Dauer des
                                            Geschäftsfalls und der gesetzlichen
                                            Bestimmungen
                                            <br />
                                            ⚖️ Rechtsgrundlagen: Art. 6 Abs. 1
                                            lit. a DSGVO (Einwilligung), Art. 6
                                            Abs. 1 lit. b DSGVO (Vertrag), Art.
                                            6 Abs. 1 lit. f DSGVO (Berechtigte
                                            Interessen)
                                        </p>
                                        <p className="mb-4">
                                            Wenn Sie mit uns Kontakt aufnehmen
                                            und per Telefon, E-Mail oder
                                            Online-Formular kommunizieren, kann
                                            es zur Verarbeitung
                                            personenbezogener Daten kommen.
                                        </p>
                                        <p className="mb-4">
                                            Die Daten werden für die Abwicklung
                                            und Bearbeitung Ihrer Frage und des
                                            damit zusammenhängenden
                                            Geschäftsvorgangs verarbeitet. Die
                                            Daten bleiben bei uns solange
                                            gespeichert, wie es das Gesetz
                                            vorschreibt.
                                        </p>
                                        <h3 className="heading-script-sm text-lg mb-2 text-gray-900">
                                            Betroffene Personen
                                        </h3>
                                        <p className="mb-4">
                                            Von den genannten Vorgängen sind
                                            alle betroffen, die über die von uns
                                            bereit gestellten Kommunikationswege
                                            den Kontakt zu uns suchen.
                                        </p>
                                        <h3 className="heading-script-sm text-lg mb-2 text-gray-900">
                                            Telefon
                                        </h3>
                                        <p className="mb-4">
                                            Wenn Sie uns anrufen, werden die
                                            Anrufdaten auf dem jeweiligen
                                            Endgerät und beim eingesetzten
                                            Telekommunikationsanbieter
                                            pseudonymisiert gespeichert.
                                            Außerdem können Daten wie Name und
                                            Telefonnummer im Anschluss per
                                            E-Mail versendet und zur
                                            Anfragebeantwortung gespeichert
                                            werden. Die Daten werden gelöscht,
                                            sobald der Geschäftsfall beendet
                                            wurde und es gesetzliche Vorgaben
                                            erlauben.
                                        </p>
                                        <h3 className="heading-script-sm text-lg mb-2 text-gray-900">
                                            E-Mail
                                        </h3>
                                        <p className="mb-4">
                                            Wenn Sie mit uns per E-Mail
                                            kommunizieren, werden Daten
                                            gegebenenfalls auf dem jeweiligen
                                            Endgerät (Computer, Laptop,
                                            Smartphone,...) gespeichert und es
                                            kommt zur Speicherung von Daten auf
                                            dem E-Mail-Server. Die Daten werden
                                            gelöscht, sobald der Geschäftsfall
                                            beendet wurde und es gesetzliche
                                            Vorgaben erlauben.
                                        </p>
                                        <h3 className="heading-script-sm text-lg mb-2 text-gray-900">
                                            Online Formulare
                                        </h3>
                                        <p className="mb-4">
                                            Wenn Sie mit uns mittels
                                            Online-Formular kommunizieren,
                                            werden Daten auf unserem Webserver
                                            gespeichert und gegebenenfalls an
                                            eine E-Mail-Adresse von uns
                                            weitergeleitet. Die Daten werden
                                            gelöscht, sobald der Geschäftsfall
                                            beendet wurde und es gesetzliche
                                            Vorgaben erlauben.
                                        </p>
                                        <h3 className="heading-script-sm text-lg mb-2 text-gray-900">
                                            Rechtsgrundlagen
                                        </h3>
                                        <p>
                                            Die Verarbeitung der Daten basiert
                                            auf den folgenden Rechtsgrundlagen:
                                        </p>
                                        <ul className="list-disc list-inside mb-4 space-y-1">
                                            <li>
                                                Art. 6 Abs. 1 lit. a DSGVO
                                                (Einwilligung): Sie geben uns
                                                die Einwilligung Ihre Daten zu
                                                speichern und weiter für den
                                                Geschäftsfall betreffende Zwecke
                                                zu verwenden;
                                            </li>
                                            <li>
                                                Art. 6 Abs. 1 lit. b DSGVO
                                                (Vertrag): Es besteht die
                                                Notwendigkeit für die Erfüllung
                                                eines Vertrags mit Ihnen oder
                                                einem Auftragsverarbeiter wie z.
                                                B. dem Telefonanbieter oder wir
                                                müssen die Daten für
                                                vorvertragliche Tätigkeiten, wie
                                                z. B. die Vorbereitung eines
                                                Angebots, verarbeiten;
                                            </li>
                                            <li>
                                                Art. 6 Abs. 1 lit. f DSGVO
                                                (Berechtigte Interessen): Wir
                                                wollen Kundenanfragen und
                                                geschäftliche Kommunikation in
                                                einem professionellen Rahmen
                                                betreiben. Dazu sind gewisse
                                                technische Einrichtungen wie z.
                                                B. E-Mail-Programme,
                                                Exchange-Server und
                                                Mobilfunkbetreiber notwendig, um
                                                die Kommunikation effizient
                                                betreiben zu können.
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h2 className="heading-script text-xl mb-3 text-gray-900">
                                            Alle Texte sind urheberrechtlich
                                            geschützt.
                                        </h2>
                                        <p>
                                            Quelle: Erstellt mit dem{' '}
                                            <a
                                                className="text-blue-600 hover:underline"
                                                href="https://www.adsimple.at/datenschutz-generator/"
                                                title="Datenschutz Generator von AdSimple für Österreich"
                                                target="_blank"
                                                rel="noreferrer noopener">
                                                Datenschutz Generator
                                            </a>{' '}
                                            von AdSimple
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
