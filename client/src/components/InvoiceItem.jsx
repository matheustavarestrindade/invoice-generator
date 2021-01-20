import { useRef } from "react";

export default function InvoiceItem({ updateItemData, handleDeleteItem, id }) {
    const nameRef = useRef();
    const priceRef = useRef();
    const quantityRef = useRef();
    const descriptionRef = useRef();

    const handleFormChange = () => {
        if (!nameRef.current || !nameRef.current.value || !priceRef.current || !priceRef.current.value || !quantityRef.current || !quantityRef.current.value) {
            return;
        }
        updateItemData({
            id: id,
            content: {
                name: nameRef.current.value,
                quantity: Number(quantityRef.current.value),
                unit_cost: Number(priceRef.current.value),
                description: descriptionRef.current.value,
            },
        });
    };
    return (
        <div className="row">
            <div className="col-10">
                <div className="row">
                    <div className="col-sm-4">
                        <label className="form-label">Nome do produto</label>
                        <div className="input-group mb-2">
                            <input type="text" ref={nameRef} className="form-control" placeholder="Nome do produto" onChange={handleFormChange} />
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <label className="form-label">Preço/Unidade</label>
                        <div className="input-group mb-2">
                            <span className="input-group-text">R$</span>
                            <input type="text" ref={priceRef} className="form-control" onChange={handleFormChange} />
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <label className="form-label">Quantidade</label>
                        <div className="input-group mb-2">
                            <span className="input-group-text">X</span>
                            <input type="number" ref={quantityRef} className="form-control" onChange={handleFormChange} />
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <label className="form-label">Descrição</label>
                        <div className="input-group mb-2">
                            <textarea className="form-control" ref={descriptionRef} rows="2" spellcheck="false" onChange={handleFormChange}></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-2 align-self-center">
                <button onClick={() => handleDeleteItem(id)} type="button" class="btn btn-sm btn-danger">
                    Deletar
                </button>
            </div>
        </div>
    );
}
