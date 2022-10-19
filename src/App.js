import React, { useState, useEffect } from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Row, Col, Spinner } from 'react-bootstrap';
import CustomCard from './components/card';


function App() {
  const [listMeme, setListMeme] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadMemes = () => {
    setIsLoading(true);
    let memes;
    fetch('https://api.imgflip.com/get_memes')
      .then((res) => {
        return res.json();
      }).then(res => {
        return res.data.memes;
      }).then(res => {
        if (res.length !== 0) {
          memes = JSON.parse(JSON.stringify(res))
          shuffleArray(memes);
          memes = memes.slice(0, 20); console.log(memes);
          setListMeme(memes);
          setIsLoading(false);
        }
      }).catch(err => {
        console.log(err);
      })

  }
  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  useEffect(() => {
    loadMemes();
  });

  return (

    <Container>
      <Button variant="primary" style={{ margin: '10px' }} onClick={() => loadMemes()}>Load random 20 memes</Button>
      {
        <Row xs={1} md={3} lg={4} className="g-4" >
          {(isLoading)
            ? <Spinner animation="border" />
            : listMeme.map((item) => {
              return (
                <Col >
                  <CustomCard id={item.id} url={item.url} name={item.name}></CustomCard>
                </Col>
              )
            })}

        </Row>
      }
    </Container>


  );
}

export default App;
