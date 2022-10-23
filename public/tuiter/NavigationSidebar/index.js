const NavigationSidebar = () => {
    return(`
   <ul class="list-group wd-navigation">
                <li class="list-group-item">
                    <i class="fab fa-twitter fa-2x"></i>
                    Tuiter
                </li>
                <li class="list-group-item row">
                    <i class="fas fa-home col-2 "></i>
                    <a href="../home.html" class="wd-nav-options col-4 d-xxl-none">Home</a>

                </li>
                <li class="list-group-item active row">
                    <i class="fas fa-hashtag col-2"></i>
                    <a href="../explore/index.html" class="text-white col-4">Explore</a>
                </li>
                <li class="list-group-item row">
                    <i class="fas fa-bell col-2"></i>
                    <a href="../notifications.html" class="text-white col-4">Notifications</a>
                </li>
                <li class="list-group-item row">
                    <i class="fas fa-envelope-open-text  col-2"></i>
                    <a href="../messages.html" class="text-white col-4">Messages</a>
                </li>
                <li class="list-group-item row">
                    <i class="fas fa-bookmark  col-2"></i>
                    <a href="../bookmarks/index.html" class="text-white col-4">Bookmarks</a>
                </li>
                <li class="list-group-item row">
                    <i class="fas fa-list  col-2"></i>
                    <a href="../lists.html" class="text-white col-4">Lists</a>
                </li>
                <li class="list-group-item row">
                    <i class="fas fa-user  col-2"></i>
                    <a href="../profile.html" class="text-white col-4">Profile</a>
                </li>
                <li class="list-group-item row">
                    <i class="fas fa-box  col-2"></i>
                    <a href="../tuit.html" class="text-white col-4">Tuit</a>
                </li>
                <li class="list-group-item row">
                    <i class="fas fa-reply  col-2"></i>
                    <a href="../reply.html" class="text-white col-4">Reply</a>
                </li>
            </ul>

            <div>
                <button class="btn btn-primary wd-tuit-button">
                    Tuit
                </button>
            </div>


 `);
}
export default NavigationSidebar;