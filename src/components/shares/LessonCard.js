import React from 'react'
import logoImg from '../../assets/static/logo-img.png';
import {Link} from "react-router-dom";

const LessonCard = ({
                        imgWidth,
                        imgHeight,
                        imgMargin,
                        title,
                        description,
                        grade,
                        subject,
                        uploader,
                        headerImage,
                        id
                    }) => {
    return (
        <div className={``}>
            <Link to={`/lessonDetail/${id}`}>
                <img
                    src={headerImage ? `http://127.0.0.1:8000/storage/header_image/${headerImage}` : logoImg}
                    className={`${imgWidth} ${imgHeight} ${imgMargin} object-cover rounded-md`} alt="headerImage"/>
                <div>
                    <span className={`text-[12px] leading-[18px] font-normal text-white`}>
                        {grade}/{subject}
                    </span>
                    <h2 className={`text-gradient text-[18px] leading-[20px] font-bold my-3`}>
                        {title}
                    </h2>

                    <p
                        className={`text-white text-[14px] text-justify leading-[21px] font-normal`}
                    >
                        {description}
                    </p>
                    <div className={`flex flex-row justify-between mt-5`}>
                    <span className={`text-white text-[12px] leading-[18px] font-normal`}>
                        {uploader}
                    </span>
                        <span className={`text-white text-[12px] leading-[18px] font-normal`}>
                            Learn More <i className="fa fa-arrow-right-long"></i>
                        </span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default LessonCard