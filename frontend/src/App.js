import React from 'react'
import axios from 'axios'
import { Photos } from './components/Photos'
import MessageAndLoader from './components/MessageAndLoader'
class App extends React.Component {

  state = {
       albumId:null,
       photos:[],
       isLoading: false,
       message:''
  }
   changeAlbumId=(e)=>{
    e.preventDefault()
    this.setState(()=>({
      albumId: e.target.value,
      photos:[],
      message:''
    }))
  }
   fetchPhotos=async (e)=> {
    e.preventDefault() 
     this.setState({isLoading:true})  
      const{data}= await axios.get(`http://127.0.0.1:5000/api/v1/album/${this.state.albumId}`);
      return(data.status === 200)?this.setState(({photos: data.photos, isLoading:false})):this.setState(({message:data.message, isLoading:false}))
  }
render() {
  
  const {photos, albumId, message, isLoading} = this.state
  return (<>
    <header>
      <h1 className="logo">ZeroTo100</h1>
      <div className="search-box">         
        <input placeholder="Album ID" onChange={this.changeAlbumId} name="album"/>
        <button onClick={this.fetchPhotos} disabled={!albumId}>Get Album Photos By Id</button>
      </div>
    </header>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#00cba9" fillOpacity="1" d="M0,32L80,64C160,96,320,160,480,154.7C640,149,800,75,960,64C1120,53,1280,107,1360,133.3L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
        </svg>
    <main> 
      <MessageAndLoader isLoading={isLoading} message={message}/>
      <Photos photos={photos}/>
    </main>
    <footer>
      
    </footer>
  </>
);

}
} 



export default App;
