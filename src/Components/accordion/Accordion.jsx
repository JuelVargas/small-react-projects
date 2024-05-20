import { useState } from "react";
import data from "./data";
import "./styles.css";

export default function Accordion() {

    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSeletion] = useState(false)
    const [multiple, setMultiple] = useState([]);



    function handdleSingleSelection(currentId) {
        setMultiple([])
        setSelected(currentId === selected ? null : currentId)
    }

    function handdleMultiSelection(currentId) {
        let cpyMultiple = [...multiple];
        selected !== null? cpyMultiple.push(selected): null;
        setSelected(null);
        const findIndexOfCurrentId = cpyMultiple.indexOf(currentId);

        if (findIndexOfCurrentId == -1) cpyMultiple.push(currentId)
        else cpyMultiple.splice(findIndexOfCurrentId, 1)

        setMultiple(cpyMultiple)
    }

    return (
        <div className="wrapper">
            <button onClick={() => setEnableMultiSeletion(!enableMultiSelection)}>
                Enable {enableMultiSelection? "single": "multi"} Selection
            </button>
            <div className="accordion" >
                {
                    data && data.length > 0 ?
                        data.map((dataItem) => (

                            <div className="item" key={dataItem.id}>
                                <div onClick={enableMultiSelection
                                    ? () => handdleMultiSelection(dataItem.id)
                                    : () => handdleSingleSelection(dataItem.id)}
                                    className="title">
                                    <h3>{dataItem.question}</h3>
                                    <span>+</span>
                                </div>

                                {
                                    selected === dataItem.id ||
                                    multiple.indexOf(dataItem.id) !== -1 ?
                                        <div className="content">
                                            {dataItem.answer}
                                        </div>
                                        : null
                                }
                            </div>


                        ))
                        : (<div>No data found</div>)

                }
            </div>
        </div>
    );
}