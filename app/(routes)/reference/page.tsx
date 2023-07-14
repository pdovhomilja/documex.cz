import Container from "@/app/components/Container";
import H2Title from "@/components/typography/h2";
import Heading from "@/components/ui/heading";
import Image from "next/image";

const ReferencePage = () => {
  return (
    <>
      <Heading
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
      />
      <div className="p-5">
        <H2Title>Kdo již proužívá produkt SpisUm?</H2Title>
        <div className="flex flex-col md:flex-row w-full justify-center items-center mx-auto ">
          <Image
            src="/images/reference-1.png"
            alt="reference"
            width={200}
            height={200}
          />
          <Image
            src="/images/reference-2.png"
            alt="reference"
            width={200}
            height={200}
          />
          <Image
            src="/images/reference-3.png"
            alt="reference"
            width={200}
            height={200}
          />
          <Image
            src="/images/reference-4.png"
            alt="reference"
            width={200}
            height={200}
          />
          <Image
            src="/images/reference-5.png"
            alt="reference"
            width={200}
            height={200}
          />
          <Image
            src="/images/reference-6.png"
            alt="reference"
            width={200}
            height={200}
          />
        </div>
      </div>
    </>
  );
};

export default ReferencePage;
