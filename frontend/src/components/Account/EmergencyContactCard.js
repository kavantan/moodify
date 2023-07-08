import React from "react"
import "../../styles/Account/EmergencyContactCard.css"
import AccountButton from "./AccountButton"

function EmergencyContactCard({ emergencyContact, onClick }) {
  return (
    <div className="emergency-contact-card">
      <div className="name-and-edit">
        {emergencyContact.name || "N/A"}
        <AccountButton text="Edit" onClick={onClick} />
      </div>
      <div>
        <div className="emergency-detail">
          {emergencyContact.mobile || "N/A"}
        </div>
        <div className="emergency-detail">
          {emergencyContact.email || "N/A"}
        </div>
      </div>
    </div>
  )
}

export default EmergencyContactCard
