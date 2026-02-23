const Anchor = ({path , link}) => {
    return <a href={path} className={`text-black font-semibold top-5 absolute right-5 mr-5 cursor-pointer hover:text-amber-600`}>{link}</a>
}

export default Anchor;