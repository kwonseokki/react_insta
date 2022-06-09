import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import postdata from './post/postdata';



function App() {

  let [post , postData] = useState(postdata);
  let [modal, modalStatus] = useState(false);

  return (
    <div className="App">
    <header className='header'><h4>ReactApp</h4></header>

     {
  post.map(function(element, index){
    return(
      <div className='list'>
        <div className='post-header'> 
        <div></div>
        <img src={`${post[index].userImage}`}></img>
          <h6 style={{float:'right'}}>{post[index].name}</h6>

          <span>{post[index].date}</span>
          </div>
          
         
       <div className='post-picture' style={{ background: `url(${post[index].postImage})`}}>
        
       </div>
       <span className='post-likes'>{post[index].likes}❤</span>
      
      <p className='post-content'>
        {post[index].content}
      </p>
  
        </div>
      )
    })
  }

 

  {
    modal == true ?  <Modal /> : null
  }

  <footer className='footer'>
    
      <span onClick={()=> {
        modalStatus(true)
      }}>
      <img className='add-btn' src='./plus.png'></img>
      </span>
    
    </footer>
    </div>



  );
}




const Modal = () => {
  return (
    <div className="modal">
      <div style={{marginTop:'60px'}}>
      글발행 컴포넌트 입니다.
      </div>
      
      </div>
  )
}
export default App;
