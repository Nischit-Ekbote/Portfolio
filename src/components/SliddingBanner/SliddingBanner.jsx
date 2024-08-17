import Image from 'next/image';
import styles from './SliddingBanner.module.css';

const SliddingBanner = ({ images, speed = 7000 }) => {
  return (
    <div className={styles.inner}>
      <div className={styles.wrapper}>
        {[1, 2, 3].map((sectionKey) => (
          <section key={sectionKey} className={styles.section} style={{ "--speed": `${speed}ms` }}>
            {images.map((image, index) => (
              <div key={index} className={styles.image}>
                <Image
                  src={image}
                  alt={`Sliding image ${index + 1}`}
                  width={60}  
                  height={60} 
                  objectFit="cover"
                />
              </div>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
};

export default SliddingBanner;