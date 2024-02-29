import classes from './Slide.module.css'
const Slide  = props => {
    return <div className={classes.slide}>
        <img  className={classes.slideImage} src={props.src}/>
        <h2 className={classes.title}>{props.title}</h2>
        <p className={classes.description}>{props.description}</p>
    </div>
}

export default Slide;