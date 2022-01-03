import { ArrowButton } from "../../../buttons/Buttons";
import styles from "./Section2.module.scss";
import building2 from "../../../../assets/building2.jpg";
const Section2 = () => {
  return (
    <section className={styles.section_2}>
      {/* IMAGE */}
      <div className={styles.section_2_image_container}>
        <img src={building2} alt="building2" />
      </div>

      {/* SLOGAN */}
      <div className={styles.section_2_slogan}>
        <h1>
          Whether You're Buying, Selling Or Renting, We Can Help You Move
          Forward
        </h1>
      </div>

      {/* SELECTION */}
      <div className={styles.selection}>
        {/* BUY */}
        <div className={styles.buy}>
          <h3>Buy a home</h3>
          <p>
            Find your place with and immersive photo experience and the most
            listings, including things you won't find anywhere else
          </p>
          <ArrowButton text={"Search Houses"} path="buy" />
        </div>

        {/* Rent */}
        <div className={styles.rent}>
          <h3>Rent a home</h3>
          <p>
            We're creating a seasmless online expirience - from shopping on the
            largest rental network , to applying , to paying rent.
          </p>
          <ArrowButton text={"See Your Options"} path="rent" />
        </div>

        {/* Sell */}
        <div className={styles.sell}>
          <h3>Sell a home</h3>
          <p>
            Wether you get a cash offer throught Real Offers or choose to sell
            traditionally, we can help you navigate a successful sale.
          </p>
          <ArrowButton text={"Use Filters"} path="search" />
        </div>
      </div>
    </section>
  );
};

export default Section2;
