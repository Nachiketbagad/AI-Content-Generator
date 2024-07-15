export default [
    {
        name:'Blog Title',
        desc:'An AI tool that generates blog title depends on your blog information',
        category:'Blog',
        icon:'https://cdn-icons-png.flaticon.com/128/4186/4186534.png',
        aiPrompt:'Give me 5 blog topic idea in bullet wise only based on given niche & outline topic and give me result in',
        slug:'generate-blog-title',
        form: [
            {
                label:'Enter your blog niche',
                field:'input',
                name:'niche',
                required:true
            },
            {
                label:'Enter blog outline',
                field:'textarea',
                name:'outline',
            }
        ]

    },
    {
        name:'Blog Content',
        desc:'An AI tool that serves as your personal blog post title information',
        category:'Blog',
        icon:'https://cdn-icons-png.flaticon.com/128/9360/9360864.png',
        aiPrompt:'Generate Blog Content based on topic and outline information',
        slug:'blog-content-generation',
        form: [
            {
                label:'Enter your blog topic',
                field:'input',
                name:'topic',
                required:true
            },
            {
                label:'Enter blog outline here',
                field:'textarea',
                name:'outline',
            }
        ]
    },
    {
        name:'Blog Topic Ideas',
        desc:'An AI tool that serves as your personal blog post title ideas',
        category:'Blog',
        icon:'https://cdn-icons-png.flaticon.com/128/1253/1253804.png',
        aiPrompt:'Generate top 5 Blog Topic Ideas in bullet point only',
        slug:'blog-toic-idea',
        form: [
            {
                label:'Enter your Niche',
                field:'input',
                name:'niche',
                required:true
            },
            
        ]
    },
    {
        name:'Youtube SEO Title',
        desc:'An AI tool that serves as your personal blog post title information',
        category:'Youtube Tools',
        icon:'https://cdn-icons-png.flaticon.com/128/15302/15302398.png',
        aiPrompt:'Give me BEST SEO optimized high ranked 5 title ideas',
        slug:'youtube-seo-title',
        form: [
            {
                label:'Enter your youtube video topic keywords',
                field:'input',
                name:'keywords',
                required:true
            },
            {
                label:'Enter youtube description outline here',
                field:'textarea',
                name:'outline',
            }
        ]
    },
    {
        name:'Youtube Description',
        desc:'An AI tool that serves as your personal blog post title information',
        category:'Youtube Tools',
        icon:'https://cdn-icons-png.flaticon.com/128/3938/3938026.png',
        aiPrompt:'Generate Youtube Description with emoji under 4-5 sentences',
        slug:'youtube-description',
        form: [
            {
                label:'Enter your blog topic/title',
                field:'input',
                name:'topic',
                required:true
            },
            {
                label:'Enter youtube description outline here',
                field:'textarea',
                name:'outline',
            }
        ]
    },
    {
        name:'Youtube Tags',
        desc:'An AI tool that serves as your personal blog post title information',
        category:'Youtube Tools',
        icon:'https://cdn-icons-png.flaticon.com/128/10884/10884883.png',
        aiPrompt:'Generate 10 Youtube tags in bullet points based on the information',
        slug:'youtube-tag',
        form: [
            {
                label:'Enter your youtube title',
                field:'input',
                name:'title',
                required:true
            },
            {
                label:'Enter youtube video outline here',
                field:'textarea',
                name:'outline',
            }
        ]
    },

    
]