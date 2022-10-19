
import React from "react";
import Card from 'react-bootstrap/Card';
export default function CustomCard(props) {
    const { id, url, name } = props;

    return (
        <Card key={id} border="primary" style={{ display: 'flex', width: '100%' }}>
            <Card.Img variant="top" src={url} style={{ height: '400px', width: '100%' }} />
            <Card.Body>
                <Card.Title>
                    {name}
                </Card.Title>
            </Card.Body>
        </Card>
    );
}