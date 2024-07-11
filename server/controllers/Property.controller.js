import { Property } from "../models/Property.model.js";
import { User } from "../models/User.model.js";


export const CreateListing = async (req, res) => {
  try {
    const { name, ...rest } = req.body;
    const owner = req.user._id;

    const details = { ...rest, owner };
    const property = { name, details };

    const createdListing = await Property.create(property);

    await User.findByIdAndUpdate(req.user._id, {
      $push: { listings: createdListing._id },
    });

    res.status(200).send(property);
  } catch (error) {
    res
      .status(error.status || 500)
      .json(error.message || "Something went Wrong");
  }
};

export const EditListing = async (req, res) => {
  try {
    const { name, ...rest } = req.body;

    const details = { ...rest };

    const updatedProperty = { name, details };

    const newProperty = await Property.findByIdAndUpdate(
      req.params.id,
      updatedProperty,
      { new: true }
    );

    res.status(200).send(newProperty);
  } catch (error) {
    res
      .status(error.status || 500)
      .json(error.message || "Something went Wrong");
  }
};

export const GetAllListings = async (req, res) => {
  try {
    const Listings = await Property.find();
    res.status(200).send({ Properties: Listings });
  } catch (error) {
    res
      .status(error.status || 500)
      .json(error.message || "Something went Wrong");
  }
};

export const DeleteListing = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.user._id, {
      $pull: { listings: req.params.id },
    });

    const Listing = await Property.findByIdAndDelete(req.params.id);
    res.status(200).send("Property Deleted Successfully");
  } catch (error) {
    res
      .status(error.status || 500)
      .json(error.message || "Something went Wrong");
  }
};

export const GetListing = async (req, res) => {
  try {
    const Listing = await Property.findById(req.params.id);
    const owner = await User.findById(Listing.details.owner).select("-password");
    res.status(200).send({ listing: Listing, Owner: owner });
  } catch (error) {
    res
      .status(error.status || 500)
      .json(error.message || "Something went Wrong");
  }
};
export const GetListingsByOwner = async (req, res) => {
  try {
    const Listings = await Property.find({ "details.owner": req.params.id });
    res.status(200).send({ properties: Listings });
  } catch (error) {
    res
      .status(error.status || 500)
      .json(error.message || "Something went Wrong");
  }
};
