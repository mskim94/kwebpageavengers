import React from 'react';
import { Link } from 'react-router';

var BodyGallery = React.createClass ({
    getInitialState() {
        return {
        };
     },
    render: function () {
        var categoryData = [{name:"뒷풀이",num:12},
                            {name:"테스트",num:1},
                            {name:"Wallpaper",num:2},
                            {name:"스터디",num:3},
                            {name:"일상",num:4},
                            {name:"2009겨울MT",num:7},
                            {name:"회의",num:3},
                            {name:"2010봄MT",num:2},
                            {name:"그냥",num:2},
                            {name:"먹는거",num:3},
                            {name:"여행",num:1},
                            {name:"야유회",num:6},
                            {name:"2011겨울MT",num:53},
                            {name:"2011봄MT",num:23},
                            {name:"2012겨울MT",num:21},
                            {name:"2012봄MT",num:11},
                            {name:"종강총회",num:5},
                            {name:"2013겨울MT",num:8},
                            {name:"2013여름MT",num:2},
                            {name:"2013년고학번MT",num:5},
                            {name:"2014년 KWEB봄소풍",num:24},
                            {name:"2014년 화합의날",num:21}];
        /*위 카테고리에 추가해서 쓰면됨.*/

        return(
            <div id="body_gallery" className="container">
                <div className="body_gallery_main row">
                    <div id="body_gallery_category" className="sidebar col-sm-3">
                        <ul className="list-group">
                            <li className="postreport list-group-item"><Link href="#">Total</Link></li>
                        </ul>
                        <ul className="list-group">
                            {categoryData.map((category, i) => {
                                return(
                                    <li className="postreport list-group-item">
                                        <Link href="#">{category.name}</Link><span className="badge">{category.num}</span>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div id="body_gallery_content" className="col-sm-9 container">
                        <div id="body_gallery_name" className="gallery_title row ">
                            <p className="text-center">사진첩</p>
                        </div>
                        <div className="gallery row">
                            <div className="gallery_sajin col-lg-3 col-md-3 col-sm-4 col-xs-6">
                                <Link href="#" className="thumbnail">
                                    <div className="sajin_image">
                                        <img src={"../static/data/gallery_temp/1.jpg"} alt="wrong" className="img img-responsive full-width"/>
                                    </div>
                                    <div className="sajin_title text-center">
                                        아
                                    </div>
                                </Link>
                            </div>
                            <div className="gallery_sajin col-lg-3 col-md-3 col-sm-4 col-xs-6">
                                <Link href="#" className="thumbnail">
                                    <div className="sajin_image">
                                        <img src={"../static/data/gallery_temp/2.jpg"} alt="wrong" className="img img-responsive full-width"/>
                                    </div>
                                    <div className="sajin_title text-center">
                                    인생
                                    </div>
                                </Link>
                            </div>
                            <div className="gallery_sajin col-lg-3 col-md-3 col-sm-4 col-xs-6">
                                <Link href="#" className="thumbnail">
                                    <div className="sajin_image">
                                        <img src={"../static/data/gallery_temp/3.jpg"} alt="wrong" className="img img-responsive full-width"/>
                                    </div>
                                    <div className="sajin_title text-center">
                                        망했다
                                    </div>
                                </Link>
                            </div>
                            <div className="gallery_sajin col-lg-3 col-md-3 col-sm-4 col-xs-6">
                                <Link href="#" className="thumbnail">
                                    <div className="sajin_image">
                                        <img src={"../static/data/gallery_temp/5.jpg"} alt="wrong" className="img img-responsive full-width"/>
                                    </div>
                                    <div className="sajin_title text-center">
                                        Ah
                                    </div>
                                </Link>
                            </div>
                            <div className="gallery_sajin col-lg-3 col-md-3 col-sm-4 col-xs-6">
                                <Link href="#" className="thumbnail">
                                    <div className="sajin_image">
                                        <img src={"../static/data/gallery_temp/1.jpg"} alt="wrong" className="img img-responsive full-width"/>
                                    </div>
                                    <div className="sajin_title text-center">
                                        Life
                                    </div>
                                </Link>
                            </div>
                            <div className="gallery_sajin col-lg-3 col-md-3 col-sm-4 col-xs-6">
                                <Link href="#" className="thumbnail">
                                    <div className="sajin_image">
                                        <img src={"../static/data/gallery_temp/1.jpg"} alt="wrong" className="img img-responsive full-width"/>
                                    </div>
                                    <div className="sajin_title text-center">
                                        Is
                                    </div>
                                </Link>
                            </div>
                            <div className="gallery_sajin col-lg-3 col-md-3 col-sm-4 col-xs-6">
                                <Link href="#" className="thumbnail">
                                    <div className="sajin_image">
                                        <img src={"../static/data/gallery_temp/3.jpg"} alt="wrong" className="img img-responsive full-width"/>
                                    </div>
                                    <div className="sajin_title text-center">
                                        Doomed
                                    </div>
                                </Link>
                            </div>
                            <div className="gallery_sajin col-lg-3 col-md-3 col-sm-4 col-xs-6">
                                <Link href="#" className="thumbnail text-center">
                                    <div className="sajin_image">
                                        <img src={"../static/data/gallery_temp/2.jpg"} alt="wrong" className="img img-responsive full-width"/>
                                    </div>
                                    <div className="sajin_title">
                                        망했따
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

export default BodyGallery;