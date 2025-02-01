const Cards = () => {
  const cardsInfo = [
    {
      title: "Brand Strategy",
      desc: "It's the core of your company's identity. It guides all business decisions, ensuring a consistent and impactful presence in the market.",
      points: [
        "Research & Insights",
        "Unique Ways",
        "Purpose, Mission, Vision",
        "Value Proposition",
        "Personality Traits",
      ],
      video:
        "https://mnje44qvzv.ufs.sh/f/A6WPmewQD3mIGK82GF9pyHes9h1JCnRwi8jZGYPIv4zTAUSM",
      bgColor: "bg-[#c3abff]",
    },
    {
      title: "Visual Identity",
      desc: "Visual identity is the unique visual language of your brand, creating memorable impressions and emotional connections with your audience.",
      points: [
        "Logotype, Typography & Colour",
        "Illustrations & 3D",
        "Photography Art Direction",
        "Brand Book & Guidelines",
        "Animations",
      ],
      video:
        "https://mnje44qvzv.ufs.sh/f/A6WPmewQD3mIHP4SiAjbTCiUrVdI3ZFAc8L7PmQ2XqlHsW9y",
      bgColor: "bg-[#fff]",
    },
    {
      title: "Website",
      desc: "Our website design services blend innovation and creativity to deliver user-centric solutions that elevate your brand and engage your audience.",
      points: [
        "UX Design",
        "User Testing",
        "Product Prototype",
        "Mobile UI",
        "Sotware UI design",
      ],
      video:
        "https://mnje44qvzv.ufs.sh/f/A6WPmewQD3mI8MNkfJOj2d74yGRTgviSnkcFwafhNqx39OXu",
      bgColor: "bg-[#fed35b]",
    },
    {
      title: "Product",
      desc: "Our product design services focus on creating intuitive and aesthetically pleasing products that resonate with your audience and stand out in the market.",
      points: [
        "UX Design",
        "User Testing",
        "Product Prototype",
        "Mobile UI",
        "Sotware UI design",
      ],
      video:
        "https://mnje44qvzv.ufs.sh/f/A6WPmewQD3mIC60Q1HhnqN9PLSVTQD3o8iesIB0Aur1fhxw2",
      bgColor: "bg-[#1e1e1e]",
    },
  ];

  return (
    <div className="min-h-screen">
      {cardsInfo.map((card, i) => (
        <div
          key={card.title}
          className={`card ${
            i === cardsInfo.length - 1 ? "z-[20] relative" : "z-[10]"
          }`}
        >
          <div
            className={`${
              card.bgColor
            } py-4 px-8 flex justify-between card-inner ${
              i === cardsInfo.length - 1 ? "text-white" : "text-black"
            }`}
          >
            <div className="flex flex-col justify-between">
              <h2 className={`text-9xl font-semibold `}>{card.title}</h2>
              <div className="flex justify-between gap-24">
                <p className="w-[600px] text-2xl">{card.desc}</p>
                <div className="flex flex-col">
                  {card.points.map((point, i) => (
                    <p key={i}>{point}</p>
                  ))}
                </div>
              </div>
            </div>
            <video
              className="w-[500px] h-[400px] rounded-xl"
              autoPlay
              muted
              loop
              src={card.video}
            ></video>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
