import CompanyCard from "../components/companyCard/CompanyCard";
import SearchBar from './../components/Search/SearchBar';
import SortBy from './../components/SortBy/SortBy';

export default function Home() {

  return (
    <div className="min-h-screen bg-gray-100 p-4">

      <div className="page-wrapper">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Companies Directory
        </h1>

        <SearchBar />
        <SortBy />
        <CompanyCard />
        
      </div>
    </div>
  );
}
