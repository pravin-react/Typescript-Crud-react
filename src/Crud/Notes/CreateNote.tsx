import React, { useState, ChangeEvent } from "react";
import INoteData from '../Types/NoteType';
import NoteServices from "../Services/NoteServices";
import  "./CreateNotes.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Notes from './Notes'
import { useNavigate } from "react-router-dom";



function CreateNote() {
    const initialNoteState = {
        id : 0,
        title: "",
        description: "",
        colour: "#f0dbf0"
      };
      const [note, setNote] = useState<INoteData>(initialNoteState);
      const [submitted, setSubmitted] = useState<boolean>(false);
      const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setNote({ ...note, [name]: value });
      };
      const navigate = useNavigate();
      const handleSubmit = (e:any) => {
        e.preventDefault();
        const data = {
          id:0,
          title: note.title,
          description: note.description,
          colour:note.colour
        };
        NoteServices.create(data)
          .then((response: any) => {
            setNote({
              id: response.data.id,
              title: response.data.title,
              description: response.data.description,
              colour: response.data.colour
            });
            setSubmitted(true);
            console.log(response.data);
            navigate("/notes"); 
          })
          .catch((e: Error) => {
            console.log(e);
          });
      };
      


  return (
    <div className="createNote">
        <Container>
        <Row>
        <Col md={{ span: 6, offset: 3 }}>
       
            <Form className="formnote" onSubmit={(e) => handleSubmit(e) }>
            <h4>Create Note</h4>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" name="title" placeholder="Enter title" value={note.title}
                    onChange={handleInputChange}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Description</Form.Label>
                <InputGroup>
                <Form.Control as="textarea" name="description" value={note.description} onChange={handleInputChange} />
            </InputGroup>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Choose Card Colour</Form.Label>
                <Form.Control type="color" name="colour"  value={note.colour}
                    onChange={handleInputChange}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
        </Col>
       </Row>
      </Container>
    </div>
  )
}

export default CreateNote