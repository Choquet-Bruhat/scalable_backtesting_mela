import React, {useState} from 'react'
import '../styles/main.css'
import { Form, Button } from 'react-bootstrap'
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from 'react-datepicker'
const today = new Date();

const Createback = () =>{
    const [startDate, setstartDate] = useState(null)
    const [endDate, setendDate] = useState(null)

    return(
        <>
        <div className="create-header">
            <h1>Create a Scene</h1>
        </div>
        <div className="form">
            <form>
                <div className="date-container">
                    <Form.Group>
                        <Form.Label>Start Date</Form.Label>                    
                            <DatePicker selected={startDate} onChange={date => setstartDate(date)}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>End Date</Form.Label>                    
                            <DatePicker selected={endDate} onChange={date => setendDate(date)}/>
                    </Form.Group>
                </div>
                <br></br>
                <Form.Group>
                    <Form.Label>Coin</Form.Label>
                    <Form.Control type="text" placeholder="Coin"></Form.Control>
                </Form.Group>
                <br></br>
                <Form.Group>
                    <Form.Label>SMW</Form.Label>
                    <Form.Control type="text" placeholder="smw"></Form.Control>
                </Form.Group>
                <br></br>
                <Form.Group>
                    <Form.Label>FMW</Form.Label>
                    <Form.Control type="text" placeholder="fmw"></Form.Control>
                </Form.Group>
                <br></br>
                <Form.Group>
                    <Form.Label>Run Location</Form.Label>
                    <Form.Control type="text" placeholder="Run location"></Form.Control>
                </Form.Group>
                <br></br>
                <Form.Group>
                    <Button as="sub" variant="primary">Create Scene</Button>
                </Form.Group>
            </form>
        </div>
        </>
    )
}

export default Createback


