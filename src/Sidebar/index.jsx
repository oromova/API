import React from 'react';
import { Card, Container } from './main';

export const Sidebar = () => {
  return (
    <Container>
      <Card to="/">Login</Card>
      <Card>Categories</Card>
      <Card>Brands</Card>
      <Card>Cities</Card>
      <Card>Location</Card>
      <Card>Cars</Card>
    </Container >
  )
}
