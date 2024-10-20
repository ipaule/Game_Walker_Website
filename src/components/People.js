import React from 'react';
import Header from './Header';
import { Container, Grid, Avatar, Typography, Box, Link } from '@mui/material';
import './People.css'; // We'll create this file for custom styles

const people = [
  { name: 'Sungjin Yi', image: '/png/people/Sungjin.jpeg', description: <>Founder<br />Backend, Web Developer</>, email: 'ipaule@gmail.com' },
  { name: 'Jin Kim', image: '/png/people/Jin.jpeg', description: <>Frontend Developer<br /></>, email: 'jinkim2739@gmail.com', imageStyle: { objectPosition: '0 -9px' } },
  { name: 'Noah Kim', image: '/png/people/Noah.png', description: <>Frontend Developer<br /></>, email: 'noah7203@berkeley.edu' },
  { name: 'Sam Kim', image: '/png/people/Sam.png', description: <>Frontend Developer<br /></>, email: 'noah7203@berkeley.edu' },
  { name: 'Claire Kang', image: '/png/people/Claire.png', description: <>Designer<br /></>, email: 'clarekang02@berkeley.edu' },
  { name: 'Person 6', image: '/png/people/person6.png', description: <>Web Developer<br /></>, email: 'shyang9711@berkeley.edu' },
];

function People() {
  return (
    <div className="People">
      <Header />
      <Container maxWidth="lg">
        <Typography variant="h2" component="h1" gutterBottom align="center">
          Our Team
        </Typography>
        <Grid container spacing={4}>
          {people.map((person, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box display="flex" alignItems="center" className="person-card">
                <Avatar
                  src={process.env.PUBLIC_URL + person.image}
                  alt={person.name}
                  sx={{ 
                    width: 100, 
                    height: 100, 
                    marginRight: 2,
                    '& .MuiAvatar-img': person.imageStyle || {} // Apply custom style to the image inside Avatar
                  }}
                />
                <Box>
                  <Typography variant="h6" component="h2">
                    {person.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {person.description}
                  </Typography>
                  {person.email && (
                    <Link href={`mailto:${person.email}`} color="primary">
                      {person.email}
                    </Link>
                  )}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default People;
