import { useRef, useEffect } from "react";

function BigDataComponent() {
    const specialRef = useRef(null);

    useEffect(() => {
        console.log(specialRef);
        specialRef.current.scrollIntoView({behavior: 'smooth'});
    }, []);

    return (
        <ul>
            <li>Span Item</li>
            <li>Span Item</li>
            <li>Span Item</li>
            <li>Span Item</li>
            <li>Span Item</li>
            <li>Span Item</li>
            <li>Span Item</li>
            <li>Span Item</li>
            <li>Span Item</li>
            <li>Span Item</li>
            <li>Span Item</li>
            <li>Span Item</li>
            <li>Span Item</li>
            <li>Span Item</li>
            <li>Span Item</li>
            <li>Span Item</li>
            <li>Span Item</li>
            <li>Span Item</li>
            <li>Span Item</li>
            <li>Span Item</li>
            <li>Span Item</li>
            <li>Span Item</li>
            <li>Span Item</li>
            <li>Span Item</li>
            <li>Span Item</li>
            <li>Span Item</li>
            <li>Span Item</li>
            <li>Span Item</li>
            <li>Span Item</li>
            <li>Span Item</li>
            <li>Span Item</li>
            <li>Span Item</li>
            <li>Span Item</li>
            <li>Span Item</li>
            <li>Span Item</li>
            <li>Span Item</li>
            <li>Span Item</li>
            <li>Span Item</li>
            <li>Span Item</li>
            <li>Span Item</li>
            <li>Span Item</li>
            <li>Span Item</li>
            <li>Span Item</li>
            <li>Span Item</li>
            <li>Span Item</li>
            <li>Span Item</li>
            <li>Span Item</li>
            <li>Span Item</li>
            <li ref={specialRef}>Special item that should be scroll</li>
        </ul>
    )
};

export default BigDataComponent;