import Link from "next/link";

export default function LegalPage() {
  return (
    <main className="max-w-3xl mx-auto p-8 space-y-6 text-gray-700">
      <h1 className="font-glitch-sm text-3xl text-gray-900 mb-6 tracking-wide">
        IMPRESSUM
      </h1>

      <section>
        <h2 className="font-glitch-sm text-lg text-gray-900 mb-2 tracking-wide">
          ROAH-RASCHLA RELOADED
        </h2>
        <p>
          Mühlweg 4<br />
          7062 St. Margarethen im Burgenland
          <br />
          Österreich
        </p>
      </section>

      <section>
        <h2 className="font-glitch-sm text-lg text-gray-900 mb-2 tracking-wide">
          VEREINSREGISTER
        </h2>
        <p>
          Roah-Raschla Reloaded
          <br />
          Sitz des Vereins: Sankt Margarethen im Burgenland
        </p>
      </section>

      <section>
        <h2 className="font-glitch-sm text-lg text-gray-900 mb-2 tracking-wide">
          VERTRETUNGSBEFUGTE PERSON
        </h2>
        <p>Obmann: Michael Artner</p>
      </section>

      <section>
        <h2 className="font-glitch-sm text-lg text-gray-900 mb-2 tracking-wide">
          KONTAKT
        </h2>
        <p>
          E-Mail:{" "}
          <a href="mailto:roahraschlareloaded@gmail.com" className="underline">
            roahraschlareloaded@gmail.com
          </a>
          <br />
          Telefon:{" "}
          <a href="tel:+436764072973" className="underline">
            +43 676 4072973
          </a>
        </p>
      </section>

      <section>
        <h2 className="font-glitch-sm text-lg text-gray-900 mb-2 tracking-wide">
          MEDIENINHABER, HERAUSGEBER UND FÜR DEN INHALT VERANTWORTLICH
        </h2>
        <p>
          Roah-Raschla Reloaded
          <br />
          Obmann: Michael Artner
          <br />
          Mühlweg 4<br />
          7062 St. Margarethen im Burgenland
        </p>
      </section>

      <section>
        <h2 className="font-glitch-sm text-lg text-gray-900 mb-2 tracking-wide">
          GRUNDLEGENDE RICHTUNG DER WEBSITE
        </h2>
        <p>
          Diese Website dient der Information über den Musikverein Roah-Raschla
          Reloaded, seine Aktivitäten und Veranstaltungen.
        </p>
      </section>

      <section>
        <h2 className="font-glitch-sm text-lg text-gray-900 mb-2 tracking-wide">
          HINWEIS
        </h2>
        <p>
          Roah-Raschla Reloaded ist ein gemeinnütziger Verein gemäß den
          Bestimmungen des österreichischen Vereinsgesetzes.
        </p>
      </section>

      <section>
        <h2 className="font-glitch-sm text-lg text-gray-900 mb-2 tracking-wide">
          HAFTUNGSAUSSCHLUSS
        </h2>

        <h3 className="font-glitch-sm font-semibold mb-2 tracking-wide">
          HAFTUNG FÜR INHALTE
        </h3>
        <p className="mb-4">
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
          auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
          §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
          verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
          überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
          Tätigkeit hinweisen.
        </p>

        <h3 className="font-glitch-sm font-semibold mb-2 tracking-wide">
          HAFTUNG FÜR LINKS
        </h3>
        <p>
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren
          Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
          fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
          verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
          Seiten verantwortlich.
        </p>
      </section>
      <div className="mt-12">
        <Link href="/" className="text-blue-600 hover:underline">
          Zurück zur Startseite
        </Link>
      </div>
    </main>
  );
}
