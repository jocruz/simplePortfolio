import consultSvg from "../assets/consult.svg";
import SectionTitle from "./SectionTitle";
const Consultation = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div class="align-element grid  md:grid-cols-2 items-center gap-16">
        <article>
          <SectionTitle text="Consultation" />
          <p className="text-slate-600 mt-8 leading-loose">
            Leveraging my extensive experience in Web 3.0 solutions, I offer
            consulting services to organizations navigating the complexities of
            blockchain technology, smart contracts, NFT deployment, and
            cryptocurrency integration. My journey in the decentralized web
            space encompasses hands-on involvement in various projects, where I
            have meticulously crafted and deployed smart contracts, as well as
            facilitated the launch of NFTs. I pride myself on staying abreast of
            the ever-evolving Web 3.0 landscape, actively participating in
            numerous communities and networks. This ensures that I am always in
            tune with the latest technologies, tools, and methodologies,
            enabling me to provide well-informed and cutting-edge solutions. My
            commitment lies in thoroughly understanding each client's unique
            needs and challenges, ensuring the delivery of tailored strategies
            that leverage the full potential of blockchain technology to drive
            innovation and value.
          </p>
        </article>
        <img src={consultSvg} className="w-full h-64" />
      </div>
    </section>
  );
};
export default Consultation;
