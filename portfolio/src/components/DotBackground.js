import React from 'react';

const DotBackground = ()=>{
    const dots = Array.from({ length: 100 }).map((_, index) => (
        <div
            key={index}
            style={{
                position: "absolute",
                borderRadius: "50%",
                backgroundColor: "orange",
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                top: `${Math.random() * 100}vh`,
                left: `${Math.random() * 100}vw`,
                opacity: Math.random(),
                zIndex: 0
            }}
        />
    ));
    return <div style={{ position: "absolute", overflow: "hidden", height: "90vh", width: "100vw", zIndex: 0 }}>{dots}</div>;
}
export default DotBackground;