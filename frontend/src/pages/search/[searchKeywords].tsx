import AdCard, { AdCardProps } from "@/components/AdCard";
import axios from "axios";
import { log } from "console";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const SearchPage = () => {
  const router = useRouter();

  const [ads, setAds] = useState<AdCardProps[]>([]);
  useEffect(() => {
    const fetchAds = async () => {
      const searchResult = await axios.get(
        "http://localhost:5001/search/ads/" + router.query.searchKeywords
      );
      console.log("searchresults", searchResult);
      setAds(searchResult.data);
    };
    fetchAds();
  }, [router.query.searchKeywords]);

  return (
    <section className="recent-ads">
      {ads.map((el) => (
        <div key={el.id}>
          <AdCard
            title={el.title}
            imgUrl={el.imgUrl}
            link={`/ad/${el.id}`}
            price={el.price}
            owner={el.owner}
          />
        </div>
      ))}
    </section>
  );
};

export default SearchPage;
