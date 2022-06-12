
const Feed = ({post, liked, setlike, likeStatus, setIndex, modalStatus, feedIdx}) => {
      
          return(
              
            <div className='list'>
              <div className='post-header'> 
            
              <img src={`${post[feedIdx].userImage}`}></img>
                <h6 style={{float:'right'}}>{post[feedIdx].name}</h6>
                <span>{post[feedIdx].date}</span>
                </div>
                
               
             <div className='post-picture' style={{ background: `url(${post[feedIdx].postImage})`}}>
              
             </div>
             <span className='post-likes'>
      
               {post[feedIdx].likes}<i onClick={()=>{
                 if(liked == false) {
                 setlike(post[feedIdx].likes++);
                 likeStatus(true);
                } else {
                  setlike(post[feedIdx].likes--);
                  likeStatus(false);
                }
               }} className="fi fi-rs-heart"></i>
      
               {/* 댓글모달 */}
               <i onClick={()=>{
                 setIndex(feedIdx);
                 modalStatus(true);
               }} class="fi fi-rs-comments"></i>
               </span>
      
            
            <p className='post-content'>
             {post[feedIdx].content}
            </p>
        
              </div>
            )
}

const Post = ({postDepth}) => {
    const PostStep = ()=> {
        if(postDepth == 1) {
            return (
                <div>사진업로드 페이지</div>
            )
        } 
        else if(postDepth == 2) {
            return (
                <div>글발행 페이지</div>
            )
        }
    }
    return (
        <div className='contentsBox'>
            <PostStep></PostStep>
        </div>
    )
}

export { Feed, Post }