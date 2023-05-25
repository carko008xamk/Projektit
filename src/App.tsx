import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import { Header } from './components/Header';
import { BirdList } from './components/BirdList';
import { AddBird } from './components/AddBird';
import { EditBird } from './components/EditBird';
import { Bird } from './types/bird';
import { getBirds, saveBirds } from './utils/birds';
import { DeleteBird } from './components/DeleteBird';

function App() {
  const [birds, setBirds] = React.useState<Bird[]>([]);


  React.useEffect(() => {
    const storedBirds = getBirds();
    if (storedBirds.length) {
      setBirds(storedBirds);
    }
  }, []);


  React.useEffect(() => {
    saveBirds(birds);
  }, [birds]);

  const handleAddBird = (bird: Bird) => {
    const newBirds = [...birds, bird];
    setBirds(newBirds);
  };

  const handleEditBird = (uniqueId: string, bird: Bird) => {
    const index = birds.findIndex((b) => b.uniqueId === uniqueId);
    const newBirds = [...birds];
    newBirds[index] = bird;
    setBirds(newBirds);
  };

  const handleDeleteBird = (uniqueId: string) => {
    const newBirds = birds.filter((b) => b.uniqueId !== uniqueId);
    setBirds(newBirds);
  };

  return (
    <Router>
      <Header />
      <Container maxWidth="sm">
        <Routes>
          <Route path="/" element={<BirdList birds={birds} onDeleteBird={handleDeleteBird} />} />
          <Route path="/add" element={<AddBird onAddBird={handleAddBird} />} />
          <Route path="/edit/:id" element={<EditBird birds={birds} onEditBird={handleEditBird} />} />
          <Route path="/delete/:uniqueId" element={<DeleteBird onDeleteBird={handleDeleteBird} />} />
        </Routes>
      </Container>
    </Router>
  );
}
export default App;










