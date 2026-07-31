import Link from "next/link";
import Image from "next/image";

const FooterText = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1c1c1c] text-white px-4 sm:px-6 py-6 text-[14px] sm:text-[16px] leading-6">
      <div>
        <hr className="border-gray-700 my-6 sm:my-10" />
        <p>
          We’re locally owned and operated. We’re also part of a national
          network that has some of the best mortgage lender relationships
          around. What does that mean, exactly? It means we can compare hundreds
          of home loans from mortgage lending companies nationwide. Just think
          of us as your friendly neighborhood home loan shoppers.
        </p>

        <p className="mt-6">For Licensing Information go to:</p>

        <p className="mt-6">
          © {currentYear} Melinda | All Rights Reserved. Texas Complaint Recovery Disclaimer
          
        </p>
      </div>

      <hr className="border-gray-700 my-6 sm:my-10" />
      <div className="flex justify-end mt-4 sm:mt-0">
        <Image
          src="/img/logo.png"
          alt="Equal Housing Opportunity"
          width={100}
          height={100}
          className="w-18 sm:w-32 h-auto"
          unoptimized
        />
      </div>
    </footer>
  );
};

export default FooterText;
