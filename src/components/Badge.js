import React from 'react';
import confLogo from '../images/badge-header.svg';
import '../styles/badge.css';

class Badge extends React.Component {
    render() {
        return (
            <div className="Badge">
                <div className="Badge__header">
                    <img src={confLogo} alt="Logo de la compañia" />
                </div>

                <div className="Badge__section-name">
                    <img src="https://gravatar.com/avatar?d=identicon" alt="Avatar" className="Badge__avatar"></img>
                </div>

                <div>
                    <h1>Richard <br />Kauffman</h1>

                </div>

                <div className="Badge__section">
                    <p>Frontend Engineer</p>
                    <p>@sparragus</p>
                </div>

                <div className="Badge__footer">
                    <p>#PlatziConff</p>
                </div>
            </div>
        )
    }
}

export default Badge;