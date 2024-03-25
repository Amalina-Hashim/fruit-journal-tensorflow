import React from "react";

function Note(props) {


  
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <div className="label-list">
        <ul>
          {Array.isArray(props.labels) &&
            props.labels.map((label, index) => (
              <li key={index} className="label-item">
                {label}
              </li>
            ))}
        </ul>
      </div>
      {props.image && props.image.length > 0 && (
        <img
          className="noteImage"
          src={props.image[0].url}
          alt="Captured Image"
        />
      )}
      {props.cloudUrl && <img src={props.cloudUrl} alt="Cloudinary Image" />} 
      <p>Location📍: {props.location}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Note;

