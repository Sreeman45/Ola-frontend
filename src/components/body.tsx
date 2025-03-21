import Banner from "./banner";
import Cards from "./cards";
import Testimonias from "./testimonials";


export default function Body() {
  return (
    <main>
      <Banner />
      <div className="w-full">
        <section className="container mx-auto flex flex-col md:w-4/5 mt-4 w-75%  py-6 ">
          <h1 className="font-bold font-[coursly] text-6xl text-center mb-4 xl:text-8xl text-pink-700 md:text-7xl">
            Ola Perfumes
          </h1>
          <article className="font-semibold text-stone-950 px-8 md:text-lg 2xl:text-xl">
            We have been voted the Fragrance Foundation Online Retailer of the
            Year for the past 5 years. Online we offer FREE standard delivery on
            all orders for our VIP members, click and collect in 30 minutes and
            we've even introduced a “Try Me” option on some of our most popular
            products where you'll receive a free sample, so if you're choosing a
            new perfume or aftershave you can smell that before you open your
            order. Our VIP members can select a sample at checkout and have the
            opportunity to earn rewards while they shop. You can checkout
            straight away using our card payment options, or choose to buy now
            pay later using Klarna.
          </article>
        </section>
      </div>
      <Cards/>
      <Testimonias/>
    </main>
  );
}
