import mongoose from "mongoose";

const companySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    industry: {
        type: String,
        required: true,
    },
    employees: {
        type: Number,
        required: true,
    },
    website: {
        type: String,
        required: true,
    },
    logo_url: {
        type: String,
        required: true,
    }
}, { timestamps: true });

const Company = mongoose.model("Company", companySchema);

export default Company;
