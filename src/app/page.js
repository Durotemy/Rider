import { FiSettings } from "react-icons/fi";

export default function Dashboard() {
  return (
    <main className="text-black">
      <div className="w-full">
        <p>DashBoard</p>
        <nav className="flex  justify-between  w-full mx-auto mt-4">
          <div>
            <h1 className="text-2xl font-bold">Hello Admin</h1>
          </div>
          <div className="flex gap-3 items-center">
            <h1>Ajah wareHouse</h1>
            <div>
              <FiSettings className="text-2xl" color="black" />
            </div>
          </div>
        </nav>
        <div className="flex justify-around w-9/12 mx-auto mt-4">
          <div className="h-[200px] w-[200px] bg-[#0080FF] rounded flex items-center justify-center cursor-pointer text-white">
            <p>Ongoing orders</p>
            <p></p>
          </div>
          <div className="h-[200px] w-[200px] bg-[#2C2E82] rounded flex items-center justify-center cursor-pointer text-white">
            <p>pending orders</p>
          </div>
          <div className="h-[200px] w-[200px] bg-[#009E87] rounded flex items-center justify-center cursor-pointer text-white">
            <p>Riders</p>
          </div>
        </div>
      </div>
      <div className="w-11/12 mx-auto mt-12">
        <p className="font-bold">Pending</p>
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                N/0
              </th>
              <th className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Pick up
              </th>
              <th className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Drop off
              </th>
              <th className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Due date
              </th>
              <th className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                <button className="bg-[red] text-white py-4 px-6 border rounded">Process</button>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200  border border-gray-300 border-solid rounded-lg p-4">
            <tr>
              <td className="px-6 py-4 whitespace-no-wrap">1</td>
              <td className="px-6 py-4 whitespace-no-wrap">Lagos</td>
              <td className="px-6 py-4 whitespace-no-wrap">Ibadan</td>
              <td className="px-6 py-4 whitespace-no-wrap">january 2021</td>
              <td className="px-6 py-4 whitespace-no-wrap">Urgent</td>
              <td className="px-6 py-4 whitespace-no-wrap">Pending</td>
            </tr>
            {/* Add more table rows here */}
          </tbody>
        </table>
      </div>
    </main>
  );
}
