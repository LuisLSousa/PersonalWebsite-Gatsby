import React from "react";
import GatsbyImage from "gatsby-image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

import "./timeline.css"

const Timeline = ({ edges }) => {
    // TODO add responsabilities and tech stack/skills
    return (
        <div className="timelineContainer">
            {edges && edges.map(({ node }) => {
                return (
                    <div key={node.id} className="timelineEntry">
                        <div className="content">
                            <GatsbyImage className="institutionLogo" fixed={node.icon.childImageSharp.fixed} />
                            <h3 className="title">{node.title}</h3>
                            <a className="institution" href={node.website} target="_blank" rel="noreferrer">
                                {node.institution}
                                <FontAwesomeIcon className="faIcon" icon={faLink} />
                            </a>
                            <h3 className="period">
                                <FontAwesomeIcon className="faIcon" icon={faCalendarAlt} />
                                {node.period}
                            </h3>
                        </div>
                        <div className="verticalBar">
                            <li />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Timeline;