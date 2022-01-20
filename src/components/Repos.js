import React from "react";

function Repos(props) {
  const {name, description,html_url,language} = props.repo;

  return (
    <div className="userepo_repo">
      <div className="userepo_desc">
        <a href={html_url} target="_blank" rel="noreferrer">
          <h4>{name}</h4>
        </a>
        <p>{description}</p>
      </div>
      <div>
        <h5>{language}</h5>
      </div>
    </div>
  );
}

export default Repos;
