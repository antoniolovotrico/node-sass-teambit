let app = new Vue ({
    el :"#app",
    data:{
        nav:[
           
            {
                logo:"./dist/img/google-logo.svg",
                title:"Teambit",
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
                titleProb:"Traditional people processes lead to disengagement and turnover.",
                imgProb:"./dist/img/hardcore.png",
                paraProb:"They are hardocore, formal and disconnected"
            },
            {
                imgProb:"./dist/img/nofeedback.png",
                paraProb:"They don't encourage regular feedback"
            },
            {
                imgProb:"./dist/img/notsafe.png",
                paraProb:"They don't make it safe to speak up"
            },
            {
                imgProb:"./dist/img/before.png"
            },
            {
                titleSolu:"It doesn't have to be like that. Teambit is a modern solution that teammates love.",
                imgSolu:"./dist/img/lightweight.png",
                paraSolu:"They are hardocore, formal and disconnected"
            },
            {
                imgSolu:"./dist/img/feedbacksuggestions.png",
                paraSolu:"They don't encourage regular feedback"
            },
            {
                imgSolu:"./dist/img/safe.png",
                paraSolu:"They don't make it safe to speak up"
            },
            {
                imgSolu:"./dist/img/after.png"
            },

        ]

                  
    }
})