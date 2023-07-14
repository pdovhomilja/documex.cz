import Balancer from "react-wrap-balancer";

interface HeadingProps {
  title: string;
  description: string;
}

const Heading = ({ title, description }: HeadingProps) => {
  return (
    <div className="">
      <h2 className="text-3xl font-bold tracking-tight">
        <Balancer>{title}</Balancer>
      </h2>
      <p className="text-sm text-muted-foreground py-5">
        <Balancer>{description}</Balancer>
      </p>
    </div>
  );
};

export default Heading;
