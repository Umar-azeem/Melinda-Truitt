"use client";
import Image from "next/image";
import Link from "next/link";

interface SocialIcon {
  id: string;
  src: string;
  alt: string;
  url: string;
}
const icons = {
  phone: "https://img.icons8.com/ios/50/ffffff/phone.png",
  chevronDown: "https://img.icons8.com/ios/50/ffffff/expand-arrow.png",
  calendar: "https://img.icons8.com/ios/50/0a5c3a/calendar.png",
  arrowRight: "https://img.icons8.com/ios/50/ffffff/forward--v1.png",
  facebook: "https://img.icons8.com/ios-filled/50/374151/facebook-new.png",
  instagram: "https://img.icons8.com/ios/50/374151/instagram-new.png",
  linkedin: "https://img.icons8.com/ios-filled/50/374151/linkedin.png",
  youtube: "https://img.icons8.com/ios-filled/50/374151/youtube-play.png",
  google: "https://img.icons8.com/ios-filled/50/374151/google-logo.png",
  x: "https://img.icons8.com/ios-filled/50/374151/x.png", // Twitter/X
};
const Loan: React.FC = () => {
  const socialIcons: SocialIcon[] = [
    {
      id: "facebook",
      src: icons.facebook, // from your icons object
      alt: "Facebook",
      url: "https://www.facebook.com/226240744134830",
    },
    // {
    //     id: "instagram",
    //     src: icons.instagram,
    //     alt: "Instagram",
    //     url: "https://instagram.com/homeloansbyMelinda/",
    // },
    {
      id: "linkedin",
      src: icons.linkedin,
      alt: "LinkedIn",
      url: "https://x.com/MelindaTruitt10", // uncommented and kept your original mailto
    },
    // {
    //     id: "google",
    //     src: icons.google,
    //     alt: "Google",
    //     url: "mailto:LBaird@cfmtg.com",
    // },
    // {
    //     id: "youtube",
    //     src: icons.youtube,
    //     alt: "YouTube",
    //     url: "#",  // ← replace with your YouTube URL
    // },
    {
      id: "x",
      src: icons.x,
      alt: "X (Twitter)",
      url: "https://www.linkedin.com/in/melinda-truitt-025baa2", // ← replace with your X profile URL
    },
  ];

  return (
    <section className="bg-[#f5f5f5] py-12 px-4 sm:py-16 sm:px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        <div className="text-center lg:text-left">
          <p className="text-[#E46A52] uppercase tracking-[0.2em] sm:tracking-[0.3em] font-bold mb-4 text-sm sm:text-base">
            A Team You Can Trust
          </p>

          <h1 className="text-3xl sm:text-4xl font-semibold leading-tight text-gray-900">
            Our President Melinda Truitt,
          </h1>

          <p className="mt-6 sm:mt-8 text-gray-800 text-sm sm:text-md leading-relaxed max-w-xl mx-auto lg:mx-0">
            When it comes to your next home loan, we know you want to work with
            someone who cares about you and your neighborhood. But let’s not get
            it twisted — a highly competitive interest rate is at the top of
            your list. Well, you’re in the right place! When you work with Motto
            Mortgage Signature you get local service and national connections.
            How? We’re locally owned and operated. We’re also part of a national
            network that has some of the best mortgage lender relationships
            around. What does that mean, exactly? It means we can compare
            hundreds of home loans from mortgage lending companies nationwide.
            Just think of us as your friendly neighborhood home loan shoppers.
          </p>

          <Link href="/about">
            {" "}
            <button
              className="mt-8 sm:mt-10 inline-flex items-center gap-3 bg-[#E46A52] hover:bg-[#E46A52]/80 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold transition mx-auto lg:mx-0"
              type="button"
            >
              About me
            </button>
          </Link>
        </div>
        <div className="flex  flex-col justify-center items-center mt-16 sm:mt-20 lg:mt-0">
          <div className="w-full relative ">
            <div className="flex absolute flex-col items-end gap-1.5 top-36 left-52">
              <div className="flex lg:hidden flex-col items-start gap-1 ">
                <div className="h-4 w-4 bg-white rounded-full" />
                <div className="h-3 w-3 bg-white rounded-full" />
                <div className="h-2 w-2 bg-white rounded-full" />
                <div className="h-1 w-1 bg-white rounded-full" />
              </div>
            </div>
            <div className="w-full max-w-[400px] md:max-w-[500px] aspect-[4/5]  md:h-[500px] bg-[#E46A52] rounded-[20px]" />
            <Image
              src="/img/vdp.png"
              alt="Advisor"
              width={480}
              height={680}
              className="absolute bottom-[2px] h-[60%] w-full max-w-[880px] object-contain object-bottom sm:h-[500px] sm:w-[450px] rounded-[20px]"
              priority
              unoptimized
            />
            <div className="md:hidden  absolute top-6 md:bottom-1 md:top-40 left-42 -translate-x-1/2 sm:left-20 sm:translate-x-0  sm:top-1/2 sm:-translate-y-1/2 bg-white rounded-[24px] sm:rounded-[30px] border-white shadow-4xl p-5 sm:p-8 w-[68%] sm:w-[300px]">
              <h3 className="text-lg sm:text-xl font-bold text-black">
                Melinda Truitt
              </h3>
              <p className="text-gray-800 mt-2 text-xs">Senior Loan Officer</p>

              <p className="text-gray-800 text-xs mt-2">NMLS ID: 399001</p>
            </div>
          </div>
          <div className="flex justify-center gap-3 sm:gap-4 mt-6 sm:mt-8 ">
            {socialIcons.map((icon) => (
              <a
                key={icon.id}
                href={icon.url}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full text-[#E46A52] border border-[#E46A52] flex items-center justify-center hover:bg-[#E46A52] transition group"
                aria-label={icon.alt}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={icon.src}
                  alt={icon.alt}
                  width={20}
                  height={20}
                  className="w-5 h-5 group-hover:brightness-0 text-[#E46A52] group-hover:invert transition-all"
                  unoptimized
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Loan;
