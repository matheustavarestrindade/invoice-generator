import { useState } from "react";
import InvoiceItem from "./InvoiceItem";

export default function InvoiceItems({ setInvoiceItems }) {
    const [items, setItems] = useState({});

    const handleDeleteItem = (id) => {
        setItems((current) => {
            const newArray = {};
            Object.keys(current).forEach((key) => {
                if (key !== id) {
                    newArray[key] = current[key];
                }
            });
            return newArray;
        });
    };

    const updateItemData = (data) => {
        setInvoiceItems((current) => {
            const newItems = current;
            newItems[data.id] = data.content;
            return newItems;
        });
    };
    const handleAddItem = () => {
        setItems((current) => {
            const id = Math.random().toFixed(10);
            const newArray = { ...current };
            newArray[id] = <InvoiceItem updateItemData={updateItemData} handleDeleteItem={handleDeleteItem} id={id} />;
            return newArray;
        });
    };

    return (
        <div className="row">
            <div className="col-9">
                <h2 className="h2">Items do orçamento</h2>
            </div>
            <div className="col-3 align-self-center">
                <button className="btn btn-sm btn-success m-auto" onClick={handleAddItem}>
                    Adicionar Item
                </button>
            </div>
            <div className="row col-12 mt-5">
                {Object.keys(items).map((key, index) => {
                    const item = items[key];
                    return (
                        <div className="col-12 p-3" key={index} style={{ backgroundColor: index % 2 === 0 ? "#dddddd" : "#eeeeee" }}>
                            {item}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
