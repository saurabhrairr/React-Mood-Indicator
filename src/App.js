import {useState} from 'react';
import "./App.css"

export default function App() {
  const [Happy, sethappy] = useState(false);
  const [sad, setsad] = useState(false);
  const [sleepy, setsleepy] = useState(false);
  const [Excited , setExcited ] = useState(false);
  const handleClick1 = () => {

    sethappy(current => !current);
 
   
  };
  const handle2 = () => {
 
    setsad(current => !current);
    

  };
  const handle3 = () => {

    setsleepy(current => !current);
    

  };
  const handle4 = () => {

    setExcited(current => !current);
    

  };


  return (
    <div>
      <div className='happy'
        style={{
          backgroundColor: Happy ? ' rgb(238, 241, 0)' : '',
          color: Happy ? 'white' : '',

        }}
        onClick={handleClick1}
      >
    Happy
      </div>



      <div className='sad'
        style={{
          backgroundColor: sad ? 'rgb(19, 0, 164)' : '',
          color: sad ? 'white' : '',
        }}
        onClick={handle2}
      >
   Sad
      </div>




           <div className='sleepy'
        style={{
          backgroundColor: sleepy ? 'rgb(35, 177, 0)' : '',
          color: sleepy ? 'white' : '',
        }}
        onClick={handle3}
      >
   Sleepy
      </div>


      <div className='Exicetd'
        style={{
          backgroundColor: Excited ? 'rgb(255, 0, 66)' : '',
          color: Excited ? 'white' : '',
        }}
        onClick={handle4}
      >
  Excited
      </div>




    </div>
    
  );
}

