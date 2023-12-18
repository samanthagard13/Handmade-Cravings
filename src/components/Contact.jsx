import React from "react";
import { Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Contact() {
    return(
        <>
        <h2 className="m-4 title">Send Me A Message</h2>
       
        <Form className="p-2">
            <Form.Group className="p-2">
                <Form.Label>Name</Form.Label>
                <Form.Control></Form.Control>
            </Form.Group>
            <Form.Group className="p-2">
                <Form.Label>Email</Form.Label>
                <Form.Control></Form.Control>
            </Form.Group>
            <Form.Group className="p-2">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3}/>
            </Form.Group>
            <Button className="all-btn">Send</Button>
        </Form>
        </>
    )
}

export default Contact;