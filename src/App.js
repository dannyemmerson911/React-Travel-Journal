import data from './data'
import Header from './components/Header'
import Entry from './components/Entry'

function App(){
  
  const entries = data.map((entry) => {
    return (
      <Entry
        key = {entry.id}
        {...entry}
      />
    )
  })

  return (
    <div className='appContainer'>
      <Header />
      {entries}
    </div>
  )
}

export default App