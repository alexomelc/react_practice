import { useState } from 'react';

export default function Accordion() {
    const [active, setActive] = useState(0);

    return (
        <>
            <h2>Almaty, Kazakhstan</h2>
            <Panel
                title="About"
                isActive={active === 0}
                onShow={() => setActive(0)}
            >
                pupulation 100k
            </Panel>
            <Panel
                title="Hello"
                isActive={active === 1}
                onShow={() => setActive(1)}
            >
                pupulation 200k
            </Panel>
        </>
    )
}

function Panel ({title, children, isActive, onShow} : {title: string, children: string, isActive: boolean, onShow: () => void}) {
    return(
        <section>
            <h3>{title}</h3>
            {isActive ? (
                <p>{children}</p>
            ) : (
                <button onClick={onShow}>
                    show
                </button>
            )
        }
        </section>
    )
}