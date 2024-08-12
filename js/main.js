// Comment system function
function commentSystem() {
    return {
        comments: [],
        newComment: '',
        addComment() {
            if (this.newComment.trim() !== '') {
                this.comments.push({
                    id: Date.now(),
                    text: this.newComment,
                    author: 'Anonymous',
                    date: new Date().toLocaleString()
                });
                this.newComment = '';
            }
        }
    }
}

// Search functionality
function searchPosts() {
    return {
        posts: [
            { 
                id: 1, 
                title: 'Getting Started with Web Development', 
                excerpt: 'Learn the basics of HTML, CSS, and JavaScript to kick-start your web development journey.', 
                image: 'images/web-dev.svg', 
                url: 'posts/post1.html' 
            },
            { 
                id: 2, 
                title: 'The Power of CSS Flexbox', 
                excerpt: 'Discover how CSS Flexbox can simplify your layout designs and improve responsiveness.', 
                image: 'images/flexbox.svg', 
                url: 'posts/post2.html' 
            },
            { 
                id: 3, 
                title: 'JavaScript ES6 Features You Should Know', 
                excerpt: 'Explore the essential ES6 features that every JavaScript developer should be familiar with.', 
                image: 'images/js-es6.svg', 
                url: 'posts/post3.html' 
            },
        ],
        searchQuery: '',
        filteredPosts: [],
        filterPosts() {
            this.filteredPosts = this.posts.filter(post => 
                post.title.toLowerCase().includes(this.searchQuery.toLowerCase()) || 
                post.excerpt.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
        },
        init() {
            this.filteredPosts = this.posts;
        }
    }
}
