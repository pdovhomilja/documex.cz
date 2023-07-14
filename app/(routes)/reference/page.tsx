import Container from "@/app/components/Container";
import H2Title from "@/components/typography/h2";
import Image from "next/image";

const ReferencePage = () => {
  return (
    <Container
      title="Reference"
      description="V Documexu se zaměřujeme na distribuci a implementaci moderních řešení
      pro správu a archivaci dokumentů, které pomáhají našim zákazníkům
      zefektivnit své pracovní procesy a zlepšit úroveň digitální správy svých
      dokumentů. Na této stránce si můžete přečíst několik případových studií,
      kde jsou popsány konkrétní projekty, které jsme úspěšně dokončili.
      Doufáme, že vám tyto reference pomohou lépe pochopit, jak můžeme přispět
      ke zlepšení vaší firemní efektivity. Pokud máte zájem o naše služby,
      neváhejte nás kontaktovat a rádi vám poskytneme další informace
    "
    >
      <div className="p-5">
        <H2Title>Kdo již proužívá produkt SpisUm?</H2Title>
        <div className="absolute flex mx-auto w-1/2 h-56 ">
          <Image
            src="/images/reference.png"
            alt="reference"
            fill
            className="relative object-contain"
          />
        </div>
      </div>
    </Container>
  );
};

export default ReferencePage;
