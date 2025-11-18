import Company from "../models/company.model.js";
import companiesData from "../data/data.js" 

export const allCompanyData = async (req, res) => {
  try {
    const companies = await Company.find(); 

    res.status(200).json({
      success: true,
      message: "All companies data fetched successfully",
      data: companies,
    });
    
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};


export const addAllCompaniesData = async (req, res) => {
  try {
    await Company.deleteMany({});

    await Company.insertMany(companiesData);

    res.status(200).json({
      success: true,
      message: "Companies data add successfully",
    });

  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};
