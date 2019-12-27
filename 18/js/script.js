import Post from './classes/Post'
Post.test();
const postsContainer = document.querySelector('.posts-list')
const posts = [
  new Post('some title', 'some text'),
  new Post('some title 1', 'some text 1'),
  new Post('some title 2', 'some text 2')
]
postsContainer.innerHTML = posts.reduce((html, post) => html + post.renderListItem(), '')


const obj = {
  name: 'fff',
  age: 45
};
/*Object.defineProperty(obj, 'age', {
  value: ''
})*/

const freezeObject = Object.freeze({

})
Object.isFrozen(freezeObject)
