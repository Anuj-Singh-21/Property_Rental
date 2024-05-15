import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div className="flex flex-row mx-0 my-4 border-2 border-textsoft lg:m-32">
      <div className="container flex justify-center w-52 border border-r-2 border-textsoft">
        <div className="flex flex-col gap-10 py-10  w-36 text-textdark">
          <NavLink
            className="bg-textdark text-white text-center py-1  rounded-md mx-2"
            to="/about/about"
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
            className="hover:bg-textsoft text-black text-center py-1 rounded-md mx-2"
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
        <h1 className="text-2xl">About Us</h1>
        <hr />
        <div className="flex flex-col gap-3 text-sm">
          <p>Welcome to DwellWell!</p>
          <p>
            DwellWell is a disruptive real-estate platform that makes it
            possible to buy/sell/rent a house without paying any brokerage{" "}
          </p>
          <p>
            DwellWell was started because all of us believed that paying hefty
            brokerage can not be the only option to find a new home. As tenants,
            we have been paying these brokerages year on year without seeing any
            advantage of the broker. The only reason he existed was that there
            was a huge information asymmetry in the market. DwellWell is a
            platform that removes this information asymmetry and provides a
            marketplace for free exchange of this information that used to cost
            1-2 months of rent as brokerage.
          </p>
          <p>We have done 2 things to help you find that perfect home:</p>
          <ol className="pl-5 text-sm" style={{ listStyle: "lower-roman" }}>
            <li>
              Firstly, we have painstakingly verified each listing and made sure
              that these are direct owners or shared accommodation parties and
              there are no middlemen or brokers. We use lot of heuristics and
              techniques to ensure that you get a totally broker free list.
            </li>
            <br />
            <li>
              Secondly, we have also tried to ensure that maximum information is
              available to you in as easy to use format. This ensures that you
              get a very good idea of the property even before you visit it.
              Thus, you can shortlist flats sitting at the comfort of your home
              without actually traveling all the good and bad properties. This
              saves your time and effort and with a quick shortlist of 4-5
              properties you can actually get a house in few hours!
            </li>
          </ol>
          <p>
            If you are a landlord interested in posting your apartments to
            DwellWell, please email us at hello@DwellWell.in and we will get in
            touch to help you list the property.
          </p>{" "}
          <p>
            And tenants, happy hunting and get in touch with us to let us know
            how else we can help!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
