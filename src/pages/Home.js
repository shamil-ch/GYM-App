import { Box } from '@mui/system';
import React,{ useState } from 'react';

import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';


const Home = () => {
  const [bodyPart, setBodyPart] = useState('all')
  const [exercises, setExercises] = useState([]);

  console.log(bodyPart);

  return (
    <div>
      <Box>
        <HeroBanner />
        <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
        <Exercises setExercises={setExercises} bodyPart={bodyPart} exercises={exercises}/>
      </Box>
    </div>
  )
}

export default Home
