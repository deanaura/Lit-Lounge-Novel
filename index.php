<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lit Lounge</title>

    <link rel="shortcut icon" href="assets/images/favicon.ico" type="image/x-icon">

    <!-- css -->
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="assets/css/mediaqueries.css">
</head>
<body>
    <nav>
        <a href="#"><img src="assets/images/logo.png" alt="Logo Lit Lounge"></a>

        <div class="nav-menu">
            <div class="nav-home">
                <a href="#home">Home</a>
            </div>
            <div class="nav-genre">
                <div id="drop-text-genre" class="nav-genre-container">
                    <span id="span-genre">Genre</span>
                    <img src="assets/images/arrow.png" id="icon-genre">
                </div>
                <ul id="genre-list" class="genre-list">
                    <li class="genre-list-item">All Genre</li>
                    <li class="genre-list-item">Fantasy</li>
                    <li class="genre-list-item">Romance</li>
                    <li class="genre-list-item">Action</li>
                </ul>
            </div>
            <div class="nav-library">
                <a href="#library">Library</a>
            </div>
            <div class="nav-trakteer">
                <a href="#trakteer">Trakteer</a>
            </div>
        </div>

        <div class="nav-icon">
            <!-- search bar start -->
            <div class="search-bar">
                <!-- search box start -->
                <div class="search-box">
                    <input
                        type="text"
                        id="search-input"
                        placeholder="Search for items.."
                    />
                    <img src="assets/images/search.png" id="icon">
                </div>
                <!-- search box end -->
            </div>
            <!-- search bar end -->
            <div class="nav-user">
                <img src="assets/images/user.png">
            </div>
        </div>
    </nav>

    <!-- script js -->
    <script src="assets/js/script.js"></script>
</body>
</html>