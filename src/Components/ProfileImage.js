//component
//css
// import './profileimage.css';
const ProfileImage = (props) => {
    return (
        <div className={props.profileImageClass}>
            <div className={props.profileImageSrcClass}>
                {props.src === undefined || props.src === '' ?
                    props.href === undefined ?
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs-bsLd6mUlSjhP9DNiVnSa4QfLCa4u9kKbg&usqp=CAU"></img>
                        :
                        <a href={props.href}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs-bsLd6mUlSjhP9DNiVnSa4QfLCa4u9kKbg&usqp=CAU"></img>
                        </a>
                    :
                    props.href === undefined ?
                        <img src={props.src}></img>
                        :
                        <a href={props.href}>
                            <img src={props.src}></img>
                        </a>
                }
            </div>
            {props.children}
        </div>
    )
}

export default ProfileImage;
                            
                            