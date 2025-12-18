"use client";
import { Disc3, Facebook, Instagram } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// Musician data with detailed information
const musicians = [
  {
    id: 1,
    name: "DOMINIK",
    instrument: "1. Flügelhorn",
    image: "/musicians/dominik.jpg",
    monoImage: "/musicians/dominik_mono.jpg",
    description:
      "Haweditutn \n\nSeit 2005 is is Flügelhorn mei treuer Begleiter – und heit nimma aus mein Lebm wegzudenken und die Musi is für mi weit mehr als ein Hobby: Leidenschaft, Ausdruck und pure Lebensfreude. Als Drahtzieher unserer Band bring i ned nur Töne zum Klingen, sondern a Menschen zsaum.",
  },
  {
    id: 2,
    name: "ALEX",
    instrument: "2. Flügelhorn",
    image: "/musicians/alex.jpg",
    monoImage: "/musicians/alex_mono.jpg",
    description:
      "Habe d'Ehre!\n\nWann i mi vorstellen deaf: Pock Alex mein Name. Seit über 10 Joah deaf i a Roahraschla sein und am Flügelhorn geigen. Seit ma uns reloaded hom, moderier i a unsere Auftritte, wos jeds Moi a murdstrum Gaudi fia mi is! A wann i hiaz scho Band-Opa bin, hoit mi die Musi ollaweil jung!",
  },
  {
    id: 3,
    name: "PHILIPP",
    instrument: "Trompete",
    image: "/musicians/philipp.jpg",
    monoImage: "/musicians/philipp_mono.jpg",
    description:
      "Griaß eich\n\nMit 6 Jahren hab ich meine ersten Töne auf der Trompete gespielt – und seitdem lässt mich das Instrument nicht mehr los. Zwar darf das Flügelhorn auch mal mitspielen, aber ganz ehrlich: Die Trompete ist und bleibt mei Liebling!",
  },

  {
    id: 4,
    name: "MORITZ",
    instrument: "Tuba",
    image: "/musicians/moritz.jpg",
    monoImage: "/musicians/moritz_mono.jpg",
    description:
     "Griaß eich! Ih bin da Moritz!\n\nIs erste moi ah Tuba in da Hand gehalten hob ih ois \"Spätberufener\" mit 17 Joah und seitdem loss ih sie fost nimmer aus.\n\nMittlerweile verstehn si mei Tuba und ih scho so guad, dass ma vor an Joah gsogt hom, wir fongan gemeinsam an da JHP zu studieren an.\n\nFois wer gern im Sommer am Ruster Güterweg spazieren geht, konns leicht sein, dass er mi beim Outdoor-proben in unserm Heurigen hört.",
  },

  {
    id: 5,
    name: "ALEX",
    instrument: "Schlagzeug",
    image: "/musicians/alex_2.jpg",
    monoImage: "/musicians/alex_2_mono.jpg",
    description:
      "Servas beinand! \n\n Alex 2.0, mit 6 Joa hob i zum Schlagzeug spün ang’fangt – und seitdem klopf i auf ois drauf, wos ned bei drei aufm Notenständer is. Während de andern mit Ventil und Zuginstrument glänzn,hab i halt zwoa Stöck und a riesige Trommel – und trotzdem immer des letzte Wort im Stück. Und wenn i amoi ned beim Schlagzeug bin – ka Stress, a Topf, Kübel oder Löffel geht a.",
  },
  {
    id: 6,
    name: "FABIAN",
    instrument: "Bariton",
    image: "/musicians/fabian.jpg",
    monoImage: "/musicians/fabian_mono.jpg",
    description:
      "Servus, griass eich und hallo!\n\nI bin da Fabian alias da Fabi und spü seit meim 7 Lebensjoa is Tenorhorn. De Posaun is zwoa erst 13 Joa späta in mei Lebn kumma, owa i spü beide Instrumente gleich gern. Ned nur i hab an Schnauza in dera Partie und außerdem bin i a ana vo zwa de aussn Niederösterreich kemman!",
  },
  {
    id: 7,
    name: "ALEX",
    instrument: "Tenor",
    image: "/musicians/alex_3.jpg",
    monoImage: "/musicians/alex_3_mono.jpg",
    description:
      "Griaß eich! Gmasz has i\n\nEigentlich is mei Name Alex owa vo de homma zu vü in der Partie. I hob im 15. Lebensjoa erkannt, dass des Tenorhorn mei Instrument ist. Posaune spü i zwoa erst seit 2 Joa, sie is owa scho a fixer Bestandteil in mein musikalischen Leben. \n\nAußerdem deaf i seit nun 6 Joa Kapellmeister bei mein Musikverein sein. Im Gegensotz zu mein Registerkollegen hob i meine Hoa leider nur am Schädl.",
  },
  {
    id: 8,
    name: "MICHAEL",
    instrument: "Akkordeon",
    image: "/musicians/michael.jpg",
    monoImage: "/musicians/michael_mono.jpg",
    description:
      "Griass eich!\n\n I bin da Michl aus Magredn! Vor guad 16 Jahren hot bei mir olles damit ongfongen, dass i Flügelhorn/Trompete lerne. Einige Jahre später hob i ongfongen bei unseren Musikverein - wieder a boa Joa später ba die Original Roahraschla als Bläser. Inzwischen bin i ba mehrere Partien und oft a mit verschiedenen Instrumenten anzutreffen. In dem Fall bin i der Mann an den Tasten. Und i hob des Privileg, dass i a beruflich Musik mochn derf und des jeden Tog!",
  },
];

export default function RoahRaschlaReloaded() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const [scrollY, setScrollY] = useState(0);
  const [selectedMusician, setSelectedMusician] = useState<
    (typeof musicians)[0] | null
  >(null);

  const openModal = (imageSrc: string) => {
    setModalImage(imageSrc);
    setImageModalOpen(true);
  };

  const closeModal = () => {
    setImageModalOpen(false);
  };

  const scrollToSection = (sectionId: string, e?: React.MouseEvent<HTMLAnchorElement>) => {
    e?.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
      // Update URL without scrolling
      window.history.pushState(null, "", `#${sectionId}`);
    }
  };

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setImageModalOpen(false);
      }
    };

    const handleScroll = () => setScrollY(window.scrollY);

    document.addEventListener("keydown", handleEscKey);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("keydown", handleEscKey);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="font-body text-gray-900 bg-white">
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 bg-white border-b border-gray-100 shadow-sm">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex-shrink-0 flex items-center">
                <img
                  src="/logo-full.jpg"
                  alt="RoahRaschlaReloadedLogo"
                  className="h-12 w-auto"
                  width={200}
                  height={48}
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
              <div className="hidden md:block">
                <nav aria-label="Hauptnavigation">
                  <div className="ml-10 flex items-baseline space-x-8">
                    <a
                      href="#home"
                      onClick={(e) => scrollToSection("home", e)}
                      className="text-gray-600 hover:text-red-800 transition-colors duration-200 cursor-pointer font-medium"
                      aria-label="Zur Startseite navigieren"
                    >
                      Home
                    </a>
                    <a
                      href="#ueber-uns"
                      onClick={(e) => scrollToSection("ueber-uns", e)}
                      className="text-gray-600 hover:text-red-800 transition-colors duration-200 cursor-pointer font-medium"
                      aria-label="Zu Über uns navigieren"
                    >
                      Über uns
                    </a>
                    <a
                      href="#events"
                      onClick={(e) => scrollToSection("events", e)}
                      className="text-gray-600 hover:text-yellow-800 transition-colors duration-200 cursor-pointer font-medium"
                      aria-label="Zu Events navigieren"
                    >
                      Events
                    </a>
                    <a
                      href="#galerie"
                      onClick={(e) => scrollToSection("galerie", e)}
                      className="text-gray-600 hover:text-blue-800 transition-colors duration-200 cursor-pointer font-medium"
                      aria-label="Zur Galerie navigieren"
                    >
                      Galerie
                    </a>
                    <a
                      href="#kontakt"
                      onClick={(e) => scrollToSection("kontakt", e)}
                      className="text-gray-600 hover:text-red-800 transition-colors duration-200 cursor-pointer font-medium"
                      aria-label="Zum Kontakt navigieren"
                    >
                      Kontakt
                    </a>
                  </div>
                </nav>
              </div>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61578069538211"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-red-800 hover:text-white transition-all duration-300"
                  title="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href="https://www.instagram.com/roahraschla_reloaded/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-800 hover:text-white transition-all duration-300"
                  title="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="https://www.tiktok.com/@roahraschlareloaded?_t=ZN-8xmMiL4rDGA&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-yellow-800 hover:text-white transition-all duration-300"
                  title="TikTok"
                >
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </a>
                <a
                  href="https://open.spotify.com/user/31fas3j4lxldgcus5xzmpo7ypqdi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-red-800 hover:text-white transition-all duration-300"
                  title="Spotify"
                >
                  <Disc3 className="h-4 w-4" />
                </a>
              </div>
              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="text-gray-600 hover:text-red-800"
                  aria-label={mobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
                  aria-expanded={mobileMenuOpen}
                  aria-controls="mobile-menu"
                >
                  <i className="fas fa-bars text-xl" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
          {/* Mobile menu */}
          {mobileMenuOpen && (
            <nav id="mobile-menu" className="md:hidden bg-white border-t border-gray-100" aria-label="Mobile Navigation">
              <div className="px-6 py-4 space-y-2">
                <a
                  href="#home"
                  onClick={(e) => scrollToSection("home", e)}
                  className="block text-gray-900 hover:text-red-800 transition-colors duration-200 cursor-pointer font-medium"
                  aria-label="Zur Startseite navigieren"
                >
                  Home
                </a>
                <a
                  href="#ueber-uns"
                  onClick={(e) => scrollToSection("ueber-uns", e)}
                  className="block text-gray-600 hover:text-red-800 transition-colors duration-200 cursor-pointer font-medium"
                  aria-label="Zu Über uns navigieren"
                >
                  Über uns
                </a>
                <a
                  href="#events"
                  onClick={(e) => scrollToSection("events", e)}
                  className="block text-gray-600 hover:text-yellow-800 transition-colors duration-200 cursor-pointer font-medium"
                  aria-label="Zu Events navigieren"
                >
                  Events
                </a>
                <a
                  href="#galerie"
                  onClick={(e) => scrollToSection("galerie", e)}
                  className="block text-gray-600 hover:text-blue-800 transition-colors duration-200 cursor-pointer font-medium"
                  aria-label="Zur Galerie navigieren"
                >
                  Galerie
                </a>
                <a
                  href="#kontakt"
                  onClick={(e) => scrollToSection("kontakt", e)}
                  className="block text-gray-600 hover:text-red-800 transition-colors duration-200 cursor-pointer font-medium"
                  aria-label="Zum Kontakt navigieren"
                >
                  Kontakt
                </a>

                {/* Social Media Icons for Mobile */}
                <div className="flex justify-end space-x-4 pt-4 border-t border-gray-200 mt-4">
                  <a
                    href="https://www.facebook.com/profile.php?id=61578069538211"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-red-800 hover:text-white transition-all duration-300"
                    title="Facebook"
                  >
                    <Facebook className="h-4 w-4" />
                  </a>
                  <a
                    href="https://www.instagram.com/roahraschla_reloaded/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-800 hover:text-white transition-all duration-300"
                    title="Instagram"
                  >
                    <Instagram className="h-4 w-4" />
                  </a>
                  <a
                    href="https://www.tiktok.com/@roahraschlareloaded?_t=ZN-8xmMiL4rDGA&_r=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-yellow-800 hover:text-white transition-all duration-300"
                    title="TikTok"
                  >
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                    </svg>
                  </a>
                  <a
                    href="https://open.spotify.com/user/31fas3j4lxldgcus5xzmpo7ypqdi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-red-800 hover:text-white transition-all duration-300"
                    title="Spotify"
                  >
                    <Disc3 className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </nav>
          )}
        </nav>

        {/* Hero Section with Parallax */}
        <section
          id="home"
          className="relative min-h-screen flex flex-col justify-between overflow-hidden"
        >
          {/* Preload hero image for LCP optimization */}
          <img
            src="/all.jpg"
            alt=""
            className="hidden"
            fetchPriority="high"
            loading="eager"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('/all.jpg')`,
              transform: `translateY(${scrollY * 0.5}px)`,
              willChange: "transform",
            }}
          ></div>
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Top spacer */}
          <div className="flex-1 flex items-start justify-center pt-24 md:pt-32">
            <div className="relative text-center px-6 max-w-4xl mx-auto text-white z-10">
              <h1 className="text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight">
                <span className="font-script font-bold text-red-800 block mb-4">
                  Tradition
                </span>
                <span className="font-script text-4xl md:text-6xl lg:text-7xl text-yellow-800">
                  & Leidenschaft
                </span>
              </h1>
              <p className="font-script text-lg md:text-2xl lg:text-3xl mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed opacity-90 text-blue-800 -mt-1 md:mt-0">
                Roah Raschla Reloaded - etwas Schilf gewickelt
              </p>
            </div>
          </div>

          {/* Button at bottom */}
          <div className="relative z-10 pb-8 md:pb-12 lg:pb-16">
            <div className="text-center">
              <a
                href="#ueber-uns"
                onClick={(e) => scrollToSection("ueber-uns", e)}
                className="inline-flex items-center px-6 py-3 bg-gray-600 text-white font-medium rounded-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 text-base tracking-wide"
                aria-label="Mehr über RoahRaschlaReloaded erfahren"
              >
                Mehr erfahren
                <i className="fas fa-arrow-right ml-2" aria-hidden="true"></i>
              </a>
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
            </div>

            <div className="mb-20">
              <div className="mb-20">
                <div className="max-w-4xl mx-auto text-center">
                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
                    Wir sind die RoahRaschlaReloaded aus dem Nordburgenland, in
                    der Nähe des Neusiedler Sees – eine böhmische Partie, die
                    die Blasmusik in unserer Region mit Herz und guter Laune am
                    Leben hält. Unsere acht Musiker, jung bis jung geblieben,
                    bringen alles auf die Bühne, was das Blasmusikherz
                    höherschlagen lässt: von traditionellen Märschen bis zu
                    schwungvollen Polkas.
                  </p>
                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
                    Wir sind stolz auf unsere musikalische Tradition und freuen
                    uns darauf, diese mit der Gemeinschaft zu teilen. Ob bei
                    festlichen Anlässen, Konzerten oder geselligen
                    Veranstaltungen – unsere Musik bringt Menschen zusammen und
                    schafft unvergessliche Momente.
                  </p>
                  <div className="grid md:grid-cols-3 gap-8 mt-12">
                    <div className="text-center">
                      <div
                        style={{
                          backgroundColor: "#82110 !important",
                        }}
                        className="w-16 h-16 bg-red-800 rounded-full flex items-center justify-center mx-auto mb-4"
                      >
                        <i className="fas fa-music text-white text-2xl"></i>
                      </div>
                      <h3 className="font-glitch-sm text-lg text-gray-900 mb-2 tracking-wide">
                        TRADITION
                      </h3>
                      <p className="text-gray-600">
                        Bei uns ist Blasmusik eine lebendige Tradition, die von
                        Generation zu Generation weitergegeben wird.
                      </p>
                    </div>
                    <div className="text-center">
                      <div
                        style={{
                          backgroundColor: "#FFDE00 !important",
                        }}
                        className="w-16 h-16 bg-red-800 rounded-full flex items-center justify-center mx-auto mb-4"
                      >
                        <i className="fas fa-users text-white text-2xl"></i>
                      </div>
                      <h3 className="font-glitch-sm text-lg text-gray-900 mb-2 tracking-wide">
                        GEMEINSCHAFT
                      </h3>
                      <p className="text-gray-600">
                        Musik verbindet uns und schafft starke
                        Gemeinschaftsgefühle
                      </p>
                    </div>
                    <div className="text-center">
                      <div
                        style={{
                          backgroundColor: "#2D245F !important",
                        }}
                        className="w-16 h-16 bg-red-800 rounded-full flex items-center justify-center mx-auto mb-4"
                      >
                        <i className="fas fa-heart text-white text-2xl"></i>
                      </div>
                      <h3 className="font-glitch-sm text-lg text-gray-900 mb-2 tracking-wide">
                        LEIDENSCHAFT
                      </h3>
                      <p className="text-gray-600">
                        Mit Herzblut musizieren wir für unser Publikum, weil
                        gute Musik Freude macht und Menschen verbindet.
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
                {musicians.map((musician) => (
                  <div
                    key={musician.id}
                    className="text-center group cursor-pointer"
                    onClick={() => setSelectedMusician(musician)}
                  >
                    <div className="relative mb-6 overflow-hidden rounded-2xl">
                      {/* Mono Image */}
                      <img
                        src={musician.monoImage}
                        alt={musician.name}
                        className="w-full h-80 object-cover group-hover:opacity-0 transition-opacity duration-300"
                        width={400}
                        height={320}
                        loading="lazy"
                      />
                      {/* Regular Image - shown on hover */}
                      <img
                        src={musician.image}
                        alt={musician.name}
                        className="absolute inset-0 w-full h-80 object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        width={400}
                        height={320}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <h3 className="font-glitch-sm text-lg text-gray-900 mb-2 tracking-wide">
                      {musician.name}
                    </h3>
                    <p className="font-script text-lg text-red-800 font-semibold">
                      {musician.instrument}
                    </p>
                  </div>
                ))}
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
                        src="/event_klingenbach.jpg"
                        alt="Faschingsfest – ASKÖ Fußballverein Klingenbach"
                        className="w-full h-48 object-cover rounded-xl"
                        width={400}
                        height={192}
                        loading="lazy"
                      />
                    </div>
                    <div className="md:w-2/3">
                      <h4 className="text-xl text-gray-900 mb-3">
                        Faschingsfest – ASKÖ Fußballverein Klingenbach
                      </h4>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        Das bunte Faschingsfest des ASKÖ Fußballvereins
                        begeistert mit fröhlicher Stimmung, Musik und guter
                        Laune – heiter, ausgelassen und voller Lebensfreude! Wir
                        sind dabei!
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                        <span>
                          <i className="fas fa-calendar mr-2"></i>
                          15. Februar 2026, 11:30 - 14:00
                        </span>
                      </div>
                    </div>
                  </div>
                </div>





                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3">
                      <img
                        src="/event_stmargarethen.jpg"
                        alt="Johannikirtag in St. Margarethen"
                        className="w-full h-48 object-cover rounded-xl"
                        width={400}
                        height={192}
                        loading="lazy"
                      />
                    </div>
                    <div className="md:w-2/3">
                      <h4 className="text-xl text-gray-900 mb-3">
                        Johannikirtag in St. Margarethen
                      </h4>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        Der Musikverein St. Margarethen im Burgenland lädt
                        herzlich zum Johannikirtag am 24. Juni 2026
                        ein! Das ganze findet auf dem Festgelände und Halle beim Musikvereinshaus in
                        der Kirchengasse 33 statt.
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                        <span>
                          <i className="fas fa-calendar mr-2"></i>
                          24. Juni 2026, 14:00 - 19:00
                        </span>
                      </div>
                    </div>
                  </div>
                </div>



                     
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3 flex items-center justify-center bg-black rounded-xl h-48">
                      <img
                          src="/event_hinzkunz.jpg"
                          alt="Musikstammtisch"
                          className="max-w-full max-h-full object-contain"
                          width={400}
                          height={106}
                          loading="lazy"
                        />
                    </div>
                    <div className="md:w-2/3">
                      <h4 className="text-xl text-gray-900 mb-3">
                      Musikstammtisch im Hinz&Kunz
                      </h4>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        Wir spielen beim Musikstammtisch in der Bar Hinz&Kunz 
                        in Wien am Karlsplatz 1/5, 1010 Wien. Die gemütliche Bar 
                        ist bekannt für ihre erfrischenden Drinks und 
                        regelmäßigen musikalischen Veranstaltungen.
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                        <span>
                          <i className="fas fa-calendar mr-2"></i>
                          10. November 2026, 20:00 - 24:00
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
              <div className="bg-white rounded-2xl p-6 shadow-lg md:col-span-2">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-glitch-sm text-lg text-gray-900 tracking-wide">
                    GANS BURGENLAND GENUSSMARKT
                    </h4>
                  </div>
                  <p className="text-gray-600 mb-4">
                  In der Ruster Altstadt fand der Gans Burgenland Genussmarkt statt. Wir hatten die Ehre, bei diesem Event zu spielen und die Besucher mit unserer Musik zu unterhalten.
                  </p>
                  <div className="text-sm text-gray-500 mb-3">
                    <span>
                      <i className="fas fa-calendar mr-2"></i>
                      Sonntag, 04. Oktober 2025, 16:00
                    </span>
                  </div>
                  <a
                    href="https://www.meinbezirk.at/eisenstadt/c-leute/gans-burgenland-genussmarkt-begeisterte-besucher_a7694452"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-glitch-sm text-red-800 hover:text-red-600 text-sm tracking-wide"
                  >
                    ZUM BERICHT{" "}
                    <i className="fas fa-external-link-alt ml-1"></i>
                  </a>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-glitch-sm text-lg text-gray-900 tracking-wide">
                      REMUSHOF - WEINFEST JAGSCHITZ
                    </h4>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Gemütlicher Auftritt beim traditionsreichen Remushof der
                    Familie Jagschitz. Wein, Musik und pannonisches Flair.
                  </p>
                  <div className="text-sm text-gray-500 mb-3">
                    <span>
                      <i className="fas fa-calendar mr-2"></i>
                      Samstag, 17. August 2025, 18:00
                    </span>
                  </div>
                  <a
                    href="https://www.facebook.com/remushofjagschitz.at/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-glitch-sm text-red-800 hover:text-red-600 text-sm tracking-wide"
                  >
                    MEHR INFOS <i className="fas fa-external-link-alt ml-1"></i>
                  </a>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-glitch-sm text-lg text-gray-900 tracking-wide">
                      ORF AUFNAHME – "ÖSTERREICH HEUTE"
                    </h4>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Fernsehauftritt für die Sendung "Österreich heute" –
                    Musikbeitrag im Rahmen der regionalen
                    Kulturberichterstattung.
                  </p>
                  <div className="text-sm text-gray-500 mb-3">
                    <span>
                      <i className="fas fa-calendar mr-2"></i>
                      Mittwoch, 4. September 2025, 17:00
                    </span>
                  </div>
                  <a
                    href="https://tv.orf.at/program/orf2/oesterreic9716.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-glitch-sm text-red-800 hover:text-red-600 text-sm tracking-wide"
                  >
                    ZUR SENDUNG{" "}
                    <i className="fas fa-external-link-alt ml-1"></i>
                  </a>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg md:col-span-2">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-glitch-sm text-lg text-gray-900 tracking-wide">
                      KIRTAG MÖRBISCH – AUFTRITT CSÁRDA
                    </h4>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Stimmungsvolle Musik beim traditionellen Kirtag in Mörbisch
                    – diesmal im kleineren Rahmen bei der Csárda.
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
                    className="font-glitch-sm text-red-800 hover:text-red-600 text-sm tracking-wide"
                  >
                    ZUM BERICHT{" "}
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
                Eindrücke von unseren Auftritten und Veranstaltungen
              </p>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {/* Regular Images */}
              {[
                {
                  src: "/gallery/rrr_15.jpg",
                  alt: "Auftritt bei Veranstaltung",
                },
                {
                  src: "/gallery/rrr_14.jpg",
                  alt: "Auftritt bei Veranstaltung",
                },
                {
                  src: "/gallery/rrr_13.jpg",
                  alt: "Auftritt bei Veranstaltung",
                },
                {
                  src: "/gallery/rrr_12.jpg",
                  alt: "Auftritt bei Veranstaltung",
                },
                {
                  src: "/gallery/rrr_11.jpg",
                  alt: "Auftritt bei Veranstaltung",
                },
                {
                  src: "/gallery/rrr_10.jpg",
                  alt: "Auftritt bei Veranstaltung",
                },
                {
                  src: "/gallery/rrr_9.jpg",
                  alt: "Auftritt bei Veranstaltung",
                },
                {
                  src: "/gallery/rrr_8.jpg",
                  alt: "Auftritt bei Veranstaltung",
                },
                {
                  src: "/gallery/rrr_7.jpg",
                  alt: "Auftritt bei Veranstaltung",
                },
                {
                  src: "/gallery/rrr_6.jpg",
                  alt: "Auftritt bei Veranstaltung",
                },
                {
                  src: "/gallery/rrr_2.jpg",
                  alt: "Auftritt bei Veranstaltung",
                },
                {
                  src: "/gallery/rrr_1.jpg",
                  alt: "Auftritt bei Veranstaltung",
                },

                {
                  src: "/gallery/rrr_3.jpg",
                  alt: "Auftritt bei Veranstaltung",
                },
                {
                  src: "/gallery/rrr_4.jpg",
                  alt: "Auftritt bei Veranstaltung",
                },
                {
                  src: "/gallery/rrr_5.jpg",
                  alt: "Auftritt bei Veranstaltung",
                },
              ].map((image, index) => (
                <div
                  key={index}
                  className="cursor-pointer hover:scale-105 transition-transform duration-300"
                  onClick={() => openModal(image.src)}
                >
                  <div className="aspect-[3/4] w-full">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover rounded-2xl shadow-lg"
                      width={400}
                      height={533}
                      loading="lazy"
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
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div
                    style={{
                      backgroundColor: "#821110 !important",
                    }}
                    className="w-12 h-12 bg-red-800 rounded-full flex items-center justify-center text-white"
                  >
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">Adresse</h4>
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
                      backgroundColor: "#FFDE00 !important",
                    }}
                    className="w-12 h-12 bg-red-800 rounded-full flex items-center justify-center text-white"
                  >
                    <i className="fas fa-phone"></i>
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">Telefon</h4>
                    <p className="text-gray-600">+43 676 4072973</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div
                    style={{
                      backgroundColor: "#2D245F !important",
                    }}
                    className="w-12 h-12 bg-red-800 rounded-full flex items-center justify-center text-white"
                  >
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">E-Mail</h4>
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
                    width={200}
                    height={64}
                    loading="lazy"
                  />
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Neu belebte böhmische Blasmusik mit frischem Schwung und viel
                  Leidenschaft – altbewährt, aber keineswegs von gestern.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com/profile.php?id=61578069538211"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-red-800 hover:text-white transition-all duration-300"
                    title="Instagram"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/roahraschla_reloaded/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-800 hover:text-white transition-all duration-300"
                    title="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.tiktok.com/@roahraschlareloaded?_t=ZN-8xmMiL4rDGA&_r=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-yellow-800 hover:text-white transition-all duration-300"
                    title="TikTok"
                  >
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                    </svg>
                  </a>
                  <a
                    href="https://open.spotify.com/user/31fas3j4lxldgcus5xzmpo7ypqdi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-red-800 hover:text-white transition-all duration-300"
                    title="Spotify"
                  >
                    <Disc3 className="h-5 w-5" />
                  </a>
                </div>
              </div>

              <div>
                <h2 className="heading-script text-lg text-gray-900 mb-6">
                  Schnelllinks
                </h2>
                <nav aria-label="Footer Navigation">
                  <ul className="space-y-3">
                    <li>
                      <a
                        href="#home"
                        onClick={(e) => scrollToSection("home", e)}
                        className="text-gray-600 hover:text-red-800 transition-colors duration-200 cursor-pointer font-medium"
                        aria-label="Zur Startseite navigieren"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="#ueber-uns"
                        onClick={(e) => scrollToSection("ueber-uns", e)}
                        className="text-gray-600 hover:text-red-800 transition-colors duration-200 cursor-pointer font-medium"
                        aria-label="Zu Über uns navigieren"
                      >
                        Über uns
                      </a>
                    </li>
                    <li>
                      <a
                        href="#events"
                        onClick={(e) => scrollToSection("events", e)}
                        className="text-gray-600 hover:text-red-800 transition-colors duration-200 cursor-pointer font-medium"
                        aria-label="Zu Events navigieren"
                      >
                        Events
                      </a>
                    </li>
                    <li>
                      <a
                        href="#galerie"
                        onClick={(e) => scrollToSection("galerie", e)}
                        className="text-gray-600 hover:text-red-800 transition-colors duration-200 cursor-pointer font-medium"
                        aria-label="Zur Galerie navigieren"
                      >
                        Galerie
                      </a>
                    </li>
                    <li>
                      <a
                        href="#kontakt"
                        onClick={(e) => scrollToSection("kontakt", e)}
                        className="text-gray-600 hover:text-red-800 transition-colors duration-200 cursor-pointer font-medium"
                        aria-label="Zum Kontakt navigieren"
                      >
                        Kontakt
                      </a>
                    </li>
                  </ul>
                </nav>
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
                  <li className="text-gray-600">+43 676 4072973</li>
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
                  className="text-gray-600 hover:text-red-800 transition-colors duration-200 text-sm font-medium"
                >
                  Impressum
                </Link>
                <Link
                  href="/privacy"
                  className="text-gray-600 hover:text-red-800 transition-colors duration-200 text-sm font-medium"
                >
                  Datenschutz
                </Link>
              </div>
              <p className="text-gray-600">
                &copy; 2025 Roah Raschla Reloaded. Alle Rechte vorbehalten.
              </p>
            </div>
          </div>
        </footer>

        {/* Musician Dialog */}
        <Dialog
          open={!!selectedMusician}
          onOpenChange={() => setSelectedMusician(null)}
        >
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            {selectedMusician && (
              <DialogHeader>
                <DialogTitle className="font-script text-3xl text-red-800 text-center mb-4">
                  {selectedMusician.name}
                </DialogTitle>
                <div className="space-y-6">
                  <div className="text-center">
                    <img
                      src={selectedMusician.image}
                      alt={selectedMusician.name}
                      className="w-48 h-48 object-cover rounded-2xl mx-auto mb-4 shadow-lg"
                      width={192}
                      height={192}
                      loading="lazy"
                    />
                    <h3 className="font-script text-2xl text-red-800 font-semibold mb-2">
                      {selectedMusician.instrument}
                    </h3>
                    <div className="text-gray-600 mb-4 text-center">
                      {selectedMusician.description
                        .split("\n")
                        .map((line, index) => (
                          <div key={index} className="mb-2">
                            {line}
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </DialogHeader>
            )}
          </DialogContent>
        </Dialog>

        {/* Image Modal */}
        {imageModalOpen && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <div className="relative w-full h-full max-w-6xl max-h-[90vh] flex items-center justify-center">
              <img
                src={modalImage || "/placeholder.svg"}
                alt=""
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                loading="eager"
              />

              <button
                onClick={closeModal}
                className="absolute top-6 right-6 text-white text-3xl hover:text-gray-300"
                aria-label="Bild schließen"
              >
                <i className="fas fa-times" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
