import '../../App.css';
import React, {useLayoutEffect, useRef, useState} from "react";
// @ts-ignore
import bookOpenSolid from "../../assets/svg/bookOpenSolid.svg";
import ContentPage from './ContentPage';

interface MagazineProps {
    title: string,
    content: any,
    // children: HTMLElement,
}

const Magazine = (
    {title, content}: MagazineProps
) => {

    const ref = useRef(null);

    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    useLayoutEffect(() => {
        setWidth(ref.current.offsetWidth);
        setHeight(ref.current.offsetHeight);
    }, []);

    return (
        <>
            <div ref={ref} className="d-flex" style={{width: '100vw', position: 'absolute',}}>
                <div className="d-flex">
                    <div className="left pixel" style={{color: 'white', left: width * 0.25, top: '20vh'}}>
                        <p className="pixel d-flex" style={{color: 'white', fontSize: '40px'}}>
                            {title}
                        </p>
                        <ContentPage/>
                        {/*<h3 className="pixel" style={{position: 'relative', zIndex: -1, color: 'white', left: width*0.25, top: '35%'}}>{content}</h3>*/}
                    </div>

                    <div className="right pixel" style={{color: 'white', left: width * 0.25, top: '20vh'}}>
                        {/*physics*/}
                        <h2 className="pixel" style={{color: 'white', left: width * 0.25, top: '20vh'}}>{content}</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Magazine;