import { useState } from 'react'
import { Modal, Button } from "react-bootstrap";

const NewInvoice = ({ onAdd, onClose }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert('Please add a task')
            return
        }

        onAdd({ text, day, reminder })

        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <Modal.Dialog>
            <Modal.Header closeButton onHide={onClose}>
                <Modal.Title>New Invoice</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form className='add-form' onSubmit={onSubmit}>
                    <div> Bill From </div>
                    <div className='form-control'>
                        <label>Street Address</label>
                        <input
                            type='text'
                            placeholder='Street Address'
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                    </div>
                    <div className='form-control'>
                        <label>City</label>
                        <input
                            type='text'
                            placeholder='City'
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                    </div>
                    <div className='form-control'>
                        <label>Post Code</label>
                        <input
                            type='text'
                            placeholder='PostCode'
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                    </div>
                    <div className='form-control'>
                        <label>Country</label>
                        <input
                            type='text'
                            placeholder='Country'
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                    </div>
                    <div> Bill To </div>
                    <div className='form-control'>
                        <label> Client's Name </label>
                        <input
                            type='text'
                            placeholder='Clients Name'
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                    </div>
                    <div className='form-control'>
                        <label> Client's Email </label>
                        <input
                            type='text'
                            placeholder='Clients Email'
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                    </div>
                    <div className='form-control'>
                        <label> Street Address </label>
                        <input
                            type='text'
                            placeholder='Street Address'
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                    </div>
                    <div className='form-control'>
                        <label> City </label>
                        <input
                            type='text'
                            placeholder='City'
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                    </div>
                    <div className='form-control'>
                        <label> Post Code </label>
                        <input
                            type='text'
                            placeholder='Post Code'
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                    </div>
                    <div className='form-control'>
                        <label> Country </label>
                        <input
                            type='text'
                            placeholder='Country'
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                    </div>
                    <div className='form-control'>
                        <label>Issue Date</label>
                        <input
                            type='text'
                            placeholder='Add Day & Time'
                            value={day}
                            onChange={(e) => setDay(e.target.value)}
                        />
                    </div>
                    <div className='form-control'>
                        <label>Payment Terms</label>
                        <input
                            type='text'
                            placeholder='Payment Terms'
                            value={day}
                            onChange={(e) => setDay(e.target.value)}
                        />
                    </div>
                    <div className='form-control'>
                        <label> Project Description </label>
                        <input
                            type='text'
                            placeholder='Project Description'
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                    </div>
                    <div className='form-control form-control-check'>
                        <label>Set Reminder</label>
                        <input
                            type='checkbox'
                            checked={reminder}
                            value={reminder}
                            onChange={(e) => setReminder(e.currentTarget.checked)}
                        />
                    </div>

                    <input type='submit' value='Save Task' className='btn btn-block' />
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>Close</Button>
            </Modal.Footer>
        </Modal.Dialog>
            )
}

export default NewInvoice
