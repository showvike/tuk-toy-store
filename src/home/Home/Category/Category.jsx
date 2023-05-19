import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Cards from "./Cards/Cards";

const Category = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [toys, setToys] = useState([]);

  useEffect(() => {
    const sub_category = ["Marvel", "DC", "Star Wars"];
    fetch(
      `https://b7a11-toy-marketplace-server-side-showvike-showvike.vercel.app/toys?sub_category=${sub_category[tabIndex]}&limit=3`
    )
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [tabIndex]);

  return (
    <section className="mt-12">
      <h2 className="my-8 text-5xl font-extrabold text-center">Category</h2>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className="flex justify-evenly">
          <Tab
            className={`text-white px-4 py-2 rounded font-semibold ${
              tabIndex === 0 ? "bg-black" : "bg-[#6800fa]"
            }`}
          >
            Marvel Toys
          </Tab>
          <Tab
            className={`text-white px-4 py-2 rounded font-semibold ${
              tabIndex === 1 ? "bg-black" : "bg-[#6800fa]"
            }`}
          >
            DC Toys
          </Tab>
          <Tab
            className={`text-white px-4 py-2 rounded font-semibold ${
              tabIndex === 2 ? "bg-black" : "bg-[#6800fa]"
            }`}
          >
            Star Wars Toys
          </Tab>
        </TabList>
        <TabPanel>
          <Cards toys={toys} />
        </TabPanel>
        <TabPanel>
          <Cards toys={toys} />
        </TabPanel>
        <TabPanel>
          <Cards toys={toys} />
        </TabPanel>
      </Tabs>
    </section>
  );
};

export default Category;
