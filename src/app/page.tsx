import Hero from "@/components/Hero";
import './globals.css';
import SearchBar from "@/components/SearchBar";
import CustomFilter from "@/components/CustomFilter";
import { fetchCars } from "@/utils/fetchdata";
import CarCard from "@/components/CarCard";
import { fuels, yearsOfProduction } from "../../constants";
import ShowMore from "@/components/ShowMore";

export default async function Home({searchParams,}: {searchParams: Promise<{ [key: string]: string | undefined }>}) {
  const allCars = await fetchCars({
    make: (await searchParams).manufacturer,
    model: (await searchParams).model,
    year: parseInt((await searchParams).year!),
    fuel_type: (await searchParams).fuel
  });
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  const limit = parseInt((await searchParams).limit!) || 10;
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">قائمة السيارات</h1>
          <p>شاهد تشكيلة سياراتنا التي تناسبك</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="الوقود" options={fuels}/>
            <CustomFilter title="السنة" options={yearsOfProduction} />
          </div>
        </div>
        {
          !isDataEmpty ? (
            <section>
              <div className="home__cars-wrapper">
                {
                  allCars.slice(0, limit).map((car) => <CarCard car={car} key={car.toString()}/>)
                }
              </div>
              <ShowMore 
                pageNumber={limit / 10}
                isNext={limit > allCars.length}
              />
            </section>
          ): (
            <div className="home__error-container">
              <h2 className="text-black text-xl font-bold">عذرًا، لا توجد نتائج!</h2>
              <p>{allCars?.message}</p>
            </div>
          )
        }
      </div>
    </main>
  );
}
