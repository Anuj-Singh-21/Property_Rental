import { NavLink } from "react-router-dom";

const Additional = () => {
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
            className="bg-textdark text-white text-center py-1 rounded-md mx-2"
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
        <h1 className="text-2xl">Additional Services</h1>
        <hr />
        <div className="flex flex-col gap-3 text-sm">
          <p>
            DwellWell provides you a one-stop shop for all paperwork and
            documentation processing, relating to lease agreement registration,
            bank franking, police verification and society approvals.
          </p>
          <p>
            We have a network of real-estate executives who will assist you in
            completing a hassle-free transaction at the cost of a small service
            fee. This service can be availed both by the owners or the lessee by
            dropping us a note at: hello@DwellWell.in
          </p>
          <p>We will do following on your behalf:</p>
          <ol className="pl-5 text-sm" style={{ listStyle: "lower-roman" }}>
            <li>
              Prepare draft of Leave & License agreement between both the
              parties as per legal requirements
            </li>
            <br />
            <li>After approval from both parties, get the document stamped</li>
            <br />
            <li>Execute the agreement between both parties</li>
            <br />
            <li>Enter the agreement details online for registration</li>
            <br />
            <li>Enter the agreement details online for registration</li>
            <br />
            <li>Complete the process on registration day with you.</li>
            <br />
          </ol>
          <p>
            Basically we will ensure that you get the rental agreement
            registered without any hassle
          </p>
        </div>
      </div>
    </div>
  );
};

export default Additional;
