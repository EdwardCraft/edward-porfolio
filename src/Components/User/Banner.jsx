import { sources } from "constants.js";

import styles from "Components/User/styles/Banner.module.css";

const Banner = (props) => {
  return (
    <div className={styles.banner}>
      <img
        className={styles.background}
        src={sources.BANNER_BACKGROUND.img}
        alt={sources.BANNER_BACKGROUND.atl}
      />
      <div className={styles.avatar}>
        <img src={sources.AVATAR.img} alt={sources.AVATAR.atl} />
      </div>
    </div>
  );
};

export default Banner;
