let app = new Vue ({
    el :"#app",
    data:{
        nav:[
           
            {
                logo:"./dist/img/logo.svg",
                voice:"solution"
            },
            {
                voice:"pricing"
            },
            {
                voice:"blog"
            },
            {
                voice:"sign in",
                btnText:"Sign up",
                btnIcon:"./dist/img/google-logo.svg"
            }
        ],
        hero: [
            {
                title:"Understand, recognize and develop your people",
                overview:"Teambit helps teams create a high performing culture with regular feedback.",
                btnText1:"Sign up with Google",
                btnIcon1:"./dist/img/google-logo.svg",
                btnText2:"Sign up with Slack",
                btnIcon2:"./dist/img/slack-logo.svg",
                email:"or use your email address",
                img:"./dist/img/illustration-main.jpg"
            }
        ],
        organization: [
            {
                problem: [
                    {
                        title:"Traditional people processes lead to disengagement and turnover.",
                        img:"./dist/img/hardcore.png",
                        para:"They are hardocore, formal and disconnected"
                    },
                    {
                        img:"./dist/img/nofeedback.png",
                        para:"They don't encourage regular feedback"
                    },
                    {
                        img:"./dist/img/notsafe.png",
                        para:"They don't make it safe to speak up"
                    }
                ],
            },
            {
                solution: [
                    {
                        title:"It doesn't have to be like that. Teambit is a modern tion that teammates love.",
                        img:"./dist/img/lightweight.png",
                        para:"It's lightweight fun and interconnected",
                        lastTitle:"Here is how it works"
                    },
                    {
                        img:"./dist/img/feedbacksuggestions.png",
                        para:"It encourages regular feedback with contextual request"
                    },
                    {
                        img:"./dist/img/safe.png",
                        para:"it creates a safe environment for dialog"
                    }
                ],
            },
            {
                pictures:[
                    {
                        problemPic:"./dist/img/before.png"
                    },
                    {
                        solutionPic:"./dist/img/after.png"
                    },
                ]    
            }
        ]              
    }
})