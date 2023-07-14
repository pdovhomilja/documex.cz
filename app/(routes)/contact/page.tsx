import H4Title from "@/components/typography/h4";
import Container from "../../components/Container";
import GetInTouch from "@/app/components/getInTouch";
import { BuildingOffice2Icon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { PhoneIcon } from "lucide-react";
import H2Title from "@/components/typography/h2";

export default function ContactPage() {
  return (
    <Container
      title="Spojete se s námi"
      description="Rádi s Vámi probereme Vaše požadavky osobně nebo přes online meeting. Domluvte si s námi schůzku"
    >
      <div className="flex flex-col md:flex-row w-full max-w-7xl h-full">
        <div className="text-xs md:w-1/2 md:p-10">
          <H2Title>Neváhejte nás kontaktovat</H2Title>
          <div>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              <br /> <br />
              <span className="font-bold"> Documex s.r.o.</span>
              <br />
              IČ: 19197934
            </p>
            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <BuildingOffice2Icon
                    className="h-7 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  Rybná 716/24
                  <br />
                  Praha 1, 110 00
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <PhoneIcon
                    className="h-7 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <a
                    className="hover:text-gray-900"
                    href="tel:+1 (555) 234-5678"
                  >
                    +420 (733) 59 00 59
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon
                    className="h-7 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <a className="hover:text-gray-900" href="mailto:info@isfg.cz">
                    info@documex.cz
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="md:w-1/2 md:p-10">
          <H2Title>Kontaktní formulář</H2Title>
          <GetInTouch />
        </div>
      </div>
    </Container>
  );
}
