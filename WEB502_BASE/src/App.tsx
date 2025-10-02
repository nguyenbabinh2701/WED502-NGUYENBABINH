import { Toaster } from 'react-hot-toast'
import { Button } from './components/Button';

function App() {

  return (
    <>
      <Toaster/>
      <div style={{ margin: '24px' }}>
        <Button onClick={() => alert('Bạn đã nhấn nút!')}>
          Nút đổi màu ngẫu nhiên
        </Button>
      </div>
    </>
  )
}

export default App
