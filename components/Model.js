import React from "react";

function Model({ show, handleClose, person }) {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <h2 className="elementor-heading-title _title">{person.name}</h2>
        <p className="elementor-heading-title agetitle">{person.age}</p>
        <p className="person-detail">{person.occupation}</p>
        <button className="close-btn" onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );
}

export default Model;
