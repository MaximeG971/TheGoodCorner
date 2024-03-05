import AdCard, { AdCardProps } from "./AdCard";

const RecentAds = () => {
  const ads: AdCardProps[] = [
    {
      imgUrl: "/images/table.webp",
      link: "/ads/table",
      price: 120,
      title: "Table",
    },
    {
      imgUrl: "/images/dame-jeanne.webp",
      link: "/ads/dame-jeanne",
      price: 75,
      title: "Dame-Jeanne",
    },
    {
      imgUrl: "/images/vide-poche.webp",
      link: "/ads/vvide-poche",
      price: 4,
      title: "Vide-Poche",
    },
    {
      imgUrl: "/images/vaisselier.webp",
      link: "/ads/vaisselier",
      price: 900,
      title: "Vaisselier",
    },
    {
      imgUrl: "/images/bougie.webp",
      link: "/ads/bougie",
      price: 8,
      title: "Bougie",
    },
    {
      imgUrl: "/images/porte-magazine.webp",
      link: "/ads/porte-magazine",
      price: 45,
      title: "Porte-Magazine",
    },
  ];
  return (
    <>
      <h2>Annonces récentes</h2>
      <section className="recent-ads">
        {ads.map((ad) => (
          <AdCard
            imgUrl={ad.imgUrl}
            link={ad.link}
            price={ad.price}
            title={ad.title}
            key={ad.title}
          />
        ))}
      </section>
    </>
  );
};

export default RecentAds;
