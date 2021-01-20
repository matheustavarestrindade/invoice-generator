import { useRef, useState } from "react";
import { GenerateInvoice } from "./Invoice";
import InvoiceItems from "./InvoiceItems";

const InvoiceGenerator = () => {
    const [invoiceItems, setInvoiceItems] = useState({});

    const toRef = useRef();
    const numberRef = useRef();
    const payment_termsRef = useRef();
    const notesRef = useRef();
    const termsRef = useRef();

    const handleGenerateInvoice = () => {
        const items = Object.keys(invoiceItems).map((key) => {
            const item = invoiceItems[key];
            return item;
        });
        const invoiceObj = {
            items: items,
            to: toRef.current.value,
            number: "INV-" + (Number(numberRef.current.value) + 1115),
            payment_terms: payment_termsRef.current.value,
            notes: notesRef.current.value,
            terms: termsRef.current.value,
        };

        GenerateInvoice(invoiceObj);
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-5">
                <h2 className="navbar-brand" href="#">
                    Invoice Generator
                </h2>
                <button onClick={handleGenerateInvoice} class="btn btn-outline-success" type="submit">
                    Gerar Orçamento
                </button>
            </nav>
            <div className="container">
                <div className="row mb-5">
                    <div className="col-sm-4">
                        <label className="form-label">Destinatario</label>
                        <div className="input-group mb-2">
                            <input type="text" ref={toRef} className="form-control" placeholder="Nome do Destinatario" />
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <label className="form-label">Número do Orçamento</label>
                        <div className="input-group mb-2">
                            <span className="input-group-text">Nº</span>
                            <input type="text" ref={numberRef} className="form-control" />
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <label className="form-label">Termos (Pequeno)</label>
                        <div className="input-group mb-2">
                            <span className="input-group-text">#</span>
                            <input type="text" ref={payment_termsRef} className="form-control" />
                        </div>
                    </div>
                </div>
                <InvoiceItems setInvoiceItems={setInvoiceItems} />
                <div className="row mt-5">
                    <div className="col-sm-12">
                        <label className="form-label">Notas</label>
                        <div className="input-group mb-2">
                            <textarea className="form-control" ref={notesRef} rows="2" spellcheck="false"></textarea>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <label className="form-label">Termos (Detalhado)</label>
                        <div className="input-group mb-2">
                            <textarea className="form-control" ref={termsRef} rows="2" spellcheck="false"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default InvoiceGenerator;
