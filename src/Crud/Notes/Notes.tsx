import React, { useState, useEffect, ChangeEvent } from "react";
import INoteData from '../Types/NoteType';
import NoteServices from "../Services/NoteServices";
import  "./CreateNotes.css";
import { Card, Row, Col, Container, Modal,Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';


function Notes() {
  const initialNoteState = {
    id : 0,
    title: "",
    description: "",
    colour: "#f0dbf0"
  };
    const [notes, setNotes] = useState<Array<INoteData>>([]);
    const [cnotes, setCnotes] = useState<INoteData>(initialNoteState);
    const [state, setState] = useState<number > (0);
    const [show, setShow] = useState(false);
    const [updated, setUpdated] = useState<number > (0);

    const handleClose = () => setShow(false);

    const deleteNote = (id: number) => {
        NoteServices.remove(id)
          .then((response: any) => {
            console.log(response.data);
            setState(Math.random())
          })
          .catch((e: Error) => {
            console.log(e);
          });
      };

    const editNote = (id: number) => {
        setShow(true);
        NoteServices.get(id)
          .then((response: any) => {
            console.log(response.data);
            setCnotes(response.data)
          })
          .catch((e: Error) => {
            console.log(e);
          });
      };
      const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setCnotes({ ...cnotes, [name]: value });
      };
      const updateNote =(id: number) => {
        setShow(false);
        NoteServices.update(cnotes.id, cnotes)
          .then((response: any) => {
            console.log(response.data);
            setUpdated(Math.random())
          })
      .catch((e: Error) => {
        console.log(e);
      });
      };

      useEffect(() => {
        retrieveNotes();
      }, [state,updated]);

      const retrieveNotes = () => {
        NoteServices.getAll()
        .then((response: any) => {
            setNotes(response.data);
            console.log(response.data);
        })
        .catch((e: Error) => {
            console.log(e);
        });
    };

return (
    

<><div>
<Container className="mt-5">
        <Row>
        <div className="tit">
            <div className="tit-left">
            <h2>Short Notes List</h2>
            <p>Resize the browser window to see the effect.</p>
        </div>
        <div className="tit-right">
              <a href="/add-note"><Button variant="success" style={{ marginRight: "10px" }}>Add Note</Button></a>
        </div>
        </div>
        {notes && notes.map((note) => (
        <Col sm={3}>
          <div className="mb-3">
              <Card style={{backgroundColor: note.colour}}>
                <Card.Header>{note.title}</Card.Header>
                    <Card.Body><Card.Text>{note.description}</Card.Text></Card.Body>
                <Card.Footer>
                          <Button className="mt-3" variant="danger" onClick={() => { deleteNote(note.id) }}>Delete</Button>{" "}
                          <Button className="mt-3" variant="primary" onClick={() => { editNote(note.id) }}>Edit</Button>
                </Card.Footer>
              </Card>
          </div>
      </Col>
        ))}
      <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update this Note:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Tilte</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Title"  name="title"
                value={cnotes.title} onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea"   name="description"  value={cnotes.description} onChange={handleInputChange}  rows={3} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Color:</Form.Label>
              <Form.Control
                type="color"  name="colour"
                value={cnotes.colour} onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary"onClick={() => { updateNote(cnotes.id) }}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
</ Row>
</Container>
</div>
  </>

)}


export default Notes