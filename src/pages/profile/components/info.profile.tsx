const InfoProfile = ({title, name}: { title: string, name: string }) => {
    return (
        <div className="py-2 flex items-center">
            <span className="capitalize">{title}:</span>
            <span className="text-sm ml-4 text-darkGray dark:text-white font-bold">
                {name}
            </span>
        </div>
    )
}

export default InfoProfile;