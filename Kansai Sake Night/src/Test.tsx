import { useEffect, useState } from "react";
import { fetchSakeList } from "../utils/supabaseFunction";

const Test = () => {
  const [sakeList, setSakeList] = useState<any[]>([]);

  useEffect(() => {
    const getSakeList = async () => {
      const data = await fetchSakeList();
      setSakeList(data || []);
    };

    getSakeList();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Sake List</h1>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">ID</th>
              <th className="border border-gray-300 p-2">Image</th>
              <th className="border border-gray-300 p-2">Name</th>
              <th className="border border-gray-300 p-2">Region</th>
              <th className="border border-gray-300 p-2">Type</th>
              <th className="border border-gray-300 p-2">Flavor</th>
            </tr>
          </thead>
          <tbody>
            {sakeList.length > 0 ? (
              sakeList.map((sake) => (
                <tr key={sake.id} className="hover:bg-gray-100">
                  <td className="border border-gray-300 p-2 text-center">{sake.id}</td>
                  <td className="border border-gray-300 p-2">
                    <img
                      src={sake.image_url}
                      alt={sake.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                  </td>
                  <td className="border border-gray-300 p-2">{sake.name}</td>
                  <td className="border border-gray-300 p-2">{sake.region}</td>
                  <td className="border border-gray-300 p-2">{sake.type}</td>
                  <td className="border border-gray-300 p-2">{sake.flavor}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="text-center p-4">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Test;