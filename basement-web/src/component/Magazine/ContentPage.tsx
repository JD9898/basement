import React, {useLayoutEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";
import {changeBackground, reverseBackground} from "../../util/componentUtils";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {styles} from "../../style/styles";

function ContentPage() {
    const constructAContentLink = (name: string) => {
        // @ts-ignore
        return (
                <Link
                    to={`/${name}`}
                    className="pixel"
                    onMouseOver={(e) => {
                        changeBackground(e)
                        // constructTooltip('Register');
                        // setClose(false)
                    }}
                    onMouseLeave={reverseBackground}
                    style={{maxHeight: '20px', color: 'navy'}}
                >
                    <li style={{padding: '10px'}}>{`  ${name}`}</li>
                </Link>
        );
    }

    return (
        <>
            <div
                // ref={ref}
                // className="d-flex"
                style={{
                    // width: '100vw',
                    // position: 'absolute'
                    }}
                >
                <h2
                    // className="d-flex"
                >
                    <ol>
                        {constructAContentLink("Today's Markets Picks")}
                        {constructAContentLink("PUNishment")}
                        {constructAContentLink("Weekly Specials")}
                        <li style={{padding: '10px'}}>Today's Markets Picks</li>
                        <li style={{padding: '10px'}}>PUNishment</li>
                        <li style={{padding: '10px'}}>Weekly Specials</li>
                    </ol>

                </h2>
            </div>
        </>
    )
}

export default ContentPage;
