import { useState } from "react";
import { FaEye } from "react-icons/fa";
import Badge from "./Badge";
import { BsThreeDotsVertical } from "react-icons/bs";

const ClientTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // Number of items per page

  const clients = [
    { name: "Soy Restaurant", sales: "247358frw", date: "24,05,2024" },
    { name: "Choose Kigali", sales: "50000Frw", date: "23,06,2023" },
    { name: "Planet Burget", sales: "30000Frw", date: "25,06,2023" },
    { name: "M Hotel", sales: "43981Frw", date: "25,06,2023" },
    { name: "Chez Rando", sales: "40239Frw", date: "25,06,2023" },
    { name: "Sundowner", sales: "78120Frw", date: "25,06,2023" },
    // Add more clients as needed
  ];

  const totalPages = Math.ceil(clients.length / itemsPerPage);

  // Calculate the indexes of the first and last items on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Get the items for the current page
  const currentItems = clients.slice(indexOfFirstItem, indexOfLastItem);

  // Handle next page
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Handle previous page
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="p-5">
      <h5>All Clients</h5>
      <table className="table">
        <thead>
          <tr>
            <th className="p-3" scope="col">Client details</th>
            <th scope="col">Sales</th>
            <th scope="col">Detailed report</th>
            <th scope="col">Category</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((client, index) => (
            <tr key={index}>
              <th scope="row">
                {client.name}
                <p className="text-secondary fs-6 fw-normal">Updated 1 day ago</p>
              </th>
              <td>
                {client.sales}
                <p className="text-secondary fs-6">on {client.date}</p>
              </td>
              <td>
                <FaEye color="orange" size={"20"} />
              </td>
              <td>
                <Badge />
              </td>
              <td><BsThreeDotsVertical /></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="d-flex justify-content-between align-items-center">
        <button
          className="btn btn-primary"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button
          className="btn btn-primary"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ClientTable;
