import React, { useContext } from "react";
import { ThemeContext, DARK_THEME, LIGHT_THEME } from "../../context/theme";
import GatsbyImage from "gatsby-image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

import "./timeline.css"

const Timeline = ({ edges }) => {
    const { theme } = useContext(ThemeContext)
    return (
        <div className="timelineContainer">
            {edges && edges.map(({ node }) => {
                return (
                    <div key={node.id} className="timelineEntry">
                        <div className="content">
                            <GatsbyImage
                                className="institutionLogo"
                                fixed={theme === DARK_THEME ? node.icon_light.childImageSharp.fixed : node.icon_dark.childImageSharp.fixed}
                            />
                            <h3 className="title">{node.title}</h3>
                            <a className="institution" href={node.website} target="_blank" rel="noreferrer">
                                {node.institution}
                                <FontAwesomeIcon className="faIcon" icon={faLink} />
                            </a>
                            {node.responsibilities &&
                                <div className="responsibilities">
                                    <h4>Responsibilities:</h4>
                                    <ul>
                                        {node.responsibilities.map((responsibility) => <li key={responsibility}>{responsibility}</li>)}
                                    </ul>
                                </div>
                            }
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