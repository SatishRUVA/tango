import {Form, Modal, Button} from "react-bootstrap";
import {useForm} from "react-hook-form";
import {useState} from "react";

const NewInvoice = ({onAdd, onClose, invoice = {}}) => {
    const [status, setStatus] = useState();
    const {register, handleSubmit, getValues, formState: {errors}} = useForm();

    const onSubmit = (data) => {
        debugger
        const a = {...data, status, id: invoice.id || generateId()};
        onAdd(a);
    }

    const generateId = () => {
        const alphabet = 'abcdefghijklmnopqrstuvwxyz';

        return alphabet[Math.floor(Math.random() * alphabet.length)]
            + alphabet[Math.floor(Math.random() * alphabet.length)]
            + Math.floor(Math.random() * 10000)
    }

    return (
        <Modal.Dialog>
            <Modal.Header closeButton onHide={onClose}>
                <Modal.Title>New Invoice</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form className='add-form' onSubmit={handleSubmit(onSubmit)}>
                    <div> Bill From</div>
                    <div className='form-control'>
                        <label>Street Address</label>
                        <input
                            type='text'
                            placeholder='Street Address'
                            {...register('streetAddress', {required: status === 'pending'})}
                            defaultValue={invoice.streetAddress}
                        />
                        <span>
                        {errors.streetAddress?.type === 'required' && "Street Address is required"}
                        </span>
                    </div>
                    <div className='form-control'>
                        <label>City</label>
                        <input
                            type='text'
                            placeholder='City'
                            {...register('city', {required: status === 'pending'})}
                            defaultValue={invoice.city}
                        />
                        {errors.city?.type === 'required' && "City is required"}
                    </div>
                    <div className='form-control'>
                        <label>Post Code</label>
                        <input
                            type='text'
                            placeholder='PostCode'
                            {...register('postCode', {required: status === 'pending'})}
                            defaultValue={invoice.postCode}
                        />
                        {errors.postCode?.type === 'required' && "Post Code is required"}
                    </div>
                    <div className='form-control'>
                        <label>Country</label>
                        <input
                            type='text'
                            placeholder='Country'
                            {...register('country', {required: status === 'pending'})}
                            defaultValue={invoice.country}
                        />
                        {errors.country?.type === 'required' && "Country is required"}
                    </div>
                    <div> Bill To</div>
                    <div className='form-control'>
                        <label> Client's Name </label>
                        <input
                            type='text'
                            placeholder='Clients Name'
                            {...register('clientName', {required: status === 'pending'})}
                            defaultValue={invoice.clientName}
                        />
                        {errors.clientName?.type === 'required' && "CLinet Name is required"}
                    </div>
                    <div className='form-control'>
                        <label> Client's Email </label>
                        <input
                            type='text'
                            placeholder='Clients Email'
                            {...register('clientEmail', {required: status === 'pending'})}
                            defaultValue={invoice.clientEmail}
                        />
                        {errors.clientEmail?.type === 'required' && "Email is required"}
                    </div>
                    <div className='form-control'>
                        <label> Street Address </label>
                        <input
                            type='text'
                            placeholder='Street Address'
                            {...register('clientStreetAddress', {required: status === 'pending'})}
                            defaultValue={invoice.clientStreetAddress}
                        />
                        {errors.clientStreetAddress?.type === 'required' && "Street Address is required"}
                    </div>
                    <div className='form-control'>
                        <label> City </label>
                        <input
                            type='text'
                            placeholder='City'
                            {...register('clientCity', {required: status === 'pending'})}
                            defaultValue={invoice.clientCity}
                        />
                        {errors.clientCity?.type === 'required' && "City is required"}
                    </div>
                    <div className='form-control'>
                        <label> Post Code </label>
                        <input
                            type='text'
                            placeholder='Post Code'
                            {...register('clientPostCode', {required: status === 'pending'})}
                            defaultValue={invoice.clientPOstCode}
                        />
                        {errors.clientPostCode?.type === 'required' && "Post Code is required"}
                    </div>
                    <div className='form-control'>
                        <label> Country </label>
                        <input
                            type='text'
                            placeholder='Country'
                            {...register('clientCountry', {required: status === 'pending'})}
                            defaultValue={invoice.clientCountry}
                        />
                        {errors.clientCountry?.type === 'required' && "Country is required"}
                    </div>
                    <div className='form-control'>
                        <label>Issue Date</label>
                        <input
                            type='text'
                            placeholder='Add Day & Time'
                            {...register('addTerm', {required: status === 'pending'})}
                            defaultValue={invoice.addDayTime}
                        />
                        {errors.addDayTime?.type === 'required' && "Add Day & Time is required"}
                    </div>
                    <div className='form-control'>
                        <label>Payment Terms</label>
                        <input
                            type='text'
                            placeholder='Payment Terms'
                            {...register('paymentTerms', {required: status === 'pending'})}
                            defaultValue={invoice.paymentTerm}
                        />
                        {errors.paymentTerms?.type === 'required' && "Payment Terms is required"}
                    </div>
                    <div className='form-control'>
                        <label> Project Description </label>
                        <input
                            type='text'
                            placeholder='Project Description'
                            {...register('projectDescription', {required: status === 'pending'})}
                            defaultValue={invoice.projectDescription}
                        />
                        {errors.projectDescription?.type === 'required' && "Project Description is required"}
                    </div>
                    <div className='form-control form-control-check'>
                        <label>Set Reminder</label>
                        <input
                            type='checkbox'
                        />
                    </div>

                    <input type='submit' onClick={() => setStatus('pending')} value='Save Task'
                           className='btn btn-block'/>
                    <input type='button' onClick={() => {
                        setStatus('draft');
                        onSubmit(getValues())
                    }} value='Save As Draft' className='btn btn-block'/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>Close</Button>
            </Modal.Footer>
        </Modal.Dialog>
    )
}

export default NewInvoice
