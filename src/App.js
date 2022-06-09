import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import postdata from './post/postdata';




function App() {

  let [post , postData] = useState(postdata);
  let [likes, setlike] = useState('0');
  let [liked, likeStatus] = useState(false);
  let [modal, modalStatus] = useState(false);
  let [postI, setIndex] = useState(0);


  return (
    <div className="App">
    <header className='header'><h4>ReactApp</h4></header>

     {
  post.map(function(element, index){
    return(
      <div className='list'>
        <div className='post-header'> 
       
        <img src={`${post[index].userImage}`}></img>
          <h6 style={{float:'right'}}>{post[index].name}</h6>

          <span>{post[index].date}</span>
          </div>
          
         
       <div className='post-picture' style={{ background: `url(${post[index].postImage})`}}>
        
       </div>
       <span className='post-likes'>

         {post[index].likes}<i onClick={()=>{
           if(liked == false) {
           setlike(post[index].likes++);
           likeStatus(true);
          } else {
            setlike(post[index].likes--);
            likeStatus(false);
          }
         }} class="fi fi-rs-heart"></i>

         {/* 댓글모달 */}
         <i onClick={()=>{
           setIndex(index);
           modalStatus(true);
         }} class="fi fi-rs-comments"></i>
         </span>

      
      <p className='post-content'>
       {post[index].content}
      </p>
  
        </div>
      )
    })
  }

 

  {
    modal == true ?  <Modal post={post} postI={postI} postData={postData}  /> : null
  }

  <footer className='footer'>
    
      <span>
        <i class="fi fi-rs-plus"></i>
    
      </span>
    
    </footer>
    </div>



  );
}




const Modal = (props) => {
  let copy = [...props.post];
  let [comment, commentAdd] = useState(copy);


  
  return (
 
    <div className="modal">
      <div style={{marginTop:'60px'}}>
      <div className='post-header'> 
     
       <img src={`${comment[props.postI].userImage}`}></img>
         <h6 style={{float:'right'}}>{comment[props.postI].name}</h6>
        
         <span>{comment[props.postI].date}</span>
         </div>
      <p className='comment-main'>
      {comment[props.postI].content} 
      </p>
     
      {
        
        comment[props.postI].comment.map((comments, idx)=>{
         
          return (
          
            <p className='comment-text'>
        {idx < 3 ?  <span><img src={comment[idx].userImage}></img></span> : <span><img src={comment[0].defaultImage}></img></span>}  
     {idx < 3 ?  <span>{comment[idx].name}</span> : <span>user</span>}    
           <span>{comments}</span> 
              </p>
          )
        })

        
      }
      <div className='comment-up'>
        
        <input id='comment-data'></input><span>
          <i onClick={()=>{
          let commentData = document.getElementById("comment-data").value;
          let copy2 = [...props.post];
          copy2[props.postI].comment.push(commentData);
          commentAdd(copy2);
          document.getElementById("comment-data").value="";
          
          }} class="fi fi-rs-angle-circle-up"></i>
          </span>
       </div>
    
      </div>
      
      </div>
  )
}
export default App;
