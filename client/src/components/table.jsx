import React from "react";

const CodesTable = ({ data }) => {
  return (
    <table className="table-auto w-full">
      <thead>
        <tr>
          <th className="px-4 py-2">Code</th>
          <th className="px-4 py-2">Description</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td className="border px-4 py-2">{item.code}</td>
            <td className="border px-4 py-2">{item.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CodesTable;
