import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Čuveni kroasan",
    description: "Kroasan sa sirom i šunkaricom (3 komada)",
    price: 280,
  },
  {
    id: "m2",
    name: "Gomboce",
    description:
      "Knedla punjena pekmezom od šljiva, uvaljana u prezlu (2 komada)",
    price: 220,
  },
  {
    id: "m3",
    name: "Mekika",
    description: "Punomasna mekika, posoljena (1 komad)",
    price: 80,
  },
  {
    id: "m4",
    name: "Topli sendvič",
    description:
      "Sendvič sa šunkaricom, sirom i premazima, zapečen u rerni (2 komada)",
    price: 180,
  },
  {
    id: "m5",
    name: "Kajgana sa paprikom",
    description:
      "Kajgana od 3 jajeta, pečena sa svežom seckanom paprikom, i rendanim gauda sirom",
    price: 380,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
