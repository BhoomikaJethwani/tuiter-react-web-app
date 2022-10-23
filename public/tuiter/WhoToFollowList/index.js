
import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"

export default function WhoToFollowList() {

    return (`
           <ul class="list-group">
                <li class="list-group-item fw-bold">
                    Who To Follow
                </li >
                
                ${WhoToFollowListItem(who)}

                <li class="list-group-item " style="font-size: 12px ; color: #0a58ca">
                    See More
                </li >

            </ul>
        `); }