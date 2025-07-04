'use client';
import { Disc3, Facebook, Instagram } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function RoahRaschlaReloaded() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [imageModalOpen, setImageModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState('');
    const [scrollY, setScrollY] = useState(0);

    const openModal = (imageSrc: string) => {
        setModalImage(imageSrc);
        setImageModalOpen(true);
    };

    const closeModal = () => {
        setImageModalOpen(false);
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
                    className="relative min-h-screen flex flex-col justify-between overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: `url('/all.jpg')`,
                            transform: `translateY(${scrollY * 0.5}px)`,
                            willChange: 'transform',
                        }}></div>
                    <div className="absolute inset-0 bg-black/40"></div>

                    {/* Top spacer */}
                    <div className="flex-1 flex items-start justify-center pt-32">
                        <div className="relative text-center px-6 max-w-4xl mx-auto text-white z-10">
                            <h1 className="text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight">
                                <span className="font-script font-bold text-red-800 block mb-4">
                                    Tradition
                                </span>
                                <span className="font-script text-4xl md:text-6xl lg:text-7xl text-yellow-800">
                                    & Leidenschaft
                                </span>
                            </h1>
                            <p className="font-script text-2xl md:text-3xl mb-12 max-w-2xl mx-auto leading-relaxed opacity-90 text-blue-800">
                                Roah Raschla Reloaded - etwas Schilf gewickelt
                            </p>
                        </div>
                    </div>

                    {/* Button at bottom */}
                    <div className="relative z-10 pb-8 md:pb-12 lg:pb-16">
                        <div className="text-center">
                            <button
                                onClick={() => scrollToSection('ueber-uns')}
                                className="inline-flex items-center px-8 py-4 bg-gray-600 text-white font-medium rounded-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 text-lg tracking-wide">
                                Mehr erfahren
                                <i className="fas fa-arrow-right ml-2"></i>
                            </button>
                        </div>
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
                                Lernen Sie die 8 frischgeraschelten Musiker kennen
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
                                            <div
                                                style={{
                                                    backgroundColor:
                                                        '#82110 !important',
                                                }}
                                                className="w-16 h-16 bg-red-800 rounded-full flex items-center justify-center mx-auto mb-4">
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
                                            <div
                                                style={{
                                                    backgroundColor:
                                                        '#FFDE00 !important',
                                                }}
                                                className="w-16 h-16 bg-red-800 rounded-full flex items-center justify-center mx-auto mb-4">
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
                                            <div
                                                style={{
                                                    backgroundColor:
                                                        '#2D245F !important',
                                                }}
                                                className="w-16 h-16 bg-red-800 rounded-full flex items-center justify-center mx-auto mb-4">
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
                            <h2 className="font-script text-5xl md:text-7xl font-bold text-yellow-800 mb-4">
                                Events
                            </h2>
                            <div className="w-24 h-1 bg-yellow-800 mx-auto mb-12"></div>
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
                <section id="galerie" className="py-32">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="text-center mb-20">
                            <h2 className="font-script text-5xl md:text-7xl font-bold text-blue-800 mb-4">
                                Galerie
                            </h2>
                            <div className="w-24 h-1 bg-blue-800 mx-auto mb-12"></div>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                Eindrücke von unseren Auftritten und
                                Veranstaltungen
                            </p>
                        </div>

                        {/* Gallery Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                            {/* Regular Images */}
                            {[
                                {
                                    src: '/gallery/rrr_1.jpg',
                                    alt: 'Unsere Musiker',
                                },
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
                                {
                                    src: '/gallery/rrr_9.jpg',
                                    alt: 'Am Akkordeon spielen',
                                },
                            ].map((image, index) => (
                                <div
                                    key={index}
                                    className="cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => openModal(image.src)}>
                                    <div className="aspect-[3/4] w-full">
                                        <img
                                            src={image.src}
                                            alt={image.alt}
                                            className="w-full h-full object-cover rounded-2xl shadow-lg"
                                        />
                                    </div>
                                </div>
                            ))}
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
                                    <div
                                        style={{
                                            backgroundColor:
                                                '#821110 !important',
                                        }}
                                        className="w-12 h-12 bg-red-800 rounded-full flex items-center justify-center text-white">
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
                                    <div
                                        style={{
                                            backgroundColor:
                                                '#FFDE00 !important',
                                        }}
                                        className="w-12 h-12 bg-red-800 rounded-full flex items-center justify-center text-white">
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
                                    <div
                                        style={{
                                            backgroundColor:
                                                '#2D245F !important',
                                        }}
                                        className="w-12 h-12 bg-red-800 rounded-full flex items-center justify-center text-white">
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
                                        href="https://www.facebook.com/profile.php?id=61578069538211"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-red-800 hover:text-white transition-all duration-300"
                                        title="Instagram">
                                        <Facebook className="h-5 w-5" />
                                    </a>
                                    <a
                                        href="https://www.instagram.com/roahraschla_reloaded/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-red-800 hover:text-white transition-all duration-300"
                                        title="Instagram">
                                        <Instagram className="h-5 w-5" />
                                    </a>
                                    <a
                                        href="https://open.spotify.com/user/31fas3j4lxldgcus5xzmpo7ypqdi"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-red-800 hover:text-white transition-all duration-300"
                                        title="Spotify">
                                        <Disc3 className="h-5 w-5" />
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
                                <Link
                                    href="/legal"
                                    className="text-gray-600 hover:text-red-800 transition-colors duration-200 text-sm font-medium">
                                    Impressum
                                </Link>
                                <Link
                                    href="/privacy"
                                    className="text-gray-600 hover:text-red-800 transition-colors duration-200 text-sm font-medium">
                                    Datenschutz
                                </Link>
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
                        <div className="relative w-full h-full max-w-6xl max-h-[90vh] flex items-center justify-center">
                            <img
                                src={modalImage || '/placeholder.svg'}
                                alt=""
                                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                            />

                            <button
                                onClick={closeModal}
                                className="absolute top-6 right-6 text-white text-3xl hover:text-gray-300">
                                <i className="fas fa-times"></i>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
