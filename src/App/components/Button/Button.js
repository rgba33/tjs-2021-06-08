import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

function Button(props) {
    console.log(props)
    return <button onClick={evt => {
        console.warn('j\'ai cliqué sur'+' '+evt.target.innerText);
        props.clickAction(evt.target.innerText);
    }}
                   className="Button"
                   style={{
                       backgroundColor: props.bgcolor,
                       fontStyle: (props.isItalic ? 'italic' : 'normal')
                   }}> {props.children}</button>;
}
Button.propTypes = {
    children: PropTypes.any.isRequired,
    bgcolor: PropTypes.string.isRequired,
    clickAction : PropTypes.func.isRequired
};

Button.defaultProps = {
    bgcolor: 'Aquamarine',
    isItalic : true
};
export default Button;