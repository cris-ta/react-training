import "./styles.css"

function Title (props) {
    return (
        <h3 className="title">{props.title}</h3>
    )
        
}

function SubTitle (props) {
    return (
        <span className="sub__title">{props.subtitle}</span>
    )
}

function Heading2(props) {
    return ( 
        <h2 className="page__heading">{props.heading2}</h2>
     )
}

function SubHeading(props) {
    return ( 
        <h4 className="sub__heading">{props.subheading}</h4>
     );
}


export {Title, SubTitle, Heading2, SubHeading}