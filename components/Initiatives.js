import React from "react";
import styles from './Initiatives.module.css'

export default function Initiatives() {
  return (
    <div id={"initiatives"}>
      <section class="text-black mt-12">
        <div class="max-w-screen-xl px-4 py-15 mx-auto sm:px-6 lg:px-8">
          <div class="max-w-lg mx-auto text-center">
           
            <h1 className="mb-16 pb-2 font-bold sm:text-xl text-2xl md:text-3xl text-center">
              OUR
              <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
                INITIATIVES
              </span>
            </h1>
          </div>

          <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3">
            <div className={styles.boxBorder+" block p-8 transition shadow-xl rounded-xl hover:shadow-pink-500/10 hover:border-pink-500/10"}>
             
              <img src="/assets/ariia-logo.png" alt=" Ariia img" />
              <h3 className="mt-4 text-xl font-bold text-center text-indblue">
                Atal Ranking of Institutions on Innovation Achievements(ARIIA)
              </h3>
              <a href="https://ariia.gov.in/" target="_blank">
              <img title="Read More" className={styles.plusImage} src="/assets/add.png" alt="img" />
              </a>
            </div>

            <div className={styles.boxBorder+" block p-8 transition shadow-xl rounded-xl hover:shadow-pink-500/10 hover:border-pink-500/10"}>
              <img src="/assets/sih-logo.png" alt=" SIH img" />

              <h3 className="mt-4 text-xl font-bold text-center text-indblue">
                Smart India Hackathon
              </h3>
              <a href="https://sih.gov.in/" target="_blank">
              <img title="Read More" className={styles.plusImage} src="/assets/add.png" alt="img" />
              </a>
            </div>

            <div className={styles.boxBorder+" block p-8 transition shadow-xl rounded-xl hover:shadow-pink-500/10 hover:border-pink-500/10"}>
              <img src="/assets/iic-logo.png" alt="IIC img" />

              <h3 className="mt-4 text-xl text-center font-bold text-indblue">
                Institution’s Innovation Council (IIC)
              </h3>
              <a href="https://iic.mic.gov.in/" target="_blank">
              <img title="Read More" className={styles.plusImage} src="/assets/add.png" alt="img" />
              </a>
            </div>

            <div className={styles.boxBorder+" block p-8 transition shadow-xl rounded-xl hover:shadow-pink-500/10 hover:border-pink-500/10"}>
              <img src="/assets/kapila-logo.png" alt="img" />

              <h3 className="mt-4 text-xl text-center font-bold text-indblue">
                Kalam Program for IP Literacy and Awareness
              </h3>
              <a href="https://kapila.mic.gov.in/" target="_blank">
              <img title="Read More" className={styles.plusImage} src="/assets/add.png" alt="img" />
              </a>
              
            </div>

            <div className={styles.boxBorder+" block p-8 transition shadow-xl rounded-xl hover:shadow-pink-500/10 hover:border-pink-500/10"}>
              <img src="/assets/yukti-logo.png" alt="img" />

              <h3 className="mt-4 text-xl font-bold text-center text-indblue">YUKTI</h3>
              <a href="#" target="_blank">
              <img title="Read More" className={styles.plusImage} src="/assets/add.png" alt="img" />
              </a>
            </div>

            <div className={styles.boxBorder+" block p-8 transition shadow-xl rounded-xl hover:shadow-pink-500/10 hover:border-pink-500/10"}>
              <img src="/assets/nisp-logo.png" alt="img" />

              <h3 className="mt-4 text-xl text-center font-bold text-indblue">
                National Innovation and Startup Policy
              </h3>
              <a href="https://nisp.mic.gov.in/" target="_blank">
              <img title="Read More" className={styles.plusImage} src="/assets/add.png" alt="img" />
              </a>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
