import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Najukusnije đakonije, na vašu kućnu adresu</h2>
      <p>
        Izaberite vašu omiljenu klopu, umastite se do lakata i budite srećni i
        bucmasti
      </p>
      <p>
        Sva naša jela se prave u domaćoj atmosferi, ukus kao da ste ih pravili
        kod kuće. Samo nema mirisa i prljavog posuđa.
      </p>
    </section>
  );
};

export default MealsSummary;
