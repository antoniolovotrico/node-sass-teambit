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
        ],
        platform: [
            {
                tableImg:"./dist/img/employee-feedback.jpg",
                title:"Feedback to help teammates improve",
                overview:"Empawer your teammates to know in real time what they are doing well and what they need to improve.",
                picture:"./dist/img/communication.jpg"
            },
            {
                tableImg:"./dist/img/employee-survey.jpg",
                title:"Surveys to help the team be better",
                overview:"Get real-time insights into your team with research-backed, lightweight and regular surveys.",
                picture:"./dist/img/insights.jpg"
            },
            {
                tableImg:"./dist/img/performance-review.jpg",
                title:"Reviews to help teammates get a fair evaluation",
                overview:"Make better compensation and promotion decision with objective and quick performance reviews.",
                picture:"./dist/img/review.jpg"
            },
            {
                tableImg:"./dist/img/employee-recognition.jpg",
                title:"Praise to help teammates feel valued",
                overview:"Make it a habit to recognize and praise people who do great work.",
                picture:"./dist/img/recognition.jpg"
            },
        ],
        started: [
            {
                title:"See Teambit for yourself. Get started in seconds 🎉",
                overview:"We are experiencing what Galuup calls 'an employee engagement crisis'. Just one-third of people at work are engaged.                                                       To improve performance and engagement companies rely on the same principles as industrial agefactories. But all those annual performance reviws and hundred-question surveys don't work anymore. People want regular feedback. Leaders who don't embrace this change end up with misaligned, disengaged and dwindling team.                                                We designed Teambit to change that. It empowers teams to make feedback a daily habit. Everybody knows what they are doing well and what they need to improve, leading to better performing, engaged and happier teams.                         We are on a mission to make worklife exciting. Come join us.",
                imgFound1:"./dist/img/alex.png",
                imgFound2:"./dist/img/bohdan.png",
                names:"Alex and Bohdan",
                jobs:"Co-Founders at Teambit",
                btnText1:"Sign up with Google",
                btnIcon1:"./dist/img/google-logo.svg",
                btnText2:"Sign up with Slack",
                btnIcon2:"./dist/img/slack-logo.svg",
                email:"or use your email address"
            }
        ]

    }
})