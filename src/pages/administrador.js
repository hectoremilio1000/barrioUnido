import React, { useState } from 'react'
import { Form, Col } from 'react-bootstrap'
import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"


import Amplify from 'aws-amplify';
import awsconfig from '../aws-exports';

import { AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { Link } from 'gatsby';
import { AnchorLink } from "gatsby-plugin-anchor-links";

Amplify.configure(awsconfig);

const Administrador = ()=>{

    const [fields, setFields] = useState([{
        id: 1,
        firstName: "",
        lastName: ""
      }])

      const handleChangeInput = (i, e) => {
        console.log(e.target.value);
        const values = [...fields]
        values[i][e.target.name] = e.target.value
        setFields(values)
      }

      const handleAdd = (id) => {
        setFields([...fields, { id: id + 2, firstName: '', lastName: '' }])
      }
    
      const handleSubtract = (i) => {
        const values = [...fields]
        values.splice(i, 1)
        setFields([...values])
      }

    return(
        <div>
                <nav className="navbar navbar-expand-lg navbar-expand-md navbar-expand-xs navbar-light bg-light d-flex align-items-center" id="home">
                    <div className="col-lg-10 col-sm-6 col-6 col-md-10">
                        <AnchorLink to="/#home" title="Our team" className="navbar-brand">
                            <span className="display-6 font-weight-bold">Barrio Unido</span>
                        </AnchorLink>
                    </div>
                        <div className="d-flex flex-row align-items-center col-lg-2 col-md-2 col-sm-6 col-6 justify-content-end bloque_sesion">
                            <div className="m-2">
                                <Link to="/" className="text-dark font-weight-bold iniciar_sesion">Inicio</Link>
                            </div>
                        </div>
                </nav>
                <AmplifyAuthenticator>
                    
                <div>
      <Container>
        <Row>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              {fields.map((field, i) => (
                <div key={field.id}>
                  <Row className="mt-5">
                    <Col md>
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter First Name"
                        name="firstName"
                        value={field.firstName}
                        onChange={e => handleChangeInput(i, e)}
                      />
                    </Col>
                    <Col md>
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Last Name"
                        name="lastName"
                        value={field.lastName}
                        onChange={e => handleChangeInput(i, e)}
                      />
                    </Col>
                    <Col md>
                      <Button onClick={() => handleAdd(i)} className="mt-4 mr-5">
                        +
                      </Button>
                      <Button disabled={field.id === 1} onClick={() => handleSubtract(i)} className="mt-4">
                        -
                      </Button>
                    </Col>
                  </Row>
                </div>
              ))}
            </Form.Group>

            <Button type="submit" variant="success" style={{ float: "left" }} >
              Guardar
            </Button>
          </Form>
            {fields.map(field =>
                <>
                <div className="m-5">
                    <div>{field.id}</div>
                    <div>{field.firstName}</div>
                    <div>{field.lastName}</div>
                </div>
                </>
            )}
        </Row>
      </Container>
    </div>
                    <AmplifySignOut/>
                </AmplifyAuthenticator>
        </div>
    )
}


                        
export default Administrador