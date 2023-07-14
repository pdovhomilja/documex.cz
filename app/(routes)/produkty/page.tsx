import Container from "@/app/components/Container";
import Carousel from "@/components/Carousel";
import H2Title from "@/components/typography/h2";
import H3Title from "@/components/typography/h3";
import Heading from "@/components/ui/heading";
import React from "react";
import Balancer from "react-wrap-balancer";

type Props = {};

const ProductsPage = (props: Props) => {
  const slides = [
    {
      src: "/images/carusel/Screen-detail-historie.png",
      alt: "Historie dokumentu",
    },
    { src: "/images/carusel/Screen-podatelna.png", alt: "Podatelna" },
    {
      src: "/images/carusel/Screen-podatelna-prijem-analog.png",
      alt: "Příjem analogového dokumentu",
    },
    { src: "/images/carusel/Screen-spisovy_rad.png", alt: "Spisový řád" },
    {
      src: "/images/carusel/Screen-vlozit-do-spisu.png",
      alt: "Vložit do spisu",
    },
  ];

  return (
    <>
      <Heading
        title="SpisUm - elektronická spisová služba"
        description="první řešení pro výkon elektronické spisové služby vytvořené
         podle nových standardů ČR"
      />
      <div>
        <div className="p-5 ">
          <Balancer>
            Jsme hrdi na to, že naše spisová služba SpisUm je řešením, které
            splňuje vysoké nároky pro elektronickou spisovou službu. Toto
            následně zaručuje, že naši zákazníci budou z velké části připraveni
            na nařízení Min. Vnitra z pohledu povinné atestace elektronické
            spisové služby. SpisUm je moderní agendové řešení, které je
            postaveno na pokročilé architektuře, která zajišťuje stabilitu a
            rychlost odezvy. To z něj dělá jedno z nejkvalitnějších agendových
            řešení na českém trhu.
          </Balancer>
        </div>
        <div className="p-5">
          <Balancer>
            Máme k dispozici špičkový tým odborníků, kteří jsou připraveni
            pomoci našim zákazníkům s jakýmkoliv dotazem, problémem nebo
            požadavkem. Pokud máte zájem o naše služby, neváhejte nás
            kontaktovat. Rádi Vám představíme, jak může SpisUm zlepšit Vaši
            práci s dokumenty a urychlit Vaše agendy.
          </Balancer>
        </div>
      </div>

      <div className="mx-auto w-2/3 py-10">
        <Carousel autoSlide={false}>
          {slides.map((slide, index) => (
            <img src={slide.src} key={index} alt={slide.alt} />
          ))}
        </Carousel>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-5">
          <H3Title>Jak naše řešení funguje</H3Title>
          <p className="border rounded-md m-3 p-3 shadow-md">
            <Balancer>
              Základem spisové služby SpisUm je moderní, inovativní a snadno
              ovladatelný systém, který vám umožňuje efektivně spravovat vaše
              dokumenty. S naším řešením ušetříte čas, peníze a snížíte
              administrativní zátěž vaší organizace.
            </Balancer>
          </p>
        </div>
        <div className="p-5">
          <H3Title>Výhody řešení</H3Title>
          <p className="border rounded-md m-3 p-3 shadow-md">
            <Balancer>
              Výhody použití spisové služby: Použitím naší spisové služby
              získáváte přístup k modernímu agendovému řešení, které splňuje
              národní standard pro elektronickou spisovou službu. Vaši
              zaměstnanci budou moci snadno vyhledávat, upravovat a spravovat
              dokumenty v reálném čase, což vám pomůže zefektivnit práci a
              zvýšit produktivitu.
            </Balancer>
          </p>
        </div>
        <div className="p-5">
          <H3Title>Flexibilita</H3Title>
          <p className="border rounded-md m-3 p-3 shadow-md">
            <Balancer>
              SpisUm je navržen tak, aby splňoval potřeby organizací různých
              velikostí a zaměření. Naše spisová služba je flexibilní a
              přizpůsobitelná, což znamená, že se dokáže přizpůsobit vašim
              potřebám a požadavkům.
            </Balancer>
          </p>
        </div>
        <div className="p-5">
          <H3Title>Bezpečnost</H3Title>
          <p className="border rounded-md m-3 p-3 shadow-md">
            <Balancer>
              SpisUm je vybaven pokročilými bezpečnostními funkcemi, které
              chrání vaše dokumenty a data před neoprávněným přístupem a útoky
              hackerů. Naše řešení využívá nejmodernějších technologií a
              průmyslových standardů pro zajištění maximální bezpečnosti.
            </Balancer>
          </p>
        </div>
        <div className="p-5">
          <H3Title>Podpora</H3Title>
          <p className="border rounded-md m-3 p-3 shadow-md">
            <Balancer>
              Jsme zde pro vás a vaši organizaci. Naše zákaznická podpora je
              připravena pomoci vám s jakýmikoliv dotazy a problémy, které by se
              mohly objevit při používání naší služby. Zajistíme, aby vaše
              spisová služba fungovala bez problémů a aby byli vaši zaměstnanci
              spokojení.
            </Balancer>
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
