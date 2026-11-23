const followBtn = document.getElementById('follow-btn');
const followerCount = document.getElementById('follower-count');
let count = 120;

followBtn.addEventListener('click', () => {
  
  followBtn.classList.toggle('following');

 
  if (followBtn.classList.contains('following')) {
    followBtn.textContent = 'Following';
    count++;
  } else {
    followBtn.textContent = 'Follow';
    count--;
  }

  followerCount.textContent = count;
});