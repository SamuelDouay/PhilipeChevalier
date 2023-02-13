import React from 'react';

const DiplomeCompnent = ({ parcours }) => {
    return (
        <div>
            <div>{parcours.annees.debut} - {parcours.annees.fin}</div>
            <h3>{parcours.diplome}</h3>
            <p>{parcours.mention}</p>
        </div>
    );
};

export default DiplomeCompnent;