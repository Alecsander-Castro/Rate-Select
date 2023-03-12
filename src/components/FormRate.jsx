import { useState } from "react";
import styles from "./FormRate.module.css";

const FormRate = () => {
  const [rate, setRate] = useState(0);
  const [isSubmited, setIsSubmited] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmited(true);
  };

  if (isSubmited && rate > 0) {
    return (
      <div className={styles.rate_thanks}>
        <img
          className={styles.thanks}
          src="illustration-thank-you.svg"
          alt=""
        />
        <p className={styles.rate_select}>You selected {rate} of 5</p>
        <h1>Thank You</h1>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    );
  }

  return (
    <div className={styles.rate}>
      <img className={styles.star} src="icon-star.svg" alt="" />
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <form onSubmit={handleSubmit}>
        <div className={styles.form}>
          <button
            className={styles.buttons}
            type="button"
            value={rate}
            onClick={() => setRate(1)}
          >
            1
          </button>

          <button
            className={styles.buttons}
            type="button"
            value={rate}
            onClick={() => setRate(2)}
          >
            2
          </button>
          <button
            className={styles.buttons}
            type="button"
            value={rate}
            onClick={() => setRate(3)}
          >
            3
          </button>
          <button
            className={styles.buttons}
            type="button"
            value={rate}
            onClick={() => setRate(4)}
          >
            4
          </button>
          <button
            className={styles.buttons}
            type="button"
            value={rate}
            onClick={() => setRate(5)}
          >
            5
          </button>
        </div>

        <button className={styles.submit} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormRate;
