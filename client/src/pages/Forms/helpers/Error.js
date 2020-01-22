import React from "react"

const Error = ({ touched, message }) => {
    if (!touched) {
        return <div  className="errorRegister"></div>
}
    if (message) {
        return <div  className="errorRegister">{message}</div>
}
    return <div  className="errorRegister"></div>
};

export default Error;