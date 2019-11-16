const getEmailHTML = order => {
    const itemHTML = order.items.reduce((itemHTML, item) => {
        return (itemHTML += `<tr><td>${item.title}</td><td>${item.price}</td><td>${item.amount}</td></tr>`);
    }, "");

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <title>Thank you for your order</title>
</head>
<style>
    body {
        width: 80%;
        margin: 0 auto;
        padding: 1em;
    }
    table {
        width: 100%;
        margin: 1em auto;
        text-align: left;
        border-collapse: collapse;
    }
    caption,
    td,
    th {
        padding: 0.9em 0.7em;
        border: 1px solid rgba(38, 34, 34, 0.1);
        box-shadow: 0;
    }

    caption,
    th {
        background: #f9fafb;
        font-weight: 700;
    }
    tfoot th:last-child {
        text-align: right;
        padding-right: 2em;
    }
    div {
        text-align: center;
        color: rgba(150, 150, 150, 0.75);
        font-size: 0.75em;
    }
</style>
<body><h2>Here are the details for your order.</h2>
    <table>
        <caption>
            Order# ${order.number}
        </caption>
        <thead>
            <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Amount</th>
            </tr>
        </thead>
        <tbody>
            ${itemHTML}
            <tfoot><tr><th>Total</th><th colspan="2">${order.total}</th></tr></tfoot>
        </tbody>
    </table>
    <div>
        This has been sent as a response to you clicking "Check out" in
        Media Store Prototype. No actual transactions have been made and you
        will not receive any further emails if you don't repeat the process.
    </div>
</body>
</html>`;
};

export default order => {
    return {
        from: "noreply@example.com",
        to: order.email,
        subject: `Thank you for your order #${order.number}`,
        html: getEmailHTML(order)
    };
};
