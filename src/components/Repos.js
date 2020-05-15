import React from 'react';
import PropTypes from 'prop-types';

const Repos = props => (
    <ul>
        {props.repos.map(repo => (
            <li key={repo.id}>
                <h3>{repo.name}</h3>
                <a href={repo.html_url}>{repo.html_url}</a>
                <p>{repo.description}</p>
            </li>
        ))}
    </ul>
);

Repos.propTypes = {
    repos: PropTypes.array.isRequired,
};

export default Repos;