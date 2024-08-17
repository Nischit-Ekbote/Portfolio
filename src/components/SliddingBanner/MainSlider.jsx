import SliddingBanner from '@/components/SliddingBanner/SliddingBanner'
export default function Page() {

    const images = [
        '/Interests/C.svg',
        '/Interests/C++.svg',
        '/Interests/GIT.svg',
        '/Interests/CSS.svg',
        '/Interests/HTML.svg',
        '/Interests/JS.svg',
        '/Interests/JAVA.svg',
        '/Interests/MONGO.svg',
        '/Interests/NEXT.svg',
        '/Interests/REACT.svg',
        '/Interests/PYTHON.svg',
        '/Interests/NODE.svg',
      ]
      
    return (
        <div style={{
            width:'100%',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'column'
        }}>
            <h1 style={{
                fontSize:'30px',
                fontWeight:'400',
                margin:'30px 20px 20px 10px',
                // width:'1440px'
            }}>My Interests</h1>
           <SliddingBanner images={images}/>
        </div>
    );
}