import axios from "axios";
import { useEffect, useState } from "react";
import AdCard, { AdCardProps } from "./AdCard";

const RecentAds = () => {
  const [total, setTotal] = useState(
    localStorage.getItem("CART_TOTAL")
      ? JSON.parse(localStorage.getItem("CART_TOTAL") as string)
      : 0
  );

  const [ads, setAds] = useState<AdCardProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get<AdCardProps[]>(
          "http://localhost:5001/ads"
        );
        console.log("data from api", result.data);
        setAds(result.data);
      } catch (err) {
        console.log("error", err);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h2>Annonces récentes</h2>
      <p>Coût total: {total}€</p>
      <section className="recent-ads">
        {ads.map((ad) => (
          <div key={ad.id}>
            <AdCard
              imgUrl={ad.imgUrl}
              link={`/ads/${ad.id}`}
              price={ad.price}
              title={ad.title}
              owner={ad.owner}
              description={ad.description}
            />
            <button
              className="button"
              onClick={() => {
                console.log(ad.price);
                setTotal(total + ad.price);
                localStorage.setItem(
                  "CART_TOTAL",
                  JSON.stringify(total + ad.price)
                );
              }}
            >
              Ajouter le prix au total
            </button>
            <button
              className="button"
              onClick={async () => {
                try {
                  await axios.delete(`http://localhost:5001/ads/${ad.id}`);
                  try {
                    const result = await axios.get<AdCardProps[]>(
                      "http://localhost:5001/ads"
                    );
                    setAds(result.data);
                  } catch (err) {}
                } catch (err) {
                  console.log("err", err);
                }
              }}
            >
              Supprimer l&apos;annonce
            </button>
          </div>
        ))}
      </section>
    </>
  );
};

export default RecentAds;
