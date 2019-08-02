import React from 'react';
//tambien se puede usar distrocsion
//function Header({titulo})
function Header(props){
    return(
        <nav>
            <div className ="nav-wrapper light-blue darken-2">
                <a href = "#!"className = "brand-logo">{props.titulo}</a>
            </div>
        </nav>
    )
}

export default Header;
