import { useState } from "react";
import AdCard, { AdCardProps } from "./AdCard";

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

const RecentAds = () => {
  const [total, setTotal] = useState(0);
  return (
    <>
      <h2>Annonces récentes</h2>
      <p>Coût total: {total}€</p>
      <section className="recent-ads">
        {ads.map((ad) => (
          <div key={ad.title}>
            <AdCard
              imgUrl={ad.imgUrl}
              link={ad.link}
              price={ad.price}
              title={ad.title}
            />
            <button
              className="button"
              onClick={() => {
                console.log(ad.price);
                setTotal(total + ad.price);
              }}
            >
              Ajouter le prix au total
            </button>
          </div>
        ))}
      </section>
    </>
  );
};

export default RecentAds;
