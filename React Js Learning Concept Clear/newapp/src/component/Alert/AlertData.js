import React from 'react'
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
const AlertData = (props) => {
    const styleCss = {
        height: "57px",
        marginTop: "2px"
}
return (
    <div style={styleCss}>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalizeFirstLetter(props.alert.type)}</strong> : {props.alert.msg}
        </div>}
    </div>
)
}

export default AlertData