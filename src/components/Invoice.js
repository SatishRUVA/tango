import moment from 'moment';

function Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const Invoice = ({invoice}) =>{
    return (
        <div className='invoice'>
            <div id='invoice-list'>
                <p className='padTop1p iv-content'><span>#</span><span><strong>{invoice.id}</strong></span></p>
                <p className='iv-content'>Due {moment(invoice.paymentDue).format('DD MMM YYYY')}</p>
                <p className='iv-content'>{invoice.clientName}</p>
                <p className='totalInList iv-content'><strong>£{invoice.total}</strong></p>
                <p className={(invoice.status == 'paid') ? 'status iv-content' : ((invoice.status == 'pending') ? 'status-pending iv-content':'status-draft iv-content') }><li>{Capitalize(invoice.status)}</li></p>
                <p className='invoiceListArrow'><svg width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4 4-4 4" stroke="#7C5DFA" stroke-width="2" fill="none" fill-rule="evenodd"/></svg></p>
            </div>

        </div>
    )
}

export default Invoice;
