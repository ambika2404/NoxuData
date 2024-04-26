import React from "react";
const DataTable: React.FC = () => {
    const numRows = 5; // Number of rows currently shown
    return (
        <div
            className="py-4 border border-transparent "
            style={{
                width: "800px",
                height: "516px",
                padding: "32px",
                gap: "32px",
                backgroundColor: "#F1F5F9",
            }}
        >
            <div
                className="container-2 border border-transparent w-800px h-452px gap-16"
                style={{
                    marginLeft: "32px",
                }}
            >
                <div
                    className="flex"
                    style={{
                        width: "296px",
                        height: "36px",
                        radius: "6px",
                        border: "1px",
                        padding: "0px 8px 0px 8px",
                        color: "#FFFFFF",
                    }}
                >
                    <button
                        className="flex items-center border border-gray-400 text-red-500 rounded-sm text-sm px-2 py-1"
                        style={{
                            width: "135px",
                            height: "36px",
                            padding: "6px 0px 6px 6px",
                        }}
                    >
                        <div className="border border-red-400 text-red-500 rounded-full flex items-center justify-center h-3 w-3 mr-2">
                            <span style={{ width: "20px", height: "20px" }}>!</span>
                        </div>
                        <div className="w-109px h-24px bg-white-500 text-#F0671A text-center font-medium text-sm leading-24px">Not Confident</div>
                    </button>
                    <button
                        className="flex items-center border border-gray-400 text-red-500 rounded-sm text-sm px-2 py-1"
                        style={{
                            width: "121px",
                            height: "36px",
                            padding: "6px 0px 6px 6px",
                        }}
                    >
                        <div className="w-95px h-24px bg-white-500 text-#F0671Atext-center font-medium text-sm leading-24px">
                            Human Help
                            <span style={{ width: "20px", height: "20px" }}> --> </span>
                        </div>
                    </button>
                </div>
                {/* from here */}
                <div>
                <div className="flex items-center" style={{ padding: "15px 0px 15px 8px" }}>
                    <img src="https://img.freepik.com/premium-vector/owl-logo-eye-logo_227744-194.jpg?w=1380" alt="Owl Logo" className="h-8 w-8 mr-2" />
                    <div>To find out how many accounts you have, you can use the following query</div>
                </div>
                <div className="mt-4">
                    <table className="border-collapse border border-gray-300 w-full">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border border-gray-300 px-4 py-2">Name</th>
                                <th className="border border-gray-300 px-4 py-2">Industry</th>
                                <th className="border border-gray-300 px-4 py-2">City</th>
                                <th className="border border-gray-300 px-4 py-2">State</th>
                                <th className="border border-gray-300 px-4 py-2">Segment</th>
                                <th className="border border-gray-300 px-4 py-2">Owner Id</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[...Array(numRows)].map((_, index) => (
                                <tr key={index} className="bg-gray-100">
                                    <td className="border border-gray-300 px-4 py-2">477 Abbot – Pacocha</td>
                                    <td className="border border-gray-300 px-4 py-2">IT</td>
                                    <td className="border border-gray-300 px-4 py-2">Colombia</td>
                                    <td className="border border-gray-300 px-4 py-2">CO</td>
                                    <td className="border border-gray-300 px-4 py-2">Segment</td>
                                    <td className="border border-gray-300 px-4 py-2">7</td>
                                </tr>
                            ))}
                            <tr className="bg-gray-100">
                                <td className="border border-gray-300 px-4 py-2" colSpan="6">
                                    Only {numRows} rows are shown. View full list for more.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* Buttons */}
                <div className="mt-4 flex">
                    <button className="border border-gray-400 rounded-md text-black text-sm px-2 py-1 mr-1">Show Full List</button>
                    <button className="border border-gray-400 rounded-md text-black text-sm  px-2 py-1 mr-1">Show Query</button>
                    <button className="border border-gray-400 rounded-md text-black text-sm  px-2 py-1 mr-1">Show Chart</button>
                    <button className="border border-gray-400 rounded-md text-sm  text-black px-2 py-1 mr-1">Pin to Dashboard</button>
                </div>
                </div>
            {/* till here */}
        </div>
      </div>
    );
};
export default DataTable;
