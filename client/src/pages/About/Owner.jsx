import { NavLink } from "react-router-dom";

const Owner = () => {
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
            className="bg-textdark text-white text-center py-1 rounded-md mx-2"
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
        <h1 className="text-2xl">Why you should list with us?</h1>
        <hr />
        <div className="flex flex-col gap-3 text-sm">
          <p>
            DwellWell rental platform lets you find tenants without any broker
            acting as a middleman. Apart from the fact that this can be much
            more convenient and safe (you don't have to handover keys to an
            unknown person) it will help you save time and money.
          </p>
          <p>
            Most brokers don't filter people and end up showing houses randomly.
            This would mean that only when you meet the tenants you would come
            to know if that person would not fit in the society rules. This
            leads to lot of inconvenience and wastage of time. Also, brokers
            hoard the information and create the information asymmetry. They
            decide who should not see your house because there is another
            landlord who may give him little extra brokerage. While in case of
            DwellWell, you would be speaking to the potential tenant before you
            actually show him the house. Even the key can be kept with the
            society secretary if you do not want to go to the house every time
            the tenant wants to see. Many landlords also fix up a day and time
            when they are there and all tenants can come and see the house in
            that time.
          </p>
          <p>
            Also, you end up saving on brokerage that is anywhere between 15
            days to 2 month's rent. Some brokers also charge this every year.
            When both you and tenant are not paying the brokerage, tenants are
            also willing to pay a little higher rent. So, you can expect to get
            2-4% higher rent as compared to what brokers may get you. It's a
            win-win for both the landlord and tenant.
          </p>
          <p>
            The listing is very simple and intuitive. It would take less than 5
            minutes and post that we just verify to make sure that no broker is
            listing. We also use innovative and easy technology like whatsapp to
            help you list your property. If at any stage you need any guidance,
            you can always speak to our customer service manager. We also make
            sure that any person listing as tenant is not a broker, and thus you
            do not get any of those pesky calls. Once the listing is done, you
            would start getting enquiries from genuine tenants.
          </p>
          <p>
            If you have a property to list you can click on 'Post Your Property'
            button on top right corner of the page or email us at
            hello@DwellWell.in
          </p>
        </div>
      </div>
    </div>
  );
};

export default Owner;
