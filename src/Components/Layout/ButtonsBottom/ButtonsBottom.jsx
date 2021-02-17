import React from 'react'

export default function ButtonsBottom(props) {

    if(!Array.isArray(props.children)){

    return (<div className="buttons-bottom-layout--one">
                <div className="buttons-bottom-layout__left">
                    {props.children}
                </div>
            </div>)
    }

    return (
        <div className="buttons-bottom-layout--two">
          <div className="buttons-bottom-layout__left">
              {props.children[0]}
          </div>
          <div className="buttons-bottom-layout_right">
              {props.children[1]}
          </div>
      </div>
    )
}
