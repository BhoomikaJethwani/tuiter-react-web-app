import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList/index.js"


function exploreComponent() {

    $('#wd-explore').append(`
        
        <div class="container ">
            <div class="row" >

                <!--    Navigation column-->
                <div class="col-2">
                    ${NavigationSidebar()}
                </div>

                <!--    Explore column-->
                <div class="col-6">

                    <div class="row">

                        <div class="wd-search-bar col-11">
                            <input placeholder="Search Tuiter" type="text">
                            <i class="fas fa-search fa-1x "></i>
                        </div>

                        <div class="col-1 wd-settings-button">
                            <a href="explore-settings.html">
                                <i class="fa fa-cog fa-1x "> </i>
                            </a>
                        </div>

                    </div>


                    <ul class="wd-nav-tabs row">
                        <li class="col-1">
                            <div class="wd-selected ">
                                For you
                            </div>
                        </li>
                        <li class="col-1">Trending</li>
                        <li class="col-2">COVID-19</li>
                        <li class="col-2">News</li>
                        <li class="col-2">Sports</li>
                        <li class="col-2">Entertainment</li>

                    </ul>

                    <!--        Tuit Type C-->
                    <div>
                        <div class="wd-topic-no-img">Trending in Economy</div>
                        <div class="wd-content">Boost in sale of crypto currency</div>
                        <h3>12.3k tuits</h3>
                    </div>
                    <!--  Horizontal Break-->
                    <hr/>

                    <!--        Tuit Type D-->
                    <div class="wd-tuit-with-img">
                        <div class="wd-tuit-text">
                            <div class="wd-wrapper">
                                <div class="wd-author">  Hindustan Times    </div>
                                <div class = "wd-time">  .   Friday </div>
                            </div>

                            <div class="wd-content">
                                CNN's Cuommo connundrum: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of system. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </div>


                        </div>
                        <div>
                            <img src="https://images.unsplash.com/photo-1664237721962-f9cd8782f4d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OTR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60" class="wd-tuit-img"/>
                        </div>
                    </div>
                    <!--  Horizontal Break-->
                    <hr/>

                    <!--        Tuit Type E-->
                    <div class="wd-tuit-with-img">
                        <div class="wd-tuit-text">
                            <div class="wd-wrapper">
                                <div class="wd-topic">  COVID-19    </div>
                                <div class = "wd-time">  .   Live </div>
                            </div>

                            <div class="wd-content">
                                Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC: At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
                            </div>



                        </div>
                        <div>
                            <img src="https://images.unsplash.com/photo-1664465919763-200e420475cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60" class="wd-tuit-img"/>
                        </div>
                    </div>
                    <!--  Horizontal Break-->
                    <hr/>


                    <!--        Tuit Type C-->
                    <div>
                        <div class="wd-topic-no-img">Trending in Science</div>
                        <div class="wd-content">Starship to be launched to the space</div>
                        <h3>55.3k tuits</h3>
                    </div>
                    <!--  Horizontal Break-->
                    <hr/>

                    <!--        Tuit Type E-->
                    <div class="wd-tuit-with-img">
                        <div class="wd-tuit-text">
                            <div class="wd-wrapper">
                                <div class="wd-topic">  Technology    </div>
                                <div class = "wd-time">  .   Live </div>
                            </div>

                            <div class="wd-content">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.  In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty
                            </div>



                        </div>
                        <div>
                            <img src="https://images.unsplash.com/photo-1661961112134-fbce0fdf3d99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NDh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60" class="wd-tuit-img"/>
                        </div>
                    </div>
                    <!--  Horizontal Break-->
                    <hr/>

                    <!--        Tuit Type D-->
                    <div class="wd-tuit-with-img">
                        <div class="wd-tuit-text">
                            <div class="wd-wrapper">
                                <div class="wd-author">  The New York Times    </div>
                                <div class = "wd-time">  .   Yesterday </div>
                            </div>

                            <div class="wd-content">
                                1914 translation by H. Rackham :

                                "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                            </div>


                        </div>
                        <div>
                            <img src="https://images.unsplash.com/photo-1664566484384-d2687ee35192?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60" class="wd-tuit-img"/>
                        </div>
                    </div>
                    <!--  Horizontal Break-->
                    <hr/>

                    <!--        Tuit Type E-->
                    <div class="wd-tuit-with-img">
                        <div class="wd-tuit-text">
                            <div class="wd-wrapper">
                                <div class="wd-topic">  COVID-19    </div>
                                <div class = "wd-time">  .   Live </div>
                            </div>

                            <div class="wd-content">
                                The standard Lorem Ipsum passage, used since the 1500s:

                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </div>



                        </div>
                        <div>
                            <img src="https://images.unsplash.com/photo-1605289982774-9a6fef564df8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y292aWR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" class="wd-tuit-img"/>
                        </div>
                    </div>
                    <!--  Horizontal Break-->
                    <hr/>
                </div>

                <!--    Follow column-->
                <div class="col-sm-4 ">
                    ${WhoToFollowList()}
                </div>

            </div>
        </div>


   `);
}

$(exploreComponent);