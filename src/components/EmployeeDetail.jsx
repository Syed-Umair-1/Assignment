import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import CallReceivedIcon from '@mui/icons-material/CallReceived';
import CallMadeIcon from '@mui/icons-material/CallMade';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
function EmployeeDetail() {
  return (
    <div className="employee-detail-cont p-4 mt-4">
      <div className="employee-head d-flex align-items-start justify-content-between">
        <h1 className="text-light heading fs-4">Detail Employee</h1>
        <div className="d-flex ">
        <div className="dropdown head-btn">
          <a
            className="btn btn-secondary me-2  dropdown-toggle bg-dark"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            This Year
          </a>

          <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <li>
              <a className="dropdown-item" href="#">
                2023
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                2022
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
               2021
              </a>
            </li>
          </ul>
        </div>
        <button type="button" className="btn btn-color head-btn ">
          <ArrowDownwardIcon />
          Download
        </button>
        </div>
      </div>
      <div className=" my-4 d-flex flex-wrap">
        <div className="employee-img me-4">
          <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg" alt="" />
        </div>
        <div >
          <h1 className="text-light fs-5">Natashiya Khaleira</h1>
          <div className=" d-flex flex-wrap ">
            <div className="me-4 mb-2">
              <div className="text-light fw-light ">Role</div>
              <div className="text-light ">Head of UX Design</div>
            </div>
            <div className="me-4 mb-2" >
              <div className="text-light fw-light ">Phone Number</div>
              <div className="text-light">(+62) 812 3456-7895</div>
            </div>
            <div className="me-4 mb-2">
              <div className="text-light fw-light">Email Address</div>
              <div className="text-light">natashiyakhaleira@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
      <div className="employee-detail-card-cont  d-flex flex-wrap justify-content-between ">
<div className="employee-detail-card d-flex p-2 mb-2 flex-grow ">
<ArrowRightAltIcon className="text-light align-self-center me-3" />
<div>
<div className="text-light fs-4">309</div>
<div className="text-light fw-light">Total Attendance</div>
</div>
</div>
<div className="employee-detail-card d-flex p-2 mb-2  flex-grow">
<CallReceivedIcon className="text-light align-self-center me-3" />
<div>
<div className="text-light fs-4">08:46</div>
<div className="text-light fw-light">Avg Check In Time</div>
</div>
</div>
<div className="employee-detail-card d-flex p-2 mb-2 flex-grow ">
<CallMadeIcon className="text-light align-self-center me-3" />
<div>
<div className="text-light fs-4">17:04</div>
<div className="text-light fw-light">Avg Check Out Time</div>
</div>
</div>
<div className="employee-detail-card d-flex p-2 mb-2 flex-grow ">
<WorkspacePremiumIcon className="text-light align-self-center me-3" />
<div>
<div className="text-light fs-4">Role Model</div>
<div className="text-light fw-light">Employee Predicate</div>
</div>
</div>
      </div>
    </div>
  );
}

export default EmployeeDetail;
