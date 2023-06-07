import React, { useState, useRef, useEffect, useMemo} from "react"

// type ButtonType 


const ButtonParent = () => {
    const [text, setText] = useState('');

    const handleClick = ({renders}: {renders: number}) => {
        console.log(`${text} - ${renders}`)
    }

    const but = useMemo(() => {
        return <Button onclick={handleClick}>hello</Button>
    }, [handleClick])


    return (
        <div>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            {but}
        </div>
    );
}



const Button = ({ children, onclick}: {children: any, onclick: (renders: number) => void}) => {
    const btnRef = useRef(0);

    useEffect(() => {
        btnRef.current = btnRef.current + 1;
        console.log(btnRef.current)
    })

    const onClickHandler = () => {
        onclick(btnRef.current)
    }

    return <button onClick={onClickHandler}>{children}</button>
}


export default ButtonParent