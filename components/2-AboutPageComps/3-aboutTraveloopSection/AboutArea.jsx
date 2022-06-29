import styles from "./aboutArea.module.scss"

const AboutArea = () => {
  return (
    <>
      <div className={styles.aboutAreaWrapper}>
        <h2 className={styles.title}>About Traveloop</h2>
        <p className={styles.copy1}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget mauris
          montes, dolor ac accumsan et a sit. Nunc risus lobortis vitae purus
          habitasse odio.
          <span className={styles.spanMakeBold}>
            Lorem odio eu, porta commodo.
          </span>
          Semper varius at cursus viverra tellus consequat, augue velit. Diam et
          ipsum vitae fusce mauris ornare. Suspendisse aenean odio in amet mi
          massa nibh. Risus arcu quisque nulla fermentum et ullamcorper. Nulla
          magna feugiat libero ac tellus nulla adipiscing eu.
        </p>
        <p className={styles.copy2}>
          <span className={styles.spanMakeBold}>
            Tortor mi, sociis varius egestas. Ipsum morbi senectus consequat,
            mollis.
          </span>
          Lacus sem varius volutpat et laoreet at. Aliquet nibh cras felis id
          risus facilisi. Mi in condimentum eget amet semper sed elementum,
          pellentesque ut. Aenean cum amet enim, eu morbi enim, magna.
          <span className={styles.spanMakeBold}>
            Orci, incidunt sit pretium mi convallis netus vel sagittis, in.
          </span>
          Auctor convallis mattis etiam egestas etiam ac. Id turpis et elementum
          mauris gravida amet.
        </p>
      </div>
    </>
  )
}

export default AboutArea
