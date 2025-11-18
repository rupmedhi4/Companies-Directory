const companiesData =[
  {
    "name": "Nexus Systems Pvt Ltd",
    "location": "Bengaluru",
    "industry": "IT Services",
    "employees": 120,
    "website": "https://nexussystems.com",
    "logo_url": "https://dummyimage.com/150x150/007bff/fff&text=NEXUS"
  },
  {
    "name": "Harvest Gold Farms",
    "location": "Delhi",
    "industry": "Agriculture",
    "employees": 40,
    "website": "https://harvestgold.com",
    "logo_url": "https://dummyimage.com/150x150/28a745/fff&text=HARVEST"
  },
  {
    "name": "Creative Surge Ads",
    "location": "Mumbai",
    "industry": "Marketing",
    "employees": 75,
    "website": "https://creativesurge.com",
    "logo_url": "https://dummyimage.com/150x150/17a2b8/fff&text=SURGE"
  },
  {
    "name": "Wellspring Health",
    "location": "Pune",
    "industry": "Healthcare",
    "employees": 200,
    "website": "https://wellspring.co.in",
    "logo_url": "https://dummyimage.com/150x150/dc3545/fff&text=WELL"
  },
  {
    "name": "Quantum Tech Solutions",
    "location": "Hyderabad",
    "industry": "Technology",
    "employees": 310,
    "website": "https://quantumtech.net",
    "logo_url": "https://dummyimage.com/150x150/6f42c1/fff&text=QTECH"
  },
  {
    "name": "Secure Money Fin",
    "location": "Chennai",
    "industry": "Finance/Fintech",
    "employees": 95,
    "website": "https://securemoney.in",
    "logo_url": "https://dummyimage.com/150x150/ffc107/000&text=SMF"
  },
  {
    "name": "A-One Constructions",
    "location": "Ahmedabad",
    "industry": "Construction",
    "employees": 550,
    "website": "https://aoneconstructions.com",
    "logo_url": "https://dummyimage.com/150x150/343a40/fff&text=AONE"
  },
  {
    "name": "Global Learnings Hub",
    "location": "Noida",
    "industry": "Education",
    "employees": 150,
    "website": "https://globallearnings.com",
    "logo_url": "https://dummyimage.com/150x150/fd7e14/fff&text=GLH"
  },
  {
    "name": "ByteBridge IT Consulting",
    "location": "Bengaluru",
    "industry": "IT Services",
    "employees": 180,
    "website": "https://bytebridge.in",
    "logo_url": "https://dummyimage.com/150x150/007bff/fff&text=BYTE"
  },
  {
    "name": "Kisan Mitra Products",
    "location": "Delhi",
    "industry": "Agriculture",
    "employees": 55,
    "website": "https://kisanmitra.com",
    "logo_url": "https://dummyimage.com/150x150/28a745/fff&text=KMT"
  },
  {
    "name": "Brand Visioneers",
    "location": "Mumbai",
    "industry": "Marketing",
    "employees": 80,
    "website": "https://brandvisioneers.in",
    "logo_url": "https://dummyimage.com/150x150/17a2b8/fff&text=BVM"
  },
  {
    "name": "MediHeal Clinics",
    "location": "Pune",
    "industry": "Healthcare",
    "employees": 250,
    "website": "https://medihealclinics.com",
    "logo_url": "https://dummyimage.com/150x150/dc3545/fff&text=MHCL"
  },
  {
    "name": "Data Fortress Security",
    "location": "Hyderabad",
    "industry": "Technology",
    "employees": 400,
    "website": "https://datafortress.com",
    "logo_url": "https://dummyimage.com/150x150/6f42c1/fff&text=DFRT"
  },
  {
    "name": "Apex Wealth Managers",
    "location": "Chennai",
    "industry": "Finance/Fintech",
    "employees": 110,
    "website": "https://apexwealth.co.in",
    "logo_url": "https://dummyimage.com/150x150/ffc107/000&text=APEX"
  },
  {
    "name": "Metro Infra Developers",
    "location": "Ahmedabad",
    "industry": "Construction",
    "employees": 600,
    "website": "https://metroinfra.com",
    "logo_url": "https://dummyimage.com/150x150/343a40/fff&text=MID"
  },
  {
    "name": "EduNova Training",
    "location": "Noida",
    "industry": "Education",
    "employees": 160,
    "website": "https://edunova.co",
    "logo_url": "https://dummyimage.com/150x150/fd7e14/fff&text=EDUN"
  },
  {
    "name": "SoftLink Integrations",
    "location": "Bengaluru",
    "industry": "IT Services",
    "employees": 130,
    "website": "https://softlinkintegrations.com",
    "logo_url": "https://dummyimage.com/150x150/007bff/fff&text=SLI"
  },
  {
    "name": "Green Earth Produce",
    "location": "Delhi",
    "industry": "Agriculture",
    "employees": 60,
    "website": "https://greenearthproduce.in",
    "logo_url": "https://dummyimage.com/150x150/28a745/fff&text=GEP"
  },
  {
    "name": "Orbit Digital Agency",
    "location": "Mumbai",
    "industry": "Marketing",
    "employees": 90,
    "website": "https://orbitdigital.com",
    "logo_url": "https://dummyimage.com/150x150/17a2b8/fff&text=ORBT"
  },
  {
    "name": "Pristine Care Services",
    "location": "Pune",
    "industry": "Healthcare",
    "employees": 300,
    "website": "https://pristinecare.in",
    "logo_url": "https://dummyimage.com/150x150/dc3545/fff&text=PRIST"
  },
  {
    "name": "Aether AI Solutions",
    "location": "Hyderabad",
    "industry": "Technology",
    "employees": 350,
    "website": "https://aethersolutions.com",
    "logo_url": "https://dummyimage.com/150x150/6f42c1/fff&text=AETR"
  },
  {
    "name": "TrustPay Payments",
    "location": "Chennai",
    "industry": "Finance/Fintech",
    "employees": 100,
    "website": "https://trustpay.net",
    "logo_url": "https://dummyimage.com/150x150/ffc107/000&text=TPAY"
  },
  {
    "name": "Pinnacle Structures",
    "location": "Ahmedabad",
    "industry": "Construction",
    "employees": 700,
    "website": "https://pinnaclestructures.com",
    "logo_url": "https://dummyimage.com/150x150/343a40/fff&text=PINNA"
  },
  {
    "name": "MentorEdge Coaching",
    "location": "Noida",
    "industry": "Education",
    "employees": 170,
    "website": "https://mentoredge.in",
    "logo_url": "https://dummyimage.com/150x150/fd7e14/fff&text=MENT"
  },
  {
    "name": "CrestWave Software",
    "location": "Bengaluru",
    "industry": "IT Services",
    "employees": 200,
    "website": "https://crestwave.com",
    "logo_url": "https://dummyimage.com/150x150/007bff/fff&text=CRST"
  },
  {
    "name": "Deccan Agro Corp",
    "location": "Delhi",
    "industry": "Agriculture",
    "employees": 65,
    "website": "https://deccanagro.in",
    "logo_url": "https://dummyimage.com/150x150/28a745/fff&text=DACC"
  },
  {
    "name": "Impact Marketing Group",
    "location": "Mumbai",
    "industry": "Marketing",
    "employees": 100,
    "website": "https://impactmktg.com",
    "logo_url": "https://dummyimage.com/150x150/17a2b8/fff&text=IMPG"
  },
  {
    "name": "Sanjeevani Wellness",
    "location": "Pune",
    "industry": "Healthcare",
    "employees": 350,
    "website": "https://sanjeevaniwell.in",
    "logo_url": "https://dummyimage.com/150x150/dc3545/fff&text=SANI"
  },
  {
    "name": "Eon Cyber Systems",
    "location": "Hyderabad",
    "industry": "Technology",
    "employees": 450,
    "website": "https://eoncyber.net",
    "logo_url": "https://dummyimage.com/150x150/6f42c1/fff&text=EON"
  },
  {
    "name": "LoanPro Financials",
    "location": "Chennai",
    "industry": "Finance/Fintech",
    "employees": 120,
    "website": "https://loanpro.com",
    "logo_url": "https://dummyimage.com/150x150/ffc107/000&text=LPRO"
  },
  {
    "name": "Global Builders Inc",
    "location": "Ahmedabad",
    "industry": "Construction",
    "employees": 750,
    "website": "https://globalbuilders.co.in",
    "logo_url": "https://dummyimage.com/150x150/343a40/fff&text=GBI"
  },
  {
    "name": "SkillSphere Learning",
    "location": "Noida",
    "industry": "Education",
    "employees": 180,
    "website": "https://skillsphere.com",
    "logo_url": "https://dummyimage.com/150x150/fd7e14/fff&text=SKL"
  },
  {
    "name": "Digital Vault Security",
    "location": "Bengaluru",
    "industry": "IT Services",
    "employees": 220,
    "website": "https://digitalvault.com",
    "logo_url": "https://dummyimage.com/150x150/007bff/fff&text=DVAULT"
  },
  {
    "name": "Rural Green Group",
    "location": "Delhi",
    "industry": "Agriculture",
    "employees": 70,
    "website": "https://ruralgreengrp.in",
    "logo_url": "https://dummyimage.com/150x150/28a745/fff&text=RGG"
  },
  {
    "name": "Media Spark Studios",
    "location": "Mumbai",
    "industry": "Marketing",
    "employees": 110,
    "website": "https://mediasparkstudios.com",
    "logo_url": "https://dummyimage.com/150x150/17a2b8/fff&text=MSS"
  },
  {
    "name": "Guardian Health Systems",
    "location": "Pune",
    "industry": "Healthcare",
    "employees": 400,
    "website": "https://guardianhealth.in",
    "logo_url": "https://dummyimage.com/150x150/dc3545/fff&text=GHLS"
  },
  {
    "name": "Innoventure Labs",
    "location": "Hyderabad",
    "industry": "Technology",
    "employees": 500,
    "website": "https://innoventurelabs.net",
    "logo_url": "https://dummyimage.com/150x150/6f42c1/fff&text=IVL"
  },
  {
    "name": "Shree Capital Advisors",
    "location": "Chennai",
    "industry": "Finance/Fintech",
    "employees": 130,
    "website": "https://shreecapital.com",
    "logo_url": "https://dummyimage.com/150x150/ffc107/000&text=SCA"
  },
  {
    "name": "Dezign Structures",
    "location": "Ahmedabad",
    "industry": "Construction",
    "employees": 800,
    "website": "https://dezignstructures.in",
    "logo_url": "https://dummyimage.com/150x150/343a40/fff&text=DZGN"
  },
  {
    "name": "Academia Pro Learning",
    "location": "Noida",
    "industry": "Education",
    "employees": 190,
    "website": "https://academiapro.net",
    "logo_url": "https://dummyimage.com/150x150/fd7e14/fff&text=APL"
  },
  {
    "name": "Frontier IT Solutions",
    "location": "Bengaluru",
    "industry": "IT Services",
    "employees": 250,
    "website": "https://frontieritsol.com",
    "logo_url": "https://dummyimage.com/150x150/007bff/fff&text=FRNTR"
  },
  {
    "name": "Bharat Agri Foods",
    "location": "Delhi",
    "industry": "Agriculture",
    "employees": 80,
    "website": "https://bharatagrifoods.com",
    "logo_url": "https://dummyimage.com/150x150/28a745/fff&text=BAF"
  },
  {
    "name": "Growth Hackers Mkt",
    "location": "Mumbai",
    "industry": "Marketing",
    "employees": 120,
    "website": "https://growthhackersmkt.net",
    "logo_url": "https://dummyimage.com/150x150/17a2b8/fff&text=GHM"
  },
  {
    "name": "Vivek Pharma Group",
    "location": "Pune",
    "industry": "Healthcare",
    "employees": 450,
    "website": "https://vivekpharmagrp.com",
    "logo_url": "https://dummyimage.com/150x150/dc3545/fff&text=VPG"
  },
  {
    "name": "NextWave Robotics",
    "location": "Hyderabad",
    "industry": "Technology",
    "employees": 550,
    "website": "https://nextwaverobotics.net",
    "logo_url": "https://dummyimage.com/150x150/6f42c1/fff&text=NWR"
  },
  {
    "name": "QuickBanc Services",
    "location": "Chennai",
    "industry": "Finance/Fintech",
    "employees": 140,
    "website": "https://quickbanc.in",
    "logo_url": "https://dummyimage.com/150x150/ffc107/000&text=QBC"
  },
  {
    "name": "Apex Builders Group",
    "location": "Ahmedabad",
    "industry": "Construction",
    "employees": 850,
    "website": "https://apexbuilders.com",
    "logo_url": "https://dummyimage.com/150x150/343a40/fff&text=APEXB"
  },
  {
    "name": "TutorSphere Education",
    "location": "Noida",
    "industry": "Education",
    "employees": 200,
    "website": "https://tutorsphere.co",
    "logo_url": "https://dummyimage.com/150x150/fd7e14/fff&text=TSP"
  },
  {
    "name": "Zenith Cloud Solutions",
    "location": "Bengaluru",
    "industry": "IT Services",
    "employees": 280,
    "website": "https://zenithcloud.com",
    "logo_url": "https://dummyimage.com/150x150/007bff/fff&text=ZENITH"
  },
  {
    "name": "Prakriti Agro Industries",
    "location": "Delhi",
    "industry": "Agriculture",
    "employees": 90,
    "website": "https://prakritiagro.in",
    "logo_url": "https://dummyimage.com/150x150/28a745/fff&text=PRAK"
  },
  {
    "name": "AdCraft Media",
    "location": "Mumbai",
    "industry": "Marketing",
    "employees": 130,
    "website": "https://adcraftmedia.com",
    "logo_url": "https://dummyimage.com/150x150/17a2b8/fff&text=ADCM"
  },
  {
    "name": "Chaitanya Hospital",
    "location": "Pune",
    "industry": "Healthcare",
    "employees": 500,
    "website": "https://chaitanyahospital.in",
    "logo_url": "https://dummyimage.com/150x150/dc3545/fff&text=CHAI"
  },
  {
    "name": "Global Data Analytics",
    "location": "Hyderabad",
    "industry": "Technology",
    "employees": 600,
    "website": "https://globaldataanalytics.com",
    "logo_url": "https://dummyimage.com/150x150/6f42c1/fff&text=GDA"
  },
  {
    "name": "FinServ Capital",
    "location": "Chennai",
    "industry": "Finance/Fintech",
    "employees": 150,
    "website": "https://finservcapital.com",
    "logo_url": "https://dummyimage.com/150x150/ffc107/000&text=FSC"
  },
  {
    "name": "FutureBuild Projects",
    "location": "Ahmedabad",
    "industry": "Construction",
    "employees": 900,
    "website": "https://futurebuildprojects.in",
    "logo_url": "https://dummyimage.com/150x150/343a40/fff&text=FBP"
  },
  {
    "name": "Success Ladder Ed",
    "location": "Noida",
    "industry": "Education",
    "employees": 210,
    "website": "https://successladdered.com",
    "logo_url": "https://dummyimage.com/150x150/fd7e14/fff&text=SLE"
  },
  {
    "name": "Elite IT Services",
    "location": "Bengaluru",
    "industry": "IT Services",
    "employees": 300,
    "website": "https://eliteitservices.in",
    "logo_url": "https://dummyimage.com/150x150/007bff/fff&text=ELITE"
  }
];

export default companiesData 