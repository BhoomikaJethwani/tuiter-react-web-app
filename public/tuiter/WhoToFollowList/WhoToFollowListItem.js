
const WhoToFollowListItem = (whoList)  =>  {

    return (

            whoList.map(
                who => (`<li class="list-group-item">

                            <div class="row">
                                <img src="${who.avatarIcon}" class="wd-follow-img col-8 ">
                                <div class="col-3 wd-follow-text">
                                    ${who.userName}
                                    <div>@${who.handle}</div>
                                </div>
        
                                <button class="btn btn-primary wd-follow-button col-2">
                                    Follow
                                </button>
                            </div>

                        </li >
                `)
            )
        )

}
export default WhoToFollowListItem