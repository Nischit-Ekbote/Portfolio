import style from './my_projects.module.css'
import Page from './singleProject/SingleProject';


const projects = [{
    title: 'Quil-Quest',
    desc: 'dfgdfg',
    tools: 'Next.js MongoDb',
    img: '/project_thumbnails/Quil_quest.jpg',
    year: '2024',
    link: 'https://quil-quest.vercel.app'
},
{
    title: 'Quil-Quest',
    desc: 'dfgdfg',
    tools: 'Next.js MongoDb',
    img: '/project_thumbnails/Quil_quest.jpg',
    year: '2024',
    link: 'https://quil-quest.vercel.app'
}
];

export default function my_projects() {

    const list = projects.map((project , i) => (
        <Page project={project} key={i} i={i}/>
    ));
    
    return (
        <div className={style.container}>
            <div>
                <h1 style={{
                    fontSize:'70px',
                    fontWeight:'400',
                    paddingTop:'80px',
                    paddingBottom:'30px',
                    borderBottom:'1px solid #ffffe332'
                }}>My Projects</h1>
                {list}

            </div>
        </div>
    );
}