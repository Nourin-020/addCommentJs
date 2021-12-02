// Click post Button
document.getElementById('button-post').addEventListener('click',function(){
    const textArea= document.getElementById('text-area');
    // input text from textarea
    const p = document.createElement('p');
p.innerText=textArea.value;
// post comment
const postComment=document.getElementById('post-text');
postComment.appendChild(p);
textArea.value='';

})

