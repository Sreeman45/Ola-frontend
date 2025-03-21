import Card from "./card";

export default function Cards() {
  return (
    <div className="md:w-90% flex flex-wrap justify-center items-center w-auto mt-12 xl:gap-16 2xl:gap-16 md:gap-12 gap-10">
      <Card image_1="fogg.png" image_2="foggbg.jpg" name="Fogg" price={550} />
      <Card
        image_1="partygirl.png"
        image_2="prettygirl.png"
        name="Party girl"
        price={750}
      />
      <Card
        image_1="denver.jpg"
        image_2="denver.png"
        name="Denver"
        price={400}
      />
      <Card
        image_1="happyhours.jpg"
        image_2="happyhours.png"
        name="Happy Hours"
        price={633}
      />
    </div>
  );
}
