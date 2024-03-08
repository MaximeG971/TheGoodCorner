import { AdCardProps } from "@/components/AdCard";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const AdDetailComponent = () => {
  const router = useRouter();
  const [ad, setAd] = useState<AdCardProps>({} as AdCardProps);

  useEffect(() => {
    const fetchAd = async () => {
      const result = await axios.get<AdCardProps>(
        "http://localhost:5001/ads/" + router.query.id
      );
      console.log(result);
      setAd(result.data);
    };
    fetchAd();
  }, [router.query.id]);
  console.log("fetch details from ad " + router.query.id);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5001/ads/${router.query.id}`);
      router.push("/");
    } catch (err) {
      console.error("Error deleting ad", err);
    }
  };

  return (
    <div className="main-content">
      <h2 className="ad-details-title">{ad?.title}</h2>
      <section className="ad-details">
        <div className="ad-details-image-container">
          <img className="ad-details-image" src={ad?.imgUrl} />
        </div>
        <div className="ad-details-info">
          <div className="ad-details-price">{ad?.price}€</div>
          <div className="ad-details-description">{ad?.description}</div>
          <hr className="separator" />
          <div className="ad-details-owner">
            Annoncée publiée par <b>{ad?.owner}</b>.
          </div>
        </div>
      </section>
      <button className="button" onClick={handleDelete}>
        Supprimer l&apos;annonce
      </button>
      <Link
        href={`/ads/edit/${ad?.id}`}
        className="button button-primary link-button"
      >
        Modifier
      </Link>
    </div>
  );
};

export default AdDetailComponent;
