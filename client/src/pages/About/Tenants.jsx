import { NavLink } from "react-router-dom";

const Tenants = () => {
  return (
    <div className="flex flex-row mx-0 my-4 border-2 border-textsoft lg:m-32">
      <div className="container flex justify-center w-52 border border-r-2 border-textsoft">
        <div className="flex flex-col gap-10 py-10  w-36 text-textdark">
          <NavLink
            className="hover:bg-textsoft text-black text-center py-1 rounded-md mx-2"
            to="/about/about-us"
          >
            About Us
          </NavLink>
          <NavLink
            className="hover:bg-textsoft text-black text-center py-1 rounded-md mx-2"
            to="/about/additional"
          >
            Additional Services
          </NavLink>
          <NavLink
            className="hover:bg-textsoft text-black text-center py-1 rounded-md mx-2"
            to="/about/owner"
          >
            Owner
          </NavLink>
          <NavLink
            className="bg-textdark text-white text-center py-1 rounded-md mx-2"
            to="/about/tenants"
          >
            Tenants
          </NavLink>
          <NavLink
            className="hover:bg-textsoft text-black text-center py-1 rounded-md mx-2"
            to="/about/faq"
          >
            FAQ
          </NavLink>
        </div>
      </div>
      <div className="container flex flex-col gap-2 text-textdark overflow-y-auto px-6 py-4">
        <h1 className="text-2xl"> Benefits of DwellWell</h1>
        <hr />
        <div className="flex flex-col gap-3 text-sm">
          <p>
            DwellWell rental platform lets you find your dream house without any
            broker acting as a middleman. This is the most convenient way of
            finding your house without paying hefty brokerage.
          </p>
          <h1>DwellWell helps you in 3 ways:</h1>
          <ol className="pl-5 text-sm" style={{ listStyle: "lower-roman" }}>
            <li>
              We make sure that each property is verified and directly from
              owner. So, you can save on the brokerage that varies from 15 days
              to 2 month's rent. And most brokers charge this every year even if
              you are renewing the same property.
            </li>
            <br />
            <li>
              All the information is available in a well-organized manner with
              photographs and a detailed analysis if the surroundings. You can
              locate where is the nearest school, grocery shop, ATM etc. This
              information will help you shortlist the property without taking an
              effort to visit the actual site. In case of brokers, they just
              want to make sure that the property goes out fast. They would
              therefore show you properties without even thinking if it would
              suit your requirements. It would mean that you would end up
              visiting lot more properties and realizing as soon as you reach
              there that this is not what you would want. With DwellWell, this
              convenience comes at no cost and saves you lot of time and effort.
            </li>
            <br />
            <li>
              Brokers hoard information and create information asymmetry in the
              market. They would ideally want that the not-so-good houses should
              go first as the good houses would anyway have lot of takers.
              Therefore, they would always show you bad houses first and only
              when you reject all of them would they start showing you better
              houses. In DwellWell, there is no information asymmetry. All
              houses inventory is available for you to pick and choose. It is on
              first-come-first-serve basis. This is a big advantage that makes
              the market transparent and efficient.
            </li>
            <br />
          </ol>
          <p>
            So, forget your old broker and find your dream house with DwellWell.
            Click here to search for houses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tenants;
