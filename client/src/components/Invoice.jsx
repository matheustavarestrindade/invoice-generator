const invoiceTemplate = {
    logo: "https://i.ibb.co/mCCQRww/Matheus-Tavares.png",
    from: "Matheus Tavares Trindade\nmatheustavarestrindade.com\ncontato@matheustavarestrindade.com\n(22) 99801-5686",
    currency: "brl",
    header: "Orçamento",
    to_title: "Orçamento Para",
    ship_to_title: "Enviar Para",
    date_title: "Data",
    payment_terms_title: "Termos de pagamento",
    due_date_title: "Data de vencimento",
    purchase_order_title: "Ordem de compra",
    quantity_header: "Quantidade",
    item_header: "Produto",
    unit_cost_header: "Preço",
    amount_header: "Total",
    subtotal_title: "Subtotal",
    discounts_title: "Descontos",
    balance_title: "Total",
    tax_title: "Taxa",
    shipping_title: "Frete",
    total_title: "Total",
    amount_paid_title: "Valor pago",
    terms_title: "Termos",
    notes_title: "Notas",
};

export const GenerateInvoice = (data) => {
    const template = { ...invoiceTemplate, ...data };
    const postData = JSON.stringify(template);

    fetch("/", {
        method: "POST",
        body: postData,
        headers: {
            "Content-type": "application/json",
        },
    }).then((res) => {
        console.log(res);
    });
};
