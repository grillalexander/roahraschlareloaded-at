import Link from "next/link";

export default function DatenschutzPage() {
  return (
    <main className="max-w-4xl mx-auto p-8 space-y-8 text-gray-700">
      <div className="container mx-auto max-w-4xl">
        <h1 className="heading-script text-3xl mb-6 text-gray-900">
          Datenschutzerklärung
        </h1>

        <div className="mb-8 p-4 border border-gray-300 rounded-md bg-gray-50">
          <p className="text-gray-700">
            Diese Datenschutzerklärung ist das deutsche Original. Die
            Übersetzungen dienen nur zur Information. Im Falle von Abweichungen
            oder Unstimmigkeiten hat die deutsche Version Vorrang.
          </p>
        </div>

        <div className="space-y-6 text-gray-700">
          <div>
            <h2 className="heading-script text-xl mb-3 text-gray-900">
              Einleitung und Überblick
            </h2>
            <p className="mb-4">
              Wir haben diese Datenschutzerklärung (Fassung
              12.03.2025-112963921) verfasst, um Ihnen gemäß der Vorgaben der{" "}
              <a
                className="text-blue-600 hover:underline"
                href="https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32016R0679&from=DE&tid=112963921#d1e2269-1-1"
                target="_blank"
                rel="noreferrer noopener"
              >
                Datenschutz-Grundverordnung (EU) 2016/679
              </a>{" "}
              und anwendbaren nationalen Gesetzen zu erklären, welche
              personenbezogenen Daten (kurz Daten) wir als Verantwortliche – und
              die von uns beauftragten Auftragsverarbeiter (z. B. Provider) –
              verarbeiten, zukünftig verarbeiten werden und welche rechtmäßigen
              Möglichkeiten Sie haben.
              <br />
              <strong>Kurz gesagt:</strong> Wir informieren Sie umfassend über
              Daten, die wir über Sie verarbeiten.
            </p>
            <p className="mb-4">
              Datenschutzerklärungen klingen für gewöhnlich sehr technisch und
              verwenden juristische Fachbegriffe. Diese Datenschutzerklärung
              soll Ihnen hingegen die wichtigsten Dinge so einfach und
              transparent wie möglich beschreiben. Soweit es der Transparenz
              förderlich ist, werden technische{" "}
              <strong>Begriffe leserfreundlich erklärt</strong>, Links zu
              weiterführenden Informationen geboten und{" "}
              <strong>Grafiken</strong> zum Einsatz gebracht. Wir informieren
              damit in klarer und einfacher Sprache, dass wir im Rahmen unserer
              Geschäftstätigkeiten nur dann personenbezogene Daten verarbeiten,
              wenn eine entsprechende gesetzliche Grundlage gegeben ist. Das ist
              sicher nicht möglich, wenn man möglichst knappe, unklare und
              juristisch-technische Erklärungen abgibt, so wie sie im Internet
              oft Standard sind, wenn es um Datenschutz geht. Ich hoffe, Sie
              finden die folgenden Erläuterungen interessant und informativ und
              vielleicht ist die eine oder andere Information dabei, die Sie
              noch nicht kannten.
              <br />
              Wenn trotzdem Fragen bleiben, möchten wir Sie bitten, sich an die
              unten genannte verantwortliche Stelle zu wenden, den vorhandenen
              Links zu folgen und sich weitere Informationen auf Drittseiten
              anzusehen. Unsere Kontaktdaten finden Sie selbstverständlich auch
              im Impressum.
            </p>
          </div>

          <div>
            <h2 className="heading-script text-xl mb-3 text-gray-900">
              Anwendungsbereich
            </h2>
            <p className="mb-4">
              Diese Datenschutzerklärung gilt für alle von uns im Unternehmen
              verarbeiteten personenbezogenen Daten und für alle
              personenbezogenen Daten, die von uns beauftragte Firmen
              (Auftragsverarbeiter) verarbeiten. Mit personenbezogenen Daten
              meinen wir Informationen im Sinne des Art. 4 Nr. 1 DSGVO wie zum
              Beispiel Name, E-Mail-Adresse und postalische Anschrift einer
              Person. Die Verarbeitung personenbezogener Daten sorgt dafür, dass
              wir unsere Dienstleistungen und Produkte anbieten und abrechnen
              können, sei es online oder offline. Der Anwendungsbereich dieser
              Datenschutzerklärung umfasst:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>
                alle Onlineauftritte (Websites, Onlineshops), die wir betreiben
              </li>
              <li>Social Media Auftritte und E-Mail-Kommunikation</li>
              <li>mobile Apps für Smartphones und andere Geräte</li>
            </ul>
            <p className="mb-4">
              <strong>Kurz gesagt:</strong> Die Datenschutzerklärung gilt für
              alle Bereiche, in denen personenbezogene Daten im Unternehmen über
              die genannten Kanäle strukturiert verarbeitet werden. Sollten wir
              außerhalb dieser Kanäle mit Ihnen in Rechtsbeziehungen eintreten,
              werden wir Sie gegebenenfalls gesondert informieren.
            </p>
          </div>

          <div>
            <h2 className="heading-script text-xl mb-3 text-gray-900">
              Rechtsgrundlagen
            </h2>
            <p className="mb-4">
              In der folgenden Datenschutzerklärung geben wir Ihnen transparente
              Informationen zu den rechtlichen Grundsätzen und Vorschriften,
              also den Rechtsgrundlagen der Datenschutz-Grundverordnung, die uns
              ermöglichen, personenbezogene Daten zu verarbeiten.
              <br />
              Was das EU-Recht angeht, beziehen wir uns auf die VERORDNUNG (EU)
              2016/679 DES EUROPÄISCHEN PARLAMENTS UND DES RATES vom 27. April
              2016. Diese Datenschutz-Grundverordnung der EU können Sie
              selbstverständlich online auf EUR-Lex, dem Zugang zum EU-Recht,
              unter{" "}
              <a
                className="text-blue-600 hover:underline"
                href="https://eur-lex.europa.eu/legal-content/DE/ALL/?uri=celex%3A32016R0679"
                target="_blank"
                rel="noreferrer noopener"
              >
                https://eur-lex.europa.eu/legal-content/DE/ALL/?uri=celex%3A32016R0679
              </a>{" "}
              nachlesen.
            </p>
            <p className="mb-4">
              Wir verarbeiten Ihre Daten nur, wenn mindestens eine der folgenden
              Bedingungen zutrifft:
            </p>
            <ol className="list-decimal list-inside mb-4 space-y-2">
              <li>
                <strong>Einwilligung</strong> (Artikel 6 Absatz 1 lit. a DSGVO):
                Sie haben uns Ihre Einwilligung gegeben, Daten zu einem
                bestimmten Zweck zu verarbeiten. Ein Beispiel wäre die
                Speicherung Ihrer eingegebenen Daten eines Kontaktformulars.
              </li>
              <li>
                <strong>Vertrag</strong> (Artikel 6 Absatz 1 lit. b DSGVO): Um
                einen Vertrag oder vorvertragliche Verpflichtungen mit Ihnen zu
                erfüllen, verarbeiten wir Ihre Daten. Wenn wir zum Beispiel
                einen Kaufvertrag mit Ihnen abschließen, benötigen wir vorab
                personenbezogene Informationen.
              </li>
              <li>
                <strong>Rechtliche Verpflichtung</strong> (Artikel 6 Absatz 1
                lit. c DSGVO): Wenn wir einer rechtlichen Verpflichtung
                unterliegen, verarbeiten wir Ihre Daten. Zum Beispiel sind wir
                gesetzlich verpflichtet Rechnungen für die Buchhaltung
                aufzuheben. Diese enthalten in der Regel personenbezogene Daten.
              </li>
              <li>
                <strong>Berechtigte Interessen</strong> (Artikel 6 Absatz 1 lit.
                f DSGVO): Im Falle berechtigter Interessen, die Ihre Grundrechte
                nicht einschränken, behalten wir uns die Verarbeitung
                personenbezogener Daten vor. Wir müssen zum Beispiel gewisse
                Daten verarbeiten, um unsere Website sicher und wirtschaftlich
                effizient betreiben zu können. Diese Verarbeitung ist somit ein
                berechtigtes Interesse.
              </li>
            </ol>
            <p className="mb-4">
              Weitere Bedingungen wie die Wahrnehmung von Aufnahmen im
              öffentlichen Interesse und Ausübung öffentlicher Gewalt sowie dem
              Schutz lebenswichtiger Interessen treten bei uns in der Regel
              nicht auf. Soweit eine solche Rechtsgrundlage doch einschlägig
              sein sollte, wird diese an der entsprechenden Stelle ausgewiesen.
            </p>
            <p className="mb-4">
              Zusätzlich zu der EU-Verordnung gelten auch noch nationale
              Gesetze:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>
                In <strong>Österreich</strong> ist dies das Bundesgesetz zum
                Schutz natürlicher Personen bei der Verarbeitung
                personenbezogener Daten (<strong>Datenschutzgesetz</strong>
                ), kurz <strong>DSG</strong>.
              </li>
              <li>
                In <strong>Deutschland</strong> gilt das{" "}
                <strong>Bundesdatenschutzgesetz</strong>, kurz{" "}
                <strong>BDSG</strong>.
              </li>
            </ul>
            <p>
              Sofern weitere regionale oder nationale Gesetze zur Anwendung
              kommen, informieren wir Sie in den folgenden Abschnitten darüber.
            </p>
          </div>

          <div>
            <h2 className="heading-script text-xl mb-3 text-gray-900">
              Kontaktdaten des Verantwortlichen
            </h2>
            <p className="mb-4">
              Sollten Sie Fragen zum Datenschutz oder zur Verarbeitung
              personenbezogener Daten haben, finden Sie nachfolgend die
              Kontaktdaten der verantwortlichen Person bzw. Stelle:
              <br />
              <br />
              Roah-Raschla Reloaded
              <br />
              Mühlweg 4, 7062 St. Margarethen im Burgenland
              <br />
              Vertretungsberechtigt: Michael Artner
              <br />
              E-Mail: roahraschlareloaded@gmail.com
              <br />
              Telefon: +43 676 4072973
              <br />
            </p>
          </div>

          <div>
            <h2 className="heading-script text-xl mb-3 text-gray-900">
              Speicherdauer
            </h2>
            <p className="mb-4">
              Dass wir personenbezogene Daten nur so lange speichern, wie es für
              die Bereitstellung unserer Dienstleistungen und Produkte unbedingt
              notwendig ist, gilt als generelles Kriterium bei uns. Das
              bedeutet, dass wir personenbezogene Daten löschen, sobald der
              Grund für die Datenverarbeitung nicht mehr vorhanden ist. In
              einigen Fällen sind wir gesetzlich dazu verpflichtet, bestimmte
              Daten auch nach Wegfall des ursprünglichen Zwecks zu speichern,
              zum Beispiel zu Zwecken der Buchführung.
            </p>
            <p className="mb-4">
              Sollten Sie die Löschung Ihrer Daten wünschen oder die
              Einwilligung zur Datenverarbeitung widerrufen, werden die Daten so
              rasch wie möglich und soweit keine Pflicht zur Speicherung
              besteht, gelöscht.
            </p>
            <p>
              Über die konkrete Dauer der jeweiligen Datenverarbeitung
              informieren wir Sie weiter unten, sofern wir weitere Informationen
              dazu haben.
            </p>
          </div>

          <div>
            <h2 className="heading-script text-xl mb-3 text-gray-900">
              Rechte laut Datenschutz-Grundverordnung
            </h2>
            <p className="mb-4">
              Gemäß Artikel 13, 14 DSGVO informieren wir Sie über die folgenden
              Rechte, die Ihnen zustehen, damit es zu einer fairen und
              transparenten Verarbeitung von Daten kommt:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>
                Sie haben laut Artikel 15 DSGVO ein Recht auf Auskunft darüber,
                ob wir Daten von Ihnen verarbeiten. Sollte das zutreffen, haben
                Sie Recht darauf eine Kopie der Daten zu erhalten und die
                folgenden Informationen zu erfahren:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>zu welchem Zweck wir die Verarbeitung durchführen;</li>
                  <li>
                    die Kategorien, also die Arten von Daten, die verarbeitet
                    werden;
                  </li>
                  <li>
                    wer diese Daten erhält und wenn die Daten an Drittländer
                    übermittelt werden, wie die Sicherheit garantiert werden
                    kann;
                  </li>
                  <li>wie lange die Daten gespeichert werden;</li>
                  <li>
                    das Bestehen des Rechts auf Berichtigung, Löschung oder
                    Einschränkung der Verarbeitung und dem Widerspruchsrecht
                    gegen die Verarbeitung;
                  </li>
                  <li>
                    dass Sie sich bei einer Aufsichtsbehörde beschweren können
                    (Links zu diesen Behörden finden Sie weiter unten);
                  </li>
                  <li>
                    die Herkunft der Daten, wenn wir sie nicht bei Ihnen erhoben
                    haben;
                  </li>
                  <li>
                    ob Profiling durchgeführt wird, ob also Daten automatisch
                    ausgewertet werden, um zu einem persönlichen Profil von
                    Ihnen zu gelangen.
                  </li>
                </ul>
              </li>
              <li>
                Sie haben laut Artikel 16 DSGVO ein Recht auf Berichtigung der
                Daten, was bedeutet, dass wir Daten richtig stellen müssen,
                falls Sie Fehler finden.
              </li>
              <li>
                Sie haben laut Artikel 17 DSGVO das Recht auf Löschung („Recht
                auf Vergessenwerden"), was konkret bedeutet, dass Sie die
                Löschung Ihrer Daten verlangen können.
              </li>
              <li>
                Sie haben laut Artikel 18 DSGVO das Recht auf Einschränkung der
                Verarbeitung, was bedeutet, dass wir die Daten nur mehr
                speichern dürfen aber nicht weiter verwenden.
              </li>
              <li>
                Sie haben laut Artikel 20 DSGVO das Recht auf
                Datenübertragbarkeit, was bedeutet, dass wir Ihnen auf Anfrage
                Ihre Daten in einem gängigen Format zur Verfügung stellen.
              </li>
              <li>
                Sie haben laut Artikel 21 DSGVO ein Widerspruchsrecht, welches
                nach Durchsetzung eine Änderung der Verarbeitung zur Folge hat.
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>
                    Wenn die Verarbeitung Ihrer Daten auf Artikel 6 Abs. 1 lit.
                    e (öffentliches Interesse, Ausübung öffentlicher Gewalt)
                    oder Artikel 6 Abs. 1 lit. f (berechtigtes Interesse)
                    basiert, können Sie gegen die Verarbeitung Widerspruch
                    einlegen. Wir prüfen danach so rasch wie möglich, ob wir
                    diesem Widerspruch rechtlich nachkommen können.
                  </li>
                  <li>
                    Werden Daten verwendet, um Direktwerbung zu betreiben,
                    können Sie jederzeit gegen diese Art der Datenverarbeitung
                    widersprechen. Wir dürfen Ihre Daten danach nicht mehr für
                    Direktmarketing verwenden.
                  </li>
                  <li>
                    Werden Daten verwendet, um Profiling zu betreiben, können
                    Sie jederzeit gegen diese Art der Datenverarbeitung
                    widersprechen. Wir dürfen Ihre Daten danach nicht mehr für
                    Profiling verwenden.
                  </li>
                </ul>
              </li>
              <li>
                Sie haben laut Artikel 22 DSGVO unter Umständen das Recht, nicht
                einer ausschließlich auf einer automatisierten Verarbeitung (zum
                Beispiel Profiling) beruhenden Entscheidung unterworfen zu
                werden.
              </li>
              <li>
                Sie haben laut Artikel 77 DSGVO das Recht auf Beschwerde. Das
                heißt, Sie können sich jederzeit bei der Datenschutzbehörde
                beschweren, wenn Sie der Meinung sind, dass die
                Datenverarbeitung von personenbezogenen Daten gegen die DSGVO
                verstößt.
              </li>
            </ul>
            <p className="mb-4">
              <strong>Kurz gesagt:</strong> Sie haben Rechte – zögern Sie nicht,
              die oben gelistete verantwortliche Stelle bei uns zu kontaktieren!
            </p>
            <p>
              Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das
              Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen
              Ansprüche in sonst einer Weise verletzt worden sind, können Sie
              sich bei der Aufsichtsbehörde beschweren. Diese ist für Österreich
              die Datenschutzbehörde, deren Website Sie unter{" "}
              <a
                className="text-blue-600 hover:underline"
                href="https://www.dsb.gv.at/?tid=112963921"
                target="_blank"
                rel="noreferrer noopener"
              >
                https://www.dsb.gv.at/
              </a>{" "}
              finden. In Deutschland gibt es für jedes Bundesland einen
              Datenschutzbeauftragten. Für nähere Informationen können Sie sich
              an die{" "}
              <a
                className="text-blue-600 hover:underline"
                href="https://www.bfdi.bund.de/DE/Home/home_node.html"
                target="_blank"
                rel="noreferrer noopener"
              >
                Bundesbeauftragte für den Datenschutz und die
                Informationsfreiheit (BfDI)
              </a>{" "}
              wenden. Für unser Unternehmen ist die oben genannte
              österreichische Behörde zuständig.
            </p>
          </div>

          <div>
            <h2 className="heading-script text-xl mb-3 text-gray-900">
              Sicherheit der Datenverarbeitung
            </h2>
            <p className="mb-4">
              Um personenbezogene Daten zu schützen, haben wir sowohl technische
              als auch organisatorische Maßnahmen umgesetzt. Wo es uns möglich
              ist, verschlüsseln oder pseudonymisieren wir personenbezogene
              Daten. Dadurch machen wir es im Rahmen unserer Möglichkeiten so
              schwer wie möglich, dass Dritte aus unseren Daten auf persönliche
              Informationen schließen können.
            </p>
            <p className="mb-4">
              Art. 25 DSGVO spricht hier von "Datenschutz durch
              Technikgestaltung und durch datenschutzfreundliche
              Voreinstellungen" und meint damit, dass man sowohl bei Software
              (z. B. Formularen) also auch Hardware (z. B. Zugang zum
              Serverraum) immer an Sicherheit denkt und entsprechende Maßnahmen
              setzt. Im Folgenden gehen wir, falls erforderlich, noch auf
              konkrete Maßnahmen ein.
            </p>
          </div>

          <div>
            <h2 className="heading-script text-xl mb-3 text-gray-900">
              TLS-Verschlüsselung mit https
            </h2>
            <p className="mb-4">
              TLS, Verschlüsselung und https klingen sehr technisch und sind es
              auch. Wir verwenden HTTPS (das Hypertext Transfer Protocol Secure
              steht für „sicheres Hypertext-Übertragungsprotokoll"), um Daten
              abhörsicher im Internet zu übertragen.
              <br />
              Das bedeutet, dass die komplette Übertragung aller Daten von Ihrem
              Browser zu unserem Webserver abgesichert ist – niemand kann
              "mithören".
            </p>
            <p className="mb-4">
              Damit haben wir eine zusätzliche Sicherheitsschicht eingeführt und
              erfüllen den Datenschutz durch Technikgestaltung ({" "}
              <a
                className="text-blue-600 hover:underline"
                href="https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32016R0679&from=DE&tid=112963921"
                target="_blank"
                rel="noreferrer noopener"
              >
                Artikel 25 Absatz 1 DSGVO
              </a>
              ). Durch den Einsatz von TLS (Transport Layer Security), einem
              Verschlüsselungsprotokoll zur sicheren Datenübertragung im
              Internet, können wir den Schutz vertraulicher Daten sicherstellen.
              <br />
              Sie erkennen die Benutzung dieser Absicherung der Datenübertragung
              am kleinen Schlosssymbol{" "}
              <img
                role="img"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='15' viewBox='0 0 12 15'%3E%3Cpath d='M8.1 6.5V5.1c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5v1.4H2v8h8v-8H8.1zM4.6 5.1c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v1.4H4.6V5.1z'/%3E%3C/svg%3E"
                alt="TLS-Verschlüsselung"
                width="12"
                height="15"
                className="inline"
              />{" "}
              links von der Internetadresse (z. B. beispielseite.de) und der
              Verwendung des Schemas https (anstatt http) als Teil unserer
              Internetadresse.
              <br />
              Wenn Sie mehr zum Thema Verschlüsselung wissen möchten, empfehlen
              wir die Google Suche nach "Hypertext Transfer Protocol Secure
              wiki" um gute Links zu weiterführenden Informationen zu erhalten.
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
              👥 Betroffene: Alle, die mit uns per Telefon, E-Mail oder
              Online-Formular kommunizieren
              <br />
              📓 Verarbeitete Daten: z. B. Telefonnummer, Name, E-Mail-Adresse,
              eingegebene Formulardaten. Mehr Details dazu finden Sie bei der
              jeweils eingesetzten Kontaktart
              <br />
              🤝 Zweck: Abwicklung der Kommunikation mit Kunden,
              Geschäftspartnern usw.
              <br />
              📅 Speicherdauer: Dauer des Geschäftsfalls und der gesetzlichen
              Bestimmungen
              <br />
              ⚖️ Rechtsgrundlagen: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung),
              Art. 6 Abs. 1 lit. b DSGVO (Vertrag), Art. 6 Abs. 1 lit. f DSGVO
              (Berechtigte Interessen)
            </p>
            <p className="mb-4">
              Wenn Sie mit uns Kontakt aufnehmen und per Telefon, E-Mail oder
              Online-Formular kommunizieren, kann es zur Verarbeitung
              personenbezogener Daten kommen.
            </p>
            <p className="mb-4">
              Die Daten werden für die Abwicklung und Bearbeitung Ihrer Frage
              und des damit zusammenhängenden Geschäftsvorgangs verarbeitet. Die
              Daten bleiben bei uns solange gespeichert, wie es das Gesetz
              vorschreibt.
            </p>
            <h3 className="heading-script-sm text-lg mb-2 text-gray-900">
              Betroffene Personen
            </h3>
            <p className="mb-4">
              Von den genannten Vorgängen sind alle betroffen, die über die von
              uns bereit gestellten Kommunikationswege den Kontakt zu uns
              suchen.
            </p>
            <h3 className="heading-script-sm text-lg mb-2 text-gray-900">
              Telefon
            </h3>
            <p className="mb-4">
              Wenn Sie uns anrufen, werden die Anrufdaten auf dem jeweiligen
              Endgerät und beim eingesetzten Telekommunikationsanbieter
              pseudonymisiert gespeichert. Außerdem können Daten wie Name und
              Telefonnummer im Anschluss per E-Mail versendet und zur
              Anfragebeantwortung gespeichert werden. Die Daten werden gelöscht,
              sobald der Geschäftsfall beendet wurde und es gesetzliche Vorgaben
              erlauben.
            </p>
            <h3 className="heading-script-sm text-lg mb-2 text-gray-900">
              E-Mail
            </h3>
            <p className="mb-4">
              Wenn Sie mit uns per E-Mail kommunizieren, werden Daten
              gegebenenfalls auf dem jeweiligen Endgerät (Computer, Laptop,
              Smartphone,...) gespeichert und es kommt zur Speicherung von Daten
              auf dem E-Mail-Server. Die Daten werden gelöscht, sobald der
              Geschäftsfall beendet wurde und es gesetzliche Vorgaben erlauben.
            </p>
            <h3 className="heading-script-sm text-lg mb-2 text-gray-900">
              Online Formulare
            </h3>
            <p className="mb-4">
              Wenn Sie mit uns mittels Online-Formular kommunizieren, werden
              Daten auf unserem Webserver gespeichert und gegebenenfalls an eine
              E-Mail-Adresse von uns weitergeleitet. Die Daten werden gelöscht,
              sobald der Geschäftsfall beendet wurde und es gesetzliche Vorgaben
              erlauben.
            </p>
            <h3 className="heading-script-sm text-lg mb-2 text-gray-900">
              Rechtsgrundlagen
            </h3>
            <p>
              Die Verarbeitung der Daten basiert auf den folgenden
              Rechtsgrundlagen:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>
                Art. 6 Abs. 1 lit. a DSGVO (Einwilligung): Sie geben uns die
                Einwilligung Ihre Daten zu speichern und weiter für den
                Geschäftsfall betreffende Zwecke zu verwenden;
              </li>
              <li>
                Art. 6 Abs. 1 lit. b DSGVO (Vertrag): Es besteht die
                Notwendigkeit für die Erfüllung eines Vertrags mit Ihnen oder
                einem Auftragsverarbeiter wie z. B. dem Telefonanbieter oder wir
                müssen die Daten für vorvertragliche Tätigkeiten, wie z. B. die
                Vorbereitung eines Angebots, verarbeiten;
              </li>
              <li>
                Art. 6 Abs. 1 lit. f DSGVO (Berechtigte Interessen): Wir wollen
                Kundenanfragen und geschäftliche Kommunikation in einem
                professionellen Rahmen betreiben. Dazu sind gewisse technische
                Einrichtungen wie z. B. E-Mail-Programme, Exchange-Server und
                Mobilfunkbetreiber notwendig, um die Kommunikation effizient
                betreiben zu können.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="heading-script text-xl mb-3 text-gray-900">
              Alle Texte sind urheberrechtlich geschützt.
            </h2>
            <p>
              Quelle: Erstellt mit dem{" "}
              <a
                className="text-blue-600 hover:underline"
                href="https://www.adsimple.at/datenschutz-generator/"
                title="Datenschutz Generator von AdSimple für Österreich"
                target="_blank"
                rel="noreferrer noopener"
              >
                Datenschutz Generator
              </a>{" "}
              von AdSimple
            </p>
          </div>
        </div>
      </div>
      <section>
        <h2 className="heading-script text-xl mb-3 text-gray-900">
          GitHub Pages Hosting
        </h2>
        <p className="mb-4">
          Diese Website wird auf GitHub Pages gehostet, einem Dienst von GitHub,
          Inc. Beim Besuch dieser Website können bestimmte technische Daten (z.
          B. IP-Adressen, Browsertyp und Zugriffszeiten) von GitHub zu
          Sicherheits- und Betriebszwecken protokolliert werden.
        </p>
        <p className="mb-4">
          Weitere Informationen darüber, wie GitHub Besucherdaten verarbeitet,
          finden Sie in den offiziellen Datenschutzrichtlinien von GitHub:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">
            <a
              href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              GitHub Datenschutzerklärung
            </a>
          </li>
          <li>
            <a
              href="https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              GitHub Pages Datenerfassung
            </a>
          </li>
        </ul>
        <p>
          Diese Website sammelt, speichert oder verarbeitet keine
          personenbezogenen Daten über das hinaus, was für die Kommunikation
          erforderlich ist (z. B. wenn Benutzer uns per E-Mail kontaktieren).
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
