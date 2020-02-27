import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    company,
    location,
    skills
  }
}) => {
  const allSkills = skills.slice(0, 4).map((skill, index) => (
    <li key={index} className='text-primary'>
      <i className='fas fa-check'></i> {skill}
    </li>
  ));
  return (
    <div className='profile bg-light'>
      <img className='round-img' src={avatar} alt='' />
      <div>
        <h2>{name} </h2>
        <p>
          {status}
          {company && <span> at {company}</span>}
        </p>
        <p className='my-1'>{location && <span>{location}</span>}</p>
        <Link to={`/profiles/${_id}`} className='btn btn-primary'>
          View Profile
        </Link>
      </div>
      {skills.length === 0 ? '' : <ul>{allSkills}</ul>}
    </div>
  );
};

ProfileItem.propTypes = {};

export default ProfileItem;
