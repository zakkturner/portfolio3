import { NavigationSlider } from "../navSlider/navSlider";

export const Slider = () => {
  return (
    <NavigationSlider
      className="awesome-slider"
      media={[
        {
          slug: "",
          className: "home",
          children: () => <p>Home</p>,
        },
        {
          slug: "about",
          className: "about",
          children: () => <p>About</p>,
        },
      ]}
    />
  );
};
