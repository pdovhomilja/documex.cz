import React from "react";
import Container from "../components/Container";
import H4Title from "@/components/typography/h4";
import { Separator } from "@/components/ui/separator";
import H2Title from "@/components/typography/h2";
import Balancer from "react-wrap-balancer";
import Link from "next/link";

const HomePage = () => {
  return (
    <Container
      title="Transformujeme vaše agendy do digitální éry"
      description="S naším řešením uděláte pro váš úřad maximum..."
    >
      <div className="py-10">
        <p>
          Documex je mladá společnost, která se specializuje na poskytování
          inovativních řešení pro úřady a veřejné instituce v České republice.
          Naše firma se soustředí na vývoj a distribuci efektivních agendových
          řešení se zapojením moderních řešení s podporou umělé inteligence.
          Naše řešení zlepšují efektivitu a produktivitu našich zákazníků. S
          více než 10 lety zkušeností a úspěšnými projekty pro významné
          zákazníky jsme se stali inovativním lídrem v oboru.
        </p>
        <p>
          Naše priority jsou kvalita, spolehlivost a inovativnost. Vytváříme
          řešení, která jsou snadno použitelná a přizpůsobivá individuálním
          potřebám našich zákazníků. Navíc vždy stojíme za našimi produkty a
          poskytujeme vynikající zákaznickou podporu. Aktivně rozvíjíme řešení
          díky každodenní komunikaci s našimi zákazníky.
        </p>
        <H2Title>Přinášíme na trh moderní řešení</H2Title>
        pro všechny typy organizací zacílené na digitalizaci dokumentů. Rychlá,
        efektivní řešení na nejnovějších technologiích včetně umělé inteligence.
        Vyzkoušejte si nás (
        <Link href={"http://demo.spisum.cz"} className="text-blue-500">
          demo.spisum.cz
        </Link>
        )
      </div>
      {/* Comment */}
      <Separator />
      <H2Title>Náš přístup</H2Title>
      <div className="grid grid-cols-1 md:grid-cols-2 py-10">
        <p className="border rounded-md m-3 p-3 shadow-md">
          <Balancer>
            Digitalizace je v našem DNA - jsme společnost, která vám pomůže
            převést vaše agendy do digitální podoby a ušetřit vám tak nejen
            peníze, ale také čas a úsilí.
          </Balancer>
        </p>
        <p className="border rounded-md m-3 p-3 shadow-md">
          <Balancer>
            Představujeme vám náš vlastní framework pro vývoj aplikačního
            software, který nám umožňuje pokrýt potřeby jak malých, tak středně
            velkých podniků. Díky našemu frameworku dokážeme zkrátit
            time-to-market nových řešení o více než 40%. Naše řešení vám pomohou
            odbourat administrativní procesy a ušetřit vám tak čas a peníze. S
            našimi řešeními můžete snadno a rychle digitalizovat své agendy a
            zvýšit efektivitu vašeho podnikání.
          </Balancer>
        </p>
        <p className="border rounded-md m-3 p-3 shadow-md">
          <Balancer>
            Naši klienti jsou naší prioritou a vždy se snažíme najít nejlepší
            řešení pro jejich potřeby. Jsme hrdi na to, že jsme pomohli mnoha
            společnostem převést své agendy do digitální podoby a dosáhnout tak
            významného zlepšení v efektivitě svého podnikání.
          </Balancer>
        </p>
        <p className="border rounded-md m-3 p-3 shadow-md">
          <Balancer>
            Pokud hledáte spolehlivé a moderní řešení v oblasti digitalizace
            agend, jste na správném místě. Kontaktujte nás a rádi vám
            představíme naše služby a poradíme s vašimi konkrétními potřebami.
          </Balancer>
        </p>
      </div>
    </Container>
  );
};

export default HomePage;
