import WidgetsIcon from "@mui/icons-material/Widgets";
import MenuIcon from "@mui/icons-material/Menu";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { attendingHistory } from "../data/historyData";
import { useState } from "react";

function AttendingHistory() {
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 5;
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = attendingHistory.slice(indexOfFirstRecord, 
        indexOfLastRecord);
        const nPages = Math.ceil(attendingHistory.length / recordsPerPage)
        const pageNumbers = [...Array(nPages + 1).keys()].slice(1);
  return (
    <div className="employee-detail-cont p-4 mt-3  ">
      <div className="d-flex justify-content-between flex-wrap my-4">
        <h1 className="text-light fs-4 heading">Attendance History</h1>
        <div className="d-flex">
          <button className="attend-history-head-icon  me-2">
            <WidgetsIcon className="text-light" />
          </button>
          <button className="attend-history-head-icon  me-3">
            <MenuIcon className="text-light" />
          </button>
          <button className="attend-history-head-icon me-2 text-light">
            <SwapVertIcon className="text-light" />
            Sort
          </button>
          <button className="attend-history-head-icon text-light">
            <FilterAltIcon className="text-light" />
            Filter
          </button>
        </div>
      </div>
      <div className="d-flex flex-wrap justify-content-between">
        {currentRecords.map((items,index)=>
        <div key={index} className="employee-detail-card p-2 mb-4 flex-basis  ">
          <div className="d-flex justify-content-between">
            <div className="text-light fs-4">
              <AccessTimeIcon className="text-light" />
              {items.date}
            </div>
            <div className="time ">{items.time}</div>
          </div>
          <div className="d-flex justify-content-between mt-4">
            <div>
              <div className="text-light fw-light">Check In Time</div>
              <div className="text-light fs-4">{items.inTime}</div>
            </div>
            <div>
              <div className="text-light fw-light">Check Out Time</div>
              <div className="text-light fs-4">{items.outTime}</div>
            </div>
          </div>
        </div>
       )}
      </div>
      <div className="d-flex justify-content-center">
        {pageNumbers.map((number)=>
        <button key={number} className={`attend-history-head-icon text-light p-2 me-2 ${currentPage == number ? "active":""}`} onClick={()=>setCurrentPage(number)}>{number}</button>
    )}
      </div>
    </div>
  );
}

export default AttendingHistory;
