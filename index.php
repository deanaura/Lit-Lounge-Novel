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

    <!-- hammer js -->
    <script src="https://hammerjs.github.io/dist/hammer.min.js"></script>
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
            <!-- Hamburger Menu -->
            <div class="hamburger-menu" id="hamburger-menu">
                <img src="assets/images/ham-menu.png">
            </div>
        </div>
    </nav>

    <!-- Sidebar Menu -->
    <div class="sidebar-menu" id="sidebar-menu">
        <div class="sidebar-close" id="sidebar-close">
            <img src="assets/images/close.png" alt="Close">
        </div>
        <div class="sidebar-content">
            <!-- Menu items -->
            <div class="nav-home">
                <a href="#home">Home</a>
            </div>
            <div class="nav-genre">
                <div id="drop-text-genre-sidebar" class="nav-genre-container">
                    <span id="span-genre-sidebar">Genre</span>
                    <img src="assets/images/arrow.png" id="icon-genre-sidebar">
                </div>
                <ul id="genre-list-sidebar" class="genre-list">
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
    </div>

    <!-- hero section start -->
    <div class="hero-section">
        <div class="slider-container">
            <div class="slide active" style="background-image: url('assets/images/princess-who-hides-her-fandom-thumb2.jpeg');">
                <div class="textBox">
                    <h1 class="title">
                        The princess who hides her fandom
                    </h1>
                    <p class="desc">
                        Reincarnated into a novel where my favorite character breathes and lives. The beauty claimed to be the most beautiful in the continent...
                    </p>
                    <a href="#">Read Latest Chapter</a>
                </div>
                <div class="imgBox">
                    <img src="assets/images/princess-who-hides-her-fandom.jpeg" id="novel-cover">
                </div>
            </div>
            <div class="slide" style="background-image: url('assets/images/Became-The-Leader-of-a-Girl-Group-Destined-To-Fail-thumb.jpg');">
                <div class="textBox">
                    <h1 class="title">
                        Became The Leader of a Girl Group Destined To Fail
                    </h1>
                    <p class="desc">
                    10 years since debut, won the grand prize for 3 years in a row. Baek Nokha, a female solo idol, has perfect visuals, skills, and personality(...)
                    </p>
                    <a href="#">Read Latest Chapter</a>
                </div>
                <div class="imgBox">
                    <img src="assets/images/Became-The-Leader-of-a-Girl-Group-Destined-To-Fail.jpg" id="novel-cover">
                </div>
            </div>
            <!-- Add more slides as needed -->
        </div>
        <div class="slider-nav">
            <span class="nav-bullet active"></span>
            <span class="nav-bullet"></span>
            <!-- Add more bullets corresponding to the number of slides -->
        </div>
    </div>
    <!-- hero section end -->



    <!-- script js -->
    <script src="assets/js/script.js"></script>
</body>
</html>
