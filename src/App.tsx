import './App.css'
import Form from './components/Form';

function App() {
  return (
    <div 
    className='max-w-lg mx-auto p-2 h-screen flex flex-col justify-center'
    >
      <h1
      className='text-3xl font-semibold'
      >
        Get in contact
      </h1>
      <Form />
    </div>
  )
}

export default App
