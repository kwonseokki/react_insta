import './App.css';
import { useState } from 'react';
import postdata from './post/postdata';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import { Feed, Post } from './pages/Feed.js';
import { Header } from './css/component.js';


function App() {
// states
  let [post , postData] = useState(postdata);
  let [likes, setlike] = useState('0');
  let [liked, likeStatus] = useState(false);
  let [modal, modalStatus] = useState(false);
  let [postI, setIndex] = useState(0);
  let [postDepth, setPostDepth] = useState(0);
  
  
  // userState 0:메인 / 1:사진올리기 / 2:글발행 / 0:
 

  
// 변수들
  let navigator = useNavigate();

  return (
    <div className="App">
   
    {postDepth == 0 ? <Header justify="space-between"> <h4 className='header-text'>seokstagram</h4>
        <div className='header-icon'>
      <i class="fi fi-rs-user"></i>
      <i class="fi fi-rs-comment"></i>
      </div></Header> : null}

    {postDepth == 1 ? <Header justify="space-around"><span onClick={()=>{setPostDepth(--postDepth); navigator('/')}}>이전</span><span>사진업로드</span><span onClick={()=>{setPostDepth(++postDepth)}}>다음</span></Header> : null } 

    {postDepth == 2 ? <Header justify="space-around"><span onClick={()=>{setPostDepth(--postDepth);}}>이전</span><span>글발행</span><span onClick={()=>{setPostDepth(postDepth=0); navigator('/')}}>완료</span></Header> : null}  
     

    {/* post컴포넌트 */}
    <Routes>
      <Route path='/' element={<div>
        {
      post.map((element, index)=>{
        return (
          <Feed post={post}
          postData={postData}
          likes={likes}
          setlike={setlike}
          liked={liked}
          likeStatus={likeStatus}
          modal={modal}
          modalStatus={modalStatus}
          postI={postI}
          setIndex={setIndex}
          feedIdx={index}

    ></Feed>
        )
      })
    }
      </div>}>
        
      </Route>

      {/* 글발행 컴포넌트 */}
      <Route path='/post' element={<Post postDepth={postDepth}/>}>
      
        
      </Route>
    </Routes>
   
   

 

  {
    modal == true ?  <Modal post={post} postI={postI} postData={postData}  /> : null
  }

  <footer className='footer'>
    
      <span onClick={()=> {
        setPostDepth(++postDepth);
        navigator('/post');
        }}>
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
