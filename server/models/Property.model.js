import mongoose from "mongoose";

const propertySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      requred: true,
    },
    details: {
      owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        requred: true,
      },
      price: {
        type: Number,
        requried: true,
      },
      propertyType: {
        type: String,
        required: true,
        enum: ["rent", "sale", "lease"],
      },
      description: {
        type: String,
        required: true,
      },
      bedrooms: {
        type: String,
        required: true,
      },
      bathrooms: {
        type: String,
        required: true,
      },
      area: {
        type: Number,
        required: true,
      },
      amenities: [
        {
          type: String,
          required: true,
        },
      ],
      address: {
        type: String,
        requred: true,
      },
      images: [
        {
          type: String,
          required: true,
        },
      ],
    },
  },
  { timestamps: true }
);

export const Property = mongoose.model("Property", propertySchema);
