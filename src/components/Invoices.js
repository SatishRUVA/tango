import { useState } from 'react';
import Invoice from "./Invoice";

const Invoices = ({ invoices }) => {
    return (
        <>
            {
                invoices.map((invoice) => (
                    <div key={invoice.id}>
                        <Invoice invoice={invoice}></Invoice>
                    </div>

                    ))
            }
        </>
    )
}

export default Invoices
