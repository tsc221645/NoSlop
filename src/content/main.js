import {getRedditPosts} from "../sites/reddit.js"
import {analyzePost} from "../detectors/scoring.js"
import {applyFilter} from "../actions.js"

function scanPage(){
    const posts = getRedditPosts();
    for (const post of posts){
        const result = analyzePost(post);
        if(result.score >= 60){
            applyFilter(post,result);
        }
    }
}

scanPage();