
import hero from "../assets/images/hero.jpg";
import almonds from "../assets/images/almonds.jpg";
import cashews from "../assets/images/cashews.jpg";
import raisins from "../assets/images/raisins.jpg";
import driedMango from "../assets/images/dried-mango.jpg";
import walnuts from "../assets/images/walnuts.jpg";
import dates from "../assets/images/dates.jpg";
import pistachios from "../assets/images/pistachios.jpg";
import blueberries from "../assets/images/blueberries.jpg";
import apricots from "../assets/images/apricots.jpg";
import coconutChips from "../assets/images/coconut-chips.jpg";
import mixedDryfruits from "../assets/images/mixed-dryfruits.jpg";
import ourStory from "../assets/images/our-story.jpg";
import healthySnacks from "../assets/images/healthy-snacks.jpg";
import contact from "../assets/images/contact.jpg";

const images = {
  hero,
  almonds,
  cashews,
  raisins,
  "dried-mango": driedMango,
  walnuts,
  dates,
  pistachios,
  blueberries,
  apricots,
  "coconut-chips": coconutChips,
  "mixed-dryfruits": mixedDryfruits,
  "our-story": ourStory,
  "healthy-snacks": healthySnacks,
  contact,
};

export default function getImage(name) {
  return images[name] || hero;
}
